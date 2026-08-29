import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";
import bgResidentialImg from "../../../assets/bgresidantial.png";
import kubiImg from "../../../assets/kubi.png";
import {
  ArrowRight,
  Download,
  Zap,
  Home as HomeIcon,
  TrendingUp,
  Leaf,
  ShieldCheck,
} from "lucide-react";

export const ResidentialHero: React.FC = () => {
  const { t } = useTranslation();

  const handleContactMascot = () => {
    window.dispatchEvent(new CustomEvent("open-contact-mascot"));
  };

  const featureBadges = [
    {
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green flex-shrink-0" />,
      val: t("res_hero_badge_1_val"),
      desc: t("res_hero_badge_1_desc"),
    },
    {
      icon: <HomeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green flex-shrink-0" />,
      val: t("res_hero_badge_2_val"),
      desc: t("res_hero_badge_2_desc"),
    },
    {
      icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green flex-shrink-0" />,
      val: t("res_hero_badge_3_val"),
      desc: t("res_hero_badge_3_desc"),
    },
    {
      icon: <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green flex-shrink-0" />,
      val: t("res_hero_badge_4_val"),
      desc: t("res_hero_badge_4_desc"),
    },
    {
      icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green flex-shrink-0" />,
      val: t("res_hero_badge_5_val"),
      desc: t("res_hero_badge_5_desc"),
    },
  ];

  return (
    <section className="relative pt-24 pb-4 sm:pt-28 sm:pb-6 lg:pt-36 lg:pb-8 bg-[#07172b] text-white flex flex-col justify-between overflow-hidden min-h-[85vh] sm:min-h-[75vh] md:min-h-[70vh] lg:min-h-screen">
      {/* Background Image Layer with Dark Gradient Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgResidentialImg}
          alt="Smart Residential House Architecture"
          className="w-full h-full object-cover object-right sm:object-[75%_center] md:object-center brightness-100"
        />
        {/* Soft Left Side Gradient Overlay for High Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07172b]/90 via-[#07172b]/50 to-transparent hidden sm:block" />
        <div className="absolute inset-0 bg-[#07172b]/70 sm:hidden" />
      </div>

      {/* Main Hero Content - Left aligned 42% width on iPad/Desktop */}
      <Container className="relative z-10 my-auto w-full pb-4">
        <div className="w-full sm:w-[50%] md:w-[44%] lg:max-w-xl space-y-3 sm:space-y-4 lg:space-y-5">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-green font-display font-extrabold uppercase text-[10px] sm:text-xs lg:text-sm tracking-widest block mb-1.5 sm:mb-2">
              {t("res_hero_tag")}
            </span>

            <h1 className="font-display font-black text-2xl sm:text-3xl md:text-3xl lg:text-5xl tracking-tight leading-[1.12] text-white">
              <div>{t("res_hero_title_1")}</div>
              <div className="text-brand-green mt-0.5 sm:mt-1">{t("res_hero_title_2")}</div>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[11px] sm:text-xs lg:text-sm font-sans text-slate-200 leading-relaxed font-medium"
          >
            {t("res_hero_desc")}
          </motion.p>

          {/* Action CTAs: Rounded Pill Buttons matching screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2"
          >
            <button
              onClick={handleContactMascot}
              className="inline-flex items-center space-x-2 bg-brand-green hover:bg-brand-green-light active:bg-brand-green text-white font-display font-extrabold text-[11px] sm:text-xs lg:text-sm uppercase px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-brand-green/30 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>{t("res_hero_cta_consult")}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <a
              href="#brochure"
              className="inline-flex items-center space-x-2 bg-[#0c2540]/80 hover:bg-[#0c2540] border border-white/20 hover:border-white/40 text-white font-display font-extrabold text-[11px] sm:text-xs lg:text-sm uppercase px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-sm"
            >
              <span>{t("res_hero_cta_brochure")}</span>
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </a>
          </motion.div>

        </div>
      </Container>

      {/* Bottom Floating Feature Bar (5 Badges) + Kubi Mascot matching design screenshot */}
      <Container className="relative z-20 w-full pt-4 pb-4">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-[#06182c]/95 border border-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 md:p-5 pr-12 sm:pr-14 md:pr-24 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 shadow-2xl"
          >
            {featureBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center space-x-2.5 p-1">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-brand-green/40 bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                  {badge.icon}
                </div>
                <div className="min-w-0">
                  <span className="font-display font-black text-xs sm:text-sm text-white block uppercase tracking-wider leading-none truncate">
                    {badge.val}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans font-medium text-slate-300 leading-tight block mt-1">
                    {badge.desc}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Kubi Mascot Standing on Right Corner of Floating Bar */}
          <img
            src={kubiImg}
            alt="Kubi Mascot"
            className="absolute -right-2 -bottom-2 sm:-right-3 sm:-bottom-3 w-16 sm:w-20 lg:w-24 h-auto object-contain select-none pointer-events-none drop-shadow-2xl z-30"
          />
        </div>
      </Container>

    </section>
  );
};

export default ResidentialHero;
