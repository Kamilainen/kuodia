import React from 'react';
import { motion } from 'framer-motion';
import { Fan, Sun, RefreshCw, Hotel } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import Container from '../Container';

interface SolutionCardProps {
  index: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ index, title, description, icon }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start py-6 lg:py-0 lg:px-6 first:pt-0 lg:first:pl-0 last:pb-0 lg:last:pr-0"
    >
      {/* Icon Container - Green circle, white icon */}
      <div className="w-14 h-14 rounded-full bg-brand-green text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-green/20">
        {icon}
      </div>
      
      {/* Content Right */}
      <div className="pl-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-display font-extrabold text-xs md:text-sm text-brand-navy tracking-wide uppercase leading-snug whitespace-pre-line">
            {title}
          </h3>
          <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed mt-1.5 font-medium">
            {description}
          </p>
        </div>
        
        {/* Link */}
        <a
          href="#contact"
          className="inline-flex items-center space-x-1 text-[9px] font-display font-extrabold text-slate-400 hover:text-brand-green transition-colors mt-2.5"
        >
          <span>{t('solution_learn_more')}</span>
          <span className="text-brand-green font-bold">→</span>
        </a>
      </div>
    </motion.div>
  );
};

export const SolutionGrid: React.FC = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      titleKey: 'solution_1_title' as const,
      descKey: 'solution_1_desc' as const,
      icon: <Fan className="h-6 w-6 stroke-[2.25]" />
    },
    {
      titleKey: 'solution_2_title' as const,
      descKey: 'solution_2_desc' as const,
      icon: <Sun className="h-6 w-6 stroke-[2.25]" />
    },
    {
      titleKey: 'solution_3_title' as const,
      descKey: 'solution_3_desc' as const,
      icon: <RefreshCw className="h-6 w-6 stroke-[2.25]" />
    },
    {
      titleKey: 'solution_4_title' as const,
      descKey: 'solution_4_desc' as const,
      icon: <Hotel className="h-6 w-6 stroke-[2.25]" />
    }
  ];

  return (
    <section id="solutions" className="relative z-20 -mt-20 lg:-mt-24 pb-16 px-4 md:px-0">
      <Container>
        {/* Single Wide Floating Panel with Dividers */}
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100/80 p-6 md:p-8 lg:py-10 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-x-0 gap-y-2 lg:gap-y-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {solutions.map((sol, idx) => (
            <SolutionCard
              key={idx}
              index={idx}
              title={t(sol.titleKey)}
              description={t(sol.descKey)}
              icon={sol.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SolutionGrid;
