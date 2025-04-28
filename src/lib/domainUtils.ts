import { DomainResult, PriceData } from '../types';

/**
 * Check if a domain is available using DNS lookup method
 */
export const checkDomainWithDNS = async (domain: string): Promise<boolean> => {
  try {
    // In a real implementation, this would use DNS lookup
    // For demo purposes, we'll use a simulated check
    const response = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}`, {
      headers: {
        'Accept': 'application/dns-json',
      },
    });
    
    const data = await response.json();
    
    // If we get a NXDOMAIN response, the domain is likely available
    // This is a simplification - production code would need a more robust check
    return data.Status !== 0;
  } catch (error) {
    console.error('DNS lookup error:', error);
    // Default to false (unavailable) on error
    return false;
  }
};

/**
 * Check if a domain is available using Domainr API
 */
export const checkDomainWithDomainr = async (domain: string): Promise<{ available: boolean; prices?: { [key: string]: number }; suggestions?: string[] }> => {
  try {
    // Simulating API latency
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Simulate availability (60% chance of being available)
    const available = Math.random() > 0.4;
    
    // If available, generate mock price data
    const prices = available ? {
      godaddy: parseFloat((Math.random() * 20 + 10).toFixed(2)),
      namecheap: parseFloat((Math.random() * 20 + 8).toFixed(2)),
      google: parseFloat((Math.random() * 20 + 12).toFixed(2))
    } : undefined;
    
    // Generate mock suggestions if domain is taken
    const suggestions = !available ? [
      domain.replace('.', '-new.'),
      domain.replace('.', '-pro.'),
      domain.replace('.', '-online.')
    ] : undefined;
    
    return { available, prices, suggestions };
  } catch (error) {
    console.error('Domainr API error:', error);
    return { available: false };
  }
};

/**
 * Generate combinations of keywords, modifiers and TLDs
 */
export const generateDomainCombinations = (
  keyword: string,
  modifiers: string[],
  tlds: string[]
): DomainResult[] => {
  const combinations: DomainResult[] = [];
  
  // Handle empty inputs gracefully
  if (!keyword || modifiers.length === 0 || tlds.length === 0) {
    return combinations;
  }
  
  // Generate all combinations
  for (const modifier of modifiers) {
    if (!modifier.trim()) continue;
    
    for (const tld of tlds) {
      // Create combinations: keyword+modifier+tld and modifier+keyword+tld
      const domainName1 = `${keyword}${modifier}.${tld}`;
      const domainName2 = `${modifier}${keyword}.${tld}`;
      
      combinations.push({
        domain: domainName1,
        available: false,
        method: 'dns', // Default method
        keyword,
        modifier,
        tld,
        checked: false,
        loading: false,
      });
      
      combinations.push({
        domain: domainName2,
        available: false,
        method: 'dns', // Default method
        keyword,
        modifier,
        tld,
        checked: false,
        loading: false,
      });
    }
  }
  
  return combinations;
};

/**
 * Prepare modifiers from input text or file
 */
export const parseModifiers = (input: string): string[] => {
  if (!input.trim()) return [];
  
  // Split by newlines, commas, or spaces
  return input
    .split(/[\n,\s]+/)
    .map(item => item.trim())
    .filter(item => item.length > 0);
};

/**
 * Convert domain results to CSV
 */
export const resultsToCSV = (results: DomainResult[]): string => {
  // CSV Headers
  const headers = ['Domain', 'Available', 'Method', 'Keyword', 'Modifier', 'TLD', 'Lowest Price'];
  
  // Create CSV rows
  const rows = results.map(result => [
    result.domain,
    result.available ? 'Yes' : 'No',
    result.method === 'dns' ? 'DNS Lookup' : 'Domainr API',
    result.keyword,
    result.modifier,
    result.tld,
    result.prices ? Math.min(...Object.values(result.prices)) : 'N/A'
  ]);
  
  // Combine headers and rows
  const csv = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');
  
  return csv;
};

/**
 * Download content as a file
 */
export const downloadFile = (content: string, filename: string, contentType: string): void => {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  
  // Create download link
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  
  // Clean up
  URL.revokeObjectURL(url);
};