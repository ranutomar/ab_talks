import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Clock, CheckCircle2, Download, Bookmark } from 'lucide-react';

interface AISummaryModalProps {
  talkTitle: string | null;
  onClose: () => void;
}

export const AISummaryModal: React.FC<AISummaryModalProps> = ({ talkTitle, onClose }) => {
  if (!talkTitle) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060816]/85 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl glass-panel bg-[#060816]/95 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-start justify-between bg-gradient-to-r from-[#10192C] via-[#141F35] to-[#060816] shrink-0">
            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-2xl bg-[#7C4DFF]/10 text-[#5EC8FF] border border-[#7C4DFF]/30 shadow-md shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/30 font-mono">
                  5-Min Executive AI Summary
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white font-['Space_Grotesk'] mt-1.5 leading-snug">
                  {talkTitle}
                </h3>
                <p className="text-xs text-[#94A3B8] mt-0.5">
                  Generated via ABTalks Transcript Processing Pipeline
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors cursor-pointer shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Executive Takeaways */}
            <div>
              <h4 className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-3 flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Executive Takeaways (3-Minute Read)
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-200 leading-relaxed">
                <li className="p-3.5 rounded-2xl bg-[#10192C] border border-white/10 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#7C4DFF]/20 text-[#5EC8FF] font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5 border border-[#7C4DFF]/30 font-mono">1</span>
                  <span>Vector databases rely on HNSW (Hierarchical Navigable Small World) graphs to reduce nearest-neighbor query times from linear to logarithmic complexity.</span>
                </li>
                <li className="p-3.5 rounded-2xl bg-[#10192C] border border-white/10 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#7C4DFF]/20 text-[#5EC8FF] font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5 border border-[#7C4DFF]/30 font-mono">2</span>
                  <span>Hybrid search combining BM25 keyword matching with dense vector embeddings yields a 28% higher recall rate for domain-specific technical queries.</span>
                </li>
                <li className="p-3.5 rounded-2xl bg-[#10192C] border border-white/10 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#7C4DFF]/20 text-[#5EC8FF] font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5 border border-[#7C4DFF]/30 font-mono">3</span>
                  <span>Asynchronous index rebuilding and read-replica isolation prevent latency spikes during high-throughput embeddings ingestion.</span>
                </li>
              </ul>
            </div>

            {/* Time-Stamped Chapter Highlights */}
            <div>
              <h4 className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-3 flex items-center gap-1.5 font-mono">
                <Clock className="w-4 h-4 text-[#22D3EE]" />
                Time-Stamped Chapter Breakdown
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#10192C] border border-white/10 flex items-center justify-between hover:border-[#22D3EE]/40 transition-all cursor-pointer group">
                  <div>
                    <span className="font-bold text-white font-mono">00:00 - 08:30</span>
                    <p className="text-[#94A3B8] text-xs mt-0.5 group-hover:text-[#22D3EE] transition-colors">Introduction & Challenges of Naive Vector Search in Production</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-xl bg-[#22D3EE]/20 text-[#22D3EE] text-[10px] font-bold border border-[#22D3EE]/30 shrink-0 ml-3 font-mono">Play Segment</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#10192C] border border-white/10 flex items-center justify-between hover:border-[#22D3EE]/40 transition-all cursor-pointer group">
                  <div>
                    <span className="font-bold text-white font-mono">08:31 - 24:15</span>
                    <p className="text-[#94A3B8] text-xs mt-0.5 group-hover:text-[#22D3EE] transition-colors">HNSW vs PQ Quantization Tradeoffs for Billion-Scale Corpora</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-xl bg-[#22D3EE]/20 text-[#22D3EE] text-[10px] font-bold border border-[#22D3EE]/30 shrink-0 ml-3 font-mono">Play Segment</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#10192C] border border-white/10 flex items-center justify-between hover:border-[#22D3EE]/40 transition-all cursor-pointer group">
                  <div>
                    <span className="font-bold text-white font-mono">24:16 - 42:00</span>
                    <p className="text-[#94A3B8] text-xs mt-0.5 group-hover:text-[#22D3EE] transition-colors">Live Benchmarks & Architectural Diagrams</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-xl bg-[#22D3EE]/20 text-[#22D3EE] text-[10px] font-bold border border-[#22D3EE]/30 shrink-0 ml-3 font-mono">Play Segment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-white/10 bg-[#060816] flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-3.5 py-2 rounded-xl bg-[#10192C] hover:bg-[#141F35] border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export PDF Notes</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-3.5 py-2 rounded-xl bg-[#10192C] hover:bg-[#141F35] border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1.5 cursor-pointer"
              >
                <Bookmark className="w-3.5 h-3.5 text-[#5EC8FF]" />
                <span>Save to Library</span>
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#7C4DFF] to-[#5EC8FF] text-white text-xs font-bold shadow-lg shadow-[#7C4DFF]/30 transition-all cursor-pointer"
            >
              Done
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
