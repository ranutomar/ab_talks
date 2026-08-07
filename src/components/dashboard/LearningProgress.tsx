import React from 'react';
import { Map, CheckCircle2, PlayCircle, Award, Sparkles, ArrowRight, BrainCircuit } from 'lucide-react';
import { currentRoadmap } from '../../data/mockData';

export const LearningProgress: React.FC = () => {
  return (
    <div className="glass-card p-6 rounded-2xl border border-slate-800/80 relative overflow-hidden">
      {/* Background Accent Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Card Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/60">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Active AI Roadmap
              </span>
              <span className="text-xs text-slate-400 font-medium">Target: {currentRoadmap.targetRole}</span>
            </div>
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mt-0.5">
              {currentRoadmap.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 transition-all flex items-center gap-1.5">
            <Map className="w-3.5 h-3.5 text-purple-400" />
            <span>Full Skill Graph</span>
          </button>
        </div>
      </div>

      {/* Progress Bar & Stats */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-slate-300 font-medium">
            Overall Curriculum Progress ({currentRoadmap.completedModules} of {currentRoadmap.totalModules} modules completed)
          </span>
          <span className="font-bold text-purple-400 text-sm font-['Space_Grotesk']">
            {currentRoadmap.overallProgress}% Complete
          </span>
        </div>
        
        <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 rounded-full transition-all duration-1000 shadow-lg shadow-purple-500/30 relative"
            style={{ width: `${currentRoadmap.overallProgress}%` }}
          >
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Current Active Module Card */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-purple-500/30 mb-5 relative group">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wide">
                Current Active Module
              </span>
              <span className="text-xs text-slate-400">• {currentRoadmap.currentModule.duration}</span>
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
              {currentRoadmap.currentModule.title}
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Featured Talk: <span className="text-slate-200 font-medium">{currentRoadmap.currentModule.talkTitle}</span>
            </p>
          </div>

          <button className="flex-shrink-0 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2">
            <PlayCircle className="w-4 h-4" />
            <span>Resume Module</span>
          </button>
        </div>

        {/* Milestone Prompt Banner */}
        <div className="mt-3 p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/20 flex items-center justify-between text-xs text-purple-200">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-purple-400 flex-shrink-0" />
            <span>{currentRoadmap.nextMilestone}</span>
          </div>
          <span className="text-[10px] font-bold text-purple-400 underline cursor-pointer hover:text-purple-300">
            Take Quiz
          </span>
        </div>
      </div>

      {/* Mastered Skills Chips */}
      <div>
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
          Verified Skills Acquired in this Path
        </span>
        <div className="flex flex-wrap gap-2">
          {currentRoadmap.skillsAcquired.map((skill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:border-purple-500/40 hover:text-purple-200 transition-all"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{skill}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
