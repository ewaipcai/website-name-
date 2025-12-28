
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-black mb-8 text-slate-900 text-center">About BrandSphere AI</h1>
      <div className="prose prose-lg max-w-none text-slate-600">
        <p>
          Welcome to BrandSphere AI, your go-to destination for AI-powered naming solutions. We believe that every great idea deserves a name that carries weight, vision, and identity.
        </p>
        <p>
          Founded by a team of serial entrepreneurs and developers, we realized that the "naming phase" of a startup often becomes a bottleneck. We spent weeks debating names only to find domains taken or trademarks pending.
        </p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Our Mission</h2>
        <p>
          Our mission is to democratize brand creation. By leveraging cutting-edge Large Language Models (LLMs) like Google's Gemini, we provide professional-grade naming services for free to the public. 
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Creative Integrity</h3>
            <p className="text-sm">We don't just mash words together. Our algorithms are tuned to understand the semantic meaning of your business industry.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Open Access</h3>
            <p className="text-sm">We believe tools like these should be accessible. We use non-intrusive advertising to keep the servers running while keeping the tool free.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The Technology</h2>
        <p>
          BrandSphere AI uses the latest <strong>Gemini 3 Flash</strong> model to generate content. This allows us to provide high-quality reasoning and creative flair with minimal latency. Each result is generated in real-time based on your specific inputs, ensuring no two results are exactly the same.
        </p>
      </div>
    </div>
  );
};

export default About;
