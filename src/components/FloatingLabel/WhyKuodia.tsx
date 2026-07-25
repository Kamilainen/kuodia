import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Sun,
  RefreshCw,
  Fan,
  Cpu,
  Info,
} from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";
import Container from "../Container";
import Button from "../Button";

interface HotspotProps {
  id: string;
  top: string;
  left: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  onHover: (active: boolean) => void;
}

const Hotspot: React.FC<HotspotProps> = ({
  id,
  top,
  left,
  title,
  description,
  icon,
  isActive,
  onHover,
}) => {
  return (
    <div
      id={`hotspot-${id}`}
      className="absolute z-20 group"
      style={{ top, left }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Pulse Dot */}
      <div className="relative flex items-center justify-center cursor-pointer">
        <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-brand-green opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green border-2 border-white shadow-md"></span>
      </div>

      {/* Hover Card */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 bg-slate-900/95 backdrop-blur-md text-white p-4 rounded-xl shadow-xl border border-white/10 text-left"
          >
            <div className="flex items-center space-x-2 mb-1.5 text-brand-green-light">
              {icon}
              <h4 className="font-display font-bold text-xs uppercase tracking-wider">
                {title}
              </h4>
            </div>
            <p className="text-[10px] text-slate-300 leading-relaxed">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const WhyKuodia: React.FC = () => {
  const { t } = useTranslation();
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const checklist = [
    t("why_check_1"),
    t("why_check_2"),
    t("why_check_3"),
    t("why_check_4"),
  ];

  const hotspots = [
    {
      id: "solar",
      top: "15%",
      left: "60%",
      title: t("hotspot_solar"),
      description: t("hotspot_solar_desc"),
      icon: <Sun className="h-4 w-4" />,
    },
    {
      id: "recovery",
      top: "40%",
      left: "42%",
      title: t("hotspot_recovery"),
      description: t("hotspot_recovery_desc"),
      icon: <RefreshCw className="h-4 w-4" />,
    },
    {
      id: "pump",
      top: "72%",
      left: "30%",
      title: t("hotspot_pump"),
      description: t("hotspot_pump_desc"),
      icon: <Fan className="h-4 w-4" />,
    },
    {
      id: "mgmt",
      top: "55%",
      left: "80%",
      title: t("hotspot_mgmt"),
      description: t("hotspot_mgmt_desc"),
      icon: <Cpu className="h-4 w-4" />,
    },
  ];

  const handleScrollToContact = () => {
    const contactSec = document.getElementById("contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-16 bg-white border-b border-slate-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Text Side */}
          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-3">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-brand-navy tracking-tight leading-tight">
                {t("why_title")}
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              <p className="font-semibold text-slate-800">{t("why_p1")}</p>
              <p>{t("why_p2")}</p>
            </div>

            {/* Checklist */}
            <ul className="space-y-3 pt-2">
              {checklist.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700"
                >
                  <div className="bg-brand-green-bg text-brand-green p-1 rounded-full flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                onClick={handleScrollToContact}
                variant="primary"
                size="md"
                className="group flex items-center space-x-2"
              >
                <span>{t("why_cta")}</span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Visual Side - Interactive Hotspots */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-video lg:aspect-square flex items-center justify-center">
              {/* Architectural Image */}
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                alt="Modern Villa Cutaway Visual"
                className="w-full h-full object-cover select-none"
              />

              {/* Blur Overlay when Hotspot Active */}
              <div
                className={`absolute inset-0 bg-slate-900/10 transition-opacity duration-300 pointer-events-none ${activeHotspot ? "opacity-100" : "opacity-0"}`}
              />

              {/* Hotspots */}
              {hotspots.map((spot) => (
                <Hotspot
                  key={spot.id}
                  id={spot.id}
                  top={spot.top}
                  left={spot.left}
                  title={spot.title}
                  description={spot.description}
                  icon={spot.icon}
                  isActive={activeHotspot === spot.id}
                  onHover={(active) =>
                    setActiveHotspot(active ? spot.id : null)
                  }
                />
              ))}

              {/* Instruction Banner inside visual */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-100 shadow-lg flex items-center space-x-2.5 z-10">
                <Info className="h-4 w-4 text-brand-green flex-shrink-0" />
                <p className="text-[10px] text-slate-500 font-medium leading-normal">
                  {t("language" as any) === "vi"
                    ? "Di chuột vào các điểm nhấp nháy để xem sơ đồ giải pháp năng lượng."
                    : "Hover over the pulsing spots to view our building energy solutions."}
                </p>
              </div>

              {/* Overlay labels (matching design static texts) */}
              <div className="absolute top-4 right-4 z-10 flex flex-col items-end space-y-1.5 pointer-events-none hidden sm:flex">
                <span
                  className={`px-2 py-1 text-[9px] font-bold text-white rounded shadow-sm ${activeHotspot === "solar" ? "bg-brand-green" : "bg-brand-navy/70"}`}
                >
                  {t("hotspot_solar")}
                </span>
                <span
                  className={`px-2 py-1 text-[9px] font-bold text-white rounded shadow-sm ${activeHotspot === "recovery" ? "bg-brand-green" : "bg-brand-navy/70"}`}
                >
                  {t("hotspot_recovery")}
                </span>
                <span
                  className={`px-2 py-1 text-[9px] font-bold text-white rounded shadow-sm ${activeHotspot === "pump" ? "bg-brand-green" : "bg-brand-navy/70"}`}
                >
                  {t("hotspot_pump")}
                </span>
                <span
                  className={`px-2 py-1 text-[9px] font-bold text-white rounded shadow-sm ${activeHotspot === "mgmt" ? "bg-brand-green" : "bg-brand-navy/70"}`}
                >
                  {t("hotspot_mgmt")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyKuodia;
