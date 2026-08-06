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
      icon: <Zap className="h-6 w-6 text-brand-green" />,
      title: t("ind_feat_1_title"),
      desc: t("ind_feat_1_desc"),
    },
    {
      icon: <Flame className="h-6 w-6 text-brand-green" />,
      title: t("ind_feat_2_title"),
      desc: t("ind_feat_2_desc"),
    },
    {
      icon: <Droplet className="h-6 w-6 text-brand-green" />,
      title: t("ind_feat_3_title"),
      desc: t("ind_feat_3_desc"),
    },
    {
      icon: <Monitor className="h-6 w-6 text-brand-green" />,
      title: t("ind_feat_4_title"),
      desc: t("ind_feat_4_desc"),
    },
    {
      icon: <Leaf className="h-6 w-6 text-brand-green" />,
      title: t("ind_feat_5_title"),
      desc: t("ind_feat_5_desc"),
    },
  ];

  // Bottom stats cards
  const statCards = [
    {
      icon: <Zap className="h-6 w-6 stroke-[2.25]" />,
      value: t("ind_stat_1_val"),
      label: t("ind_stat_1_lbl"),
      desc: t("ind_stat_1_desc"),
      colorClass: "text-emerald-600 bg-emerald-50 border-emerald-100 shadow-sm shadow-emerald-100/30",
    },
    {
      icon: <Droplet className="h-6 w-6 stroke-[2.25]" />,
      value: t("ind_stat_2_val"),
      label: t("ind_stat_2_lbl"),
      desc: t("ind_stat_2_desc"),
      colorClass: "text-blue-600 bg-blue-50 border-blue-100 shadow-sm shadow-blue-100/30",
    },
    {
      icon: <Flame className="h-6 w-6 stroke-[2.25]" />,
      value: t("ind_stat_3_val"),
      label: t("ind_stat_3_lbl"),
      desc: t("ind_stat_3_desc"),
      colorClass: "text-orange-600 bg-orange-50 border-orange-100 shadow-sm shadow-orange-100/30",
    },
    {
      icon: <Leaf className="h-6 w-6 stroke-[2.25]" />,
      value: t("ind_stat_4_val"),
      label: t("ind_stat_4_lbl"),
      desc: t("ind_stat_4_desc"),
      colorClass: "text-emerald-600 bg-emerald-50 border-emerald-100 shadow-sm shadow-emerald-100/30",
    },
    {
      icon: <Shield className="h-6 w-6 stroke-[2.25]" />,
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
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-36 sm:pb-40 lg:pb-44 overflow-hidden">
        {/* Background Image with Dark Contrast Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={industriesBg}
            alt="Smarter Industry, Lower Costs Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/60 lg:bg-gradient-to-r lg:from-slate-950/90 lg:via-slate-950/75 lg:to-slate-900/40" />
        </div>

        {/* Main Hero Content */}
        <Container className="z-10 relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading and Details */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Tagline tag */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[10px] sm:text-xs font-display font-black tracking-widest text-brand-green uppercase mb-6 select-none"
              >
                {t("sol_industrie")}
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[62px] tracking-tight leading-[1.06] text-white">
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
                className="mt-6 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-sans font-medium max-w-xl"
              >
                <p>{t("ind_subtitle")}</p>
              </motion.div>

              {/* CTA Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 mt-8 w-full sm:w-auto"
              >
                <Button
                  onClick={handleScrollToContact}
                  variant="primary"
                  size="lg"
                  className="group flex items-center justify-center space-x-2 bg-brand-green hover:bg-brand-green-dark border-brand-green hover:border-brand-green-dark shadow-lg shadow-brand-green/20"
                >
                  <span>{t("ind_cta_study")}</span>
                  <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  onClick={handleScrollToDetails}
                  variant="outline"
                  size="lg"
                  className="group flex items-center justify-center space-x-2 border-white/60 hover:border-white text-white hover:bg-white/10 shadow-sm"
                >
                  <span>{t("ind_cta_explore")}</span>
                  <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>

            {/* Right Column: Circular Features Stack */}
            <div className="lg:col-span-5 w-full">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                {rightFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-4 py-2.5 group hover:translate-x-1 transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-full border border-white/30 bg-white/5 flex items-center justify-center flex-shrink-0 text-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                      {feat.icon}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs sm:text-sm font-display font-black text-white uppercase tracking-wider leading-snug">
                        {feat.title}
                      </span>
                      <span className="text-[10px] sm:text-xs font-sans text-slate-300 leading-normal mt-0.5 font-medium">
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
      <section className="relative z-20 -mt-20 lg:-mt-24 pb-12 px-4 md:px-0">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-100/80 p-6 md:p-6 lg:py-10 grid grid-cols-1 lg:grid-cols-5 gap-x-0 gap-y-2 lg:gap-y-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100"
          >
            {statCards.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center py-6 lg:py-0 lg:px-8 first:pt-0 lg:first:pl-0 last:pb-0 lg:last:pr-0"
              >
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-full border flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 hover:scale-105 bg-white ${stat.colorClass}`}>
                  {stat.icon}
                </div>
                
                {/* Content Right */}
                <div className="pl-4 flex flex-col justify-center flex-grow min-w-0">
                  <span className="text-xl md:text-2xl font-display font-black text-brand-navy leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-brand-navy mt-1 leading-snug">
                    {stat.label}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-500 leading-normal mt-0.5 font-sans font-medium">
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch mt-0">
            {/* Left Column: What We Optimize */}
            <div className="hidden lg:block lg:col-span-1 h-full bg-slate-50/70 border border-slate-100 rounded-3xl p-4 sm:p-5 space-y-4 shadow-sm shadow-slate-100">
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
            <div className="lg:col-span-3 h-full flex flex-col">
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
            <div className="hidden lg:flex lg:col-span-1 h-full bg-slate-50/70 border border-slate-100 rounded-3xl p-4 sm:p-5 space-y-6 shadow-sm shadow-slate-100 flex flex-col">
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

          <div className="flex overflow-x-auto scrollbar-none gap-4 pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-6 lg:pb-0 lg:snap-none items-stretch w-full">
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
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full flex-shrink-0 w-[230px] sm:w-[280px] snap-start lg:w-auto lg:flex-shrink"
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

          <div className="flex overflow-x-auto scrollbar-none gap-6 pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-8 lg:gap-4 lg:pb-0 lg:snap-none w-full justify-start lg:justify-items-stretch">
            {[
              { Icon: Utensils,     title: t("ind_srv_1_title"), desc: t("ind_srv_1_desc"), bg: "bg-amber-50 border-amber-200/60 text-amber-600" },
              { Icon: Shirt,        title: t("ind_srv_2_title"), desc: t("ind_srv_2_desc"), bg: "bg-blue-50 border-blue-200/60 text-blue-600" },
              { Icon: Cpu,          title: t("ind_srv_3_title"), desc: t("ind_srv_3_desc"), bg: "bg-indigo-50 border-indigo-200/60 text-indigo-600" },
              { Icon: Pill,         title: t("ind_srv_4_title"), desc: t("ind_srv_4_desc"), bg: "bg-emerald-50 border-emerald-200/60 text-emerald-600" },
              { Icon: Car,          title: t("ind_srv_5_title"), desc: t("ind_srv_5_desc"), bg: "bg-red-50 border-red-200/60 text-red-600" },
              { Icon: Truck,        title: t("ind_srv_6_title"), desc: t("ind_srv_6_desc"), bg: "bg-cyan-50 border-cyan-200/60 text-cyan-600" },
              { Icon: FlaskConical, title: t("ind_srv_7_title"), desc: t("ind_srv_7_desc"), bg: "bg-purple-50 border-purple-200/60 text-purple-600" },
              { Icon: Hammer,       title: t("ind_srv_8_title"), desc: t("ind_srv_8_desc"), bg: "bg-orange-50 border-orange-200/60 text-orange-600" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex flex-col items-center text-center space-y-2 group flex-shrink-0 w-[100px] sm:w-[120px] snap-start lg:w-auto lg:flex-shrink"
              >
                <div className={`flex-shrink-0 w-11 h-11 rounded-full border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm ${item.bg}`}>
                  <item.Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col space-y-1 items-center">
                  <span className="text-[11px] sm:text-[12px] font-display font-black text-brand-navy leading-tight uppercase group-hover:text-blue-600 transition-colors duration-200">
                    {item.title}
                  </span>
                  <span className="text-[10px] sm:text-[11px]text-slate-500 font-sans leading-snug font-medium max-w-[110px]">
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
          {/* Project Concept + Zalo Contact Cards side by side */}
          <div className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-6 w-full items-stretch">
            <div className="col-span-8"><ProjectConceptCard /></div>
            <div className="col-span-4"><ZaloContactCard /></div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Industrie;
