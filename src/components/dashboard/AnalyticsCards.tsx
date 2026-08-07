import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles, Target, Users, TrendingUp, ArrowUpRight } from 'lucide-react';
import { analyticsData } from '../../data/mockData';

export const AnalyticsCards: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return Clock;
      case 'Sparkles':
        return Sparkles;
      case 'Target':
        return Target;
      case 'Users':
        return Users;
      default:
        return TrendingUp;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return {
          bg: 'bg-[#7C4DFF]/10',
          border: 'border-[#7C4DFF]/30',
          text: 'text-[#5EC8FF]',
          glow: 'hover:border-[#7C4DFF]/50 hover:shadow-[0_15px_30px_-10px_rgba(124,77,255,0.3)]',
          sparkline: '#7C4DFF',
        };
      case 'cyan':
        return {
          bg: 'bg-[#22D3EE]/10',
          border: 'border-[#22D3EE]/30',
          text: 'text-[#22D3EE]',
          glow: 'hover:border-[#22D3EE]/50 hover:shadow-[0_15px_30px_-10px_rgba(34,211,238,0.3)]',
          sparkline: '#22D3EE',
        };
      case 'emerald':
        return {
          bg: 'bg-[#10B981]/10',
          border: 'border-[#10B981]/30',
          text: 'text-[#10B981]',
          glow: 'hover:border-[#10B981]/50 hover:shadow-[0_15px_30px_-10px_rgba(16,185,129,0.3)]',
          sparkline: '#10B981',
        };
      case 'amber':
        return {
          bg: 'bg-amber-500/10',
          border: 'border-amber-500/30',
          text: 'text-amber-400',
          glow: 'hover:border-amber-500/50 hover:shadow-[0_15px_30px_-10px_rgba(245,158,11,0.3)]',
          sparkline: '#F59E0B',
        };
      default:
        return {
          bg: 'bg-[#7C4DFF]/10',
          border: 'border-[#7C4DFF]/30',
          text: 'text-[#5EC8FF]',
          glow: 'hover:border-[#7C4DFF]/50',
          sparkline: '#7C4DFF',
        };
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {analyticsData.map((item, idx) => {
        const IconComponent = getIcon(item.iconName);
        const style = getColorClasses(item.color);

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            whileHover={{ y: -5 }}
            className={`glass-card p-5 rounded-3xl border ${style.border} ${style.glow} transition-all duration-300 relative group overflow-hidden bg-[#10192C]`}
          >
            {/* Ambient Background Glow */}
            <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full ${style.bg} blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`}></div>

            {/* Decorative Sparkline Graph in Background */}
            <div className="absolute bottom-2 left-0 right-0 h-10 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none px-4">
              <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                <path
                  d="M 0 25 Q 20 5, 40 18 T 80 8 T 100 12"
                  fill="none"
                  stroke={style.sparkline}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="flex items-center justify-between mb-3 relative z-10">
              <span className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider font-mono">
                {item.title}
              </span>
              <div className={`p-2 rounded-xl ${style.bg} ${style.text} border ${style.border} shadow-md`}>
                <IconComponent className="w-4 h-4" />
              </div>
            </div>

            <div className="flex items-baseline justify-between relative z-10">
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {item.value}
              </h3>
              <div className="flex items-center gap-0.5 text-xs font-semibold text-[#10B981] bg-[#10B981]/10 px-2.5 py-0.5 rounded-full border border-[#10B981]/20 font-mono">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>{item.change}</span>
              </div>
            </div>

            <p className="mt-2.5 text-[11px] text-[#94A3B8] font-medium leading-relaxed relative z-10">
              {item.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};
