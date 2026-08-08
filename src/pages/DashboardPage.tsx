import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from '../components/layout/Sidebar';
import { TopNavigation } from '../components/layout/TopNavigation';
import { AnalyticsCards } from '../components/dashboard/AnalyticsCards';
import { LearningProgress } from '../components/dashboard/LearningProgress';
import { UpcomingEvents } from '../components/dashboard/UpcomingEvents';
import { RecommendedEvents } from '../components/dashboard/RecommendedEvents';
import { ActivityTimeline } from '../components/dashboard/ActivityTimeline';
import { AIInsightsFinale } from '../components/dashboard/AIInsightsFinale';
import { AIMentorDrawer } from '../components/dashboard/AIMentorDrawer';
import { AISummaryModal } from '../components/dashboard/AISummaryModal';
import { AIQuickActions } from '../components/ai/AIQuickActions';
import { currentUser } from '../data/mockData';
import { Sparkles, Video, Flame, Zap, Trophy, Award } from 'lucide-react';

interface DashboardPageProps {
  onNavigate?: (route: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAIMentorOpen, setIsAIMentorOpen] = useState(false);
  const [aiDrawerTab, setAIDrawerTab] = useState<'chat' | 'discovery' | 'networking'>('chat');
  const [aiDrawerQuery, setAIDrawerQuery] = useState('');
  const [selectedSummaryTitle, setSelectedSummaryTitle] = useState<string | null>(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isLoading] = useState(false);

  const openDrawerWithConfig = (tab: 'chat' | 'discovery' | 'networking', query: string = '') => {
    setAIDrawerTab(tab);
    setAIDrawerQuery(query);
    setIsAIMentorOpen(true);
  };

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'events') {
      onNavigate?.('/day/12');
    }
  };

  return (
    <div className="min-h-screen bg-[#060816] text-[#F8F9FA] flex overflow-x-hidden">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={handleNavClick}
        onOpenAIMentor={() => openDrawerWithConfig('chat')}
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 transition-all duration-300 flex flex-col min-w-0">
        {/* Top Header */}
        <TopNavigation 
          onOpenAIMentor={() => openDrawerWithConfig('chat')}
          onToggleMobileSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />

        {/* Dashboard Main View */}
        <motion.main 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full"
        >
          {/* Hero Welcome Card with Aurora Glow & Profile Statistics Chips */}
          <div className="relative p-6 sm:p-8 rounded-3xl aurora-bg border border-white/10 overflow-hidden shadow-2xl">
            {/* Animated Floating Accent Orbs */}
            <motion.div 
              animate={{ 
                y: [0, -12, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-16 -right-16 w-96 h-96 bg-[#7C4DFF]/25 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div 
              animate={{ 
                y: [0, 12, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-16 left-1/3 w-80 h-80 bg-[#22D3EE]/20 rounded-full blur-3xl pointer-events-none"
            />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/40 text-xs font-bold font-mono shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#5EC8FF]" />
                    AI Personalization Engine Active
                  </span>
                  <span className="text-xs text-[#94A3B8] font-mono">Last synced 2 mins ago</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight leading-tight">
                  Welcome back, {currentUser.name}! ⚡
                </h1>

                <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed font-light">
                  Your <span className="text-[#5EC8FF] font-semibold">{currentUser.role}</span> learning path is{' '}
                  <span className="text-[#22D3EE] font-extrabold font-mono">78% completed</span>. You have 1 live keynote matching your vector profile today.
                </p>

                {/* Profile Statistics Quick Bar */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#141F35] border border-white/10 text-xs font-mono text-white">
                    <Zap className="w-3.5 h-3.5 text-[#5EC8FF]" />
                    <span>1,450 XP</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#141F35] border border-white/10 text-xs font-mono text-white">
                    <Trophy className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>AI Rank: Top 5%</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#141F35] border border-white/10 text-xs font-mono text-white">
                    <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30" />
                    <span>{currentUser.learningStreakDays}-Day Streak</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#141F35] border border-white/10 text-xs font-mono text-white">
                    <Award className="w-3.5 h-3.5 text-[#7C4DFF]" />
                    <span>12 Badges</span>
                  </span>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openDrawerWithConfig('chat')}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#7C4DFF] via-[#5EC8FF] to-[#22D3EE] text-white text-xs sm:text-sm font-bold shadow-xl shadow-[#7C4DFF]/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Ask ABTalks AI</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate?.('/day/12')}
                  className="px-6 py-3.5 rounded-2xl bg-[#10192C]/90 hover:bg-[#141F35] border border-white/10 text-slate-200 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md shadow-lg"
                >
                  <Video className="w-4 h-4 text-rose-400" />
                  <span>View Day 12 Challenge</span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* AI ASSISTANT SECTION: AI Quick Actions */}
          <AIQuickActions
            onOpenChat={() => openDrawerWithConfig('chat')}
            onOpenDiscovery={() => openDrawerWithConfig('discovery')}
            onOpenNetworking={() => openDrawerWithConfig('networking')}
            onOpenDayHint={() => openDrawerWithConfig('chat', 'Help me with Challenge Day 12: RAG Latency')}
          />

          {/* Section 1: Key Performance Analytics */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-[#94A3B8] uppercase tracking-wider font-mono">
                Key Performance Analytics
              </h2>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-32 rounded-3xl skeleton-shimmer border border-white/10" />
                ))}
              </div>
            ) : (
              <AnalyticsCards />
            )}
          </div>

          {/* Section 2: Learning Roadmap & Live Events */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7">
              <LearningProgress />
            </div>
            <div className="lg:col-span-5">
              <UpcomingEvents />
            </div>
          </div>

          {/* Section 3: AI Tailored Recommendations & Real-Time Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-8">
              <RecommendedEvents onOpenSummaryModal={(title) => setSelectedSummaryTitle(title)} />
            </div>
            <div className="lg:col-span-4">
              <ActivityTimeline />
            </div>
          </div>

          {/* Section 4: AI Insights Grand Finale & Premium SaaS Footer */}
          <AIInsightsFinale />
        </motion.main>
      </div>

      {/* AI Mentor Slide-Out Drawer */}
      <AIMentorDrawer
        isOpen={isAIMentorOpen}
        onClose={() => setIsAIMentorOpen(false)}
        initialTab={aiDrawerTab}
        initialQuery={aiDrawerQuery}
        onOpenSummaryModal={(title) => setSelectedSummaryTitle(title)}
      />

      {/* AI Summary Modal */}
      <AISummaryModal
        talkTitle={selectedSummaryTitle}
        onClose={() => setSelectedSummaryTitle(null)}
      />
    </div>
  );
};
