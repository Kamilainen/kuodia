import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";
import Button from "../../../components/Button";
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
          className="w-full h-full object-cover object-[80%_top] sm:object-top"
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

            {/* Action Buttons matching project standard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2"
            >
              <Button
                onClick={handleScrollToSolutions}
                variant="primary"
                size="lg"
                className="group flex items-center justify-center space-x-2 bg-brand-green hover:bg-brand-green/90 border-brand-green shadow-lg shadow-brand-green/20 cursor-pointer"
              >
                <span className="font-display font-bold text-xs sm:text-sm">{t("farm2_cta_explore")}</span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                onClick={handleScrollToContact}
                variant="outline"
                size="lg"
                className="group flex items-center justify-center space-x-2 border-white/60 hover:border-white text-white hover:bg-white/10 shadow-sm cursor-pointer"
              >
                <MessageCircle className="h-4.5 w-4.5 text-brand-green group-hover:scale-110 transition-transform" />
                <span className="font-display font-bold text-xs sm:text-sm">{t("farm2_cta_expert")}</span>
              </Button>
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
