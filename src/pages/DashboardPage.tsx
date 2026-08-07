import React, { useState } from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { TopNavigation } from '../components/layout/TopNavigation';
import { AnalyticsCards } from '../components/dashboard/AnalyticsCards';
import { LearningProgress } from '../components/dashboard/LearningProgress';
import { UpcomingEvents } from '../components/dashboard/UpcomingEvents';
import { RecommendedEvents } from '../components/dashboard/RecommendedEvents';
import { ActivityTimeline } from '../components/dashboard/ActivityTimeline';
import { AIMentorDrawer } from '../components/dashboard/AIMentorDrawer';
import { AISummaryModal } from '../components/dashboard/AISummaryModal';
import { currentUser } from '../data/mockData';
import { Sparkles, Video, Map, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAIMentorOpen, setIsAIMentorOpen] = useState(false);
  const [selectedSummaryTitle, setSelectedSummaryTitle] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAIMentor={() => setIsAIMentorOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 pl-64 transition-all duration-300 flex flex-col min-w-0">
        {/* Top Header */}
        <TopNavigation onOpenAIMentor={() => setIsAIMentorOpen(true)} />

        {/* Dashboard Main View */}
        <main className="flex-1 p-6 space-y-6 max-w-7xl mx-auto w-full">
          {/* Welcome Banner */}
          <div className="relative p-6 rounded-3xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/60 border border-purple-500/30 overflow-hidden shadow-2xl">
            {/* Glow Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    AI Personalization Active
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Last synced 2 mins ago</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
                  Welcome back, {currentUser.name}! ⚡
                </h1>

                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Your <span className="text-purple-300 font-semibold">{currentUser.role}</span> learning path is{' '}
                  <span className="text-cyan-300 font-bold">78% completed</span>. You have 1 live keynote matching your vector profile today.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsAIMentorOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Ask ABTalks AI</span>
                </button>

                <button className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-all flex items-center gap-2">
                  <Video className="w-4 h-4 text-rose-400" />
                  <span>Join Live Stream</span>
                </button>
              </div>
            </div>
          </div>

          {/* Section 1: Analytics Cards */}
          <AnalyticsCards />

          {/* Section 2: Learning Progress & Upcoming Events */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <LearningProgress />
            </div>
            <div className="lg:col-span-5">
              <UpcomingEvents />
            </div>
          </div>

          {/* Section 3: Recommended Events & Activity Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
              <RecommendedEvents onOpenSummaryModal={(title) => setSelectedSummaryTitle(title)} />
            </div>
            <div className="lg:col-span-4">
              <ActivityTimeline />
            </div>
          </div>
        </main>
      </div>

      {/* AI Mentor Slide-Out Drawer */}
      <AIMentorDrawer
        isOpen={isAIMentorOpen}
        onClose={() => setIsAIMentorOpen(false)}
      />

      {/* AI Summary Modal */}
      <AISummaryModal
        talkTitle={selectedSummaryTitle}
        onClose={() => setSelectedSummaryTitle(null)}
      />
    </div>
  );
};
