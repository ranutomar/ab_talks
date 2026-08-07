import React from 'react';
import { X, Sparkles, Clock, FileText, CheckCircle2, Download, Bookmark, Share2 } from 'lucide-react';

interface AISummaryModalProps {
  talkTitle: string | null;
  onClose: () => void;
}

export const AISummaryModal: React.FC<AISummaryModalProps> = ({ talkTitle, onClose }) => {
  if (!talkTitle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl glass-panel bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 border-b border-slate-800/80 flex items-start justify-between bg-gradient-to-r from-purple-950/30 via-slate-900 to-slate-950">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                5-Min Executive AI Summary
              </span>
              <h3 className="text-base font-bold text-white font-['Space_Grotesk'] mt-1 leading-snug">
                {talkTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Generated via ABTalks Transcript Processing Pipeline
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Executive Takeaways */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Executive Takeaways (3-Minute Read)
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-200 leading-relaxed">
              <li className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">1</span>
                <span>Vector databases rely on HNSW (Hierarchical Navigable Small World) graphs to reduce nearest-neighbor query times from linear to logarithmic complexity.</span>
              </li>
              <li className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">2</span>
                <span>Hybrid search combining BM25 keyword matching with dense vector embeddings yields a 28% higher recall rate for domain-specific technical queries.</span>
              </li>
              <li className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">3</span>
                <span>Asynchronous index rebuilding and read-replica isolation prevent latency spikes during high-throughput embeddings ingestion.</span>
              </li>
            </ul>
          </div>

          {/* Time-Stamped Chapter Highlights */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-400" />
              Time-Stamped Chapter Breakdown
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between hover:border-cyan-500/30 transition-all cursor-pointer">
                <div>
                  <span className="font-bold text-white">00:00 - 08:30</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">Introduction & Challenges of Naive Vector Search in Production</p>
                </div>
                <span className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-semibold">Play Segment</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between hover:border-cyan-500/30 transition-all cursor-pointer">
                <div>
                  <span className="font-bold text-white">08:31 - 24:15</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">HNSW vs PQ Quantization Tradeoffs for Billion-Scale Corpora</p>
                </div>
                <span className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-semibold">Play Segment</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between hover:border-cyan-500/30 transition-all cursor-pointer">
                <div>
                  <span className="font-bold text-white">24:16 - 42:00</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">Live Benchmarks & Architectural Diagrams</p>
                </div>
                <span className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-semibold">Play Segment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5" />
              <span>Export PDF Notes</span>
            </button>
            <button className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Bookmark className="w-3.5 h-3.5 text-purple-400" />
              <span>Save to Library</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg shadow-purple-600/30 transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
