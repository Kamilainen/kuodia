import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";
import bgHotelImg from "../../../assets/bghotel.png";
import {
  Download,
  Zap,
  Coffee,
  Clock,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

export const HotelHero: React.FC = () => {
  const { t } = useTranslation();

  const handleContactMascot = () => {
    window.dispatchEvent(new CustomEvent("open-contact-mascot"));
  };

  const featureBadges = [
    {
      icon: <Zap className="w-4 h-4 text-brand-green flex-shrink-0" />,
      val: t("hotel_hero_badge_1_val"),
      desc: t("hotel_hero_badge_1_desc"),
    },
    {
      icon: <Coffee className="w-4 h-4 text-brand-green flex-shrink-0" />,
      val: t("hotel_hero_badge_2_val"),
      desc: t("hotel_hero_badge_2_desc"),
    },
    {
      icon: <Clock className="w-4 h-4 text-brand-green flex-shrink-0" />,
      val: t("hotel_hero_badge_3_val"),
      desc: t("hotel_hero_badge_3_desc"),
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />,
      val: t("hotel_hero_badge_4_val"),
      desc: t("hotel_hero_badge_4_desc"),
    },
  ];

  const buildingCallouts = [
    {
      num: 1,
      badgeBg: "bg-blue-600",
      title: t("hotel_hs_1_title"),
      desc: t("hotel_hs_1_desc"),
    },
    {
      num: 2,
      badgeBg: "bg-brand-navy",
      title: t("hotel_hs_2_title"),
      desc: t("hotel_hs_2_desc"),
    },
    {
      num: 3,
      badgeBg: "bg-sky-600",
      title: t("hotel_hs_3_title"),
      desc: t("hotel_hs_3_desc"),
    },
    {
      num: 4,
      badgeBg: "bg-indigo-600",
      title: t("hotel_hs_4_title"),
      desc: t("hotel_hs_4_desc"),
    },
    {
      num: 5,
      badgeBg: "bg-emerald-600",
      title: t("hotel_hs_5_title"),
      desc: t("hotel_hs_5_desc"),
    },
    {
      num: 6,
      badgeBg: "bg-teal-600",
      title: t("hotel_hs_6_title"),
      desc: t("hotel_hs_6_desc"),
    },
    {
      num: 7,
      badgeBg: "bg-cyan-600",
      title: t("hotel_hs_7_title"),
      desc: t("hotel_hs_7_desc"),
    },
  ];

  return (
    <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-slate-100/90 via-slate-50 to-white text-slate-800 overflow-hidden">
      {/* Dynamic Ambient Background Elements for Depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(139,197,61,0.09),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,43,98,0.07),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* Left Column: Headings, CTAs, 4 Badges (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-5"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-green/10 text-brand-green font-display font-extrabold uppercase text-[11px] tracking-wider mb-2.5 border border-brand-green/20">
                {t("hotel_hero_tag")}
              </span>
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[38px] text-brand-navy tracking-tight leading-[1.15]">
                <div>{t("hotel_hero_title_1")}</div>
                <div>{t("hotel_hero_title_2")}</div>
                <div className="text-brand-green">{t("hotel_hero_title_3")}</div>
              </h1>
            </div>

            <p className="text-xs sm:text-sm font-sans text-slate-600 leading-relaxed font-medium">
              {t("hotel_hero_desc")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={handleContactMascot}
                className="inline-flex items-center space-x-2 bg-brand-green hover:bg-brand-green-light active:bg-brand-green text-white font-display font-extrabold text-xs uppercase px-5 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-brand-green/25 hover:shadow-xl hover:shadow-brand-green/35 cursor-pointer transform hover:-translate-y-0.5"
              >
                <TriangleAlert className="w-4 h-4 text-white fill-white/20" />
                <span>{t("hotel_hero_cta_consult")}</span>
              </button>

              <a
                href="#brochure"
                className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 border border-slate-200/90 text-brand-navy font-display font-extrabold text-xs uppercase px-4 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow"
              >
                <span>{t("hotel_hero_cta_brochure")}</span>
                <Download className="w-3.5 h-3.5 text-brand-navy" />
              </a>
            </div>

            {/* 4 Stat Badges (2x2 Grid) */}
            <div className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-xl shadow-slate-900/5 mt-6 grid grid-cols-2 gap-3.5">
              {featureBadges.map((badge, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <div className="p-2 rounded-xl bg-brand-green/10 text-brand-green flex-shrink-0 mt-0.5 border border-brand-green/20">
                    {badge.icon}
                  </div>
                  <div>
                    <span className="font-display font-black text-[11px] sm:text-xs text-brand-navy block leading-tight">
                      {badge.val}
                    </span>
                    <span className="text-[10px] font-sans font-medium text-slate-500 leading-tight block mt-0.5">
                      {badge.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center Column: 3D Hotel Building Diagram Image with Pedestal Glow (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex items-center justify-center p-2 relative"
          >
            {/* Soft Ambient Pedestal Glow behind building */}
            <div className="absolute inset-x-8 bottom-4 h-24 bg-gradient-to-t from-brand-navy/15 via-sky-500/10 to-transparent blur-2xl rounded-full pointer-events-none" />
            
            <img
              src={bgHotelImg}
              alt="Smart Hotel Building Architecture"
              className="w-full h-auto object-contain max-h-[600px] relative z-10 filter drop-shadow-[0_20px_35px_rgba(0,30,70,0.16)] hover:scale-102 transition-transform duration-500"
            />
          </motion.div>

          {/* Right Column: 7 Annotated Building Features in an Elevated Panel (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-xl shadow-slate-900/5 space-y-2">
              {buildingCallouts.map((item) => (
                <div
                  key={item.num}
                  className="bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-brand-green/40 rounded-xl p-2.5 sm:p-3 flex items-start space-x-3 transition-all duration-300 shadow-2xs hover:shadow-md group"
                >
                  {/* Numbered Badge */}
                  <div
                    className={`w-6 h-6 rounded-full text-white font-black font-display text-xs flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5 ${item.badgeBg}`}
                  >
                    {item.num}
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow min-w-0">
                    <h4 className="font-display font-extrabold text-[11px] sm:text-xs text-brand-navy uppercase tracking-wide leading-tight group-hover:text-brand-green transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[10px] font-sans text-slate-500 leading-relaxed mt-0.5 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default HotelHero;
