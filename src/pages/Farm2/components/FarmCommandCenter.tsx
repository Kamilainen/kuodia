import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import {
  TrendingUp,
  Droplets,
  Zap,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import kubiMascot from "../../../assets/kubi.png";

export const FarmCommandCenter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="lg:col-span-5 xl:col-span-5 relative mt-4 lg:mt-0 lg:self-end"
    >
      {/* Glass Command Center Card using brand navy glass styling */}
      <div className="bg-brand-navy-dark/35 backdrop-blur-xl border border-brand-green/30 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-visible">
        
        {/* Header Title Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green" />
            </span>
            <h3 className="text-xs sm:text-sm font-display font-black tracking-wider text-brand-green uppercase">
              {t("farm2_cmd_title")}
            </h3>
          </div>
          <span className="text-[10px] font-display font-bold px-2 py-0.5 rounded bg-brand-green/20 text-brand-green border border-brand-green/30 tracking-wider">
            LIVE MONITORING
          </span>
        </div>

        {/* Top Metrics Grid (3 Stat Boxes) */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-4">
          {/* Yield */}
          <div className="bg-brand-navy/80 border border-white/10 rounded-xl p-3 flex flex-col justify-between">
            <span className="text-[10px] font-display font-bold text-slate-300 uppercase tracking-wider">
              {t("farm2_cmd_yield_lbl")}
            </span>
            <div className="flex items-center space-x-1 mt-2 text-brand-green">
              <TrendingUp className="h-4 w-4 flex-shrink-0" />
              <span className="text-base sm:text-xl font-display font-black">
                {t("farm2_cmd_yield_val")}
              </span>
            </div>
          </div>

          {/* Water Savings */}
          <div className="bg-brand-navy/80 border border-white/10 rounded-xl p-3 flex flex-col justify-between">
            <span className="text-[10px] font-display font-bold text-slate-300 uppercase tracking-wider">
              {t("farm2_cmd_water_lbl")}
            </span>
            <div className="flex items-center space-x-1 mt-2 text-sky-400">
              <Droplets className="h-4 w-4 flex-shrink-0" />
              <span className="text-base sm:text-xl font-display font-black">
                {t("farm2_cmd_water_val")}
              </span>
            </div>
          </div>

          {/* Energy Savings */}
          <div className="bg-brand-navy/80 border border-white/10 rounded-xl p-3 flex flex-col justify-between">
            <span className="text-[10px] font-display font-bold text-slate-300 uppercase tracking-wider">
              {t("farm2_cmd_energy_lbl")}
            </span>
            <div className="flex items-center space-x-1 mt-2 text-amber-300">
              <Zap className="h-4 w-4 flex-shrink-0" />
              <span className="text-base sm:text-xl font-display font-black">
                {t("farm2_cmd_energy_val")}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Grid (2 Stat Boxes) */}
        <div className="grid grid-cols-2 gap-3">
          {/* Active Alerts */}
          <div className="bg-brand-navy/80 border border-white/10 rounded-xl p-3 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-display font-bold text-slate-300 uppercase block tracking-wider">
                {t("farm2_cmd_alerts_lbl")}
              </span>
              <span className="text-lg font-display font-black text-rose-400">
                {t("farm2_cmd_alerts_val")}
              </span>
            </div>
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <AlertTriangle className="h-5 w-5" />
            </div>
          </div>

          {/* System Status */}
          <div className="bg-brand-navy/80 border border-white/10 rounded-xl p-3 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-display font-bold text-slate-300 uppercase block tracking-wider">
                {t("farm2_cmd_status_lbl")}
              </span>
              <span className="text-xs sm:text-sm font-display font-bold text-brand-green">
                {t("farm2_cmd_status_val")}
              </span>
            </div>
            <div className="p-2 rounded-lg bg-brand-green/10 text-brand-green border border-brand-green/20">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Kubi Mascot Character */}
        <motion.img
          src={kubiMascot}
          alt="Kubi Mascot Assistant"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute -right-8 -bottom-10 sm:-right-12 sm:-bottom-12 w-32 sm:w-40 md:w-44 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] pointer-events-none z-20"
        />
      </div>
    </motion.div>
  );
};

export default FarmCommandCenter;
