
import React, { useState, useEffect } from 'react';
import { LAB_NAME } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'research', label: 'Research' },
  { id: 'team', label: 'Team' },
  { id: 'publications', label: 'Publications' },
  { id: 'join', label: 'Join Us' },
  { id: 'contact', label: 'Contact' },
];

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <span className={`font-bold text-xl tracking-tight ${!isScrolled && activeTab === 'home' ? 'text-white' : 'text-slate-900'}`}>
              {LAB_NAME}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  activeTab === item.id 
                    ? 'text-indigo-600 underline underline-offset-8 decoration-2' 
                    : (!isScrolled && activeTab === 'home' ? 'text-white/80 hover:text-white' : 'text-slate-600')
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className={`w-6 h-6 ${!isScrolled && activeTab === 'home' ? 'text-white' : 'text-slate-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b absolute top-full left-0 right-0 p-6 space-y-4 shadow-xl">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setIsMenuOpen(false); }}
                className="block w-full text-left py-2 text-slate-700 font-medium hover:text-indigo-600"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">{LAB_NAME}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Advancing human-centric artificial intelligence through interdisciplinary research and rigorous scientific methods.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => setActiveTab('research')} className="hover:text-white">Research Areas</button></li>
              <li><button onClick={() => setActiveTab('publications')} className="hover:text-white">Recent Publications</button></li>
              <li><button onClick={() => setActiveTab('join')} className="hover:text-white">Opportunities</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="not-italic text-sm text-slate-400 space-y-2">
              <p>Dept. of Computer Science</p>
              <p>University of Excellence, Science Building 402</p>
              <p>Email: isl-lab@university.edu</p>
            </address>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {LAB_NAME}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
