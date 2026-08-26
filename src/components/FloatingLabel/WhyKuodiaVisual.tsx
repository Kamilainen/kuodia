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
  tooltipAlign?: "left" | "center" | "right";
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
  tooltipAlign = "center",
}) => {
  const getAlignClass = () => {
    switch (tooltipAlign) {
      case "left":
        return "left-0";
      case "right":
        return "right-0";
      case "center":
      default:
        return "left-1/2 -translate-x-1/2";
    }
  };

  const getArrowAlignClass = () => {
    switch (tooltipAlign) {
      case "left":
        return "left-4";
      case "right":
        return "right-4";
      case "center":
      default:
        return "left-1/2 -translate-x-1/2";
    }
  };

  return (
    <div
      id={`hotspot-${id}`}
      className="absolute z-20 group"
      style={{ top, left }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Pulse Dot */}
      <div className="relative flex items-center justify-center cursor-pointer p-1">
        <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-brand-green opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-green border-2 border-white shadow-md"></span>
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
            className={`absolute w-60 sm:w-68 max-w-[calc(100vw-2rem)] bg-slate-900/95 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-xl shadow-2xl border border-white/15 text-left z-30 ${getAlignClass()} ${
              tooltipDirection === "down" ? "top-7" : "bottom-7"
            }`}
          >
            {/* Arrow Pointer */}
            <div
              className={`absolute w-2.5 h-2.5 bg-slate-900/95 border-white/15 rotate-45 ${getArrowAlignClass()} ${
                tooltipDirection === "down"
                  ? "-top-1.5 border-t border-l"
                  : "-bottom-1.5 border-b border-r"
              }`}
            />

            <div className="flex items-center space-x-2 mb-1.5 text-brand-green-light">
              {icon}
              <h4 className="font-display font-bold text-xs uppercase tracking-wider">
                {title}
              </h4>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
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
      direction: "down" as const,
      align: "left" as const,
    },
    {
      id: "recovery",
      top: "40%",
      left: "18%",
      title: t("hotspot_recovery"),
      description: t("hotspot_recovery_desc"),
      icon: <RefreshCw className="h-4 w-4" />,
      direction: "up" as const,
      align: "left" as const,
    },
    {
      id: "pump",
      top: "74%",
      left: "68%",
      title: t("hotspot_pump"),
      description: t("hotspot_pump_desc"),
      icon: <Fan className="h-4 w-4" />,
      direction: "up" as const,
      align: "right" as const,
    },
    {
      id: "mgmt",
      top: "74%",
      left: "90%",
      title: t("hotspot_mgmt"),
      description: t("hotspot_mgmt_desc"),
      icon: <Cpu className="h-4 w-4" />,
      direction: "up" as const,
      align: "right" as const,
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
              tooltipDirection={spot.direction}
              tooltipAlign={spot.align}
              onHover={(active) =>
                setActiveHotspot(active ? spot.id : null)
              }
            />
          ))}

          {/* Overlay labels (matching design static texts) */}
          <div className="absolute top-4 right-4 z-10 flex flex-col items-end space-y-1.5 hidden sm:flex">
            {hotspots.map((spot) => (
              <button
                key={`label-${spot.id}`}
                type="button"
                onMouseEnter={() => setActiveHotspot(spot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
                onClick={() =>
                  setActiveHotspot(activeHotspot === spot.id ? null : spot.id)
                }
                className={`px-2.5 py-1 text-[9px] font-bold text-white rounded shadow-sm transition-all cursor-pointer ${
                  activeHotspot === spot.id
                    ? "bg-brand-green scale-105"
                    : "bg-brand-navy/70 hover:bg-brand-navy"
                }`}
              >
                {spot.title}
              </button>
            ))}
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
