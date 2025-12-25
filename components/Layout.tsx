
import React, { useState, useEffect } from 'react';
import { LAB_NAME } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  lang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
}

const NAV_ITEMS = {
  zh: [
    { id: 'home', label: '首页' },
    { id: 'research', label: '研究方向' },
    { id: 'team', label: '团队成员' },
    { id: 'publications', label: '学术成果' },
    { id: 'join', label: '招生招聘' },
    { id: 'contact', label: '联系我们' },
  ],
  en: [
    { id: 'home', label: 'Home' },
    { id: 'research', label: 'Research' },
    { id: 'team', label: 'Team' },
    { id: 'publications', label: 'Publications' },
    { id: 'join', label: 'Join Us' },
    { id: 'contact', label: 'Contact' },
  ]
};

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab, lang, setLang }) => {
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
            <div className="w-8 h-8 bg-indigo-700 rounded flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className={`font-bold text-lg tracking-tight ${!isScrolled && activeTab === 'home' ? 'text-white' : 'text-slate-900'}`}>
              {LAB_NAME[lang]}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {NAV_ITEMS[lang].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-sm font-semibold transition-colors hover:text-indigo-600 ${
                    activeTab === item.id 
                      ? 'text-indigo-600 underline underline-offset-8 decoration-2' 
                      : (!isScrolled && activeTab === 'home' ? 'text-white/80 hover:text-white' : 'text-slate-600')
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="h-4 w-px bg-slate-300 mx-4"></div>
            
            <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
              <button 
                onClick={() => setLang('zh')}
                className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'zh' ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-400'}`}
              >
                中文
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-400'}`}
              >
                EN
              </button>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className={`w-6 h-6 ${!isScrolled && activeTab === 'home' ? 'text-white' : 'text-slate-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b absolute top-full left-0 right-0 p-6 space-y-4 shadow-xl">
            {NAV_ITEMS[lang].map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setIsMenuOpen(false); }}
                className="block w-full text-left py-2 text-slate-700 font-medium hover:text-indigo-600 border-b border-slate-50 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <div className="flex pt-4">
               <button onClick={() => setLang('zh')} className={`mr-4 text-xs font-bold ${lang === 'zh' ? 'text-indigo-600' : 'text-slate-400'}`}>中文</button>
               <button onClick={() => setLang('en')} className={`text-xs font-bold ${lang === 'en' ? 'text-indigo-600' : 'text-slate-400'}`}>English</button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-xl font-bold mb-6 text-indigo-400">{LAB_NAME[lang]}</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              {lang === 'zh' ? '致力于通过纳米科学与工程学的深度融合，推动先进复合材料的发展。' : 'Advancing advanced composite materials through the integration of nanoscience and engineering.'}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-widest text-xs text-slate-500">{lang === 'zh' ? '快速链接' : 'Quick Links'}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><button onClick={() => setActiveTab('research')} className="hover:text-indigo-300 transition-colors">→ {lang === 'zh' ? '研究方向' : 'Research Areas'}</button></li>
              <li><button onClick={() => setActiveTab('publications')} className="hover:text-indigo-300 transition-colors">→ {lang === 'zh' ? '学术成果' : 'Recent Publications'}</button></li>
              <li><button onClick={() => setActiveTab('join')} className="hover:text-indigo-300 transition-colors">→ {lang === 'zh' ? '加入我们' : 'Opportunities'}</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-widest text-xs text-slate-500">{lang === 'zh' ? '联系方式' : 'Contact'}</h4>
            <address className="not-italic text-sm text-slate-400 space-y-3">
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>{lang === 'zh' ? '天津市津南区雅观路135号' : '135 Yaguan Rd, Jinnan District, Tianjin'}</p>
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>{lang === 'zh' ? '天津大学北洋园校区材料楼' : 'Material Science Bldg, Peiyang Park Campus'}</p>
              <p className="flex items-center gap-2 font-mono"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>Email: isl-lab@tju.edu.cn</p>
            </address>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center text-[10px] text-slate-600 uppercase tracking-widest">
          © {new Date().getFullYear()} {LAB_NAME[lang]}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
