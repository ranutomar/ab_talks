import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Sparkles, Video, ArrowRight, ShieldCheck } from 'lucide-react';
import { upcomingEvents } from '../../data/mockData';

export const UpcomingEvents: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="glass-card p-6 rounded-3xl border border-white/10 h-full flex flex-col justify-between bg-[#10192C]"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                Upcoming & Live Events
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 font-mono">
                High Peer Match
              </span>
            </div>
            <p className="text-xs text-[#94A3B8] mt-0.5">
              Keynotes and workshops curated based on your learning goals
            </p>
          </div>

          <button className="text-xs font-semibold text-[#5EC8FF] hover:text-[#22D3EE] flex items-center gap-1 cursor-pointer transition-colors">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {upcomingEvents.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                evt.isLive
                  ? 'bg-gradient-to-r from-[#10192C] via-[#141F35] to-[#10192C] border-[#7C4DFF]/50 glow-purple shadow-xl'
                  : 'bg-[#141F35] border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Event Info Left */}
                <div className="flex items-start gap-3.5">
                  <img
                    src={evt.thumbnail}
                    alt={evt.title}
                    className="w-20 h-20 rounded-2xl object-cover border border-white/10 flex-shrink-0 shadow-md"
                  />

                  <div>
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      {evt.isLive && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                          LIVE NOW • 1h 45m left
                        </span>
                      )}

                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-[#7C4DFF]/20 text-[#5EC8FF] border border-[#7C4DFF]/30 font-mono">
                        <Sparkles className="w-3 h-3" />
                        {evt.matchScore}% Profile Match
                      </span>

                      <span className="text-[10px] font-medium text-[#94A3B8] px-2 py-0.5 rounded bg-[#060816] border border-white/10">
                        {evt.category}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white leading-snug hover:text-[#5EC8FF] transition-colors cursor-pointer">
                      {evt.title}
                    </h4>

                    {/* Speaker Info */}
                    <div className="flex items-center gap-2 mt-2 text-xs text-slate-300">
                      <img
                        src={evt.speaker.avatar}
                        alt={evt.speaker.name}
                        className="w-5 h-5 rounded-full object-cover ring-1 ring-[#7C4DFF] shrink-0"
                      />
                      <span className="font-semibold text-white">{evt.speaker.name}</span>
                      {evt.speaker.isVerified && (
                        <ShieldCheck className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                      )}
                      <span className="text-[#94A3B8] truncate max-w-[140px] sm:max-w-none">
                        • {evt.speaker.role} at {evt.speaker.company}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Right */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-3 border-t md:border-t-0 border-white/10 pt-3 md:pt-0">
                  <div className="text-left md:text-right">
                    <div className="flex items-center gap-1.5 text-xs text-slate-200 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#7C4DFF]" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#94A3B8] mt-0.5 font-mono">
                      <Clock className="w-3 h-3 text-[#94A3B8]" />
                      <span>{evt.time}</span>
                      <span>• {evt.attendeesCount} attending</span>
                    </div>
                  </div>

                  {evt.isLive ? (
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-[#7C4DFF] text-white text-xs font-bold shadow-lg shadow-rose-600/30 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Video className="w-3.5 h-3.5 animate-pulse" />
                      <span>Join Room</span>
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-3.5 py-1.5 rounded-xl bg-[#060816] hover:bg-[#141F35] text-slate-200 border border-white/10 text-xs font-semibold transition-all cursor-pointer"
                    >
                      Register Ticket
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
