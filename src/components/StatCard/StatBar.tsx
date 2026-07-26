import React from 'react';
import { Zap, TrendingUp, Leaf, ShieldCheck, Headphones } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';

interface StatItemProps {
  icon: React.ReactNode;
  top: string;
  value: string;
  sub: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, top, value, sub }) => {
  return (
    <div className="flex flex-col items-center text-center p-3 h-full justify-center">
      {/* Icon on top */}
      <div className="text-brand-green mb-2 flex-shrink-0">
        {icon}
      </div>
      
      {/* Text stack below */}
      <div className="flex flex-col items-center space-y-1">
        <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase leading-none min-h-[10px]">
          {top}
        </span>
        <span className="font-display font-black text-xl sm:text-2xl lg:text-[28px] text-brand-green leading-none tracking-tight">
          {value}
        </span>
        <span className="text-[9px] lg:text-[10px] font-sans font-extrabold text-slate-600 tracking-wide uppercase leading-tight text-center max-w-[130px]">
          {sub}
        </span>
      </div>
    </div>
  );
};

export const StatBar: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: <Zap className="h-6 w-6 sm:h-7 sm:w-7 stroke-[1.5]" />,
      topKey: 'stat_1_top' as const,
      valueKey: 'stat_1_value' as const,
      subKey: 'stat_1_sub' as const
    },
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 stroke-[1.5]" />,
      topKey: 'stat_2_top' as const,
      valueKey: 'stat_2_value' as const,
      subKey: 'stat_2_sub' as const
    },
    {
      icon: <Leaf className="h-6 w-6 sm:h-7 sm:w-7 stroke-[1.5]" />,
      topKey: 'stat_3_top' as const,
      valueKey: 'stat_3_value' as const,
      subKey: 'stat_3_sub' as const
    },
    {
      icon: <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7 stroke-[1.5]" />,
      topKey: 'stat_4_top' as const,
      valueKey: 'stat_4_value' as const,
      subKey: 'stat_4_sub' as const
    },
    {
      icon: <Headphones className="h-6 w-6 sm:h-7 sm:w-7 stroke-[1.5]" />,
      topKey: 'stat_5_top' as const,
      valueKey: 'stat_5_value' as const,
      subKey: 'stat_5_sub' as const
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100/80 p-4 md:p-6 lg:py-6 lg:px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-4 md:gap-6 lg:gap-0 lg:divide-x lg:divide-slate-100">
      {stats.map((item, idx) => (
        <div key={idx} className={idx >= 4 ? 'col-span-2 md:col-span-1' : ''}>
          <StatItem
            icon={item.icon}
            top={t(item.topKey)}
            value={t(item.valueKey)}
            sub={t(item.subKey)}
          />
        </div>
      ))}
    </div>
  );
};

export default StatBar;
