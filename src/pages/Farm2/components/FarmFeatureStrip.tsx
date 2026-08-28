import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";
import {
  Scan,
  Cpu,
  BarChart3,
  ShieldAlert,
  Waves,
  Sprout,
} from "lucide-react";

interface FeatureCardProps {
  index: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCardItem: React.FC<FeatureCardProps> = ({
  index,
  title,
  description,
  icon,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex items-center lg:items-start p-2.5 sm:p-3.5 lg:py-0 lg:px-6 rounded-xl lg:rounded-none bg-slate-50/70 lg:bg-transparent border border-slate-100 lg:border-none first:lg:pl-0 last:lg:pr-0 group"
    >
      {/* Icon Container - Thin green circle on mobile, solid green badge on desktop */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-14 lg:h-14 rounded-full border border-brand-green/40 bg-brand-green/10 lg:bg-brand-green text-brand-green lg:text-white flex items-center justify-center flex-shrink-0 shadow-sm lg:shadow-md lg:shadow-brand-green/20 group-hover:scale-105 transition-transform duration-300">
        {icon}
      </div>

      {/* Content Right */}
      <div className="pl-2.5 sm:pl-3 lg:pl-4 flex flex-col justify-between flex-grow min-w-0">
        <div>
          <h3 className="font-display font-extrabold text-[11px] sm:text-xs lg:text-sm text-brand-navy tracking-tight lg:tracking-wide leading-tight lg:leading-snug uppercase">
            {title}
          </h3>
          <p className="hidden lg:block text-[10px] sm:text-[11px] text-slate-500 leading-relaxed mt-1.5 font-medium">
            {description}
          </p>
        </div>

        {/* Desktop Link */}
        <a
          href="#our-farm-solutions"
          className="hidden lg:inline-flex items-center space-x-1 text-[9px] font-display font-extrabold text-slate-400 hover:text-brand-green transition-colors mt-2.5"
        >
          <span>{t("solution_learn_more")}</span>
          <span className="text-brand-green font-bold">→</span>
        </a>
      </div>
    </motion.div>
  );
};

export const FarmFeatureStrip: React.FC = () => {
  const { t } = useTranslation();

  const featureItems = [
    {
      icon: <Scan className="h-5 w-5 lg:h-6 lg:w-6 stroke-[2.25]" />,
      title: t("farm2_feat_1_title"),
      desc: t("farm2_feat_1_desc"),
    },
    {
      icon: <Cpu className="h-5 w-5 lg:h-6 lg:w-6 stroke-[2.25]" />,
      title: t("farm2_feat_2_title"),
      desc: t("farm2_feat_2_desc"),
    },
    {
      icon: <BarChart3 className="h-5 w-5 lg:h-6 lg:w-6 stroke-[2.25]" />,
      title: t("farm2_feat_3_title"),
      desc: t("farm2_feat_3_desc"),
    },
    {
      icon: <ShieldAlert className="h-5 w-5 lg:h-6 lg:w-6 stroke-[2.25]" />,
      title: t("farm2_feat_4_title"),
      desc: t("farm2_feat_4_desc"),
    },
    {
      icon: <Waves className="h-5 w-5 lg:h-6 lg:w-6 stroke-[2.25]" />,
      title: t("farm2_feat_5_title"),
      desc: t("farm2_feat_5_desc"),
    },
    {
      icon: <Sprout className="h-5 w-5 lg:h-6 lg:w-6 stroke-[2.25]" />,
      title: t("farm2_feat_6_title"),
      desc: t("farm2_feat_6_desc"),
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 lg:-mt-10 pb-12 sm:pb-16 px-4 md:px-0">
      <Container>
        {/* Responsive Grid: 2 columns on mobile (2 cols x 3 rows), 6 columns on desktop */}
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl border border-slate-100/80 p-3.5 sm:p-5 lg:py-10 lg:px-8 grid grid-cols-2 lg:grid-cols-6 gap-2.5 sm:gap-3.5 lg:gap-0 lg:divide-x divide-slate-100">
          {featureItems.map((item, idx) => (
            <FeatureCardItem
              key={idx}
              index={idx}
              title={item.title}
              description={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FarmFeatureStrip;
