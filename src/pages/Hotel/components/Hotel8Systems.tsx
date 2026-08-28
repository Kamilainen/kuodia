import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";
import solarPvImg from "../../../assets/solarpv.jpg";
import smartAqua from "../../../assets/fish_plants.png";
import inteligentPod from "../../../assets/pods.png";
import meetingPod from "../../../assets/meetingPod.png";
import cafeteria from "../../../assets/cafeteria.png";
import laundryInte from "../../../assets/laundry.png";
import groundFloor from "../../../assets/groundFloor.png";
import smartWater from "../../../assets/water_condition.png";



import {
  Sun,
  Sprout,
  Wifi,
  Users,
  Coffee,
  Shirt,
  Droplets,
  Filter,
} from "lucide-react";

export const Hotel8Systems: React.FC = () => {
  const { t } = useTranslation();

  const systemsData = [
    {
      num: 1,
      image: solarPvImg,
      title: t("hotel_sys_1_title"),
      desc: t("hotel_sys_1_desc"),
      bullets: t("hotel_sys_1_bullets")
        .split(",")
        .map((b) => b.trim()),
      icon: <Sun className="w-5 h-5 text-brand-green/70 stroke-[1.75]" />,
    },
    {
      num: 2,
      image: smartAqua,
      title: t("hotel_sys_2_title"),
      desc: t("hotel_sys_2_desc"),
      bullets: t("hotel_sys_2_bullets")
        .split(",")
        .map((b) => b.trim()),
      icon: <Sprout className="w-5 h-5 text-brand-green/70 stroke-[1.75]" />,
    },
    {
      num: 3,
      image: inteligentPod,
      title: t("hotel_sys_3_title"),
      desc: t("hotel_sys_3_desc"),
      bullets: t("hotel_sys_3_bullets")
        .split(",")
        .map((b) => b.trim()),
      icon: <Wifi className="w-5 h-5 text-brand-green/70 stroke-[1.75]" />,
    },
    {
      num: 4,
      image: meetingPod,
      title: t("hotel_sys_4_title"),
      desc: t("hotel_sys_4_desc"),
      bullets: t("hotel_sys_4_bullets")
        .split(",")
        .map((b) => b.trim()),
      icon: <Users className="w-5 h-5 text-brand-green/70 stroke-[1.75]" />,
    },
    {
      num: 5,
      image: cafeteria,
      title: t("hotel_sys_5_title"),
      desc: t("hotel_sys_5_desc"),
      bullets: t("hotel_sys_5_bullets")
        .split(",")
        .map((b) => b.trim()),
      icon: <Coffee className="w-5 h-5 text-brand-green/70 stroke-[1.75]" />,
    },
    {
      num: 6,
      image: laundryInte,
      title: t("hotel_sys_6_title"),
      desc: t("hotel_sys_6_desc"),
      bullets: t("hotel_sys_6_bullets")
        .split(",")
        .map((b) => b.trim()),
      icon: <Shirt className="w-5 h-5 text-brand-green/70 stroke-[1.75]" />,
    },
    {
      num: 7,
      image: groundFloor,
      title: t("hotel_sys_7_title"),
      desc: t("hotel_sys_7_desc"),
      bullets: t("hotel_sys_7_bullets")
        .split(",")
        .map((b) => b.trim()),
      icon: <Droplets className="w-5 h-5 text-brand-green/70 stroke-[1.75]" />,
    },
    {
      num: 8,
      image: smartWater,
      title: t("hotel_sys_8_title"),
      desc: t("hotel_sys_8_desc"),
      bullets: t("hotel_sys_8_bullets")
        .split(",")
        .map((b) => b.trim()),
      icon: <Filter className="w-5 h-5 text-brand-green/70 stroke-[1.75]" />,
    },
  ];

  return (
    <section id="hotel-systems" className="py-20 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-brand-green font-display font-extrabold uppercase text-xs sm:text-sm tracking-widest block"
          >
            {t("hotel_sys_tag")}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-brand-navy tracking-tight"
          >
            {t("hotel_sys_title")}
          </motion.h2>
        </div>

        {/* 8 Cards Grid Layout (4 per row on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemsData.map((card, idx) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/80 overflow-hidden transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Image Header with Numbered Badge */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Blue Number Circle Badge */}
                <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-blue-600 text-white font-display font-black text-xs flex items-center justify-center shadow-md z-10">
                  {card.num}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow relative">
                <div>
                  <h3 className="font-display font-black text-base sm:text-lg text-brand-navy leading-snug group-hover:text-brand-green transition-colors min-h-[48px] flex items-center">
                    {card.title}
                  </h3>
                  
                  <p className="text-xs font-sans text-slate-500 leading-relaxed mt-1 font-medium min-h-[40px]">
                    {card.desc}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-1.5 mt-4 text-xs font-sans text-slate-600 font-medium pb-6">
                    {card.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2">
                        <span className="text-brand-green font-bold text-sm leading-none">•</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Right Decorative Icon */}
                <div className="absolute bottom-4 right-4 p-1.5 rounded-lg bg-slate-50 group-hover:bg-brand-green/10 transition-colors">
                  {card.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hotel8Systems;
