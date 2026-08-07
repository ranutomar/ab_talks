import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Bell, 
  Sparkles, 
  SlidersHorizontal, 
  X,
  Menu,
  Flame
} from 'lucide-react';
import { currentUser, notificationsList } from '../../data/mockData';

interface TopNavigationProps {
  onOpenAIMentor: () => void;
  onToggleMobileSidebar?: () => void;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({ 
  onOpenAIMentor,
  onToggleMobileSidebar
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeIntent, setActiveIntent] = useState<'deep_tech' | 'career' | 'casual'>('deep_tech');
  const [unreadCount, setUnreadCount] = useState(
    notificationsList.filter((n) => n.isUnread).length
  );

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-white/10 bg-[#060816]/80 backdrop-blur-xl px-4 sm:px-6 flex items-center justify-between gap-4">
      {/* Mobile Toggle Button */}
      {onToggleMobileSidebar && (
        <button
          onClick={onToggleMobileSidebar}
          className="lg:hidden p-2 rounded-xl bg-[#10182B] border border-white/10 text-[#94A3B8] hover:text-white"
          title="Open Menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      {/* Search Input with AI Natural Language Search */}
      <div className="flex-1 max-w-xl relative">
        <div className="relative flex items-center">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-[#4FC3F7]">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search talks with AI (e.g. 'Find keynote talks on vector DBs')..."
            className="w-full pl-10 pr-24 py-2 bg-[#10182B] border border-white/10 rounded-xl text-xs text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#7C4DFF] focus:ring-2 focus:ring-[#7C4DFF]/20 transition-all"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
            <span className="hidden sm:inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#151E34] text-[#94A3B8] border border-white/10">
              ⌘ K
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenAIMentor}
              className="p-1.5 rounded-lg bg-[#7C4DFF]/20 hover:bg-[#7C4DFF]/40 text-[#4FC3F7] border border-[#7C4DFF]/30 transition-colors cursor-pointer"
              title="Search with AI Assistant"
            >
              <Search className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
        {/* Mode Selector Pill */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#10182B] border border-white/10 text-xs">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#7C4DFF]" />
          <span className="text-[#94A3B8] font-medium text-[11px]">Mode:</span>
          <select
            value={activeIntent}
            onChange={(e) => setActiveIntent(e.target.value as any)}
            className="bg-transparent text-[#4FC3F7] font-semibold focus:outline-none cursor-pointer text-xs"
          >
            <option value="deep_tech" className="bg-[#10182B] text-white">
              ⚡ Deep Tech Skill Up
            </option>
            <option value="career" className="bg-[#10182B] text-white">
              🎯 Career Transition
            </option>
            <option value="casual" className="bg-[#10182B] text-white">
              ☕ Casual Trends
            </option>
          </select>
        </div>

        {/* Streak Counter Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
          <Flame className="w-4 h-4 text-amber-400 fill-amber-400/30 animate-bounce" />
          <span className="hidden sm:inline">{currentUser.learningStreakDays} Day Streak</span>
          <span className="sm:hidden">{currentUser.learningStreakDays}d</span>
        </div>

        {/* AI Vector Engine Status */}
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-[11px] font-medium">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
          <span>Vector RAG Active</span>
        </div>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-xl bg-[#10182B] border border-white/10 text-[#94A3B8] hover:text-white hover:border-white/20 transition-all cursor-pointer"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#7C4DFF] text-[10px] font-bold text-white flex items-center justify-center border-2 border-[#060816]">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Panel */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 w-80 sm:w-96 glass-panel rounded-2xl bg-[#060816]/95 border border-white/10 shadow-2xl p-4 z-50"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-white">Notifications</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#7C4DFF]/20 text-[#4FC3F7] font-medium border border-[#7C4DFF]/30">
                      {unreadCount} unread
                    </span>
                  </div>
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="text-[#94A3B8] hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                  {notificationsList.map((item) => (
                    <div
                      key={item.id}
                      className={`p-3 rounded-xl border transition-all ${
                        item.isUnread
                          ? 'bg-[#151E34] border-[#7C4DFF]/30'
                          : 'bg-[#10182B] border-white/5 opacity-80'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold text-[#4FC3F7]">{item.title}</span>
                        <span className="text-[10px] text-[#94A3B8] font-mono">{item.time}</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">{item.message}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setUnreadCount(0)}
                  className="w-full mt-3 py-1.5 text-center text-xs font-medium text-[#4FC3F7] hover:text-[#22D3EE] hover:underline cursor-pointer"
                >
                  Mark all as read
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
