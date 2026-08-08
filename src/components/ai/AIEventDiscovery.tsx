import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, Calendar, Star, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { recommendedTalks, upcomingEvents } from '../../data/mockData';

interface AIEventDiscoveryProps {
  onOpenSummaryModal?: (title: string) => void;
}

export const AIEventDiscovery: React.FC<AIEventDiscoveryProps> = ({ onOpenSummaryModal }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedIds, setAddedIds] = useState<string[]>([]);

  const categories = ['All', 'AI & Agents', 'Vector DB', 'RAG Infra', 'System Design'];

  // Combine event pools for natural language searching
  const allEvents = [
    ...upcomingEvents.map((e) => ({
      id: e.id,
      title: e.title,
      speaker: e.speaker.name,
      category: e.category,
      matchScore: e.matchScore,
      duration: 'Live Session',
      date: e.date,
      thumbnail: e.thumbnail,
      tags: e.tags,
    })),
    ...recommendedTalks.map((t) => ({
      id: t.id,
      title: t.title,
      speaker: t.speaker,
      category: t.category,
      matchScore: Math.round(t.rating * 20),
      duration: t.duration,
      date: 'On-Demand Keynote',
      thumbnail: t.thumbnail,
      tags: [t.category, 'Recommended'],
    })),
  ];

  const filteredEvents = allEvents.filter((ev) => {
    const matchesCategory = selectedCategory === 'All' || ev.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesQuery = !query || 
      ev.title.toLowerCase().includes(query.toLowerCase()) || 
      ev.speaker.toLowerCase().includes(query.toLowerCase()) ||
      ev.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const toggleAddToCalendar = (id: string) => {
    setAddedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      {/* Search Input Box */}
      <div className="relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5EC8FF]">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask AI to find events (e.g. 'Show RAG architecture talks')..."
          className="w-full pl-10 pr-4 py-2.5 bg-[#10192C] border border-white/10 rounded-xl text-xs text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#7C4DFF] focus:ring-2 focus:ring-[#7C4DFF]/20"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94A3B8] hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-xl text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#7C4DFF] to-[#5EC8FF] text-white shadow-md'
                : 'bg-[#10192C] text-[#94A3B8] hover:text-white border border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-[#94A3B8] font-mono pt-1">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#5EC8FF]" />
          Vector Match Results ({filteredEvents.length})
        </span>
        <span className="text-[10px] text-[#22D3EE]">RAG Indexed</span>
      </div>

      {/* Events Grid / List */}
      <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
        {filteredEvents.length === 0 ? (
          <div className="p-8 text-center bg-[#10192C] rounded-2xl border border-white/10">
            <Sparkles className="w-8 h-8 text-[#7C4DFF] mx-auto mb-2 opacity-50" />
            <p className="text-xs text-white font-medium">No matching events found</p>
            <p className="text-[11px] text-[#94A3B8] mt-1">Try typing 'RAG', 'Vector', or 'LangGraph'</p>
          </div>
        ) : (
          filteredEvents.map((item) => {
            const isAdded = addedIds.includes(item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-2xl bg-[#10192C] border border-white/10 hover:border-[#5EC8FF]/40 transition-all flex flex-col gap-2.5 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded bg-[#7C4DFF]/20 text-[#5EC8FF] text-[10px] font-bold font-mono border border-[#7C4DFF]/30">
                        {item.matchScore}% Match
                      </span>
                      <span className="text-[10px] text-[#94A3B8] font-mono flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.duration}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-white group-hover:text-[#5EC8FF] transition-colors leading-snug">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-[#94A3B8] mt-0.5 font-medium">
                      Speaker: <span className="text-slate-200">{item.speaker}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px]">
                  <span className="text-[#94A3B8] flex items-center gap-1 font-mono">
                    <Calendar className="w-3 h-3 text-[#22D3EE]" />
                    {item.date}
                  </span>

                  <div className="flex items-center gap-2">
                    {onOpenSummaryModal && (
                      <button
                        onClick={() => onOpenSummaryModal(item.title)}
                        className="px-2.5 py-1 rounded-lg bg-[#141F35] text-[#22D3EE] hover:bg-[#22D3EE]/20 border border-white/10 transition-colors font-semibold cursor-pointer"
                      >
                        AI Summary
                      </button>
                    )}
                    <button
                      onClick={() => toggleAddToCalendar(item.id)}
                      className={`px-2.5 py-1 rounded-lg text-white font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                        isAdded
                          ? 'bg-[#10B981] shadow-sm'
                          : 'bg-gradient-to-r from-[#7C4DFF] to-[#5EC8FF] hover:opacity-90'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <CheckCircle2 className="w-3 h-3" />
                          Saved
                        </>
                      ) : (
                        <>
                          <ArrowRight className="w-3 h-3" />
                          Add to Plan
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
};
