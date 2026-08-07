import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Play, 
  ArrowRight, 
  Zap, 
  Target, 
  TrendingUp, 
  Award, 
  Flame, 
  Compass, 
  ShieldCheck, 
  BarChart3,
  BookOpen
} from 'lucide-react';
import { currentUser } from '../../data/mockData';

export const AIInsightsFinale: React.FC = () => {
  const continueWatching = {
    title: 'RAG Architecture Patterns: Beyond Basic Vector Search',
    speaker: 'Prof. David Miller',
    progress: 68,
    timeLeft: '14 mins left',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60',
  };

  const skillRadar = [
    { skill: 'RAG & Vector Search', score: 92, color: 'bg-[#7C4DFF]' },
    { skill: 'Multi-Agent DAGs', score: 85, color: 'bg-[#5EC8FF]' },
    { skill: 'LoRA Model Fine-Tuning', score: 74, color: 'bg-[#22D3EE]' },
    { skill: 'Prompt & Evaluation', score: 96, color: 'bg-[#10B981]' },
  ];

  const milestones = [
    { title: 'Pass RAG Architecture Quiz', date: 'Due Tomorrow', xp: '+250 XP', status: 'Pending' },
    { title: 'Deploy LangGraph Agent Node', date: 'Oct 14', xp: '+400 XP', status: 'In Progress' },
  ];

  return (
    <div className="space-y-6 pt-2">
      {/* Grand Finale Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
              AI Insights & Executive Performance Dashboard
            </h2>
            <span className="text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#7C4DFF] to-[#5EC8FF] text-white shadow-md">
              Grand Finale
            </span>
          </div>
          <p className="text-xs text-[#94A3B8] mt-0.5">
            Comprehensive real-time telemetry, productivity score, and AI recommendation engine
          </p>
        </div>
      </div>

      {/* Responsive Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
        {/* Card 1: AI Productivity Score & Velocity (4 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-4 glass-card p-6 rounded-3xl border border-white/10 bg-[#10192C] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider font-mono">
                AI Productivity Score
              </span>
              <div className="p-1.5 rounded-xl bg-[#7C4DFF]/15 text-[#5EC8FF] border border-[#7C4DFF]/30">
                <BarChart3 className="w-4 h-4" />
              </div>
            </div>

            <div className="flex items-baseline justify-between mb-4">
              <div>
                <span className="text-4xl font-extrabold text-white font-['Space_Grotesk']">94</span>
                <span className="text-sm font-bold text-[#94A3B8]"> / 100</span>
              </div>
              <span className="text-xs font-bold text-[#10B981] bg-[#10B981]/15 px-2.5 py-1 rounded-full border border-[#10B981]/30 font-mono">
                Top 5% Learner
              </span>
            </div>

            {/* Velocity & Streak Stats */}
            <div className="space-y-3 pt-3 border-t border-white/10">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#94A3B8] flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#5EC8FF]" />
                  Learning Velocity
                </span>
                <span className="font-bold text-white font-mono">+28% Acceleration</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#94A3B8] flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                  Active Streak
                </span>
                <span className="font-bold text-amber-300 font-mono">{currentUser.learningStreakDays} Days Active</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#94A3B8] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#22D3EE]" />
                  Weekly Target
                </span>
                <span className="font-bold text-[#22D3EE] font-mono">4.2 / 5.0 Hours (84%)</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-2xl bg-[#141F35] border border-white/5 text-[11px] text-[#94A3B8] leading-relaxed">
            💡 <strong className="text-white">AI Suggestion:</strong> Log 45 more mins of video transcripts today to maintain your top tier streak.
          </div>
        </motion.div>

        {/* Card 2: Skill Progress Radar & Milestones (4 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-4 glass-card p-6 rounded-3xl border border-white/10 bg-[#10192C] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider font-mono">
                Skill Progress Radar
              </span>
              <div className="p-1.5 rounded-xl bg-[#22D3EE]/15 text-[#22D3EE] border border-[#22D3EE]/30">
                <Target className="w-4 h-4" />
              </div>
            </div>

            {/* Visual Skill Progress Bars */}
            <div className="space-y-3 mb-4">
              {skillRadar.map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-200 font-medium">{s.skill}</span>
                    <span className="font-bold text-white font-mono">{s.score}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#060816] rounded-full overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className={`h-full ${s.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming Milestones */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider font-mono block">
                Upcoming Milestones
              </span>
              {milestones.map((m, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-[#141F35] border border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">{m.title}</span>
                    <span className="text-[10px] text-[#94A3B8] font-mono">{m.date}</span>
                  </div>
                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                    {m.xp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 3: Continue Watching & Recommendation Engine (4 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-4 glass-card p-6 rounded-3xl border border-white/10 bg-[#10192C] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Play className="w-3.5 h-3.5 text-[#22D3EE] fill-[#22D3EE]" />
                <span className="text-xs font-bold text-white font-['Space_Grotesk']">
                  Continue Watching
                </span>
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
            <p className="text-[11px] text-[#94A3B8] mb-3">{continueWatching.speaker}</p>

            {/* AI Recommendation Engine Box */}
            <div className="p-3 rounded-2xl bg-[#141F35] border border-[#7C4DFF]/30">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold text-[#5EC8FF] uppercase flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#22D3EE]" />
                  AI Smart Recommendation
                </span>
              </div>
              <p className="text-xs text-white font-medium">Building Autonomous Agent Networks with LangGraph</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-3 py-2.5 rounded-xl bg-gradient-to-r from-[#7C4DFF] via-[#5EC8FF] to-[#22D3EE] text-white text-xs font-bold shadow-md shadow-[#7C4DFF]/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Resume Keynote Playback</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Premium Grand SaaS Footer */}
      <footer className="mt-8 pt-8 border-t border-white/10 bg-[#060816] rounded-3xl p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#7C4DFF] to-[#22D3EE] p-0.5">
                <div className="w-full h-full bg-[#060816] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#5EC8FF]" />
                </div>
              </div>
              <span className="font-['Space_Grotesk'] font-extrabold text-lg tracking-tight text-white">ABTalks AI</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Empowering next-generation learners with vector transcript RAG indexing and tailored AI skill roadmaps.
            </p>
            <span className="inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#10192C] text-[#5EC8FF] border border-white/10">
              v2.4.0-RAG Production
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs font-bold text-white font-mono uppercase tracking-wider mb-3">Platform</h5>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li className="hover:text-white cursor-pointer transition-colors">Learning Roadmaps</li>
              <li className="hover:text-white cursor-pointer transition-colors">Live Keynotes & Talks</li>
              <li className="hover:text-white cursor-pointer transition-colors">AI Co-Pilot Mentor</li>
              <li className="hover:text-white cursor-pointer transition-colors">Peer Match Network</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-xs font-bold text-white font-mono uppercase tracking-wider mb-3">Resources</h5>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li className="hover:text-white cursor-pointer transition-colors">Transcript API & Docs</li>
              <li className="hover:text-white cursor-pointer transition-colors">Vector Index Benchmarks</li>
              <li className="hover:text-white cursor-pointer transition-colors">Security & Privacy</li>
              <li className="hover:text-white cursor-pointer transition-colors font-mono text-[#10B981]">System Status 99.9%</li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <h5 className="text-xs font-bold text-white font-mono uppercase tracking-wider mb-3">Community</h5>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li className="hover:text-[#5EC8FF] cursor-pointer transition-colors">GitHub Repository</li>
              <li className="hover:text-[#5EC8FF] cursor-pointer transition-colors">Discord Developer Hub</li>
              <li className="hover:text-[#5EC8FF] cursor-pointer transition-colors">X / Twitter (@ABTalksAI)</li>
              <li className="hover:text-[#5EC8FF] cursor-pointer transition-colors">LinkedIn Network</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <span>© 2026 ABTalks Inc. All rights reserved.</span>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Settings</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
