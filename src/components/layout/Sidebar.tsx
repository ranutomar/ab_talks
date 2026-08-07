import React, { useState } from 'react';
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
  LogOut
} from 'lucide-react';
import { currentUser } from '../../data/mockData';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAIMentor: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onOpenAIMentor }) => {
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

  return (
    <aside
      className={`fixed left-0 top-0 bottom-0 z-40 flex flex-col glass-panel transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      } border-r border-slate-800/80 bg-slate-950/95`}
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800/60">
        {!collapsed && (
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-purple-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-['Space_Grotesk'] font-bold text-lg tracking-tight text-white">ABTalks</span>
                <span className="text-[10px] font-semibold tracking-wide uppercase px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  NextGen
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">AI Learning & Event Hub</p>
            </div>
          </div>
        )}

        {collapsed && (
          <div className="w-full flex justify-center">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-0.5">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* AI Assistant Quick Trigger Banner */}
      {!collapsed && (
        <div className="m-3 p-3 rounded-xl bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-slate-900/50 border border-purple-500/30 relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all"></div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="p-1 rounded-md bg-purple-500/20 text-purple-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-purple-200">ABTalks AI Co-Pilot</span>
          </div>
          <p className="text-[11px] text-slate-300 mb-2.5 leading-relaxed">
            Ask questions to talk transcripts or get custom skill advice.
          </p>
          <button
            onClick={onOpenAIMentor}
            className="w-full py-1.5 px-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md shadow-purple-600/30 transition-all flex items-center justify-center gap-1.5"
          >
            <span>Launch AI Mentor</span>
            <Sparkles className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-6">
        <div>
          {!collapsed && (
            <h3 className="px-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Main Menu
            </h3>
          )}
          <nav className="space-y-1">
            {mainNavigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center ${
                    collapsed ? 'justify-center px-2 py-3' : 'justify-between px-3 py-2.5'
                  } rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-purple-600/20 text-purple-300 border border-purple-500/40 font-semibold shadow-lg shadow-purple-900/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                  title={collapsed ? item.label : undefined}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-purple-400' : 'text-slate-400'}`} />
                    {!collapsed && <span>{item.label}</span>}
                  </div>
                  {!collapsed && item.badge && (
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-purple-500/30 text-purple-200 border border-purple-400/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Secondary Menu */}
        <div>
          {!collapsed && (
            <h3 className="px-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Library & Settings
            </h3>
          )}
          <nav className="space-y-1">
            {secondaryNavigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center ${
                    collapsed ? 'justify-center px-2 py-2.5' : 'px-3 py-2'
                  } rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-purple-600/20 text-purple-300 border border-purple-500/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                  title={collapsed ? item.label : undefined}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-purple-400' : 'text-slate-400'}`} />
                    {!collapsed && <span>{item.label}</span>}
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* User Footer Profile Card */}
      <div className="p-3 border-t border-slate-800/60 bg-slate-950/60">
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'} gap-3`}>
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative flex-shrink-0">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-9 h-9 rounded-xl object-cover ring-2 ring-purple-500/30"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-950"></span>
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <h4 className="text-xs font-semibold text-white truncate">{currentUser.name}</h4>
                <p className="text-[10px] text-slate-400 truncate">{currentUser.role}</p>
              </div>
            )}
          </div>
          {!collapsed && (
            <button
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800/60 transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
