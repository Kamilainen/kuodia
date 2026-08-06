import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../context/LanguageContext";
import Container from "../../components/Container";
import Button from "../../components/Button";
import {
  ArrowRight,
  Zap,
  Droplet,
  Flame,
  Monitor,
  Leaf,
  Shield,
  Cpu,
  ClipboardCheck,
  Wind,
  Gauge,
  Droplets,
  Check,
  Thermometer,
  Utensils,
  Shirt,
  Pill,
  Car,
  Truck,
  FlaskConical,
  Hammer,
  Sun,
} from "lucide-react";
import industriesBg from "../../assets/industries_background.png";
import industrieFactoryEn from "../../assets/industrie_factory.png";
import heatpump2 from "../../assets/heatpump2.jpg";
import heatRecovery from "../../assets/heat_recovery_2.png";
import waterTreatment from "../../assets/water_treatment.png";
import solarPv from "../../assets/solarpv.jpg";
import smartBMS from "../../assets/bms.png";
import hvac from "../../assets/hvac.jpg";
import ZaloContactCard from "../../components/ZaloContactCard";
import ProjectConceptCard from "../../components/ProjectConceptCard";

export const Industrie: React.FC = () => {
  const { t } = useTranslation();


  // Scroll to contact section helper
  const handleScrollToContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-mascot"));
  };

  // Scroll to solutions/features detail section
  const handleScrollToDetails = () => {
    const detailsSec = document.getElementById("solutions-detail");
    if (detailsSec) {
      detailsSec.scrollIntoView({ behavior: "smooth" });
    }
  };


  // Right-side circular feature list
  const rightFeatures = [
    {
      icon: <Zap className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white" />,
      title: t("ind_feat_1_title"),
      desc: t("ind_feat_1_desc"),
    },
    {
      icon: <Flame className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white" />,
      title: t("ind_feat_2_title"),
      desc: t("ind_feat_2_desc"),
    },
    {
      icon: <Droplet className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white" />,
      title: t("ind_feat_3_title"),
      desc: t("ind_feat_3_desc"),
    },
    {
      icon: <Monitor className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white" />,
      title: t("ind_feat_4_title"),
      desc: t("ind_feat_4_desc"),
    },
    {
      icon: <Leaf className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-white" />,
      title: t("ind_feat_5_title"),
      desc: t("ind_feat_5_desc"),
    },
  ];

  // Bottom stats cards
  const statCards = [
    {
      icon: <Zap className="h-3.5 w-3.5 sm:h-6 sm:w-6 stroke-[2.25]" />,
      value: t("ind_stat_1_val"),
      label: t("ind_stat_1_lbl"),
      desc: t("ind_stat_1_desc"),
      colorClass: "text-emerald-600 bg-emerald-50 border-emerald-100 shadow-sm shadow-emerald-100/30",
    },
    {
      icon: <Droplet className="h-3.5 w-3.5 sm:h-6 sm:w-6 stroke-[2.25]" />,
      value: t("ind_stat_2_val"),
      label: t("ind_stat_2_lbl"),
      desc: t("ind_stat_2_desc"),
      colorClass: "text-blue-600 bg-blue-50 border-blue-100 shadow-sm shadow-blue-100/30",
    },
    {
      icon: <Flame className="h-3.5 w-3.5 sm:h-6 sm:w-6 stroke-[2.25]" />,
      value: t("ind_stat_3_val"),
      label: t("ind_stat_3_lbl"),
      desc: t("ind_stat_3_desc"),
      colorClass: "text-orange-600 bg-orange-50 border-orange-100 shadow-sm shadow-orange-100/30",
    },
    {
      icon: <Leaf className="h-3.5 w-3.5 sm:h-6 sm:w-6 stroke-[2.25]" />,
      value: t("ind_stat_4_val"),
      label: t("ind_stat_4_lbl"),
      desc: t("ind_stat_4_desc"),
      colorClass: "text-emerald-600 bg-emerald-50 border-emerald-100 shadow-sm shadow-emerald-100/30",
    },
    {
      icon: <Shield className="h-3.5 w-3.5 sm:h-6 sm:w-6 stroke-[2.25]" />,
      value: t("ind_stat_5_val"),
      label: t("ind_stat_5_lbl"),
      desc: t("ind_stat_5_desc"),
      colorClass: "text-indigo-600 bg-indigo-50 border-indigo-100 shadow-sm shadow-indigo-100/30",
    },
  ];

  // 5-Column Interactive Annotation Row Data
  const annotations = [
    {
      title: t("ind_ann_solar_title"),
      desc: t("ind_ann_solar_desc"),
      colorClass: "text-amber-500 bg-amber-50/50 border-amber-200",
      lineColor: "border-amber-400",
      icon: <Sun className="h-5.5 w-5.5 sm:h-6 sm:w-6 stroke-[2.25]" />,
    },
    {
      title: t("ind_ann_hp_title"),
      desc: t("ind_ann_hp_desc"),
      colorClass: "text-red-500 bg-red-50/50 border-red-200",
      lineColor: "border-red-400",
      icon: <Thermometer className="h-5.5 w-5.5 sm:h-6 sm:w-6 stroke-[2.25]" />,
    },
    {
      title: t("ind_ann_hr_title"),
      desc: t("ind_ann_hr_desc"),
      colorClass: "text-orange-500 bg-orange-50/50 border-orange-200",
      lineColor: "border-orange-400",
      icon: <Flame className="h-5.5 w-5.5 sm:h-6 sm:w-6 stroke-[2.25]" />,
    },
    {
      title: t("ind_ann_wt_title"),
      desc: t("ind_ann_wt_desc"),
      colorClass: "text-blue-500 bg-blue-50/50 border-blue-200",
      lineColor: "border-blue-400",
      icon: <Droplets className="h-5.5 w-5.5 sm:h-6 sm:w-6 stroke-[2.25]" />,
    },
    {
      title: t("ind_ann_bms_title"),
      desc: t("ind_ann_bms_desc"),
      colorClass: "text-purple-500 bg-purple-50/50 border-purple-200",
      lineColor: "border-purple-400",
      icon: <Monitor className="h-5.5 w-5.5 sm:h-6 sm:w-6 stroke-[2.25]" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-navy">
      {/* Hero Section */}
      <section className="relative min-h-[240px] sm:min-h-[95vh] flex items-center pt-28 pb-20 sm:pt-32 sm:pb-40 lg:pb-44 overflow-hidden">
        {/* Background Image with Dark Contrast Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={industriesBg}
            alt="Smarter Industry, Lower Costs Background"
            className="w-full h-full object-cover object-[72%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/60 lg:bg-gradient-to-r lg:from-slate-950/90 lg:via-slate-950/75 lg:to-slate-900/40" />
        </div>

        {/* Main Hero Content */}
        <Container className="z-10 relative w-full">
          <div className="grid grid-cols-12 gap-2 sm:gap-6 lg:gap-12 items-center w-full">
            
            {/* Left Column: Heading and Details */}
            <div className="col-span-6 flex flex-col items-start text-left">
              {/* Tagline tag */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[6px] sm:text-xs font-display font-black tracking-widest text-brand-green uppercase mb-3 sm:mb-6 select-none"
              >
                {t("sol_industrie")}
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h1 className="font-display font-black text-xs sm:text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
                  {t("ind_title_1")} <br />
                  <span className="text-brand-green">{t("ind_title_2")}</span> <br />
                  {t("ind_title_3")}
                </h1>
              </motion.div>

              {/* Description Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-2 sm:mt-6 text-[7px] sm:text-xs md:text-base text-slate-300 leading-relaxed font-sans font-medium max-w-xl"
              >
                <p>{t("ind_subtitle")}</p>
              </motion.div>

              {/* CTA Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-4 mt-3 sm:mt-8 w-full sm:w-auto"
              >
                <Button
                  onClick={handleScrollToContact}
                  variant="primary"
                  className="group flex items-center justify-center space-x-1 sm:space-x-2 bg-brand-green hover:bg-brand-green-dark border-brand-green hover:border-brand-green-dark shadow-lg shadow-brand-green/20 text-[6.5px] sm:text-xs py-1 px-2.5 sm:py-2.5 sm:px-5 rounded-full"
                >
                  <span>{t("ind_cta_study")}</span>
                  <ArrowRight className="h-2 w-2 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  onClick={handleScrollToDetails}
                  variant="outline"
                  className="group flex items-center justify-center space-x-1 sm:space-x-2 border-white/60 hover:border-white text-white hover:bg-white/10 shadow-sm text-[6.5px] sm:text-xs py-1 px-2.5 sm:py-2.5 sm:px-5 rounded-full"
                >
                  <span>{t("ind_cta_explore")}</span>
                  <ArrowRight className="h-2 w-2 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>

            {/* Right Column: Circular Features Stack */}
            <div className="col-span-5 col-start-8 w-full flex flex-col items-end">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-1.5 sm:space-y-4 flex flex-col items-start"
              >
                {rightFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-1.5 sm:space-x-4 py-0.5 sm:py-2.5 group hover:translate-x-0.5 transition-all duration-300"
                  >
                    <div className="h-6 w-6 sm:h-12 sm:w-12 rounded-full border border-white/30 bg-white/5 flex items-center justify-center flex-shrink-0 text-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                      {feat.icon}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[7.5px] sm:text-xs lg:text-sm font-display font-black text-white uppercase tracking-wider leading-snug">
                        {feat.title}
                      </span>
                      <span className="text-[6.5px] sm:text-[10px] lg:text-xs font-sans text-slate-300 leading-normal mt-0.5 font-medium">
                        {feat.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </Container>
      </section>

      {/* Floating Stats Section */}
      <section className="relative z-20 -mt-8 sm:-mt-20 lg:-mt-24 pb-12 px-4 md:px-0">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-100/80 p-2 sm:p-6 lg:py-10 grid grid-cols-5 divide-x divide-slate-100 gap-x-1 sm:gap-x-4 w-full items-stretch"
          >
            {statCards.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:flex-row items-center lg:items-center justify-center py-2 lg:py-0 lg:px-8 text-center lg:text-left"
              >
                {/* Icon Container */}
                <div className={`w-5 h-5 sm:w-10 sm:h-10 lg:w-14 lg:h-14 rounded-full border flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 hover:scale-105 bg-white ${stat.colorClass} scale-[0.55] sm:scale-100 origin-center lg:origin-left mb-1 sm:mb-2 lg:mb-0`}>
                  {stat.icon}
                </div>
                
                {/* Content Right */}
                <div className="pl-0 lg:pl-4 flex flex-col justify-center flex-grow min-w-0 items-center lg:items-start text-center lg:text-left">
                  <span className="text-[6.5px] sm:text-lg md:text-xl lg:text-2xl font-display font-black text-brand-green leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[5px] sm:text-xs md:text-sm font-bold text-brand-navy mt-0.5 sm:mt-1 leading-tight sm:leading-snug">
                    {stat.label}
                  </span>
                  <span className="text-[4.5px] sm:text-[9.5px] lg:text-xs text-slate-500 leading-normal mt-0.5 font-sans font-medium">
                    {stat.desc}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Integrated Factory Solution diagram & Optimization list Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <Container className="space-y-12">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 lg:gap-8 items-stretch mt-0">
            {/* Left Column: What We Optimize */}
            <div className="hidden xl:block xl:col-span-1 h-full bg-slate-50/70 border border-slate-100 rounded-3xl p-4 sm:p-5 space-y-4 shadow-sm shadow-slate-100">
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-display font-black text-brand-navy">
                  {t("ind_opt_title")}
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  { icon: <ClipboardCheck className="h-4.5 w-4.5 text-emerald-600" />, title: t("ind_opt_1_title"), desc: t("ind_opt_1_desc") },
                  { icon: <Flame className="h-4.5 w-4.5 text-orange-600" />, title: t("ind_opt_2_title"), desc: t("ind_opt_2_desc") },
                  { icon: <Thermometer className="h-4.5 w-4.5 text-red-600" />, title: t("ind_opt_3_title"), desc: t("ind_opt_3_desc") },
                  { icon: <Wind className="h-4.5 w-4.5 text-blue-600" />, title: t("ind_opt_4_title"), desc: t("ind_opt_4_desc") },
                  { icon: <Gauge className="h-4.5 w-4.5 text-slate-600" />, title: t("ind_opt_5_title"), desc: t("ind_opt_5_desc") },
                  { icon: <Droplets className="h-4.5 w-4.5 text-blue-600" />, title: t("ind_opt_6_title"), desc: t("ind_opt_6_desc") },
                  { icon: <Cpu className="h-4.5 w-4.5 text-indigo-600" />, title: t("ind_opt_7_title"), desc: t("ind_opt_7_desc") },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 group">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-sm">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-display font-black text-brand-navy leading-snug">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-slate-500 mt-0.5 leading-normal font-sans font-medium">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Column: Localized Diagram */}
            <div className="col-span-1 xl:col-span-3 h-full flex flex-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full h-full bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-900/5 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-between"
              >
                <h2 className="text-base sm:text-lg md:text-xl font-display font-black text-brand-navy leading-tight uppercase tracking-tight text-center mb-4">
                  {t("ind_sec2_title")}
                </h2>

                {/* 5-Column Interactive Annotation Row */}
                <style dangerouslySetInnerHTML={{__html: `
                  .no-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}} />
                <div 
                  className="w-full flex sm:grid sm:grid-cols-5 overflow-x-auto sm:overflow-x-visible gap-4 sm:gap-2 md:gap-4 pb-2 sm:pb-0 mb-6 no-scrollbar"
                  style={{ 
                    scrollbarWidth: "none", 
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch"
                  }}
                >
                  {annotations.map((item, idx) => (
                    <div key={idx} className="flex-shrink-0 sm:flex-shrink flex items-center gap-2 sm:gap-2.5 group min-w-[155px] sm:min-w-0">
                      {/* Icon Circle */}
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-md ${item.colorClass} shadow-sm bg-white`}>
                        {item.icon}
                      </div>
                      {/* Text */}
                      <div className="flex flex-col min-w-0">
                        <h4 className="text-[11px] sm:text-[12px] md:text-xs font-display font-black text-brand-navy uppercase tracking-wider leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[10px] sm:text-[11px]md:text-[10px] text-slate-500 leading-snug mt-0.5 font-medium font-sans whitespace-normal sm:whitespace-pre-line">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-full flex-1 flex items-center justify-center">
                  <img
                    src={industrieFactoryEn}
                    alt="Our Integrated Solutions for Industry"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>

                {/* Equipment Labels Row */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 pt-4 pb-2 border-t border-slate-100/60 mt-4 text-center">
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                    const fullText = t(`ind_eq_${num}` as any);
                    const parts = fullText.split("(");
                    const mainTitle = parts[0].trim();
                    const subTitle = parts[1] ? `(${parts[1]}` : "";
                    
                    return (
                      <div key={num} className="flex flex-col items-center justify-center min-w-0">
                        <span className="text-[10px] sm:text-xs font-display font-black text-brand-navy leading-snug">
                          {mainTitle}
                        </span>
                        {subTitle && (
                          <span className="text-[8px] sm:text-[9.5px] text-slate-500 font-sans mt-0.5 leading-tight font-medium">
                            {subTitle}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Legend Row */}
                <div className="w-full flex flex-wrap justify-center items-center gap-x-3 gap-y-1.5 pt-3 mt-4 border-t border-slate-100">
                  {[
                    { label: t("ind_leg_1"), solid: "#ef4444" },
                    { label: t("ind_leg_2"), solid: "#3b82f6" },
                    { label: t("ind_leg_3"), solid: "#fb923c" },
                    { label: t("ind_leg_4"), solid: "#22c55e" },
                    { label: t("ind_leg_5"), solid: "#fbbf24" },
                    { label: t("ind_leg_6"), dashed: "#818cf8" },
                  ].map((leg, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      {/* Arrow line indicator */}
                      <svg width="28" height="8" viewBox="0 0 28 8" fill="none" className="flex-shrink-0">
                        {leg.dashed ? (
                          <>
                            <line x1="0" y1="4" x2="22" y2="4" stroke={leg.dashed} strokeWidth="1.5" strokeDasharray="3 2" />
                            <polygon points="22,1 28,4 22,7" fill={leg.dashed} />
                          </>
                        ) : (
                          <>
                            <line x1="0" y1="4" x2="22" y2="4" stroke={leg.solid} strokeWidth="2" />
                            <polygon points="22,1 28,4 22,7" fill={leg.solid!} />
                          </>
                        )}
                      </svg>
                      <span className="text-[10px] text-slate-600 font-sans font-bold whitespace-nowrap">
                        {leg.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>


            {/* Right Column: How It Works & Key Benefits */}
            <div className="hidden xl:flex xl:col-span-1 h-full bg-slate-50/70 border border-slate-100 rounded-3xl p-4 sm:p-5 space-y-6 shadow-sm shadow-slate-100 flex flex-col">
              {/* How It Works */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-display font-black text-brand-navy">
                    {t("ind_how_title")}
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {[
                    t("ind_how_1"),
                    t("ind_how_2"),
                    t("ind_how_3"),
                    t("ind_how_4"),
                    t("ind_how_5"),
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 group">
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center flex-shrink-0 font-bold transition-all duration-300 group-hover:scale-105">
                        {idx + 1}
                      </div>
                      <span className="text-[11px] text-slate-700 leading-snug font-medium font-sans">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="space-y-0">
                  <h3 className="text-sm sm:text-base font-display font-black text-brand-navy">
                    {t("ind_ben_title")}
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {[
                    t("ind_ben_1"),
                    t("ind_ben_2"),
                    t("ind_ben_3"),
                    t("ind_ben_4"),
                    t("ind_ben_5"),
                    t("ind_ben_6"),
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 group">
                      <div className="h-4.5 w-4.5 rounded-full bg-brand-green-bg text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-green/20 transition-all duration-300 group-hover:scale-105">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className="text-[11px] text-slate-700 font-bold font-sans leading-snug">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Technologies Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <Container className="space-y-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-brand-navy leading-tight uppercase tracking-tight">
              {t("ind_tech_title")}
            </h2>
          </div>

          <div className="flex overflow-x-auto scrollbar-none gap-4 pb-4 snap-x snap-mandatory xl:grid xl:grid-cols-6 xl:pb-0 xl:snap-none items-stretch w-full">
            {[
              { img: heatpump2,      title: t("ind_tech_1_title"), desc: t("ind_tech_1_desc") },
              { img: heatRecovery,   title: t("ind_tech_2_title"), desc: t("ind_tech_2_desc") },
              { img: waterTreatment, title: t("ind_tech_3_title"), desc: t("ind_tech_3_desc") },
              { img: solarPv,        title: t("ind_tech_4_title"), desc: t("ind_tech_4_desc") },
              { img: smartBMS, title: t("ind_tech_5_title"), desc: t("ind_tech_5_desc") },
              { img: hvac,           title: t("ind_tech_6_title"), desc: t("ind_tech_6_desc") },
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full flex-shrink-0 w-[230px] sm:w-[280px] snap-start xl:w-auto xl:flex-shrink"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                  <img
                    src={tech.img}
                    alt={tech.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                {/* Text details */}
                <div className="p-3.5 flex flex-col flex-1 space-y-1">
                  <h3 className="text-[10px] sm:text-xs font-display font-black text-brand-navy leading-tight uppercase group-hover:text-blue-600 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <p className="text-[10px] text-slate-500 font-sans leading-snug font-medium">
                    {tech.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <Container className="space-y-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-brand-navy leading-tight uppercase tracking-tight">
              {t("ind_serve_title")}
            </h2>
          </div>

          <div className="flex overflow-x-auto scrollbar-none gap-6 pb-4 snap-x snap-mandatory xl:grid xl:grid-cols-8 xl:gap-4 xl:pb-0 xl:snap-none w-full justify-start xl:justify-items-stretch">
            {[
              { Icon: Utensils,     title: t("ind_srv_1_title"), desc: t("ind_srv_1_desc"), bg: "bg-white-50 border-blue-200/60 text-brand-green" },
              { Icon: Shirt,        title: t("ind_srv_2_title"), desc: t("ind_srv_2_desc"), bg: "bg-white-50 border-blue-200/60 text-brand-green" },
              { Icon: Cpu,          title: t("ind_srv_3_title"), desc: t("ind_srv_3_desc"), bg: "bg-white-50 border-blue-200/60 text-brand-green" },
              { Icon: Pill,         title: t("ind_srv_4_title"), desc: t("ind_srv_4_desc"), bg: "bg-white-50 border-blue-200/60 text-brand-green" },
              { Icon: Car,          title: t("ind_srv_5_title"), desc: t("ind_srv_5_desc"), bg: "bg-white-50 border-blue-200/60 text-brand-green" },
              { Icon: Truck,        title: t("ind_srv_6_title"), desc: t("ind_srv_6_desc"), bg: "bg-white-50 border-blue-200/60 text-brand-green" },
              { Icon: FlaskConical, title: t("ind_srv_7_title"), desc: t("ind_srv_7_desc"), bg: "bg-white-50 border-blue-200/60 text-brand-green" },
              { Icon: Hammer,       title: t("ind_srv_8_title"), desc: t("ind_srv_8_desc"), bg: "bg-white-50 border-blue-200/60 text-brand-green" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex flex-row items-center space-x-2.5 group flex-shrink-0 w-[150px] sm:w-[180px] snap-start xl:w-auto xl:flex-shrink"
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm ${item.bg}`}>
                  <item.Icon className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col space-y-0.5 items-start">
                  <span className="text-[9px] sm:text-[10px] font-display font-black text-brand-navy leading-tight uppercase group-hover:text-blue-600 transition-colors duration-200">
                    {item.title}
                  </span>
                  <span className="text-[8px] sm:text-[9px] text-slate-500 font-sans leading-snug font-medium max-w-[100px] sm:max-w-[120px] xl:max-w-none">
                    {item.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Detail Solutions Section */}
      <section id="solutions-detail" className="py-20 bg-slate-50">
        <Container className="space-y-16">
          {/* Project Concept + Zalo Contact Cards side by side on desktop, stacked on mobile/tablet */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 w-full items-stretch">
            <div className="col-span-1 xl:col-span-8"><ProjectConceptCard /></div>
            <div className="col-span-1 xl:col-span-4">
              <ZaloContactCard 
                title={t("ind_cta_card_title")} 
                description={t("ind_cta_card_desc")} 
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Industrie;
