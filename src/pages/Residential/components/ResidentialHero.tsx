import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";
import bgResidentialImg from "../../../assets/bgresidantial.png";
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
      icon: <Zap className="w-5 h-5 text-brand-green flex-shrink-0" />,
      val: t("res_hero_badge_1_val"),
      desc: t("res_hero_badge_1_desc"),
    },
    {
      icon: <HomeIcon className="w-5 h-5 text-brand-green flex-shrink-0" />,
      val: t("res_hero_badge_2_val"),
      desc: t("res_hero_badge_2_desc"),
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-brand-green flex-shrink-0" />,
      val: t("res_hero_badge_3_val"),
      desc: t("res_hero_badge_3_desc"),
    },
    {
      icon: <Leaf className="w-5 h-5 text-brand-green flex-shrink-0" />,
      val: t("res_hero_badge_4_val"),
      desc: t("res_hero_badge_4_desc"),
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-green flex-shrink-0" />,
      val: t("res_hero_badge_5_val"),
      desc: t("res_hero_badge_5_desc"),
    },
  ];

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen pt-28 pb-6 lg:pt-36 lg:pb-8 bg-brand-navy-dark text-white flex flex-col justify-between overflow-hidden">
      {/* Background Image Layer with Dark Gradient Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgResidentialImg}
          alt="Smart Residential House Architecture"
          className="w-full h-full object-cover object-center brightness-90"
        />
        {/* Gradient Overlay for Left Side Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/75 via-brand-navy-dark/45 to-transparent hidden lg:block" />
        <div className="absolute inset-0 bg-brand-navy-dark/85 lg:hidden" />
      </div>

      {/* Main Content */}
      <Container className="relative z-10 my-auto w-full pb-4">
        <div className="max-w-xl space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-green font-display font-extrabold uppercase text-xs sm:text-sm tracking-widest block mb-2.5">
              {t("res_hero_tag")}
            </span>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] text-white">
              <div>{t("res_hero_title_1")}</div>
              <div className="text-brand-green">{t("res_hero_title_2")}</div>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs sm:text-sm font-sans text-slate-200 leading-relaxed font-medium"
          >
            {t("res_hero_desc")}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <button
              onClick={handleContactMascot}
              className="inline-flex items-center space-x-2 bg-brand-green hover:bg-brand-green-light active:bg-brand-green text-white font-display font-extrabold text-xs sm:text-sm uppercase px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-brand-green/30 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>{t("res_hero_cta_consult")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#brochure"
              className="inline-flex items-center space-x-2 bg-brand-navy/70 hover:bg-brand-navy border border-white/20 text-white font-display font-extrabold text-xs sm:text-sm uppercase px-5 py-3.5 rounded-xl backdrop-blur-md transition-all duration-300 shadow-sm"
            >
              <span>{t("res_hero_cta_brochure")}</span>
              <Download className="w-4 h-4 text-white" />
            </a>
          </motion.div>

        </div>
      </Container>

      {/* Bottom Floating Feature Bar (5 Badges) - Contained neatly at bottom inside Hero */}
      <Container className="relative z-20 w-full pt-4 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-brand-navy-dark/90 border border-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 shadow-2xl"
        >
          {featureBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center space-x-3 p-2">
              <div className="w-10 h-10 rounded-full border border-brand-green/40 bg-brand-green/10 flex items-center justify-center flex-shrink-0">
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
      </Container>

    </section>
  );
};

export default ResidentialHero;
