import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Sparkles, 
  Compass, 
  Flame, 
  SlidersHorizontal, 
  CheckCircle2, 
  X,
  ChevronDown
} from 'lucide-react';
import { currentUser, notificationsList } from '../../data/mockData';

interface TopNavigationProps {
  onOpenAIMentor: () => void;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({ onOpenAIMentor }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeIntent, setActiveIntent] = useState<'deep_tech' | 'career' | 'casual'>('deep_tech');
  const [unreadCount, setUnreadCount] = useState(
    notificationsList.filter((n) => n.isUnread).length
  );

  const intentLabels = {
    deep_tech: 'Deep Technical Skill Up',
    career: 'Career Transition Path',
    casual: 'Casual Discovery & Trends',
  };

  return (
    <header className="sticky top-0 z-30 h-16 glass-panel border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl px-6 flex items-center justify-between gap-4">
      {/* Search Input with Natural Language AI Search */}
      <div className="flex-1 max-w-2xl relative">
        <div className="relative flex items-center">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-purple-400">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search talks with AI (e.g. 'Find keynote talks on scaling vector DBs')..."
            className="w-full pl-10 pr-24 py-2 bg-slate-900/90 border border-slate-700/60 rounded-xl text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
            <span className="hidden sm:inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
              ⌘ K
            </span>
            <button
              onClick={onOpenAIMentor}
              className="p-1 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 text-purple-300 transition-colors"
              title="Search with AI Assistant"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Intent Selector Pill */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
          <SlidersHorizontal className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-slate-400 font-medium">Mode:</span>
          <select
            value={activeIntent}
            onChange={(e) => setActiveIntent(e.target.value as any)}
            className="bg-transparent text-purple-300 font-semibold focus:outline-none cursor-pointer text-xs"
          >
            <option value="deep_tech" className="bg-slate-900 text-slate-200">
              ⚡ Deep Tech Skill Up
            </option>
            <option value="career" className="bg-slate-900 text-slate-200">
              🎯 Career Transition
            </option>
            <option value="casual" className="bg-slate-900 text-slate-200">
              ☕ Casual Trends
            </option>
          </select>
        </div>

        {/* Streak Counter Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
          <Flame className="w-4 h-4 text-amber-400 fill-amber-400/30 animate-bounce" />
          <span>{currentUser.learningStreakDays} Day Streak</span>
        </div>

        {/* AI Vector Engine Status */}
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Vector Indexing Active</span>
        </div>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-purple-500 text-[10px] font-bold text-white flex items-center justify-center border-2 border-slate-950">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Panel */}
          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 glass-panel rounded-2xl bg-slate-950/95 border border-slate-800 shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-white">Notifications</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-medium">
                    {unreadCount} unread
                  </span>
                </div>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                {notificationsList.map((item) => (
                  <div
                    key={item.id}
                    className={`p-2.5 rounded-xl border transition-all ${
                      item.isUnread
                        ? 'bg-purple-950/20 border-purple-500/30'
                        : 'bg-slate-900/50 border-slate-800/60 opacity-80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="text-xs font-semibold text-purple-200">{item.title}</span>
                      <span className="text-[10px] text-slate-400">{item.time}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">{item.message}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setUnreadCount(0)}
                className="w-full mt-3 py-1.5 text-center text-xs font-medium text-purple-400 hover:text-purple-300 hover:underline"
              >
                Mark all as read
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
