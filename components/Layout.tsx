
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AdPlaceholder from './AdPlaceholder';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Generator', path: '/tool' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Ad */}
      <div className="container mx-auto px-4 pt-4">
        <AdPlaceholder type="header" />
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black text-indigo-600 tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-base">B</span>
            BrandSphere
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link to="/tool" className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100 active:scale-95">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="text-2xl font-black text-white mb-4 block">BrandSphere AI</Link>
              <p className="text-slate-400 max-w-sm">
                Empowering founders with AI-driven creative tools to launch and grow world-class brands.
              </p>
              <div className="mt-6 flex gap-4">
                 <Link to="/tool" className="text-indigo-400 hover:text-white font-semibold">Premium Tools Coming Soon &rarr;</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/tool" className="hover:text-white">Name Generator</Link></li>
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <AdPlaceholder type="footer" className="bg-slate-800 border-slate-700 text-slate-500 mb-8" />
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} BrandSphere AI. This tool provides AI-generated content.</p>
            <div className="flex gap-6">
              <span className="text-slate-500 italic">An AdSense-friendly Utility Tool</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
