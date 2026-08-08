import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, Compass, Users, HelpCircle, ArrowRight, ShieldCheck, Zap, Video, CheckCircle2 } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (route: string) => void;
  onOpenAIMentor: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, onOpenAIMentor }) => {
  return (
    <div className="min-h-screen bg-[#060816] text-[#F8F9FA] flex flex-col font-sans selection:bg-[#7C4DFF] selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 h-16 border-b border-white/10 bg-[#060816]/80 backdrop-blur-xl px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('/')}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7C4DFF] via-[#5EC8FF] to-[#22D3EE] p-0.5 shadow-lg shadow-[#7C4DFF]/25">
            <div className="w-full h-full bg-[#060816] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#5EC8FF]" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-['Space_Grotesk'] font-extrabold text-xl tracking-tight text-white">ABTalks</span>
            <span className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/30 font-mono">
              2.0 AI
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-[#94A3B8]">
          <button 
            onClick={() => onNavigate('/')}
            className="text-white hover:text-[#5EC8FF] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('/dashboard')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Dashboard
          </button>
          <button 
            onClick={() => onNavigate('/day/12')}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[#22D3EE]"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Challenge Day 12</span>
          </button>
          <button 
            onClick={onOpenAIMentor}
            className="hover:text-[#5EC8FF] transition-colors cursor-pointer flex items-center gap-1 text-[#5EC8FF]"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>AI Co-Pilot</span>
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNavigate('/dashboard')}
            className="px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-[#7C4DFF] to-[#5EC8FF] text-white text-xs font-bold shadow-lg shadow-[#7C4DFF]/25 flex items-center gap-2 cursor-pointer"
          >
            <span>Enter Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center text-center overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7C4DFF]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#22D3EE]/10 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-4xl relative z-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C4DFF]/15 text-[#5EC8FF] border border-[#7C4DFF]/30 text-xs font-mono font-bold shadow-lg">
            <Sparkles className="w-4 h-4 text-[#5EC8FF] animate-pulse" />
            Next-Gen AI Learning & Keynote Platform
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight leading-tight">
            Supercharge Your Skill Graph with{' '}
            <span className="bg-gradient-to-r from-[#7C4DFF] via-[#5EC8FF] to-[#22D3EE] bg-clip-text text-transparent">
              ABTalks AI Co-Pilot
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Interrogate 1,400+ video transcripts using RAG vector search, receive executive AI event summaries, and connect with high-compatibility peers in real time.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate('/dashboard')}
              className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#7C4DFF] via-[#5EC8FF] to-[#22D3EE] text-white text-sm font-bold shadow-xl shadow-[#7C4DFF]/30 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenAIMentor}
              className="px-7 py-3.5 rounded-2xl bg-[#10192C] hover:bg-[#141F35] border border-[#7C4DFF]/40 text-[#5EC8FF] text-sm font-semibold flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <Bot className="w-4 h-4" />
              <span>Ask AI Mentor</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Quick Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          <div className="glass-card p-4 rounded-2xl border border-white/10 text-center">
            <div className="text-2xl font-extrabold text-white font-['Space_Grotesk']">1,400+</div>
            <p className="text-xs text-[#94A3B8] mt-0.5">Indexed AI Transcripts</p>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-white/10 text-center">
            <div className="text-2xl font-extrabold text-[#5EC8FF] font-['Space_Grotesk']">98%</div>
            <p className="text-xs text-[#94A3B8] mt-0.5">Vector Precision Rate</p>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-white/10 text-center">
            <div className="text-2xl font-extrabold text-[#22D3EE] font-['Space_Grotesk']">142</div>
            <p className="text-xs text-[#94A3B8] mt-0.5">Peer Matches Found</p>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-white/10 text-center">
            <div className="text-2xl font-extrabold text-[#10B981] font-['Space_Grotesk']">&lt; 150ms</div>
            <p className="text-xs text-[#94A3B8] mt-0.5">RAG Query Latency</p>
          </div>
        </motion.div>
      </section>

      {/* Powered by AI Mentor Section (As specified in prompt) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/30">
            Powered by AI Mentor
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk']">
            Intelligent Features Integrated into Your Learning Flow
          </h2>
          <p className="text-sm text-[#94A3B8] max-w-xl mx-auto">
            ABTalks AI seamlessly enhances every aspect of keynotes, daily coding challenges, and peer networking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-3xl border border-white/10 hover:border-[#7C4DFF]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/30 w-fit mb-4">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
                RAG AI Mentor Chat
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Query 1,400+ speaker transcripts with verified timestamp citations directly inside a slide-over drawer.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-[#5EC8FF]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Timestamp Citations</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-3xl border border-white/10 hover:border-[#5EC8FF]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#5EC8FF]/20 text-[#5EC8FF] border border-[#5EC8FF]/30 w-fit mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
                AI Event Discovery
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Search keynotes using natural language queries to instantly discover relevant talks matching your active learning roadmap.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-[#5EC8FF]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Semantic Search</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-3xl border border-white/10 hover:border-[#22D3EE]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#22D3EE]/20 text-[#22D3EE] border border-[#22D3EE]/30 w-fit mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
                AI Peer Networking
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Connect with engineers sharing similar technical interests and roadmap progress via AI compatibility scoring.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-[#22D3EE]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Vector Peer Match</span>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/30 w-fit mb-4">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
                Challenge Day Hints
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Stuck on Today's Task? Get contextual, step-by-step AI hints for Day 12 without leaving your workspace.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-amber-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Day 12 Context Aware</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/10 py-8 px-4 sm:px-8 text-center text-xs text-[#94A3B8] font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-['Space_Grotesk'] font-extrabold text-white">ABTalks 2.0</span>
            <span>• Powered by AI Mentor Engine</span>
          </div>
          <p>© 2026 ABTalks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
