import React, { useState, useEffect } from 'react';
import { DashboardPage } from './pages/DashboardPage';
import { LandingPage } from './pages/LandingPage';
import { ChallengeDayPage } from './pages/ChallengeDayPage';
import { AIMentorDrawer } from './components/dashboard/AIMentorDrawer';
import { AISummaryModal } from './components/dashboard/AISummaryModal';

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isGlobalAIMentorOpen, setIsGlobalAIMentorOpen] = useState(false);
  const [globalSummaryTitle, setGlobalSummaryTitle] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Match routes cleanly
  const renderRoute = () => {
    if (currentPath === '/day/12' || currentPath.startsWith('/day/')) {
      return <ChallengeDayPage onNavigate={navigate} />;
    }
    
    if (currentPath === '/dashboard') {
      return <DashboardPage onNavigate={navigate} />;
    }

    // Default to Landing Page for '/' and all other paths
    return (
      <LandingPage
        onNavigate={navigate}
        onOpenAIMentor={() => setIsGlobalAIMentorOpen(true)}
      />
    );
  };

  return (
    <>
      {renderRoute()}

      {/* Global AI Mentor Drawer fallback for Landing Page navigation */}
      <AIMentorDrawer
        isOpen={isGlobalAIMentorOpen}
        onClose={() => setIsGlobalAIMentorOpen(false)}
        onOpenSummaryModal={(title) => setGlobalSummaryTitle(title)}
      />

      {/* Global AI Summary Modal fallback */}
      <AISummaryModal
        talkTitle={globalSummaryTitle}
        onClose={() => setGlobalSummaryTitle(null)}
      />
    </>
  );
}

export default App;
