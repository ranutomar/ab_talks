import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Compass, 
  Tv2, 
  Map, 
  Users, 
  GraduationCap, 
  Sparkles, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  Bookmark,
  Award,
  LogOut,
  X
} from 'lucide-react';
import { currentUser } from '../../data/mockData';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAIMentor: () => void;
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  setActiveTab, 
  onOpenAIMentor,
  mobileOpen = false,
  onCloseMobile
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const mainNavigation = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'discover', label: 'Discover & Search', icon: Compass, badge: 'AI Vector' },
    { id: 'events', label: 'Talks & Events', icon: Tv2, badge: '1 Live' },
    { id: 'roadmaps', label: 'Learning Roadmaps', icon: Map, badge: '78%' },
    { id: 'networking', label: 'AI Peer Network', icon: Users, badge: '142 Matches' },
    { id: 'mentorship', label: 'Speakers & Mentors', icon: GraduationCap, badge: '1:1 Ready' },
  ];

  const secondaryNavigation = [
    { id: 'bookmarks', label: 'Saved Talks', icon: Bookmark },
    { id: 'analytics', label: 'Learning Analytics', icon: TrendingUp },
    { id: 'certificates', label: 'Credentials & Badges', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <>
      {/* Mobile Drawer Overlay Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCloseMobile}
            className="fixed inset-0 z-40 bg-[#060816]/85 backdrop-blur-md lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside
        className={`fixed left-0 top-0 bottom-0 z-40 flex flex-col transition-all duration-300 ${
          collapsed ? 'w-20' : 'w-64'
        } ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} border-r border-white/10 bg-[#060816]/95 backdrop-blur-2xl shadow-2xl`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/10 shrink-0">
          {!collapsed && (
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7C4DFF] via-[#5EC8FF] to-[#22D3EE] p-0.5 shadow-lg shadow-[#7C4DFF]/25">
                <div className="w-full h-full bg-[#060816] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#5EC8FF] animate-pulse" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-['Space_Grotesk'] font-extrabold text-lg tracking-tight text-white">ABTalks</span>
                  <span className="text-[10px] font-bold tracking-wide uppercase px-1.5 py-0.5 rounded bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/30 font-mono">
                    2.0 AI
                  </span>
                </div>
                <p className="text-[10px] text-[#94A3B8] font-medium">AI Learning & Event Hub</p>
              </div>
            </div>
          )}

          {collapsed && (
            <div className="w-full flex justify-center">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7C4DFF] to-[#22D3EE] p-0.5">
                <div className="w-full h-full bg-[#060816] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#5EC8FF]" />
                </div>
              </div>
            </div>
          )}

          {/* Close for mobile, collapse for desktop */}
          <div className="flex items-center">
            {onCloseMobile && (
              <button
                onClick={onCloseMobile}
                className="lg:hidden p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden lg:block p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* AI Assistant Quick Trigger Banner */}
        {!collapsed && (
          <div className="m-3 p-3.5 rounded-2xl bg-gradient-to-r from-[#10192C] to-[#141F35] border border-[#7C4DFF]/30 relative overflow-hidden group shadow-xl">
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-[#7C4DFF]/20 rounded-full blur-xl group-hover:bg-[#7C4DFF]/30 transition-all"></div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="p-1.5 rounded-lg bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/30">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-white font-['Space_Grotesk']">ABTalks AI Co-Pilot</span>
            </div>
            <p className="text-[11px] text-[#94A3B8] mb-3 leading-relaxed font-light">
              Ask questions to talk transcripts or get custom skill advice.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenAIMentor}
              className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#7C4DFF] to-[#5EC8FF] text-white text-xs font-bold shadow-md shadow-[#7C4DFF]/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Launch AI Mentor</span>
              <Sparkles className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        )}

        {/* Main Navigation */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-6">
          <div>
            {!collapsed && (
              <h3 className="px-3 text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mb-2 font-mono">
                Main Navigation
              </h3>
            )}
            <nav className="space-y-1">
              {mainNavigation.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: collapsed ? 0 : 3 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center ${
                      collapsed ? 'justify-center px-2 py-3' : 'justify-between px-3.5 py-2.5'
                    } rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer relative group ${
                      isActive
                        ? 'bg-[#141F35] text-white border border-[#7C4DFF]/40 font-semibold shadow-lg shadow-[#7C4DFF]/15'
                        : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                    }`}
                    title={collapsed ? item.label : undefined}
                  >
                    {/* Linear Style Left Accent Glow Indicator */}
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full bg-[#7C4DFF] shadow-[0_0_12px_#7C4DFF]" />
                    )}

                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 transition-all ${
                        isActive 
                          ? 'text-[#5EC8FF] drop-shadow-[0_0_6px_rgba(94,200,255,0.6)]' 
                          : 'text-[#94A3B8] group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(124,77,255,0.5)]'
                      }`} />
                      {!collapsed && <span>{item.label}</span>}
                    </div>
                    {!collapsed && item.badge && (
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full font-mono ${
                          isActive
                            ? 'bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/30'
                            : 'bg-[#10192C] text-[#94A3B8] border border-white/10'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </nav>
          </div>

          {/* Secondary Menu */}
          <div>
            {!collapsed && (
              <h3 className="px-3 text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mb-2 font-mono">
                Library & Tools
              </h3>
            )}
            <nav className="space-y-1">
              {secondaryNavigation.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: collapsed ? 0 : 3 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center ${
                      collapsed ? 'justify-center px-2 py-2.5' : 'px-3.5 py-2.5'
                    } rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer relative group ${
                      isActive
                        ? 'bg-[#141F35] text-white border border-[#7C4DFF]/40 font-semibold'
                        : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                    }`}
                    title={collapsed ? item.label : undefined}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full bg-[#7C4DFF] shadow-[0_0_12px_#7C4DFF]" />
                    )}
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 transition-all ${
                        isActive 
                          ? 'text-[#5EC8FF] drop-shadow-[0_0_6px_rgba(94,200,255,0.6)]' 
                          : 'text-[#94A3B8] group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(124,77,255,0.5)]'
                      }`} />
                      {!collapsed && <span>{item.label}</span>}
                    </div>
                  </motion.button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* User Footer Profile Card */}
        <div className="p-3 border-t border-white/10 bg-[#060816] shrink-0">
          <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'} gap-3`}>
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative flex-shrink-0">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-9 h-9 rounded-xl object-cover ring-2 ring-[#7C4DFF]/40"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] ring-2 ring-[#060816]"></span>
              </div>
              {!collapsed && (
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white truncate">{currentUser.name}</h4>
                  <p className="text-[10px] text-[#94A3B8] truncate">{currentUser.role}</p>
                </div>
              )}
            </div>
            {!collapsed && (
              <button
                className="p-1.5 rounded-lg text-[#94A3B8] hover:text-rose-400 hover:bg-white/5 transition-colors cursor-pointer"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
