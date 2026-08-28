import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";
import solarPvImg from "../../../assets/solarpv.jpg";
import heatpumpImg from "../../../assets/heatpump.png";
import electronicCabinImg from "../../../assets/electronic_cabin.png";
import heatRecoveryImg from "../../../assets/heat_recovery.png";
import bmsImg from "../../../assets/bms.png";
import solarSystemImg from "../../../assets/solarsystem.png";

export const ResidentialHowItWorks: React.FC = () => {
  const { t } = useTranslation();

  const cardsData = [
    {
      num: 1,
      image: solarPvImg,
      title: t("res_hiw_1_title"),
      bullets: [t("res_hiw_1_b1"), t("res_hiw_1_b2"), t("res_hiw_1_b3")],
    },
    {
      num: 2,
      image: heatpumpImg,
      title: t("res_hiw_2_title"),
      bullets: [t("res_hiw_2_b1"), t("res_hiw_2_b2"), t("res_hiw_2_b3")],
    },
    {
      num: 3,
      image: electronicCabinImg,
      title: t("res_hiw_3_title"),
      bullets: [t("res_hiw_3_b1"), t("res_hiw_3_b2"), t("res_hiw_3_b3")],
    },
    {
      num: 4,
      image: heatRecoveryImg,
      title: t("res_hiw_4_title"),
      bullets: [t("res_hiw_4_b1"), t("res_hiw_4_b2"), t("res_hiw_4_b3")],
    },
    {
      num: 5,
      image: bmsImg,
      title: t("res_hiw_5_title"),
      bullets: [t("res_hiw_5_b1"), t("res_hiw_5_b2"), t("res_hiw_5_b3")],
    },
    {
      num: 6,
      image: solarSystemImg,
      title: t("res_hiw_6_title"),
      bullets: [t("res_hiw_6_b1"), t("res_hiw_6_b2"), t("res_hiw_6_b3")],
    },
  ];

  return (
    <section id="how-it-works" className="py-10 sm:py-16 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-brand-navy tracking-tight uppercase"
          >
            {t("res_hiw_title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-sm text-slate-500 font-medium"
          >
            {t("res_hiw_subtitle")}
          </motion.p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {cardsData.map((card, idx) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl border border-slate-200/80 p-3 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group overflow-hidden"
            >
              <div>
                {/* Image Header with Green Number Circle Badge */}
                <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-slate-100 mb-3">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Green Number Circle */}
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-brand-green text-white font-display font-black text-xs flex items-center justify-center shadow-md z-10">
                    {card.num}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-display font-black text-xs sm:text-sm text-brand-navy uppercase tracking-wide group-hover:text-brand-green transition-colors min-h-[36px] flex items-center leading-snug">
                  {card.title}
                </h3>

                {/* Bullet Points */}
                <ul className="space-y-1 mt-2.5 text-[11px] font-sans text-slate-600 font-medium">
                  {card.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-1.5">
                      <span className="text-brand-green font-bold leading-none">•</span>
                      <span className="leading-tight">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ResidentialHowItWorks;
