
import React, { useState } from 'react';
import { generateBusinessNames } from '../services/gemini';
import { GeneratedName, GeneratorParams } from '../types';
import AdPlaceholder from '../components/AdPlaceholder';

const Tool: React.FC = () => {
  const [params, setParams] = useState<GeneratorParams>({
    industry: '',
    keywords: '',
    tone: 'modern',
  });
  const [results, setResults] = useState<GeneratedName[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!params.industry || !params.keywords) {
      setError("Please fill in both the industry and keywords.");
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const names = await generateBusinessNames(params);
      setResults(names);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  const affiliateTools = [
    {
      name: "Namecheap",
      category: "Domain Registrar",
      description: "Secure your brand's .com domain with industry-leading prices and free privacy protection.",
      url: "#",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9m-9-9h18" />
    },
    {
      name: "GoDaddy",
      category: "Domain & Hosting",
      description: "The world's largest domain registrar with everything you need to get your brand online.",
      url: "#",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    },
    {
      name: "Shopify",
      category: "E-commerce Builder",
      description: "Turn your business name into a store. The best platform for selling products online.",
      url: "#",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    },
    {
      name: "HubSpot",
      category: "CRM & Marketing",
      description: "Manage your customers and automate your marketing from day one with a free CRM.",
      url: "#",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Input Form Column */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 sticky top-24">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">AI Name Generator</h1>
            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Industry / Niche</label>
                <input 
                  type="text"
                  placeholder="e.g. Eco-friendly Skincare, Tech SaaS"
                  className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  value={params.industry}
                  onChange={(e) => setParams({...params, industry: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Keywords (comma separated)</label>
                <textarea 
                  rows={3}
                  placeholder="e.g. green, organic, glow, fresh"
                  className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                  value={params.keywords}
                  onChange={(e) => setParams({...params, keywords: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Brand Tone</label>
                <select 
                  className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  value={params.tone}
                  onChange={(e) => setParams({...params, tone: e.target.value as any})}
                >
                  <option value="modern">Modern & Clean</option>
                  <option value="professional">Professional & Corporate</option>
                  <option value="creative">Creative & Abstract</option>
                  <option value="playful">Playful & Fun</option>
                </select>
              </div>

              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-bold text-lg text-white transition-all shadow-lg ${
                  isLoading ? 'bg-slate-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-indigo-100'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Generating...
                  </span>
                ) : 'Generate Names'}
              </button>
            </form>
            <p className="text-[10px] text-slate-400 mt-4 italic">Note: This tool provides AI-generated content. Always check for trademark availability.</p>
          </div>
        </div>

        {/* Results Column */}
        <div className="w-full lg:w-2/3">
          {!isLoading && results.length === 0 && (
            <div className="bg-slate-100 rounded-2xl h-[400px] flex flex-col items-center justify-center text-slate-500 border-2 border-dashed border-slate-200">
              <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75c-1.03 0-1.9-.4-2.516-1.003l-.548-.547z" /></svg>
              <p className="text-lg font-medium">Your results will appear here.</p>
              <p className="text-sm">Input your business details and click generate.</p>
            </div>
          )}

          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 animate-pulse h-40">
                  <div className="h-6 bg-slate-100 w-2/3 rounded mb-4"></div>
                  <div className="h-4 bg-slate-100 w-full rounded mb-2"></div>
                  <div className="h-4 bg-slate-100 w-1/2 rounded"></div>
                </div>
              ))}
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900">Found {results.length} Ideas</h2>
                  <button onClick={() => setResults([])} className="text-sm text-slate-500 hover:text-red-500">Clear all</button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.map((item, idx) => (
                    <div key={idx} className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all relative">
                      <button 
                        onClick={() => copyToClipboard(item.name)}
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-indigo-600 transition-all"
                        title="Copy Name"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      </button>
                      <h3 className="text-xl font-bold text-indigo-600 mb-1">{item.name}</h3>
                      <p className="text-sm font-semibold text-slate-700 italic mb-3">"{item.tagline}"</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.explanation}</p>
                      <div className="mt-4 pt-4 border-t border-slate-50 flex gap-2">
                        <button className="text-[10px] uppercase font-bold tracking-widest text-slate-400 hover:text-indigo-600">Check Domains</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <AdPlaceholder type="content" />

              {/* Recommended Tools Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-slate-900">Recommended Tools for Your Brand</h2>
                  <div className="flex-grow h-px bg-slate-200"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {affiliateTools.map((tool, idx) => (
                    <a 
                      key={idx} 
                      href={tool.url} 
                      className="group flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl hover:border-indigo-500 hover:shadow-lg transition-all"
                    >
                      <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {tool.icon}
                        </svg>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{tool.name}</h3>
                          <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full font-bold uppercase tracking-tighter">{tool.category}</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">{tool.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Next Steps for your Brand</h3>
                <p className="text-indigo-700 text-sm mb-4">Once you find a name you love, here's what to do next:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex-shrink-0 flex items-center justify-center text-xs font-bold">1</span>
                    <p className="text-xs text-slate-600">Verify domain availability using a registrar like Namecheap or Google Domains.</p>
                  </div>
                   <div className="flex items-start gap-3 bg-white p-4 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex-shrink-0 flex items-center justify-center text-xs font-bold">2</span>
                    <p className="text-xs text-slate-600">Search for social media handles across Instagram, Twitter, and TikTok.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Sidebar Ad */}
        <div className="hidden lg:block w-[300px]">
          <AdPlaceholder type="sidebar" />
          <div className="mt-8 bg-slate-900 rounded-xl p-6 text-white text-center">
             <p className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2">SaaS Recommendation</p>
             <h4 className="font-bold mb-4">Launch with Shopify</h4>
             <p className="text-xs text-slate-400 mb-6">Build your new brand's store for just $1/month.</p>
             <a href="#" className="inline-block bg-indigo-600 hover:bg-indigo-700 w-full py-3 rounded-lg text-sm font-bold transition-all">Get Started &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
