import React, { useState } from 'react';
import { DomainResult, PriceData } from '@/types';
import { Check, X, ExternalLink, ArrowDown, ArrowUp, Download, DollarSign, Globe } from 'lucide-react';
import { resultsToCSV, downloadFile } from '@/lib/domainUtils';

interface ResultsTableProps {
  results: DomainResult[];
  isLoading: boolean;
}

type SortField = 'domain' | 'available' | 'method';
type SortDirection = 'asc' | 'desc';

const ResultsTable: React.FC<ResultsTableProps> = ({ results, isLoading }) => {
  const [sortField, setSortField] = useState<SortField>('domain');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  
  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  const sortedResults = [...results].sort((a, b) => {
    let comparison = 0;
    
    if (sortField === 'domain') {
      comparison = a.domain.localeCompare(b.domain);
    } else if (sortField === 'available') {
      comparison = Number(a.available) - Number(b.available);
    } else if (sortField === 'method') {
      comparison = a.method.localeCompare(b.method);
    }
    
    return sortDirection === 'asc' ? comparison : -comparison;
  });
  
  const handleExport = () => {
    const csv = resultsToCSV(results);
    downloadFile(csv, 'zobli-domain-checker-results.csv', 'text/csv');
  };

  const renderPriceComparison = (domain: string, prices?: { [key: string]: number }) => {
    if (!prices) return null;

    return (
      <div className="mt-2 space-y-2 p-3 bg-dark-700 rounded-md border border-gray-700">
        <h4 className="text-xs font-semibold text-brand-blue mb-2">Registrar Price Comparison</h4>
        {Object.entries(prices).map(([registrar, price]) => (
          <div key={registrar} className="flex items-center justify-between text-xs">
            <span className="capitalize text-gray-300">{registrar}:</span>
            <span className="font-medium text-white">${price}</span>
          </div>
        ))}
      </div>
    );
  };
  
  if (results.length === 0 && !isLoading) {
    return null;
  }
  
  return (
    <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-lg shadow-xl p-6 overflow-hidden transition-all border border-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">Domain Results</h2>

        {results.length > 0 && (
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-300">
              Total Domains: <strong className="text-white">{results.length}</strong>
            </div>
            <button 
              onClick={handleExport}
              className="inline-flex items-center px-3 py-1.5 border border-gray-700 rounded-md text-sm text-gray-300 
                        bg-dark-700 hover:bg-dark-600 hover:text-white transition-colors"
            >
              <Download size={16} className="mr-2 text-brand-blue" />
              Export CSV
            </button>
          </div>
        )}
      </div>
      
      {isLoading && results.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="w-16 h-16 border-t-4 border-b-4 border-brand-blue rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-400">Checking domains for Zobli...</p>
        </div>
      ) : (
        <>
          {results.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800">
                <thead className="bg-dark-700">
                  <tr>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort('domain')}
                    >
                      <div className="flex items-center">
                        <span>Domain</span>
                        {sortField === 'domain' && (
                          <span className="ml-1 text-brand-blue">
                            {sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                          </span>
                        )}
                      </div>
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort('available')}
                    >
                      <div className="flex items-center">
                        <span>Status</span>
                        {sortField === 'available' && (
                          <span className="ml-1 text-brand-blue">
                            {sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                          </span>
                        )}
                      </div>
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort('method')}
                    >
                      <div className="flex items-center">
                        <span>Method</span>
                        {sortField === 'method' && (
                          <span className="ml-1 text-brand-blue">
                            {sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                          </span>
                        )}
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-dark-800 divide-y divide-gray-800">
                  {sortedResults.map((result, index) => (
                    <tr 
                      key={index}
                      className={`hover:bg-dark-700 transition-colors ${
                        result.loading ? 'animate-pulse' : ''
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        <div className="flex items-center">
                          <span>{result.domain}</span>
                          <a
                            href={`https://${result.domain}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-gray-400 hover:text-brand-blue transition-colors"
                          >
                            <Globe size={16} />
                          </a>
                          {result.suggestions && result.suggestions.length > 0 && (
                            <div className="mt-1 text-xs text-gray-500">
                              Suggestions:
                              {result.suggestions.map((suggestion, i) => (
                                <span key={i} className="ml-2 text-brand-blue">{suggestion}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div>
                          {result.loading ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-dark-600 text-gray-300">
                              Checking...
                            </span>
                          ) : result.error ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-900 text-yellow-300">
                              Error
                            </span>
                          ) : result.available ? (
                            <div>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-300">
                                <Check size={14} className="mr-1" />
                                Available
                              </span>
                              {result.prices && (
                                <button
                                  onClick={() => setSelectedDomain(selectedDomain === result.domain ? null : result.domain)}
                                  className="ml-2 text-xs text-brand-blue hover:text-brand-purple transition-colors"
                                >
                                  <DollarSign size={14} className="inline" /> Price Compare
                                </button>
                              )}
                            </div>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900 text-red-300">
                              <X size={14} className="mr-1" />
                              Taken
                            </span>
                          )}
                          {selectedDomain === result.domain && renderPriceComparison(result.domain, result.prices)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                        {result.method === 'dns' ? 'DNS Lookup' : 'Domainr API'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a 
                          href={`https://www.godaddy.com/en-in/domainsearch/find?domainToCheck=${result.domain}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-blue hover:text-brand-purple inline-flex items-center transition-colors"
                        >
                          View <ExternalLink size={14} className="ml-1" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ResultsTable;