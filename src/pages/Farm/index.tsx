import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../context/LanguageContext";
import Container from "../../components/Container";
import Button from "../../components/Button";
import {
  ArrowRight,
  Droplet,
  Thermometer,
  Zap,
  ShieldCheck,
} from "lucide-react";
import farmSolutionsHeroBg from "../../assets/farm_solutions_hero.png";
import fishPlants from "../../assets/fish_plants.png";
import shrim from "../../assets/shrim.png";
import shrimpNursery from "../../assets/shrimp_nursery.png";

import FeatureCard from "../../components/FeatureCard";
import NurseryCard from "../../components/NurseryCard";
import IntegratedArchitecture from "../../components/IntegratedArchitecture";
import WhyKuodia from "../../components/WhyKuodia";
import ContactFeatured from "../../components/ContactFeatured";

export const Farms: React.FC = () => {
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

  // Dynamic breadcrumb parser for styling
  const breadcrumb = t("farm_breadcrumb");
  const breadcrumbParts = breadcrumb.split(">");

  // Floating cards data
  const statCards = [
    {
      icon: <Droplet className="h-6 w-6 stroke-[1.5]" />,
      value: t("farm_stat_1_val"),
      label: t("farm_stat_1_lbl"),
      desc: t("farm_stat_1_desc"),
    },
    {
      icon: <Thermometer className="h-6 w-6 stroke-[1.5]" />,
      value: t("farm_stat_2_val"),
      label: t("farm_stat_2_lbl"),
      desc: t("farm_stat_2_desc"),
    },
    {
      icon: <Zap className="h-6 w-6 stroke-[1.5]" />,
      value: t("farm_stat_3_val"),
      label: t("farm_stat_3_lbl"),
      desc: t("farm_stat_3_desc"),
    },
    {
      icon: <ShieldCheck className="h-6 w-6 stroke-[1.5]" />,
      value: t("farm_stat_4_val"),
      label: t("farm_stat_4_lbl"),
      desc: t("farm_stat_4_desc"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-navy">
      {/* Premium Hero Banner Section */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Image with High Contrast Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={farmSolutionsHeroBg}
            alt="Farm Solutions Glass Greenhouse"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay to provide text readability and blend with dark aesthetics */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/35 to-transparent md:bg-gradient-to-r md:from-slate-950/75 md:via-slate-950/30 md:to-transparent" />
        </div>

        {/* Main Hero Content */}
        <Container className="z-10 relative w-full">
          <div className="max-w-4xl mx-auto lg:mx-0">
            {/* Breadcrumb Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 text-[10px] sm:text-xs font-display font-black tracking-wider text-white/80 mb-6 select-none"
            >
              <span className="uppercase">{breadcrumbParts[0]?.trim()}</span>
              {breadcrumbParts[1] && (
                <>
                  <span className="text-white/40 font-normal">&gt;</span>
                  <span className="text-brand-green uppercase">
                    {breadcrumbParts[1].trim()}
                  </span>
                </>
              )}
            </motion.div>

            {/* Main Header Title */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[58px] tracking-tight leading-[1.08] text-white">
                {t("farm_title_1")} <br />
                {(() => {
                  const title2 = t("farm_title_2");
                  const greenText = t("farm_title_green");
                  if (title2.includes(greenText)) {
                    const parts = title2.split(greenText);
                    return (
                      <>
                        {parts[0]}
                        <span className="text-brand-green">{greenText}</span>
                        {parts[1]}
                      </>
                    );
                  }
                  return title2;
                })()}
              </h1>
            </motion.div>

            {/* Description Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 space-y-2 max-w-2xl text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-sans font-medium"
            >
              <p>{t("farm_subtitle_1")}</p>
              <p className="text-slate-400 font-semibold">
                {t("farm_subtitle_2")}
              </p>
            </motion.div>

            {/* CTA Button Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 mt-8"
            >
              <Button
                onClick={handleScrollToContact}
                variant="primary"
                size="lg"
                className="group flex items-center justify-center space-x-2 bg-brand-green hover:bg-brand-green-dark border-brand-green hover:border-brand-green-dark shadow-lg shadow-brand-green/20"
              >
                <span>{t("farm_cta_study")}</span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                onClick={handleScrollToSolutions}
                variant="outline"
                size="lg"
                className="group flex items-center justify-center space-x-2 border-white/60 hover:border-white text-white hover:bg-white/10 shadow-sm"
              >
                <span>{t("farm_cta_explore")}</span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
          {/* Bottom Glassmorphic Statistics Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-16 lg:mt-20"
          >
            {statCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-400/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-start space-x-4 shadow-xl hover:border-white/20 transition-all duration-300"
              >
                <div className="bg-brand-green/10 text-brand-green p-3 rounded-full flex-shrink-0 border border-brand-green/20 filter drop-shadow-[0_0_6px_rgba(16,185,129,0.3)]">
                  {card.icon}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xl sm:text-2xl font-display font-black text-white leading-none">
                    {card.value}
                  </span>
                  <span className="text-xs font-bold text-white tracking-wide mt-1.5 min-h-[16px] flex items-end">
                    {card.label}
                  </span>
                  <span className="text-[10px] text-slate-400 leading-normal mt-1 font-sans">
                    {card.desc}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Feature Cards & Architecture Section */}
      <section className="py-20 bg-slate-50">
        <Container className="space-y-8">
          {/* Row 1: Aquaponics & Shrimp Farming */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <FeatureCard
              title={t("card_1_title")}
              subtitle={t("card_1_subtitle")}
              description={t("card_1_desc")}
              bullets={t("card_1_bullets")
                .split(",")
                .map((b) => b.trim())}
              image={fishPlants}
              themeColor="green"
            />
            <FeatureCard
              title={t("card_2_title")}
              subtitle={t("card_2_subtitle")}
              description={t("card_2_desc")}
              bullets={t("card_2_bullets")
                .split(",")
                .map((b) => b.trim())}
              image={shrim}
              themeColor="blue"
            />
          </div>

          {/* Row 2: Shrimp Hatchery & Integrated Energy Architecture */}
          <div className="grid grid-cols-1 xl:grid-cols-10 gap-8">
            <div className="xl:col-span-4 flex">
              <NurseryCard
                title={t("nursery_title")}
                subtitle={t("nursery_subtitle")}
                description={t("nursery_desc")}
                image={shrimpNursery}
                specs={{
                  waterTempLabel: t("nursery_spec_1_lbl"),
                  waterTempValue: t("nursery_spec_1_val"),
                  oxygenLabel: t("nursery_spec_2_lbl"),
                  oxygenValue: t("nursery_spec_2_val"),
                  phLabel: t("nursery_spec_3_lbl"),
                  phValue: t("nursery_spec_3_val"),
                  salinityLabel: t("nursery_spec_4_lbl"),
                  salinityValue: t("nursery_spec_4_val"),
                  uvLabel: t("nursery_spec_5_lbl"),
                  uvValue: t("nursery_spec_5_val"),
                  powerLabel: t("nursery_spec_6_lbl"),
                  powerValue: t("nursery_spec_6_val"),
                }}
              />
            </div>
            <div className="xl:col-span-6 flex">
              <IntegratedArchitecture />
            </div>
          </div>

          {/* Row 3: Why Kuodia Farm Solutions */}
          <WhyKuodia />

          {/* Row 4: Featured Project & Zalo Contact CTA */}
          <ContactFeatured />
        </Container>
      </section>
    </div>
  );
};

export default Farms;
