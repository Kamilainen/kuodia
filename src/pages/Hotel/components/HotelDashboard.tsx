import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";
import laptopImg from "../../../assets/laptop.png";
import kubiImg from "../../../assets/kubi.png";
import {
  Droplets,
  Zap,
  Clock,
  ShieldCheck,
  Globe,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export const HotelDashboard: React.FC = () => {
  const { t } = useTranslation();

  const handleContactMascot = () => {
    window.dispatchEvent(new CustomEvent("open-contact-mascot"));
  };

  const statCards = [
    {
      icon: <Droplets className="w-4 h-4 text-sky-500" />,
      iconBg: "bg-sky-50 border-sky-100",
      val: t("hotel_db_stat_1_val"),
      lbl: t("hotel_db_stat_1_lbl"),
    },
    {
      icon: <Zap className="w-4 h-4 text-amber-500" />,
      iconBg: "bg-amber-50 border-amber-100",
      val: t("hotel_db_stat_2_val"),
      lbl: t("hotel_db_stat_2_lbl"),
    },
    {
      icon: <Clock className="w-4 h-4 text-emerald-500" />,
      iconBg: "bg-emerald-50 border-emerald-100",
      val: t("hotel_db_stat_3_val"),
      lbl: t("hotel_db_stat_3_lbl"),
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-blue-600" />,
      iconBg: "bg-blue-50 border-blue-100",
      val: t("hotel_db_stat_4_val"),
      lbl: t("hotel_db_stat_4_lbl"),
    },
  ];

  return (
    <section id="hotel-dashboard" className="py-16 sm:py-24 bg-white overflow-hidden">
      <Container>
        {/* Top Grid: Real-time Dashboard Content & Laptop Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Dashboard Text, 4 Stat Cards & CTA (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <div>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-brand-navy tracking-tight">
                {t("hotel_db_title")}
              </h2>
              <p className="text-xs sm:text-sm font-sans text-slate-500 leading-relaxed font-medium mt-2.5">
                {t("hotel_db_desc")}
              </p>
            </div>

            {/* 4 Stat Cards Grid (2x2) */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              {statCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 rounded-2xl p-3.5 flex items-start space-x-3 transition-all duration-300 shadow-2xs group"
                >
                  <div
                    className={`p-2 rounded-xl border flex-shrink-0 mt-0.5 ${card.iconBg}`}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <span className="font-display font-black text-lg text-brand-navy block leading-none">
                      {card.val}
                    </span>
                    <span className="text-[11px] font-sans font-medium text-slate-500 leading-tight block mt-1">
                      {card.lbl}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Platform Button */}
            <div className="pt-2">
              <button
                onClick={handleContactMascot}
                className="inline-flex items-center space-x-2 bg-brand-green hover:bg-brand-green-light active:bg-brand-green text-white font-display font-extrabold text-xs uppercase px-6 py-3 rounded-xl transition-all duration-300 shadow-md shadow-brand-green/20 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>{t("hotel_db_btn")}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Laptop & Mobile UI Mockup Image (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex items-center justify-center p-2"
          >
            <img
              src={laptopImg}
              alt="Real-time Kuodia Building Management Dashboard"
              className="w-full h-auto object-contain max-h-[480px] filter drop-shadow-2xl hover:scale-102 transition-transform duration-500"
            />
          </motion.div>

        </div>

        {/* Bottom Banner: Mascot CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-24"
        >
          <div className="bg-brand-navy-dark border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden text-white shadow-2xl">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
              
              {/* Left Content (7 cols) */}
              <div className="lg:col-span-7 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full border border-brand-green/40 bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl lg:text-2xl text-white tracking-tight leading-snug">
                    {t("hotel_banner_title")}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed mt-2 font-medium">
                    {t("hotel_banner_desc")}
                  </p>
                </div>
              </div>

              {/* Right Actions & Kubi Mascot (5 cols) */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-end gap-3.5">
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleContactMascot}
                    className="inline-flex items-center justify-center bg-brand-green hover:bg-brand-green-light active:bg-brand-green text-white font-display font-extrabold text-xs uppercase px-5 py-3 rounded-xl transition-all duration-300 shadow-md shadow-brand-green/20 cursor-pointer w-full sm:w-auto whitespace-nowrap"
                  >
                    <span>{t("hotel_banner_btn_eval")}</span>
                  </button>

                  <button
                    onClick={handleContactMascot}
                    className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/5 border border-slate-700 hover:border-slate-500 text-white font-display font-extrabold text-xs uppercase px-5 py-3 rounded-xl transition-all duration-300 w-full sm:w-auto whitespace-nowrap cursor-pointer"
                  >
                    <span>{t("hotel_banner_btn_expert")}</span>
                    <MessageSquare className="w-4 h-4 text-slate-300" />
                  </button>
                </div>

                {/* Kubi Mascot Image */}
                <img
                  src={kubiImg}
                  alt="Kubi Mascot"
                  className="w-20 sm:w-24 lg:w-28 h-auto object-contain flex-shrink-0 select-none pointer-events-none drop-shadow-xl hidden sm:block transform translate-y-2"
                />
              </div>

            </div>
          </div>
        </motion.div>

      </Container>
    </section>
  );
};

export default HotelDashboard;
