import React from 'react';
import { motion } from 'framer-motion';
import { Map, CheckCircle2, PlayCircle, Award, BrainCircuit, Target, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { currentRoadmap } from '../../data/mockData';

export const LearningProgress: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 rounded-3xl border border-white/10 relative overflow-hidden h-full flex flex-col justify-between bg-[#10192C]"
    >
      {/* Background Accent Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C4DFF]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div>
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#7C4DFF]/15 text-[#5EC8FF] border border-[#7C4DFF]/30 shadow-lg shadow-[#7C4DFF]/20">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/30 font-mono">
                  Active AI Roadmap
                </span>
                <span className="text-xs text-[#94A3B8] font-medium">Target: {currentRoadmap.targetRole}</span>
              </div>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mt-0.5">
                {currentRoadmap.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-3.5 py-2 rounded-xl bg-[#141F35] hover:bg-[#10192C] border border-white/10 text-xs font-semibold text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Map className="w-3.5 h-3.5 text-[#5EC8FF]" />
              <span>Full Skill Graph</span>
            </motion.button>
          </div>
        </div>

        {/* Progress Bar & Stats */}
        <div className="mb-5">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-slate-300 font-medium">
              Overall Curriculum Progress ({currentRoadmap.completedModules} of {currentRoadmap.totalModules} modules completed)
            </span>
            <span className="font-extrabold text-[#5EC8FF] text-sm font-['Space_Grotesk']">
              {currentRoadmap.overallProgress}% Complete
            </span>
          </div>
          
          <div className="w-full h-3 bg-[#060816] rounded-full overflow-hidden p-0.5 border border-white/10 relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${currentRoadmap.overallProgress}%` }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-[#7C4DFF] via-[#5EC8FF] to-[#22D3EE] rounded-full shadow-lg shadow-[#7C4DFF]/30 relative"
            >
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 rounded-full animate-pulse"></div>
            </motion.div>
          </div>
        </div>

        {/* Current Active Module Card */}
        <div className="p-4 rounded-2xl bg-[#141F35] border border-[#7C4DFF]/30 mb-5 relative group hover:border-[#7C4DFF]/50 transition-all shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-ping"></span>
                <span className="text-[11px] font-bold text-[#22D3EE] uppercase tracking-wider font-mono">
                  Current Active Module
                </span>
                <span className="text-xs text-[#94A3B8]">• {currentRoadmap.currentModule.duration}</span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-[#5EC8FF] transition-colors">
                {currentRoadmap.currentModule.title}
              </h4>
              <p className="text-xs text-[#94A3B8] mt-1">
                Featured Talk: <span className="text-white font-medium">{currentRoadmap.currentModule.talkTitle}</span>
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex-shrink-0 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#7C4DFF] to-[#5EC8FF] text-white text-xs font-bold shadow-lg shadow-[#7C4DFF]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Resume Module</span>
            </motion.button>
          </div>

          {/* Milestone Prompt Banner */}
          <div className="mt-3 p-2.5 rounded-xl bg-[#7C4DFF]/10 border border-[#7C4DFF]/20 flex items-center justify-between text-xs text-[#5EC8FF]">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#7C4DFF] flex-shrink-0" />
              <span className="font-medium text-slate-200">{currentRoadmap.nextMilestone}</span>
            </div>
            <span className="text-[11px] font-bold text-[#5EC8FF] underline cursor-pointer hover:text-[#22D3EE] transition-colors">
              Take Quiz
            </span>
          </div>
        </div>

        {/* Hierarchical Small Insight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-5">
          {/* Prominent Hero Insight Card (7 Cols) */}
          <motion.div
            whileHover={{ y: -2 }}
            className="sm:col-span-7 p-3.5 rounded-2xl bg-gradient-to-br from-[#141F35] to-[#10192C] border border-[#7C4DFF]/30 shadow-md relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-lg bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/30">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-bold text-[#5EC8FF] uppercase tracking-wider font-mono">
                  AI Velocity Insight
                </span>
              </div>
              <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-[#10B981]/20 text-[#10B981]">
                Top Tier
              </span>
            </div>
            <div className="text-xs font-bold text-white tracking-tight">Velocity +24% vs Benchmark</div>
            <p className="text-[10px] text-[#94A3B8] mt-1 leading-relaxed">
              On track to master RAG & Multi-Agent Orchestration by Oct 2026.
            </p>
          </motion.div>

          {/* Stacked Compact Cards (5 Cols) */}
          <div className="sm:col-span-5 space-y-2 flex flex-col justify-between">
            <motion.div
              whileHover={{ y: -2 }}
              className="p-2.5 rounded-xl bg-[#141F35]/80 border border-white/5 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-lg bg-[#22D3EE]/15 text-[#22D3EE]">
                  <Target className="w-3 h-3" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-[#94A3B8] uppercase block">Weekly Target</span>
                  <span className="text-xs font-bold text-white">4.2 / 5.0 Hrs (84%)</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="p-2.5 rounded-xl bg-[#141F35]/80 border border-white/5 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-lg bg-[#10B981]/15 text-[#10B981]">
                  <Zap className="w-3 h-3" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-[#94A3B8] uppercase block">Next Queue</span>
                  <span className="text-xs font-bold text-white">LoRA Fine-tuning</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mastered Skills Chips */}
      <div>
        <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider block mb-2 font-mono">
          Verified Skills Acquired in this Path
        </span>
        <div className="flex flex-wrap gap-2">
          {currentRoadmap.skillsAcquired.map((skill, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141F35] border border-white/10 text-xs font-medium text-slate-200 hover:border-[#7C4DFF]/40 hover:text-[#5EC8FF] transition-all cursor-default shadow-sm"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>{skill}</span>
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
