import React from 'react';
import { Zap, TrendingUp, Leaf, ShieldCheck, Headphones } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import Container from '../Container';

interface StatItemProps {
  icon: React.ReactNode;
  top: string;
  value: string;
  sub: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, top, value, sub }) => {
  return (
    <div className="flex items-center space-x-3.5 py-4 px-2.5 h-full">
      {/* Icon on the left */}
      <div className="text-brand-green flex-shrink-0">
        {icon}
      </div>
      
      {/* Three-part text stack on the right */}
      <div className="flex flex-col text-left">
        <span className="text-[9px] font-sans font-bold text-slate-400 tracking-wider uppercase leading-none min-h-[10px] flex items-end">
          {top}
        </span>
        <span className="font-display font-black text-2xl lg:text-2xl text-brand-green leading-none tracking-tight mt-1">
          {value}
        </span>
        <span className="text-[9px] font-sans font-bold text-slate-500 tracking-wider uppercase leading-tight mt-1.5">
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
      icon: <Zap className="h-8 w-8 stroke-[1.5]" />,
      topKey: 'stat_1_top' as const,
      valueKey: 'stat_1_value' as const,
      subKey: 'stat_1_sub' as const
    },
    {
      icon: <TrendingUp className="h-8 w-8 stroke-[1.5]" />,
      topKey: 'stat_2_top' as const,
      valueKey: 'stat_2_value' as const,
      subKey: 'stat_2_sub' as const
    },
    {
      icon: <Leaf className="h-8 w-8 stroke-[1.5]" />,
      topKey: 'stat_3_top' as const,
      valueKey: 'stat_3_value' as const,
      subKey: 'stat_3_sub' as const
    },
    {
      icon: <ShieldCheck className="h-8 w-8 stroke-[1.5]" />,
      topKey: 'stat_4_top' as const,
      valueKey: 'stat_4_value' as const,
      subKey: 'stat_4_sub' as const
    },
    {
      icon: <Headphones className="h-8 w-8 stroke-[1.5]" />,
      topKey: 'stat_5_top' as const,
      valueKey: 'stat_5_value' as const,
      subKey: 'stat_5_sub' as const
    }
  ];

  return (
    <section className="bg-white border-b border-slate-100 py-3 shadow-sm relative z-10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 divide-y md:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((item, idx) => (
            <div key={idx} className={idx >= 4 ? 'col-span-2 md:col-span-1 border-t md:border-t-0' : ''}>
              <StatItem
                icon={item.icon}
                top={t(item.topKey)}
                value={t(item.valueKey)}
                sub={t(item.subKey)}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatBar;
