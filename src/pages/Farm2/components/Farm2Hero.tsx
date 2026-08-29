import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";
import { ArrowRight, MessageCircle } from "lucide-react";
import bgFarmImg from "../../../assets/bgfarm.jpg";
import FarmCommandCenter from "./FarmCommandCenter";

export const Farm2Hero: React.FC = () => {
  const { t } = useTranslation();

  // Scroll to contact section helper
  const handleScrollToContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-mascot"));
  };

  // Scroll to solutions/features section
  const handleScrollToSolutions = () => {
    const solutionsSec = document.getElementById("solutions-detail");
    if (solutionsSec) {
      solutionsSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-36 sm:pt-40 lg:pt-44 pb-36 sm:pb-44 lg:pb-40 overflow-hidden bg-brand-navy-dark">
      {/* Background Image with High Contrast Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgFarmImg}
          alt="Kuodia Smart Farm Background with Drone"
          className="w-full h-full object-cover object-[85%_top] lg:object-top"
        />
        {/* Soft gradient overlay for text legibility while preserving top-right drone visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/90 via-brand-navy-dark/60 to-brand-navy-dark/20 md:from-brand-navy-dark/90 md:via-brand-navy-dark/55 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-black/30" />
      </div>

      {/* Main Content */}
      <Container className="z-10 relative w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column: Eyebrow Tag, Title, Subtitle, CTAs */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">
            
            {/* Eyebrow Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-green/15 border border-brand-green/30 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
              <span className="text-xs font-display font-bold tracking-widest text-brand-green uppercase">
                {t("farm2_eyebrow")}
              </span>
            </motion.div>

            {/* Main Title Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-[1.08] text-white"
            >
              {t("farm2_title_1")}{" "}
              <span className="block mt-1 text-brand-green">
                {t("farm2_title_2")}
              </span>
            </motion.h1>

            {/* Description Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-sans max-w-xl font-medium"
            >
              {t("farm2_desc")}
            </motion.p>

            {/* Action Buttons matching exact design screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <button
                onClick={handleScrollToSolutions}
                className="inline-flex items-center justify-center space-x-2.5 bg-brand-green hover:bg-brand-green-light active:bg-brand-green text-white font-display font-extrabold text-xs sm:text-sm uppercase px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-brand-green/30 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>{t("farm2_cta_explore")}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center space-x-3 bg-black/40 hover:bg-black/60 border border-white/80 hover:border-white text-white font-display font-extrabold text-xs sm:text-sm uppercase px-5 py-3.5 rounded-xl backdrop-blur-md transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>{t("farm2_cta_expert")}</span>
                <div className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center bg-white/10 flex-shrink-0">
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Kubi Command Center Component */}
          <FarmCommandCenter />
        </div>
      </Container>
    </section>
  );
};

export default Farm2Hero;
