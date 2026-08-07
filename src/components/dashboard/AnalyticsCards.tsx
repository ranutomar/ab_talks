import React from 'react';
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
          bg: 'bg-purple-500/10',
          border: 'border-purple-500/30',
          text: 'text-purple-400',
          glow: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
        };
      case 'cyan':
        return {
          bg: 'bg-cyan-500/10',
          border: 'border-cyan-500/30',
          text: 'text-cyan-400',
          glow: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
        };
      case 'emerald':
        return {
          bg: 'bg-emerald-500/10',
          border: 'border-emerald-500/30',
          text: 'text-emerald-400',
          glow: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
        };
      case 'amber':
        return {
          bg: 'bg-amber-500/10',
          border: 'border-amber-500/30',
          text: 'text-amber-400',
          glow: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
        };
      default:
        return {
          bg: 'bg-purple-500/10',
          border: 'border-purple-500/30',
          text: 'text-purple-400',
          glow: 'hover:border-purple-500/50',
        };
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {analyticsData.map((item) => {
        const IconComponent = getIcon(item.iconName);
        const style = getColorClasses(item.color);

        return (
          <div
            key={item.id}
            className={`glass-card p-5 rounded-2xl border ${style.border} ${style.glow} transition-all duration-300 relative group overflow-hidden`}
          >
            {/* Ambient Background Glow */}
            <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full ${style.bg} blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>

            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {item.title}
              </span>
              <div className={`p-2 rounded-xl ${style.bg} ${style.text} border ${style.border}`}>
                <IconComponent className="w-4 h-4" />
              </div>
            </div>

            <div className="flex items-baseline justify-between">
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white tracking-tight">
                {item.value}
              </h3>
              <div className="flex items-center gap-0.5 text-xs font-semibold text-emerald-400">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>{item.change}</span>
              </div>
            </div>

            <p className="mt-2 text-[11px] text-slate-400 font-medium">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
