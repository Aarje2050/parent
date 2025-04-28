'use client';

import React, { useState } from 'react';
import DomainForm from '@/components/tools/DomainForm';
import ResultsTable from '@/components/tools/ResultsTable';
import { DomainResult } from '@/types';
import { generateDomainCombinations, checkDomainWithDNS, checkDomainWithDomainr } from '@/lib/domainUtils';

export default function DomainCheckerPage() {
  const [results, setResults] = useState<DomainResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });

  const handleInstantSearch = async (keyword: string, selectedTlds: string[]) => {
    if (!keyword || selectedTlds.length === 0) return;

    setIsLoading(true);

    // Create a result for each TLD
    const domains = selectedTlds.map(tld => ({
      domain: `${keyword}.${tld}`,
      available: false,
      method: 'dns' as const,
      keyword,
      modifier: '',
      tld,
      checked: false,
      loading: true,
    }));

    setResults(domains);

    // Check each domain using DNS lookup
    await Promise.all(
      domains.map(async (domain, index) => {
        try {
          const available = await checkDomainWithDNS(domain.domain);
          setResults(prev => {
            const updated = [...prev];
            updated[index] = {
              ...updated[index],
              available,
              checked: true,
              loading: false,
            };
            return updated;
          });
        } catch (error) {
          setResults(prev => {
            const updated = [...prev];
            updated[index] = {
              ...updated[index],
              error: 'Failed to check',
              checked: false,
              loading: false,
            };
            return updated;
          });
        }
      })
    );

    setIsLoading(false);
  };

  const handleFormSubmit = async (
    keyword: string,
    modifiers: string[],
    selectedTlds: string[],
    method: 'dns' | 'domainr'
  ) => {
    setIsLoading(true);

    const domains = generateDomainCombinations(keyword, modifiers, selectedTlds);

    setResults(domains);
    setProgress({ current: 0, total: domains.length });

    const batchSize = 5;
    const batches = Math.ceil(domains.length / batchSize);

    for (let i = 0; i < batches; i++) {
      const start = i * batchSize;
      const end = Math.min(start + batchSize, domains.length);
      const batch = domains.slice(start, end);

      await Promise.all(
        batch.map(async (domain, index) => {
          const resultIndex = start + index;

          try {
            setResults(prev => {
              const updated = [...prev];
              updated[resultIndex] = { ...updated[resultIndex], loading: true };
              return updated;
            });

            if (method === 'dns') {
              const available = await checkDomainWithDNS(domain.domain);
              setResults(prev => {
                const updated = [...prev];
                updated[resultIndex] = {
                  ...updated[resultIndex],
                  available,
                  checked: true,
                  loading: false,
                  method,
                };
                return updated;
              });
            } else {
              const { available, prices, suggestions } = await checkDomainWithDomainr(domain.domain);
              setResults(prev => {
                const updated = [...prev];
                updated[resultIndex] = {
                  ...updated[resultIndex],
                  available,
                  prices,
                  suggestions,
                  checked: true,
                  loading: false,
                  method,
                };
                return updated;
              });
            }

            setProgress(prev => ({
              ...prev,
              current: prev.current + 1,
            }));
          } catch (error) {
            setResults(prev => {
              const updated = [...prev];
              updated[resultIndex] = {
                ...updated[resultIndex],
                error: 'Failed to check',
                checked: false,
                loading: false,
              };
              return updated;
            });

            setProgress(prev => ({
              ...prev,
              current: prev.current + 1,
            }));
          }
        })
      );

      // Small delay between batches to avoid overloading
      if (i < batches - 1) {
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <DomainForm 
          onSubmit={handleFormSubmit}
          onInstantSearch={handleInstantSearch}
          isLoading={isLoading}
        />
        <ResultsTable 
          results={results}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
