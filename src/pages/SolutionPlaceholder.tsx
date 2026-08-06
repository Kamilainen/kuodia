import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "../context/LanguageContext";
import Container from "../components/Container";
import Button from "../components/Button";
import { ArrowRight, Sparkles, Building, Home as HomeIcon, Factory } from "lucide-react";

export const SolutionPlaceholder: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { t } = useTranslation();

  // Helper to trigger contact mascot menu
  const handleContactMascot = () => {
    window.dispatchEvent(new CustomEvent("open-contact-mascot"));
  };

  // Dynamic titles and metadata based on category
  const getCategoryDetails = () => {
    switch (category) {
      case "hotel":
        return {
          title: t("sol_hotel"),
          subtitle: t("sol_hotel_sub" as any) || "Sustainable Energy Solutions for Premium Hospitality",
          desc: t("sol_hotel_desc" as any) || "We engineer integrated heating, cooling, and water systems that reduce operational costs for hotels and resorts while ensuring absolute comfort for guests.",
          icon: <Building className="h-16 w-16 text-brand-green" />,
        };
      case "residential":
        return {
          title: t("sol_residential"),
          subtitle: t("sol_residential_sub" as any) || "High-Performance Net-Zero Energy Homes",
          desc: t("sol_residential_desc" as any) || "Smart solar energy, heat pumps, and automated environmental controls designed for modern, eco-friendly residential villas and residential estates.",
          icon: <HomeIcon className="h-16 w-16 text-brand-green" />,
        };
      case "factory":
        return {
          title: t("sol_factory" as any) || "Factory Solutions",
          subtitle: t("sol_factory_sub" as any) || "Industrial Waste Heat Recovery & Energy Efficiency",
          desc: t("sol_factory_desc" as any) || "Advanced thermodynamic engineering for manufacturing plants. Recover waste energy, optimize production processes, and dramatically lower industrial carbon footprints.",
          icon: <Factory className="h-16 w-16 text-brand-green" />,
        };
      default:
        return {
          title: "Custom Solutions",
          subtitle: "Tailored Engineering Solutions",
          desc: "Custom thermodynamic and renewable energy systems engineered for your specific industrial needs.",
          icon: <Sparkles className="h-16 w-16 text-brand-green" />,
        };
    }
  };

  const details = getCategoryDetails();

  return (
    <div className="flex flex-col min-h-screen bg-brand-navy text-white">
      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Dynamic Abstract Background Grid */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(139,197,61,0.08),transparent_45%)]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,43,98,0.8),transparent_70%)]" />

        <Container className="z-10 relative w-full">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center space-x-2 text-xs font-display font-black tracking-wider text-white/60 select-none uppercase"
            >
              <span>{t("nav_solutions")}</span>
              <span className="text-white/30">&gt;</span>
              <span className="text-brand-green">{details.title}</span>
            </motion.div>

            {/* Icon Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl"
            >
              {details.icon}
            </motion.div>

            {/* Headings */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none"
              >
                {details.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-brand-green font-display font-bold text-lg sm:text-xl tracking-tight"
              >
                {details.subtitle}
              </motion.p>
            </div>

            {/* Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md max-w-2xl mx-auto shadow-2xl"
            >
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium font-sans">
                {details.desc}
              </p>
              
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={handleContactMascot}
                  variant="primary"
                  size="lg"
                  className="group bg-brand-green hover:bg-brand-green-light active:bg-brand-green text-white font-display font-bold space-x-2 rounded-full shadow-lg shadow-brand-green/20"
                >
                  <span>{t("farm_cta_study" as any) || "REQUEST FEASIBILITY STUDY"}</span>
                  <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
            
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SolutionPlaceholder;
