import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from '../components/layout/Sidebar';
import { TopNavigation } from '../components/layout/TopNavigation';
import { AIMentorDrawer } from '../components/dashboard/AIMentorDrawer';
import { AISummaryModal } from '../components/dashboard/AISummaryModal';
import { Sparkles, HelpCircle, Code2, CheckCircle2, ChevronLeft, ChevronRight, Play, Terminal, Flame, Clock, Cpu } from 'lucide-react';

interface ChallengeDayPageProps {
  onNavigate: (route: string) => void;
}

export const ChallengeDayPage: React.FC<ChallengeDayPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('events');
  const [isAIMentorOpen, setIsAIMentorOpen] = useState(false);
  const [aiMentorQuery, setAIMentorQuery] = useState('');
  const [selectedSummaryTitle, setSelectedSummaryTitle] = useState<string | null>(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Student challenge progress
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);

  const toggleStep = (stepId: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepId) ? prev.filter((s) => s !== stepId) : [...prev, stepId]
    );
  };

  const handleAskAIHelp = () => {
    setAIMentorQuery('Help me with Challenge Day 12: How do I optimize RAG pipeline latency below 150ms using Cohere re-ranking?');
    setIsAIMentorOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#060816] text-[#F8F9FA] flex overflow-x-hidden">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'dashboard') onNavigate('/dashboard');
        }}
        onOpenAIMentor={() => {
          setAIMentorQuery('');
          setIsAIMentorOpen(true);
        }}
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 transition-all duration-300 flex flex-col min-w-0">
        {/* Top Header */}
        <TopNavigation 
          onOpenAIMentor={() => {
            setAIMentorQuery('');
            setIsAIMentorOpen(true);
          }}
          onToggleMobileSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />

        {/* Challenge Day Main Content */}
        <motion.main 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full"
        >
          {/* Day Header Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/dashboard')}
                className="p-2 rounded-xl bg-[#10192C] hover:bg-[#141F35] border border-white/10 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                title="Back to Dashboard"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/30 font-mono">
                    30-Day AI Engineer Challenge
                  </span>
                  <span className="text-xs text-[#94A3B8]">Day 12 of 30</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-white font-['Space_Grotesk'] mt-1">
                  Day 12: Optimizing RAG Pipeline Latency
                </h1>
              </div>
            </div>

            {/* Prev / Next Controls */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#94A3B8] font-mono mr-2 hidden sm:inline">Nav Challenge Days:</span>
              <button
                disabled
                className="p-2 rounded-xl bg-[#10192C] border border-white/5 text-[#94A3B8] opacity-50 cursor-not-allowed"
                title="Day 11"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-3 py-1 rounded-xl bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/30 text-xs font-mono font-bold">
                Day 12 Active
              </span>
              <button
                onClick={() => alert('Day 13 unlocks tomorrow at 9:00 AM EST')}
                className="p-2 rounded-xl bg-[#10192C] hover:bg-[#141F35] border border-white/10 text-white transition-colors cursor-pointer"
                title="Day 13 (Unlocks tomorrow)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* MAIN TASK CARD WITH AI HELP BUTTON BESIDE TODAY'S TASK */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#10192C] relative overflow-hidden shadow-2xl space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-[#7C4DFF] to-[#5EC8FF] text-white shadow-lg shadow-[#7C4DFF]/25 shrink-0 mt-0.5">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#22D3EE] uppercase tracking-wider">
                      Today's Challenge Task
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      <Flame className="w-3 h-3 text-amber-400" />
                      +150 XP Reward
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk'] mt-1">
                    Implement Two-Stage Hybrid Retrieval & Cohere Re-ranker v2
                  </h2>
                </div>
              </div>

              {/* AI HELP BUTTON BESIDE TODAY'S TASK (As requested in prompt) */}
              <div className="flex items-center gap-3 shrink-0">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleAskAIHelp}
                  className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#7C4DFF] via-[#5EC8FF] to-[#22D3EE] text-white text-xs sm:text-sm font-bold shadow-xl shadow-[#7C4DFF]/30 flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-white animate-spin" />
                  <HelpCircle className="w-4 h-4 text-white" />
                  <span>AI Help for Today's Task</span>
                </motion.button>
              </div>
            </div>

            {/* Problem Overview & Context */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider font-mono">
                  Challenge Objectives & Rules
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  Standard dense vector search suffers from low domain-specific recall. In Day 12, your objective is to construct a **two-stage retrieval pipeline**:
                </p>

                <div className="space-y-3">
                  <div 
                    onClick={() => toggleStep(1)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                      completedSteps.includes(1) 
                        ? 'bg-[#10B981]/10 border-[#10B981]/30 text-slate-200' 
                        : 'bg-[#141F35] border-white/10 text-slate-300'
                    }`}
                  >
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${completedSteps.includes(1) ? 'text-[#10B981]' : 'text-[#94A3B8]'}`} />
                    <div>
                      <h4 className="text-xs font-bold text-white">Stage 1: HNSW Vector Search (Top-50)</h4>
                      <p className="text-[11px] text-[#94A3B8] mt-0.5">Fetch top 50 document chunks using cosine distance in Pinecone / Milvus.</p>
                    </div>
                  </div>

                  <div 
                    onClick={() => toggleStep(2)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                      completedSteps.includes(2) 
                        ? 'bg-[#10B981]/10 border-[#10B981]/30 text-slate-200' 
                        : 'bg-[#141F35] border-white/10 text-slate-300'
                    }`}
                  >
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${completedSteps.includes(2) ? 'text-[#10B981]' : 'text-[#94A3B8]'}`} />
                    <div>
                      <h4 className="text-xs font-bold text-white">Stage 2: Cross-Encoder Re-ranker (Top-5)</h4>
                      <p className="text-[11px] text-[#94A3B8] mt-0.5">Pass top 50 passages into Cohere Re-rank v3 to score relevance with query context.</p>
                    </div>
                  </div>

                  <div 
                    onClick={() => toggleStep(3)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                      completedSteps.includes(3) 
                        ? 'bg-[#10B981]/10 border-[#10B981]/30 text-slate-200' 
                        : 'bg-[#141F35] border-white/10 text-slate-300'
                    }`}
                  >
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${completedSteps.includes(3) ? 'text-[#10B981]' : 'text-[#94A3B8]'}`} />
                    <div>
                      <h4 className="text-xs font-bold text-white">Latency Requirement: &lt; 150ms</h4>
                      <p className="text-[11px] text-[#94A3B8] mt-0.5">Ensure async execution to achieve sub-150ms response time.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Starter Code Block & Sandbox */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#5EC8FF]" />
                    Starter Implementation Boilerplate
                  </h3>
                  <span className="text-[10px] font-mono text-[#5EC8FF]">Python 3.11</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#060816] border border-white/10 font-mono text-[11px] text-slate-300 space-y-2 overflow-x-auto">
                  <div className="text-emerald-400"># Day 12 Challenge Starter Code</div>
                  <div><span className="text-purple-400">import</span> cohere</div>
                  <div><span className="text-purple-400">from</span> pinecone <span className="text-purple-400">import</span> Pinecone</div>
                  <br />
                  <div><span className="text-blue-400">def</span> <span className="text-yellow-300">hybrid_rerank_retrieval</span>(query, top_k=5):</div>
                  <div className="pl-4 text-slate-400"># 1. Fetch top 50 candidates</div>
                  <div className="pl-4">candidates = vector_db.search(query, k=50)</div>
                  <div className="pl-4 text-slate-400"># 2. Re-rank with Cohere v3</div>
                  <div className="pl-4">results = cohere_client.rerank(</div>
                  <div className="pl-8">model=<span className="text-amber-300">"rerank-english-v3.0"</span>,</div>
                  <div className="pl-8">query=query,</div>
                  <div className="pl-8">documents=candidates,</div>
                  <div className="pl-8">top_n=top_k</div>
                  <div className="pl-4">)</div>
                  <div className="pl-4"><span className="text-purple-400">return</span> results</div>
                </div>

                {/* Quick Hint Trigger Button */}
                <div className="p-3 rounded-2xl bg-[#7C4DFF]/10 border border-[#7C4DFF]/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#5EC8FF]" />
                    <span className="text-slate-200 text-[11px]">Unsure about Cohere API parameters?</span>
                  </div>
                  <button
                    onClick={handleAskAIHelp}
                    className="text-[#5EC8FF] hover:text-[#22D3EE] font-bold text-xs underline cursor-pointer"
                  >
                    Ask AI Co-Pilot
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.main>
      </div>

      {/* AI Mentor Drawer (pre-loaded with Day 12 hint context if triggered) */}
      <AIMentorDrawer
        isOpen={isAIMentorOpen}
        onClose={() => setIsAIMentorOpen(false)}
        initialQuery={aiMentorQuery}
        initialTab="chat"
        onOpenSummaryModal={(title) => setSelectedSummaryTitle(title)}
      />

      {/* AI Summary Modal */}
      <AISummaryModal
        talkTitle={selectedSummaryTitle}
        onClose={() => setSelectedSummaryTitle(null)}
      />
    </div>
  );
};
