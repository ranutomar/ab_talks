import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Star, Eye, FileText, ArrowRight, Bookmark } from 'lucide-react';
import { recommendedTalks } from '../../data/mockData';

interface RecommendedEventsProps {
  onOpenSummaryModal: (talkTitle: string) => void;
}

export const RecommendedEvents: React.FC<RecommendedEventsProps> = ({ onOpenSummaryModal }) => {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['rt-1', 'rt-4']);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((bId) => bId !== id) : [...prev, id]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="glass-card p-6 rounded-3xl border border-white/10 bg-[#10192C] h-full flex flex-col justify-between"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                Recommended Talks for You
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#22D3EE]/20 text-[#22D3EE] border border-[#22D3EE]/30 font-mono">
                AI Vector Matched (6 Keynotes)
              </span>
            </div>
            <p className="text-xs text-[#94A3B8] mt-0.5">
              Keynotes and technical deep dives tailored to your active learning goals
            </p>
          </div>

          <button className="text-xs font-semibold text-[#5EC8FF] hover:text-[#22D3EE] flex items-center gap-1 cursor-pointer transition-colors">
            <span>Explore Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3x2 Responsive Grid of 6 Recommended Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedTalks.map((talk, idx) => {
            const isSaved = bookmarkedIds.includes(talk.id);

            return (
              <motion.div
                key={talk.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass-card p-4 rounded-2xl border border-white/10 hover:border-[#22D3EE]/40 transition-all flex flex-col justify-between group bg-[#141F35] relative shadow-md"
              >
                <div>
                  {/* Thumbnail Container */}
                  <div className="relative rounded-xl overflow-hidden mb-3 aspect-video bg-[#060816] border border-white/10">
                    <img
                      src={talk.thumbnail}
                      alt={talk.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#060816]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <div className="w-10 h-10 rounded-full bg-[#22D3EE] text-[#060816] flex items-center justify-center shadow-lg shadow-[#22D3EE]/40 group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-[#060816] ml-0.5" />
                      </div>
                    </div>

                    {/* Bookmark Interactive Toggle */}
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(talk.id);
                      }}
                      className={`absolute top-2 right-2 p-1.5 rounded-lg backdrop-blur-md border transition-all cursor-pointer ${
                        isSaved
                          ? 'bg-[#7C4DFF] text-white border-[#7C4DFF] shadow-md'
                          : 'bg-[#060816]/70 text-[#94A3B8] hover:text-white border-white/10'
                      }`}
                      title={isSaved ? 'Remove from Saved' : 'Save to Bookmarks'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
                    </motion.button>

                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#060816]/85 text-[10px] font-mono font-semibold text-slate-200 backdrop-blur-sm border border-white/10">
                      {talk.duration}
                    </span>

                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#7C4DFF]/30 text-[10px] font-bold text-[#5EC8FF] border border-[#7C4DFF]/30 backdrop-blur-md">
                      {talk.category}
                    </span>
                  </div>

                  {/* Title & Speaker */}
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-[#22D3EE] transition-colors line-clamp-2 mb-1.5">
                    {talk.title}
                  </h4>

                  <div className="flex items-center gap-2 mb-2.5">
                    <img
                      src={talk.speakerAvatar}
                      alt={talk.speaker}
                      className="w-4 h-4 rounded-full object-cover shrink-0"
                    />
                    <span className="text-xs text-slate-300 font-medium truncate">{talk.speaker}</span>
                    <div className="flex items-center gap-1 ml-auto text-[11px] font-semibold shrink-0 font-mono text-[#5EC8FF]">
                      <Star className="w-3 h-3 fill-[#5EC8FF]" />
                      <span>{talk.rating}</span>
                    </div>
                  </div>

                  {/* AI Why Recommended Banner */}
                  <div className="p-2 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/20 mb-2.5 text-[10px] text-[#22D3EE] flex items-start gap-1.5 leading-relaxed font-light">
                    <Sparkles className="w-3 h-3 text-[#22D3EE] flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{talk.matchReason}</span>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] text-[#94A3B8] flex items-center gap-1 font-mono">
                    <Eye className="w-3 h-3 text-[#94A3B8]" />
                    {talk.views} views
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onOpenSummaryModal(talk.title)}
                    className="px-2.5 py-1 rounded-xl bg-[#10192C] hover:bg-[#22D3EE]/20 text-[#22D3EE] hover:border-[#22D3EE]/40 border border-white/10 text-[10px] font-semibold transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <FileText className="w-3 h-3" />
                    <span>AI Summary</span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
