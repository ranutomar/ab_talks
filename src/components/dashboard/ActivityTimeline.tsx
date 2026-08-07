import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Award, 
  UserPlus, 
  MessageSquare, 
  Clock, 
  BrainCircuit,
  ArrowRight,
  Zap
} from 'lucide-react';
import { activityTimeline } from '../../data/mockData';

export const ActivityTimeline: React.FC = () => {
  const getActivityDetails = (type: string) => {
    switch (type) {
      case 'talk_completed':
        return { icon: CheckCircle2, color: 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30', xp: '+150 XP' };
      case 'badge_earned':
        return { icon: Award, color: 'text-[#5EC8FF] bg-[#5EC8FF]/10 border-[#5EC8FF]/30', xp: '+300 XP' };
      case 'connection_made':
        return { icon: UserPlus, color: 'text-[#22D3EE] bg-[#22D3EE]/10 border-[#22D3EE]/30', xp: '+50 XP' };
      case 'mentor_qa':
        return { icon: MessageSquare, color: 'text-[#7C4DFF] bg-[#7C4DFF]/10 border-[#7C4DFF]/30', xp: '+100 XP' };
      default:
        return { icon: BrainCircuit, color: 'text-[#7C4DFF] bg-[#7C4DFF]/10 border-[#7C4DFF]/30', xp: '+75 XP' };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card p-6 rounded-3xl border border-white/10 h-full flex flex-col justify-between bg-[#10192C]"
    >
      <div>
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
          <div>
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
              Recent Learning & Peer Activity
            </h3>
            <p className="text-xs text-[#94A3B8] mt-0.5">
              Your real-time progress, credentials, and network interactions
            </p>
          </div>

          <button className="text-xs font-semibold text-[#5EC8FF] hover:text-[#22D3EE] flex items-center gap-1 cursor-pointer transition-colors">
            <span>Full History</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Gradient Timeline Connector Line */}
        <div className="relative pl-6 space-y-5 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#7C4DFF] before:via-[#5EC8FF] before:to-[#10B981]">
          {activityTimeline.map((act, idx) => {
            const { icon: Icon, color, xp } = getActivityDetails(act.type);

            return (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative group"
              >
                {/* Timeline Dot Icon */}
                <div
                  className={`absolute -left-6 top-0.5 w-6 h-6 rounded-full border ${color} flex items-center justify-center -translate-x-1/2 bg-[#060816] shadow-md`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>

                {/* Activity Card */}
                <div className="p-3.5 rounded-2xl bg-[#141F35] border border-white/5 hover:border-white/20 transition-all duration-300 shadow-sm">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-xs font-bold text-white group-hover:text-[#5EC8FF] transition-colors">
                      {act.title}
                    </h4>
                    <span className="text-[10px] text-[#94A3B8] font-mono flex items-center gap-1 shrink-0">
                      <Clock className="w-3 h-3 text-[#94A3B8]" />
                      {act.timestamp}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-2.5 font-light">
                    {act.description}
                  </p>

                  {/* Additional Metadata or Connection Avatar & XP Badges */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {act.avatar && (
                        <img
                          src={act.avatar}
                          alt="Connection avatar"
                          className="w-4 h-4 rounded-full object-cover shrink-0 border border-white/20"
                        />
                      )}
                      {act.meta && (
                        <span className="text-[10px] font-semibold text-[#5EC8FF] px-2 py-0.5 rounded bg-[#7C4DFF]/10 border border-[#7C4DFF]/20 font-mono">
                          {act.meta}
                        </span>
                      )}
                    </div>

                    {/* XP Badge */}
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 font-mono">
                      <Zap className="w-3 h-3" />
                      {xp}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
