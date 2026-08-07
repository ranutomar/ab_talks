import React from 'react';
import { Calendar, Clock, Users, Sparkles, Video, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { upcomingEvents } from '../../data/mockData';

export const UpcomingEvents: React.FC = () => {
  return (
    <div className="glass-card p-6 rounded-2xl border border-slate-800/80">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
              Upcoming & Live Events
            </h3>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              High Peer Match
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Keynotes and workshops curated based on your learning goals
          </p>
        </div>

        <button className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1">
          <span>View All Events</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {upcomingEvents.map((evt) => (
          <div
            key={evt.id}
            className={`p-4 rounded-xl border transition-all ${
              evt.isLive
                ? 'bg-gradient-to-r from-slate-900 via-purple-950/20 to-slate-900 border-purple-500/40 glow-purple'
                : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Event Info Left */}
              <div className="flex items-start gap-3.5">
                <img
                  src={evt.thumbnail}
                  alt={evt.title}
                  className="w-20 h-20 rounded-xl object-cover border border-slate-700/60 flex-shrink-0"
                />

                <div>
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    {evt.isLive && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                        LIVE NOW
                      </span>
                    )}

                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      <Sparkles className="w-3 h-3" />
                      {evt.matchScore}% Profile Match
                    </span>

                    <span className="text-[10px] font-medium text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                      {evt.category}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white leading-snug hover:text-purple-300 transition-colors cursor-pointer">
                    {evt.title}
                  </h4>

                  {/* Speaker Info */}
                  <div className="flex items-center gap-2 mt-2 text-xs text-slate-300">
                    <img
                      src={evt.speaker.avatar}
                      alt={evt.speaker.name}
                      className="w-5 h-5 rounded-full object-cover ring-1 ring-purple-400"
                    />
                    <span className="font-semibold">{evt.speaker.name}</span>
                    {evt.speaker.isVerified && (
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 inline" />
                    )}
                    <span className="text-slate-500">• {evt.speaker.role} at {evt.speaker.company}</span>
                  </div>
                </div>
              </div>

              {/* Action Right */}
              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-3 border-t md:border-t-0 border-slate-800/80 pt-3 md:pt-0">
                <div className="text-left md:text-right">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-0.5">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{evt.time}</span>
                    <span>• {evt.attendeesCount} attending</span>
                  </div>
                </div>

                {evt.isLive ? (
                  <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white text-xs font-bold shadow-lg shadow-rose-600/30 transition-all flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 animate-pulse" />
                    <span>Join Room</span>
                  </button>
                ) : (
                  <button className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all">
                    Register Ticket
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
