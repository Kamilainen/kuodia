import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";

import solarSystemImg from "../../../assets/water_mana.png";
import centreaLize from "../../../assets/centralized_system.png";
import incident from "../../../assets/incident_management.jpg";
import disease from "../../../assets/disease.jpg";
import waterMana from "../../../assets/water_mana.png";
import climate from "../../../assets/climate.png";
import shirmFish from "../../../assets/shrim.png";
import liveStock from "../../../assets/livestock.png";
import solar from "../../../assets/solar_pv.png";
import smartInfr from "../../../assets/water_condition.png";
import resourceOpti from "../../../assets/bms.png";
import drone from "../../../assets/drone.jpg";

import {
  Scan,
  Cpu,
  BarChart3,
  ShieldAlert,
  Waves,
  Thermometer,
  Sprout,
  Fish,
  Activity,
  Zap,
  Server,
  PieChart,
} from "lucide-react";

export const OurFarmSolutions: React.FC = () => {
  const { t } = useTranslation();

  const cardsData = [
    {
      title: t("farm_sol_1_title"),
      desc: t("farm_sol_1_desc"),
      icon: <Scan className="h-4.5 w-4.5" />,
      image: drone,
    },
    {
      title: t("farm_sol_2_title"),
      desc: t("farm_sol_2_desc"),
      icon: <Cpu className="h-4.5 w-4.5" />,
      image: centreaLize,
    },
    {
      title: t("farm_sol_3_title"),
      desc: t("farm_sol_3_desc"),
      icon: <BarChart3 className="h-4.5 w-4.5" />,
      image: incident,
    },
    {
      title: t("farm_sol_4_title"),
      desc: t("farm_sol_4_desc"),
      icon: <ShieldAlert className="h-4.5 w-4.5" />,
      image: disease,
    },
    {
      title: t("farm_sol_5_title"),
      desc: t("farm_sol_5_desc"),
      icon: <Waves className="h-4.5 w-4.5" />,
      image: waterMana,
    },
    {
      title: t("farm_sol_6_title"),
      desc: t("farm_sol_6_desc"),
      icon: <Thermometer className="h-4.5 w-4.5" />,
      image: climate,
    },
    {
      title: t("farm_sol_7_title"),
      desc: t("farm_sol_7_desc"),
      icon: <Sprout className="h-4.5 w-4.5" />,
      image: solarSystemImg,
    },
    {
      title: t("farm_sol_8_title"),
      desc: t("farm_sol_8_desc"),
      icon: <Fish className="h-4.5 w-4.5" />,
      image: shirmFish,
    },
    {
      title: t("farm_sol_9_title"),
      desc: t("farm_sol_9_desc"),
      icon: <Activity className="h-4.5 w-4.5" />,
      image: liveStock,
    },
    {
      title: t("farm_sol_10_title"),
      desc: t("farm_sol_10_desc"),
      icon: <Zap className="h-4.5 w-4.5" />,
      image: solar,
    },
    {
      title: t("farm_sol_11_title"),
      desc: t("farm_sol_11_desc"),
      icon: <Server className="h-4.5 w-4.5" />,
      image: smartInfr,
    },
    {
      title: t("farm_sol_12_title"),
      desc: t("farm_sol_12_desc"),
      icon: <PieChart className="h-4.5 w-4.5" />,
      image: resourceOpti,
    },
  ];

  return (
    <section id="our-farm-solutions" className="py-20 bg-slate-50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy tracking-tight uppercase"
          >
            {t("farm_solutions_title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-sm text-slate-500 font-sans font-medium leading-relaxed"
          >
            {t("farm_solutions_subtitle")}
          </motion.p>
        </div>

        {/* 12 Cards Grid Layout (6 cards per row on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-6">
          {cardsData.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/80 overflow-hidden transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Image Container */}
              <div className="relative w-full h-40 sm:h-44 overflow-hidden bg-slate-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlapping Icon Badge - Outside overflow-hidden image container */}
              <div className="relative z-10 -mt-5 ml-4 w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center border-2 border-white shadow-md group-hover:bg-brand-green transition-colors duration-300">
                {card.icon}
              </div>

              {/* Card Content Body */}
              <div className="p-4 sm:p-5 pt-3 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display font-black text-xs sm:text-[13px] text-brand-navy tracking-wide uppercase leading-snug min-h-[36px]">
                    {card.title}
                  </h3>
                  <p className="text-[11px] font-sans text-slate-500 leading-relaxed mt-2 font-normal min-h-[56px]">
                    {card.desc}
                  </p>
                </div>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-1.5 text-[10px] font-display font-extrabold text-brand-navy hover:text-brand-green transition-colors uppercase tracking-wider mt-4"
                >
                  <span>LEARN MORE</span>
                  <span className="text-brand-green font-bold">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurFarmSolutions;
