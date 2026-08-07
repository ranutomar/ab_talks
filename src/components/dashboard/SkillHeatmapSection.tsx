import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, ArrowRight, Zap, Target, TrendingUp, BookOpen, Clock } from 'lucide-react';
import { currentUser } from '../../data/mockData';

export const SkillHeatmapSection: React.FC = () => {
  // 12 Weeks Skill Activity Matrix
  const heatmapWeeks = Array.from({ length: 12 }, (_, i) => ({
    week: `W${i + 1}`,
    days: [
      { level: (i * 3 + 1) % 4 + 1 },
      { level: (i * 2 + 2) % 4 + 1 },
      { level: (i + 3) % 4 },
      { level: (i * 4 + 1) % 4 + 1 },
      { level: (i * 2) % 4 },
      { level: (i * 3 + 2) % 4 + 1 },
      { level: (i + 1) % 4 + 1 },
    ],
  }));

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 4:
        return 'bg-[#7C4DFF] border-[#7C4DFF] shadow-[0_0_8px_rgba(124,77,255,0.6)]';
      case 3:
        return 'bg-[#5EC8FF] border-[#5EC8FF] shadow-[0_0_6px_rgba(94,200,255,0.5)]';
      case 2:
        return 'bg-[#22D3EE]/60 border-[#22D3EE]/40';
      case 1:
        return 'bg-[#141F35] border-white/10';
      default:
        return 'bg-[#060816]/60 border-white/5';
    }
  };

  const continueWatching = {
    title: 'RAG Architecture Patterns: Beyond Basic Vector Search',
    speaker: 'Prof. David Miller',
    progress: 68,
    timeLeft: '14 mins left',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60',
  };

  const nextSession = {
    title: 'Building Autonomous Agent Networks with LangGraph',
    speaker: 'Dr. Elena Rostova',
    time: 'Today • 4:00 PM EST',
    tags: ['Multi-Agent', 'State Graphs'],
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2.5">
          <h2 className="text-sm font-bold text-[#94A3B8] uppercase tracking-wider font-mono">
            Skill Analytics & Learning Resume
          </h2>
          <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/30">
            Realtime Sync
          </span>
        </div>
      </div>

      {/* 2-Column Balanced Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: AI Skill Mastery Matrix & Weekly Insights */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 glass-card p-6 rounded-3xl border border-white/10 bg-[#10192C] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div>
                <h3 className="text-base font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
                  <span>AI Skill Mastery Matrix</span>
                  <span className="text-[10px] text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded-full font-mono border border-[#10B981]/30">
                    Streak 84%
                  </span>
                </h3>
                <p className="text-xs text-[#94A3B8] mt-0.5">
                  12-week activity log across embeddings, RAG, and fine-tuning
                </p>
              </div>

              <div className="flex items-center gap-1 text-[9px] font-mono text-[#94A3B8]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded bg-[#141F35]"></span>
                <span className="w-2.5 h-2.5 rounded bg-[#22D3EE]/60"></span>
                <span className="w-2.5 h-2.5 rounded bg-[#5EC8FF]"></span>
                <span className="w-2.5 h-2.5 rounded bg-[#7C4DFF]"></span>
                <span>More</span>
              </div>
            </div>

            {/* Heatmap Grid */}
            <div className="grid grid-cols-12 gap-2 mb-4 overflow-x-auto no-scrollbar py-1">
              {heatmapWeeks.map((w, wIdx) => (
                <div key={wIdx} className="space-y-1.5 text-center">
                  <span className="text-[9px] font-mono text-[#94A3B8] block">{w.week}</span>
                  <div className="space-y-1.5">
                    {w.days.map((d, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-3.5 h-3.5 rounded-sm border ${getHeatmapColor(d.level)} transition-all hover:scale-125 cursor-pointer`}
                        title={`Activity Level: ${d.level}/4`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Weekly Learning Insights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-white/10">
              <div className="p-3 rounded-2xl bg-[#141F35] border border-white/5 flex items-start gap-2.5">
                <div className="p-1.5 rounded-xl bg-[#7C4DFF]/15 text-[#5EC8FF] border border-[#7C4DFF]/30 mt-0.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">Learning Velocity</span>
                  <span className="text-xs font-bold text-white">+24% vs Benchmark</span>
                  <p className="text-[10px] text-[#94A3B8] mt-0.5">Role readiness on track for Oct 2026</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#141F35] border border-white/5 flex items-start gap-2.5">
                <div className="p-1.5 rounded-xl bg-[#22D3EE]/15 text-[#22D3EE] border border-[#22D3EE]/30 mt-0.5">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">Weekly Target Goal</span>
                  <span className="text-xs font-bold text-white">4.2 / 5.0 Hours (84%)</span>
                  <p className="text-[10px] text-[#94A3B8] mt-0.5">45 mins to maintain weekly streak</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Footer */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#94A3B8] font-mono">
            <span>Total Hours: <strong className="text-white font-['Space_Grotesk']">{currentUser.totalLearningHours}h</strong></span>
            <span>Roadmaps: <strong className="text-[#5EC8FF] font-['Space_Grotesk']">{currentUser.completedRoadmaps} Passed</strong></span>
            <span>Network: <strong className="text-[#10B981] font-['Space_Grotesk']">{currentUser.peerConnectionsCount} Peers</strong></span>
          </div>
        </motion.div>

        {/* Right Column: Continue Watching & Recommended Next Session */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-5 glass-card p-6 rounded-3xl border border-white/10 bg-[#10192C] flex flex-col justify-between"
        >
          <div>
            {/* Continue Watching Section */}
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Play className="w-3.5 h-3.5 text-[#22D3EE] fill-[#22D3EE]" />
                <h3 className="text-sm font-bold text-white font-['Space_Grotesk']">
                  Continue Watching
                </h3>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#5EC8FF] px-2 py-0.5 rounded bg-[#7C4DFF]/20 border border-[#7C4DFF]/30">
                {continueWatching.timeLeft}
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#060816] mb-3 border border-white/10 group">
              <img
                src={continueWatching.thumbnail}
                alt={continueWatching.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#060816]/60 backdrop-blur-[2px] flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#7C4DFF] to-[#5EC8FF] text-white flex items-center justify-center shadow-lg shadow-[#7C4DFF]/40 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </motion.button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-[#060816] to-transparent">
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-1">
                  <div
                    className="h-full bg-gradient-to-r from-[#7C4DFF] to-[#22D3EE]"
                    style={{ width: `${continueWatching.progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-300">
                  <span>{continueWatching.progress}% Completed</span>
                  <span>{continueWatching.timeLeft}</span>
                </div>
              </div>
            </div>

            <h4 className="text-xs font-bold text-white leading-snug line-clamp-1">
              {continueWatching.title}
            </h4>
            <p className="text-[11px] text-[#94A3B8] mb-4">{continueWatching.speaker}</p>

            {/* Recommended Next Session */}
            <div className="p-3 rounded-2xl bg-[#141F35] border border-white/10 mb-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold text-[#5EC8FF] uppercase">Recommended Next Session</span>
                <span className="text-[10px] font-mono text-[#94A3B8]">{nextSession.time}</span>
              </div>
              <h5 className="text-xs font-bold text-white leading-snug">{nextSession.title}</h5>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                <span className="text-[11px] text-[#94A3B8]">{nextSession.speaker}</span>
                <div className="flex gap-1">
                  {nextSession.tags.map((t, i) => (
                    <span key={i} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#7C4DFF]/20 text-[#5EC8FF]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-[#7C4DFF] to-[#5EC8FF] text-white text-xs font-bold shadow-md shadow-[#7C4DFF]/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Resume Learning Session</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Clean Dashboard Conclusion Bar */}
      <div className="p-4 rounded-2xl bg-[#10192C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94A3B8]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#5EC8FF]" />
          <span>ABTalks 2.0 AI Dashboard • All vector indexes updated and synced</span>
        </div>
        <div className="flex items-center gap-4 text-slate-300 font-medium">
          <span className="hover:text-white cursor-pointer transition-colors">Documentation</span>
          <span className="hover:text-white cursor-pointer transition-colors font-mono text-[#5EC8FF]">System Status: 99.9%</span>
        </div>
      </div>
    </div>
  );
};
