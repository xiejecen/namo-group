
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { 
  HomeSection, 
  ResearchSection, 
  TeamSection, 
  PublicationSection, 
  JoinSection, 
  ContactSection, 
  AIAssistant 
} from './components/Sections';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    const props = { lang };
    switch (activeTab) {
      case 'home': return <HomeSection {...props} />;
      case 'research': return <ResearchSection {...props} />;
      case 'team': return <TeamSection {...props} />;
      case 'publications': return <PublicationSection {...props} />;
      case 'join': return <JoinSection {...props} />;
      case 'contact': return <ContactSection {...props} />;
      default: return <HomeSection {...props} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab} lang={lang} setLang={setLang}>
      <div className="animate-in fade-in duration-700">
        {renderContent()}
      </div>
      <AIAssistant lang={lang} />
    </Layout>
  );
};

export default App;
