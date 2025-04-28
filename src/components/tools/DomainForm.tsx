import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import { Search, Upload, CheckCircle2 } from 'lucide-react';
import { TLD, CheckMethod } from '@/types';
import { parseModifiers } from '@/lib/domainUtils';
import { tlds } from '@/data/tlds';
import { cityPresets } from '@/data/presets';
import debounce from 'lodash/debounce';

interface DomainFormProps {
  onSubmit: (keyword: string, modifiers: string[], selectedTlds: string[], method: 'dns' | 'domainr') => void;
  onInstantSearch?: (keyword: string, selectedTlds: string[]) => void;
  isLoading: boolean;
}

const DomainForm: React.FC<DomainFormProps> = ({ onSubmit, onInstantSearch, isLoading }) => {
  const [keyword, setKeyword] = useState('');
  const [modifierText, setModifierText] = useState('');
  const [selectedTlds, setSelectedTlds] = useState<string[]>(['com', 'net', 'org', 'in']);
  const [checkMethod, setCheckMethod] = useState<'dns' | 'domainr'>('dns');
  const [instantSearchMode, setInstantSearchMode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const checkMethods = [
    {
      id: 'dns',
      name: 'DNS Lookup',
      description: 'Check domain availability using DNS records.',
      icon: 'Globe',
    },
    {
      id: 'domainr',
      name: 'Domainr API',
      description: 'Check domain availability using the Domainr API.',
      icon: 'Api',
    },
  ];

  const debouncedInstantSearch = debounce((value: string, tlds: string[]) => {
    if (onInstantSearch && value) {
      onInstantSearch(value, tlds);
    }
  }, 300);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    
    if (instantSearchMode) {
      debouncedInstantSearch(value, selectedTlds);
    }
  };

  const handleModifierTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setModifierText(e.target.value);
  };

  const handlePresetSelect = (presetKey: keyof typeof cityPresets) => {
    const cities = cityPresets[presetKey].cities;
    setModifierText(cities.join('\n'));
  };

  const handleTldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tld = e.target.value;
    const newSelectedTlds = e.target.checked
      ? [...selectedTlds, tld]
      : selectedTlds.filter(t => t !== tld);
    
    setSelectedTlds(newSelectedTlds);
    
    if (instantSearchMode && keyword) {
      debouncedInstantSearch(keyword, newSelectedTlds);
    }
  };

  const handleMethodChange = (method: 'dns' | 'domainr') => {
    setCheckMethod(method);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setModifierText(content);
    };
    reader.readAsText(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim() || (!instantSearchMode && !modifierText.trim()) || selectedTlds.length === 0) return;

    const modifiers = instantSearchMode ? [''] : parseModifiers(modifierText);
    onSubmit(keyword.trim(), modifiers, selectedTlds, checkMethod);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-lg shadow-xl p-6 mb-8 border border-gray-800 transition-all hover:border-gray-700">
      <div className="mb-6">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Domain Availability Checker
          </h2>        
        {/* Search Mode Toggle */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-dark-700 rounded-lg">
            <span className="text-sm font-medium text-gray-300">Search Mode:</span>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-brand-blue"
                  checked={!instantSearchMode}
                  onChange={() => setInstantSearchMode(false)}
                />
                <span className="ml-2 text-gray-300">Bulk Search with Modifiers</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-brand-blue"
                  checked={instantSearchMode}
                  onChange={() => setInstantSearchMode(true)}
                />
                <span className="ml-2 text-gray-300">Instant Domain Search</span>
              </label>
            </div>
          </div>
        </div>
        
        {/* Main keyword input */}
        <div className="mb-6">
          <label htmlFor="keyword" className="block text-sm font-medium text-gray-300 mb-2">
            {instantSearchMode ? 'Domain Name' : 'Main Keyword'}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-brand-blue" />
            </div>
            <input
              id="keyword"
              type="text"
              value={keyword}
              onChange={handleKeywordChange}
              className="block w-full pl-10 pr-4 py-3 bg-dark-800 border border-gray-700 rounded-md shadow-sm text-white placeholder-gray-500 focus:ring-brand-blue focus:border-brand-blue transition-all"
              placeholder={instantSearchMode ? "Enter domain name (without TLD)" : "Enter main keyword (e.g. 'zobli')"}
              required
            />
          </div>
        </div>
        
        {/* Modifiers section - only show if not in instant search mode */}
        {!instantSearchMode && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="modifiers" className="block text-sm font-medium text-gray-300">
                Modifiers (words to combine with keyword)
              </label>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center text-xs text-brand-blue hover:text-brand-purple transition-colors"
              >
                <Upload size={14} className="mr-1" />
                Upload List
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".txt,.csv"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
            
            {/* Preset buttons */}
            <div className="mb-3 flex flex-wrap gap-2">
              {Object.entries(cityPresets).map(([key, preset]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => handlePresetSelect(key as keyof typeof cityPresets)}
                  className="inline-flex items-center px-3 py-1.5 bg-dark-700 hover:bg-dark-600 rounded-md text-sm text-gray-300 border border-gray-700 hover:border-gray-600 transition-colors"
                >
                  {preset.name}
                </button>
              ))}
            </div>
            
            <textarea
              id="modifiers"
              value={modifierText}
              onChange={handleModifierTextChange}
              className="block w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-md shadow-sm text-white placeholder-gray-500 focus:ring-brand-blue focus:border-brand-blue transition-all"
              placeholder="Enter modifiers separated by commas, spaces or new lines (e.g. 'tech, innovations, solutions')"
              rows={4}
              required
            />
            <p className="mt-2 text-xs text-gray-400">
              Each modifier will be combined with your keyword (e.g. "zoblisolutions", "techzobli")
            </p>
          </div>
        )}
      </div>
      
      {/* TLD selection */}
      <div className="mb-6">
      <h3 className="text-xl md:text-xl lg:text-xl font-bold text-white mb-6">
      Select TLDs </h3>         
      <div className="p-4 bg-dark-700 rounded-lg border border-gray-800">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {tlds.map((tld) => (
              <div key={tld.id} className="flex items-center">
                <input
                  id={`tld-${tld.id}`}
                  type="checkbox"
                  value={tld.id}
                  checked={selectedTlds.includes(tld.id)}
                  onChange={handleTldChange}
                  className="h-4 w-4 text-brand-blue focus:ring-brand-blue border-gray-700 rounded bg-dark-800"
                />
                <label htmlFor={`tld-${tld.id}`} className="ml-2 text-sm text-gray-300 hover:text-white transition-colors">
                  {tld.name} {tld.popular && <span className="text-xs text-brand-blue">(popular)</span>}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Check method selection - only show if not in instant search mode */}
      {!instantSearchMode && (
        <div className="mb-6">
<h3 className="text-xl md:text-xl lg:text-xl font-bold text-white mb-6">
            Check Method </h3>          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {checkMethods.map((method) => (
              <div
                key={method.id}
                onClick={() => handleMethodChange(method.id as 'dns' | 'domainr')}
                className={`
                  relative flex items-center p-4 border rounded-lg cursor-pointer transition-all
                  ${checkMethod === method.id
                    ? 'border-brand-blue bg-dark-700 shadow-lg shadow-brand-blue/20'
                    : 'border-gray-700 hover:bg-dark-700 hover:border-gray-600'
                  }
                `}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircle2 
                      size={20} 
                      className={checkMethod === method.id ? 'text-brand-blue' : 'text-gray-500'} 
                    />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-300">{method.name}</h4>
                    <p className="text-xs text-gray-500">{method.description}</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <div 
                    className={`w-4 h-4 rounded-full border ${
                      checkMethod === method.id 
                        ? 'border-brand-blue bg-brand-blue' 
                        : 'border-gray-600'
                    }`}
                  >
                    {checkMethod === method.id && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Submit button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className={` btn-primary ml-2
            inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-md 
            text-white bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue-light hover:to-brand-purple-light
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-all
            ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}
          `}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Check Domains'
          )}
        </button>
      </div>
    </form>
  );
};

export default DomainForm;