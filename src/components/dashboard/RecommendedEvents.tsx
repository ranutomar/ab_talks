import React from 'react';
import { Sparkles, Play, Star, Eye, FileText, ArrowRight } from 'lucide-react';
import { recommendedTalks } from '../../data/mockData';

interface RecommendedEventsProps {
  onOpenSummaryModal: (talkTitle: string) => void;
}

export const RecommendedEvents: React.FC<RecommendedEventsProps> = ({ onOpenSummaryModal }) => {
  return (
    <div className="glass-card p-6 rounded-2xl border border-slate-800/80">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
              Recommended Talks for You
            </h3>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              AI Vector Matched
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Keynotes and technical deep dives tailored to your active learning goals
          </p>
        </div>

        <button className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
          <span>Explore Catalog</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Grid of Recommended Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recommendedTalks.map((talk) => (
          <div
            key={talk.id}
            className="glass-card p-4 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 glass-card-hover transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Thumbnail Container */}
              <div className="relative rounded-lg overflow-hidden mb-3 aspect-video bg-slate-900 border border-slate-800">
                <img
                  src={talk.thumbnail}
                  alt={talk.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/40">
                    <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                  </div>
                </div>

                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] font-semibold text-slate-200 backdrop-blur-sm">
                  {talk.duration}
                </span>

                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-purple-500/30 text-[10px] font-bold text-purple-200 border border-purple-400/30 backdrop-blur-md">
                  {talk.category}
                </span>
              </div>

              {/* Title & Speaker */}
              <h4 className="text-sm font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors line-clamp-2 mb-1.5">
                {talk.title}
              </h4>

              <div className="flex items-center gap-2 mb-3">
                <img
                  src={talk.speakerAvatar}
                  alt={talk.speaker}
                  className="w-4 h-4 rounded-full object-cover"
                />
                <span className="text-xs text-slate-300 font-medium">{talk.speaker}</span>
                <div className="flex items-center gap-1 ml-auto text-[11px] text-amber-400 font-semibold">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>{talk.rating}</span>
                </div>
              </div>

              {/* AI Why Recommended Banner */}
              <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 mb-3 text-[11px] text-cyan-200 flex items-start gap-1.5 leading-snug">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{talk.matchReason}</span>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Eye className="w-3 h-3 text-slate-500" />
                {talk.views} views
              </span>

              <button
                onClick={() => onOpenSummaryModal(talk.title)}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-cyan-500/20 text-cyan-300 hover:border-cyan-500/30 border border-transparent text-[11px] font-semibold transition-all flex items-center gap-1"
              >
                <FileText className="w-3 h-3" />
                <span>AI Summary</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
