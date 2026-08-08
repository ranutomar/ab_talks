import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Users, HelpCircle, ArrowRight } from 'lucide-react';

interface AIQuickActionsProps {
  onOpenChat: () => void;
  onOpenDiscovery: () => void;
  onOpenNetworking: () => void;
  onOpenDayHint: () => void;
}

export const AIQuickActions: React.FC<AIQuickActionsProps> = ({
  onOpenChat,
  onOpenDiscovery,
  onOpenNetworking,
  onOpenDayHint,
}) => {
  const actions = [
    {
      id: 'chat',
      title: 'Ask AI Co-Pilot',
      subtitle: 'Ask about 1,400+ transcripts',
      icon: Sparkles,
      color: 'from-[#7C4DFF] to-[#5EC8FF]',
      borderColor: 'border-[#7C4DFF]/40',
      badge: 'RAG Powered',
      onClick: onOpenChat,
    },
    {
      id: 'discovery',
      title: 'AI Event Search',
      subtitle: 'Natural language keynotes search',
      icon: Compass,
      color: 'from-[#5EC8FF] to-[#22D3EE]',
      borderColor: 'border-[#22D3EE]/40',
      badge: 'Semantic Vector',
      onClick: onOpenDiscovery,
    },
    {
      id: 'networking',
      title: 'AI Peer Network',
      subtitle: 'Find high-compatibility peers',
      icon: Users,
      color: 'from-[#22D3EE] to-[#10B981]',
      borderColor: 'border-[#10B981]/40',
      badge: '142 Matches',
      onClick: onOpenNetworking,
    },
    {
      id: 'day-12',
      title: 'Day 12 Challenge Hint',
      subtitle: 'Get assistance for active challenge',
      icon: HelpCircle,
      color: 'from-amber-500 to-[#7C4DFF]',
      borderColor: 'border-amber-500/40',
      badge: 'Day 12 Active',
      onClick: onOpenDayHint,
    },
  ];

  return (
    <div className="glass-card p-5 rounded-3xl border border-white/10 bg-[#10192C]">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/30">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white font-['Space_Grotesk']">
              AI Co-Pilot Quick Actions
            </h3>
            <p className="text-[11px] text-[#94A3B8]">
              Instant AI assistance, event retrieval, and peer matching
            </p>
          </div>
        </div>
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
          Engine Online
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {actions.map((action, idx) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={action.onClick}
              className={`p-3.5 rounded-2xl bg-[#141F35] border ${action.borderColor} hover:bg-[#15233e] transition-all flex flex-col justify-between text-left group cursor-pointer relative overflow-hidden shadow-md`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl bg-gradient-to-r ${action.color} text-white shadow-md`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-[#060816]/70 text-slate-300 border border-white/10">
                    {action.badge}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-[#5EC8FF] transition-colors">
                  {action.title}
                </h4>
                <p className="text-[10px] text-[#94A3B8] mt-0.5 leading-snug line-clamp-2">
                  {action.subtitle}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-semibold text-[#5EC8FF]">
                <span>Launch Action</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
