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
// // import solarSystemImg from "../../assets/solarsystem.png";
import pipelineVideo from "../../assets/video-pipeline.mp4";

interface HotspotProps {
  id: string;
  top: string;
  left: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  onHover: (active: boolean) => void;
  tooltipDirection?: "up" | "down";
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
  tooltipDirection = "up",
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
            initial={{
              opacity: 0,
              scale: 0.9,
              y: tooltipDirection === "down" ? -10 : 10,
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: tooltipDirection === "down" ? -10 : 10,
            }}
            transition={{ duration: 0.2 }}
            className={`absolute left-1/2 -translate-x-1/2 w-64 bg-slate-900/95 backdrop-blur-md text-white p-4 rounded-xl shadow-xl border border-white/10 text-left ${
              tooltipDirection === "down" ? "top-6" : "bottom-6"
            }`}
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
  const { t, language } = useTranslation();
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
      top: "12%",
      left: "32%",
      title: t("hotspot_solar"),
      description: t("hotspot_solar_desc"),
      icon: <Sun className="h-4 w-4" />,
    },
    {
      id: "recovery",
      top: "40%",
      left: "18%",
      title: t("hotspot_recovery"),
      description: t("hotspot_recovery_desc"),
      icon: <RefreshCw className="h-4 w-4" />,
    },
    {
      id: "pump",
      top: "74%",
      left: "68%",
      title: t("hotspot_pump"),
      description: t("hotspot_pump_desc"),
      icon: <Fan className="h-4 w-4" />,
    },
    {
      id: "mgmt",
      top: "74%",
      left: "90%",
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

          <div className="lg:col-span-6">
            <div className="rounded-2xl shadow-2xl overflow-hidden border border-slate-200/60 bg-white">
              <div className="relative bg-slate-50 aspect-[16/11] w-full flex items-center justify-center border-b border-slate-200/60">
                {/* Pre-rendered 3D Pipeline Video Loop */}
                <video
                  src={pipelineVideo}
                  className="w-full h-full object-cover select-none animate-fade-in"
                  autoPlay
                  loop
                  muted
                  playsInline
                />

              {/* Architectural Image (Commented out)
              <img
                src={solarSystemImg}
                alt="Kuodia Solar System Cutaway Visual"
                className="w-full h-full object-cover select-none rounded-2xl"
              />
              */}

              {/* Animated Flow Overlay (Commented out)
              <svg
                viewBox="0 0 1000 667"
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
              >
                <defs>
                  <filter id="glow-blur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" />
                  </filter>
                </defs>

                {/* --- RED PIPES (Heating Loops) --- }
                {/* Red Riser 1 (Leftmost vertical) }
                <path d="M 148 560 L 148 120" stroke="#7f1d1d" strokeWidth="5.5" fill="none" opacity="0.45" className="flow-bg" />
                <path d="M 148 560 L 148 120" stroke="#ef4444" strokeWidth="4.5" fill="none" filter="url(#glow-blur)" className="flow-glow animate-red-flow" opacity="0.8" />
                <path d="M 148 560 L 148 120" stroke="#ffffff" strokeWidth="1.5" fill="none" className="flow-core animate-red-flow" />

                {/* Red Riser 2 (Right-middle vertical) }
                <path d="M 224 560 L 224 120" stroke="#7f1d1d" strokeWidth="5.5" fill="none" opacity="0.45" className="flow-bg" />
                <path d="M 224 560 L 224 120" stroke="#ef4444" strokeWidth="4.5" fill="none" filter="url(#glow-blur)" className="flow-glow animate-red-flow" opacity="0.8" />
                <path d="M 224 560 L 224 120" stroke="#ffffff" strokeWidth="1.5" fill="none" className="flow-core animate-red-flow" />

                {/* Floor 3 Ceiling Red Branch }
                <path d="M 148 205 L 850 205" stroke="#7f1d1d" strokeWidth="5.0" fill="none" opacity="0.45" className="flow-bg" />
                <path d="M 148 205 L 850 205" stroke="#ef4444" strokeWidth="4.0" fill="none" filter="url(#glow-blur)" className="flow-glow animate-red-flow" opacity="0.8" />
                <path d="M 148 205 L 850 205" stroke="#ffffff" strokeWidth="1.5" fill="none" className="flow-core animate-red-flow" />

                {/* Floor 2 Ceiling Red Branch }
                <path d="M 224 395 L 850 395" stroke="#7f1d1d" strokeWidth="5.0" fill="none" opacity="0.45" className="flow-bg" />
                <path d="M 224 395 L 850 395" stroke="#ef4444" strokeWidth="4.0" fill="none" filter="url(#glow-blur)" className="flow-glow animate-red-flow" opacity="0.8" />
                <path d="M 224 395 L 850 395" stroke="#ffffff" strokeWidth="1.5" fill="none" className="flow-core animate-red-flow" />

                {/* Basement Red Loop }
                <path d="M 520 580 L 30 580" stroke="#7f1d1d" strokeWidth="5.0" fill="none" opacity="0.45" className="flow-bg" />
                <path d="M 520 580 L 30 580" stroke="#ef4444" strokeWidth="4.0" fill="none" filter="url(#glow-blur)" className="flow-glow animate-red-flow" opacity="0.8" />
                <path d="M 520 580 L 30 580" stroke="#ffffff" strokeWidth="1.5" fill="none" className="flow-core animate-red-flow" />


                {/* --- BLUE PIPES (Cooling Loops) --- }
                {/* Blue Riser 1 (Left-middle vertical) }
                <path d="M 172 120 L 172 560" stroke="#1e3a8a" strokeWidth="5.5" fill="none" opacity="0.45" className="flow-bg" />
                <path d="M 172 120 L 172 560" stroke="#3b82f6" strokeWidth="4.5" fill="none" filter="url(#glow-blur)" className="flow-glow animate-blue-flow" opacity="0.8" />
                <path d="M 172 120 L 172 560" stroke="#ffffff" strokeWidth="1.5" fill="none" className="flow-core animate-blue-flow" />

                {/* Blue Riser 2 (Rightmost vertical) }
                <path d="M 248 120 L 248 560" stroke="#1e3a8a" strokeWidth="5.5" fill="none" opacity="0.45" className="flow-bg" />
                <path d="M 248 120 L 248 560" stroke="#3b82f6" strokeWidth="4.5" fill="none" filter="url(#glow-blur)" className="flow-glow animate-blue-flow" opacity="0.8" />
                <path d="M 248 120 L 248 560" stroke="#ffffff" strokeWidth="1.5" fill="none" className="flow-core animate-blue-flow" />

                {/* Floor 3 Ceiling Blue Branch }
                <path d="M 850 220 L 172 220" stroke="#1e3a8a" strokeWidth="5.0" fill="none" opacity="0.45" className="flow-bg" />
                <path d="M 850 220 L 172 220" stroke="#3b82f6" strokeWidth="4.0" fill="none" filter="url(#glow-blur)" className="flow-glow animate-blue-flow" opacity="0.8" />
                <path d="M 850 220 L 172 220" stroke="#ffffff" strokeWidth="1.5" fill="none" className="flow-core animate-blue-flow" />

                {/* Floor 2 Ceiling Blue Branch }
                <path d="M 850 410 L 248 410" stroke="#1e3a8a" strokeWidth="5.0" fill="none" opacity="0.45" className="flow-bg" />
                <path d="M 850 410 L 248 410" stroke="#3b82f6" strokeWidth="4.0" fill="none" filter="url(#glow-blur)" className="flow-glow animate-blue-flow" opacity="0.8" />
                <path d="M 850 410 L 248 410" stroke="#ffffff" strokeWidth="1.5" fill="none" className="flow-core animate-blue-flow" />

                {/* Basement Blue Loop }
                <path d="M 30 560 L 520 560" stroke="#1e3a8a" strokeWidth="5.0" fill="none" opacity="0.45" className="flow-bg" />
                <path d="M 30 560 L 520 560" stroke="#3b82f6" strokeWidth="4.0" fill="none" filter="url(#glow-blur)" className="flow-glow animate-blue-flow" opacity="0.8" />
                <path d="M 30 560 L 520 560" stroke="#ffffff" strokeWidth="1.5" fill="none" className="flow-core animate-blue-flow" />


                {/* --- YELLOW PIPES (Solar Thermal/Electrical) --- }
                <path d="M 520 95 L 320 100 L 224 120" stroke="#854d0e" strokeWidth="4.5" fill="none" opacity="0.45" className="flow-bg" />
                <path d="M 520 95 L 320 100 L 224 120" stroke="#eab308" strokeWidth="3.5" fill="none" filter="url(#glow-blur)" className="flow-glow animate-yellow-flow" opacity="0.85" />
                <path d="M 520 95 L 320 100 L 224 120" stroke="#ffffff" strokeWidth="1.5" fill="none" className="flow-core animate-yellow-flow" />
              </svg>

              <style>{`
                @keyframes flow-forward {
                  from { stroke-dashoffset: 120; }
                  to { stroke-dashoffset: 0; }
                }
                .flow-bg {
                  stroke-linecap: round;
                  stroke-linejoin: round;
                }
                .flow-glow {
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-dasharray: 45 75;
                }
                .flow-core {
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-dasharray: 45 75;
                }
                .animate-red-flow {
                  animation: flow-forward 2.2s linear infinite;
                }
                .animate-blue-flow {
                  animation: flow-forward 2.2s linear infinite;
                }
                .animate-yellow-flow {
                  animation: flow-forward 1.5s linear infinite;
                }
              `}</style>
              */}

              {/* Blur Overlay when Hotspot Active */}
              <div
                className={`absolute inset-0 bg-slate-900/10 transition-opacity duration-300 pointer-events-none rounded-2xl ${activeHotspot ? "opacity-100" : "opacity-0"}`}
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
                  tooltipDirection={spot.id === "solar" ? "down" : "up"}
                  onHover={(active) =>
                    setActiveHotspot(active ? spot.id : null)
                  }
                />
              ))}



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

            {/* Instruction Banner below visual */}
            <div className="bg-white px-4 py-3.5 flex items-center space-x-2.5">
              <Info className="h-4.5 w-4.5 text-brand-green flex-shrink-0" />
              <p className="text-xs text-slate-600 leading-normal font-semibold">
                {language === "vi"
                  ? "Di chuột vào các điểm nhấp nháy để xem sơ đồ giải pháp năng lượng."
                  : language === "es"
                  ? "Pase el cursor sobre los puntos parpadeantes para ver nuestras soluciones de energía para edificios."
                  : "Hover over the pulsing spots to view our building energy solutions."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </section>
  );
};

export default WhyKuodia;
