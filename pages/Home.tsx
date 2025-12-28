
import React from 'react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20 px-4 border-b">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Launch Your Future with a <span className="text-indigo-600">Perfect Business Name</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Stop overthinking your brand. Our advanced AI naming engine generates unique, catchy, and meaningful business names in seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/tool" className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-95">
              Generate My Name Now
            </Link>
            <a href="#features" className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all">
              Learn How It Works
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400 font-medium">✨ Powered by Gemini 3 Flash AI</p>
        </div>
      </section>

      {/* Feature Grid & Content */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Use BrandSphere AI?</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Lightning Fast Results</h3>
              <p className="text-slate-600 leading-relaxed">Get 10+ professional business name suggestions in under 3 seconds. Our tool is optimized for speed and productivity.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75c-1.03 0-1.9-.4-2.516-1.003l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Smart AI Reasoning</h3>
              <p className="text-slate-600 leading-relaxed">Not just random words. Our AI understands your industry and keyword context to provide meaningful brand identities.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">SEO Optimized</h3>
              <p className="text-slate-600 leading-relaxed">We suggest names that are easy to spell, memorable, and high-performing for search engines and social media.</p>
            </div>
          </div>

          <AdPlaceholder type="content" />

          {/* Educational Content Section */}
          <div className="max-w-4xl mx-auto mt-20 prose prose-slate">
            <h2 className="text-2xl font-bold mb-6">How to Choose the Best Business Name</h2>
            <p className="text-slate-600 mb-4">
              Naming a business is one of the most critical steps for any entrepreneur. A great name sets the tone for your brand, attracts the right audience, and makes you stand out in a crowded marketplace.
            </p>
            <ul className="space-y-4 text-slate-600">
              <li><strong>Keep it simple:</strong> Easy to pronounce and spell names stick better in memory.</li>
              <li><strong>Check availability:</strong> Always verify if the .com domain and social handles are available.</li>
              <li><strong>Avoid trends:</strong> Choose a name that will age well over 5-10 years.</li>
              <li><strong>Use AI tools:</strong> Use platforms like BrandSphere AI to spark creativity and find words you might have missed.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to find your brand?</h2>
          <p className="text-indigo-100 mb-10 text-lg max-w-xl mx-auto">
            Join thousands of entrepreneurs who used our naming tool to launch their startup.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
             <Link to="/tool" className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 shadow-2xl transition-all">
               Start Naming Tool
             </Link>
             <button disabled className="opacity-70 flex items-center gap-2 font-bold cursor-not-allowed">
               <span className="bg-indigo-500 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-tighter">Pro</span>
               Upgrade to Pro – Coming Soon
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
