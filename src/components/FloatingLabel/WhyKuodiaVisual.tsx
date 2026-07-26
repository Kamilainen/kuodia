import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, RefreshCw, Fan, Cpu, Info } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";
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

interface WhyKuodiaVisualProps {
  activeHotspot: string | null;
  setActiveHotspot: (id: string | null) => void;
}

export const WhyKuodiaVisual: React.FC<WhyKuodiaVisualProps> = ({
  activeHotspot,
  setActiveHotspot,
}) => {
  const { t, language } = useTranslation();

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

  return (
    <div className="lg:col-span-6 order-1">
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
  );
};

export default WhyKuodiaVisual;
