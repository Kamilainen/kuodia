import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";
import { Sprout, Droplets, Zap, Clock, Leaf } from "lucide-react";

export const FarmImpactBanner: React.FC = () => {
  const { t } = useTranslation();

  const metricsData = [
    {
      icon: <Sprout className="w-6 h-6 text-brand-green stroke-[1.75]" />,
      iconBg: "border-brand-green/40 bg-brand-green/10",
      value: t("impact_stat_1_val"),
      label: t("impact_stat_1_lbl"),
    },
    {
      icon: <Droplets className="w-6 h-6 text-sky-400 stroke-[1.75]" />,
      iconBg: "border-sky-400/40 bg-sky-400/10",
      value: t("impact_stat_2_val"),
      label: t("impact_stat_2_lbl"),
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-green stroke-[1.75]" />,
      iconBg: "border-brand-green/40 bg-brand-green/10",
      value: t("impact_stat_3_val"),
      label: t("impact_stat_3_lbl"),
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-green stroke-[1.75]" />,
      iconBg: "border-brand-green/40 bg-brand-green/10",
      value: t("impact_stat_4_val"),
      label: t("impact_stat_4_lbl"),
    },
    {
      icon: <Leaf className="w-6 h-6 text-brand-green stroke-[1.75]" />,
      iconBg: "border-brand-green/40 bg-brand-green/10",
      value: t("impact_stat_5_val"),
      label: t("impact_stat_5_lbl"),
    },
  ];

  return (
    <section id="farm-impact-banner" className="py-8 sm:py-12 bg-slate-50 overflow-hidden">
      <Container>
        {/* Dark Navy Rounded Banner Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-navy-dark rounded-2xl shadow-xl border border-white/10 p-5 sm:p-6 md:py-7 md:px-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-white/15">
            {metricsData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3.5 lg:justify-center lg:px-4 first:lg:pl-0 last:lg:pr-0 group"
              >
                {/* Circular Thin Stroke Icon Badge */}
                <div
                  className={`w-12 h-12 rounded-full border ${item.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>

                {/* Metric Value & Label */}
                <div className="flex flex-col">
                  <span className="font-display font-black text-xl sm:text-2xl text-white leading-none tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs font-sans font-medium text-slate-300 mt-1 leading-snug">
                    {item.label}
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

export default FarmImpactBanner;
