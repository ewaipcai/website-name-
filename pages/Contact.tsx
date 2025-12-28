
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Get in Touch</h1>
        <p className="text-slate-600">Have questions or feedback about our naming tool? We'd love to hear from you.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
              <input type="text" className="w-full p-3 rounded-lg border border-slate-200" placeholder="John" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
              <input type="text" className="w-full p-3 rounded-lg border border-slate-200" placeholder="Doe" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
            <input type="email" className="w-full p-3 rounded-lg border border-slate-200" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
            <textarea rows={5} className="w-full p-3 rounded-lg border border-slate-200 resize-none" placeholder="How can we help?"></textarea>
          </div>
          <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 text-center text-slate-500 text-sm">
        <p>Prefer email? Reach us at <a href="mailto:hello@brandsphere.ai" className="text-indigo-600 font-bold">hello@brandsphere.ai</a></p>
      </div>
    </div>
  );
};

export default Contact;
