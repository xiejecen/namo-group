
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

  // Simple routing logic based on hash or state
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeSection />;
      case 'research': return <ResearchSection />;
      case 'team': return <TeamSection />;
      case 'publications': return <PublicationSection />;
      case 'join': return <JoinSection />;
      case 'contact': return <ContactSection />;
      default: return <HomeSection />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="animate-in fade-in duration-700">
        {renderContent()}
      </div>
      <AIAssistant />
    </Layout>
  );
};

export default App;
