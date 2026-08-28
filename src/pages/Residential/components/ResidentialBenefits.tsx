import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";
import {
  Zap,
  Leaf,
  Home as HomeIcon,
  TrendingUp,
  Globe,
} from "lucide-react";

export const ResidentialBenefits: React.FC = () => {
  const { t } = useTranslation();

  const benefitsData = [
    {
      icon: <Zap className="w-6 h-6 text-brand-green stroke-[1.75]" />,
      title: t("res_ben_1_title"),
      desc: t("res_ben_1_desc"),
    },
    {
      icon: <Leaf className="w-6 h-6 text-brand-green stroke-[1.75]" />,
      title: t("res_ben_2_title"),
      desc: t("res_ben_2_desc"),
    },
    {
      icon: <HomeIcon className="w-6 h-6 text-brand-green stroke-[1.75]" />,
      title: t("res_ben_3_title"),
      desc: t("res_ben_3_desc"),
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-green stroke-[1.75]" />,
      title: t("res_ben_4_title"),
      desc: t("res_ben_4_desc"),
    },
    {
      icon: <Globe className="w-6 h-6 text-brand-green stroke-[1.75]" />,
      title: t("res_ben_5_title"),
      desc: t("res_ben_5_desc"),
    },
  ];

  return (
    <section id="benefits" className="py-10 bg-slate-50 overflow-hidden">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="text-brand-green font-display font-extrabold uppercase text-xs sm:text-2xl tracking-widest block">
            {t("res_ben_tag")}
          </span>
        </motion.div>

        {/* 5 Main Benefits Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-sm"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-between">
            {benefitsData.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 p-1">
                <div className="w-12 h-12 rounded-full border border-brand-green/30 bg-brand-green/10 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  {item.icon}
                </div>
                <div>
                  <span className="font-display font-black text-xs sm:text-sm text-brand-navy block uppercase tracking-wide leading-tight">
                    {item.title}
                  </span>
                  <span className="text-[11px] font-sans font-medium text-slate-500 leading-tight block mt-0.5">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ResidentialBenefits;
