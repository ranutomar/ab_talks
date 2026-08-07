import React from 'react';
import { 
  CheckCircle2, 
  Award, 
  UserPlus, 
  MessageSquare, 
  Clock, 
  BrainCircuit,
  ArrowRight
} from 'lucide-react';
import { activityTimeline } from '../../data/mockData';

export const ActivityTimeline: React.FC = () => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'talk_completed':
        return { icon: CheckCircle2, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
      case 'badge_earned':
        return { icon: Award, color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
      case 'connection_made':
        return { icon: UserPlus, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' };
      case 'mentor_qa':
        return { icon: MessageSquare, color: 'text-purple-400 bg-purple-500/10 border-purple-500/30' };
      default:
        return { icon: BrainCircuit, color: 'text-purple-400 bg-purple-500/10 border-purple-500/30' };
    }
  };

  return (
    <div className="glass-card p-6 rounded-2xl border border-slate-800/80">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
            Recent Learning & Peer Activity
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Your real-time progress, credentials, and network interactions
          </p>
        </div>

        <button className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1">
          <span>Full History</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="relative pl-6 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
        {activityTimeline.map((act) => {
          const { icon: Icon, color } = getActivityIcon(act.type);

          return (
            <div key={act.id} className="relative group">
              {/* Timeline Dot Icon */}
              <div
                className={`absolute -left-6 top-0 w-6 h-6 rounded-full border ${color} flex items-center justify-center -translate-x-1/2 bg-slate-950`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>

              {/* Activity Card */}
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                    {act.title}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1 flex-shrink-0">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {act.timestamp}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-snug mb-2">
                  {act.description}
                </p>

                {/* Additional Metadata or Connection Avatar */}
                <div className="flex items-center gap-2">
                  {act.avatar && (
                    <img
                      src={act.avatar}
                      alt="Connection avatar"
                      className="w-4 h-4 rounded-full object-cover"
                    />
                  )}
                  {act.meta && (
                    <span className="text-[10px] font-semibold text-purple-300 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                      {act.meta}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
