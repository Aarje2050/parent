'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';



interface Tool {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  comingSoon?: boolean;
  category: string;
}

const allTools: Tool[] = [
  { id: 1, title: "LLMs.txt Generator", description: "Generate LLMs.txt files for AI SEO.", image: "/images/tool-llms-generator.png", href: "/tools/llms-generator", category: "AI SEO" },
  { id: 2, title: "Bulk Domain Checker", description: "Bulk domain availability checker with modifiers.", image: "/images/tool-domain-checker.png", href: "/tools/domainchecker", category: "Domains" },
  { id: 3, title: "SEO Content Writer", description: "AI-powered SEO content creation (Coming Soon).", image: "/images/tool-seo-writer.png", href: "#", comingSoon: true, category: "Content Writing" },
  { id: 4, title: "User Intent Analyzer", description: "Analyze searcher intent behind keywords (Coming Soon).", image: "/images/tool-intent-analysis.png", href: "#", comingSoon: true, category: "Keyword Research" },
  { id: 5, title: "Meta Tag Generator", description: "Generate SEO meta titles and descriptions.", image: "/images/tool-meta-generator.png", href: "/tools/meta-tag-generator", category: "SEO" },
  { id: 6, title: "Internal Link Builder", description: "Suggest smart internal links for SEO.", image: "/images/tool-link-builder.png", href: "/tools/internal-link-builder", category: "SEO" },
  { id: 7, title: "Keyword Clustering Tool", description: "Group keywords into topical clusters.", image: "/images/tool-keyword-cluster.png", href: "/tools/keyword-clustering", category: "Keyword Research" },
  { id: 8, title: "Schema Markup Generator", description: "Generate structured data for better SEO.", image: "/images/tool-schema-generator.png", href: "/tools/schema-generator", category: "SEO" },
  { id: 9, title: "AI Blog Title Generator", description: "Catchy AI-generated blog titles.", image: "/images/tool-blog-title.png", href: "/tools/blog-title-generator", category: "Content Writing" },
  { id: 10, title: "Backlink Analysis Tool", description: "Analyze and monitor backlinks.", image: "/images/tool-backlink-analyzer.png", href: "/tools/backlink-analysis", category: "SEO" },
];

export default function ToolsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredTools = allTools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const visibleTools = filteredTools.slice(0, visibleCount);

  const categories = ['All', ...Array.from(new Set(allTools.map(tool => tool.category)))];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900/20 to-dark-900 pt-32 md:pt-40 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Tools</h1>
            <p className="text-xl text-gray-300">Empowering businesses with cutting-edge tools designed for innovation and success.</p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 justify-between items-center">
          {/* Search Bar */}
          <input 
            type="text" 
            placeholder="Search tools..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-dark-600 bg-dark-800 text-white placeholder-gray-400 focus:outline-none"
          />

          {/* Category Dropdown */}
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/4 px-4 py-3 rounded-xl border border-dark-600 bg-dark-800 text-white focus:outline-none"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </section>

      {/* Tools List */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {visibleTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {visibleTools.map(tool => (
                <ToolCard key={tool.id} {...tool} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 mt-12 text-lg">No tools found matching your criteria.</p>
          )}

          {/* Load More */}
          {visibleCount < filteredTools.length && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function ToolCard({ title, description, image, href, comingSoon }: Tool) {
  return (
    <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 border border-dark-600/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition relative">
      
      {comingSoon && (
        <span className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          Coming Soon
        </span>
      )}

      <div className="relative h-48 w-full mb-6 overflow-hidden rounded-xl">
        <Image 
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      {!comingSoon && (
        <Link href={href} className="text-primary-400 font-medium hover:underline">
          Try this tool →
        </Link>
      )}
    </div>
  );
}
