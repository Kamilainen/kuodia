import React from "react";
import { useTranslation } from "../context/LanguageContext";
import { Check } from "lucide-react";
import heatpump3 from "../assets/heatpump3.svg";

/* ─── Custom inline SVGs for cleaner, direct presentation ─── */
const IconGrid = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5.5 w-5.5 text-brand-navy">
    <path d="M18 4l-4 4h-4L6 4" />
    <path d="M12 2v20" />
    <path d="M5 12h14" />
    <path d="M7 16h10" />
    <path d="M3 22l9-20 9 20" />
  </svg>
);

const IconSolar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5.5 w-5.5 text-brand-navy">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18" />
    <path d="M15 3v18" />
    <path d="M3 9h18" />
    <path d="M3 15h18" />
  </svg>
);

const IconFuel = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5.5 w-5.5 text-brand-navy">
    <path d="M6 18V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1-1v2" />
    <path d="M12 11v4" />
    <path d="M10 13h4" />
  </svg>
);

const IconHVAC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5.5 w-5.5 text-brand-navy">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 12a4 4 0 1 0 0-8M12 12a4 4 0 1 0 8 0M12 12a4 4 0 1 0 0 8M12 12a4 4 0 1 0-8 0" />
  </svg>
);

const IconHeat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5.5 w-5.5 text-red-500">
    <path d="M8 20c0-4 3-4 3-8s-3-4-3-8" />
    <path d="M12 20c0-4 3-4 3-8s-3-4-3-8" />
    <path d="M16 20c0-4 3-4 3-8s-3-4-3-8" />
  </svg>
);

const IconHotWater = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5.5 w-5.5 text-orange-500">
    <path d="M12 2 C12 2 8 8 8 12a4 4 0 0 0 8 0c0-4-4-10-4-10z" />
  </svg>
);

const IconCooling = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5.5 w-5.5 text-cyan-500">
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
  </svg>
);

const Arrow = ({ color = "#002b62" }: { color?: string }) => (
  <svg width="18" height="8" viewBox="0 0 18 8" fill="none" className="flex-shrink-0 opacity-80 select-none pointer-events-none">
    <path d="M1 4h15M12 1l5 3-5 3" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectConceptCard: React.FC = () => {
  const { t } = useTranslation();
  const bodyText = t("ind_concept_body");
  const paragraphs = bodyText.split(/(?<=\.|\?)\s+/);

  return (
    <div className="bg-[#f8fafc] rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-2 sm:p-4 lg:p-6 w-full h-full flex flex-col justify-start gap-1 sm:gap-2.5 lg:gap-4 overflow-hidden">
      {/* Top Badge Title - visible always at the top of the card */}
      <div className="select-none leading-none">
        <span className="text-[6px] sm:text-[9.5px] lg:text-[11px] font-display font-bold tracking-wider text-brand-accent uppercase">
          {t("ind_concept_badge")}
        </span>
      </div>

      {/* ── Main content row ──────────────────────────────────── */}
      <div className="flex flex-row flex-1 items-stretch gap-1 sm:gap-3 lg:gap-4">
        
        {/* Col 1 — Description text (Hidden on mobile/tablet, only visible on desktop xl) */}
        <div className="hidden xl:flex xl:w-[22%] flex-shrink-0 flex-col justify-start pr-2">
          <h4 className="text-xs sm:text-sm font-display font-black text-brand-navy leading-tight mb-3">
            {t("ind_concept_subtitle")}
          </h4>
          <div className="space-y-2">
            {paragraphs.map((p, idx) => (
              <p key={idx} className="text-[10px] text-brand-navy/90 font-sans leading-relaxed font-semibold">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Col 2 — Energy Inputs */}
        <div className="flex-[1.1] min-w-0 flex flex-col justify-start gap-1.5 sm:gap-3">
          <p className="text-[5.5px] sm:text-[8px] lg:text-[9px] font-display font-black text-brand-navy/60 uppercase tracking-widest text-center leading-tight mb-0.5 sm:mb-1 select-none">
            ENERGY<br />INPUTS
          </p>
          <div className="flex flex-col gap-1 sm:gap-3">
            {[
              { icon: <IconGrid />, label: "Grid" },
              { icon: <IconSolar />, label: "Solar PV" },
              { icon: <IconFuel />, label: "Fuel (if any)" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-0.5 sm:gap-1">
                <div className="flex items-center gap-0.5 sm:gap-1.5">
                  <div className="flex items-center justify-center flex-shrink-0 select-none scale-[0.55] sm:scale-[0.85] lg:scale-100 origin-left">
                    {item.icon}
                  </div>
                  <span className="text-[6px] sm:text-[8.5px] lg:text-[10px] text-brand-navy font-sans font-bold leading-tight">{item.label}</span>
                </div>
                <span className="scale-[0.5] sm:scale-[0.85] lg:scale-100 origin-right">
                  <Arrow />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3 — Centre diagram */}
        <div className="flex-[1.8] min-w-0 flex flex-col items-center justify-start p-0.5 sm:p-2 relative">
          <div className="text-center mb-1.5 sm:mb-3 select-none">
            <span className="text-[5.5px] sm:text-[8.5px] lg:text-[9.5px] font-display font-black text-brand-navy uppercase tracking-wider block leading-tight">
              INTEGRATED ENERGY ECOSYSTEM
            </span>
            <span className="text-[5px] sm:text-[7.5px] lg:text-[8.5px] text-slate-400 font-sans font-semibold">Centralized management</span>
          </div>
          <div className="flex items-center w-full justify-center">
            <img
              src={heatpump3}
              alt={t("ind_concept_img_alt")}
              className="w-full max-h-[60px] sm:max-h-[120px] lg:max-h-[140px] object-contain select-none pointer-events-none"
            />
          </div>
        </div>

        {/* SVG Connector Column */}
        <div className="w-3 sm:w-8 flex-shrink-0 flex flex-col justify-start select-none pointer-events-none">
          <div className="text-[7px] sm:text-[8.5px] lg:text-[9px] font-display font-black leading-tight mb-1 sm:mb-2 select-none invisible pl-0.5">
            OUTPUTS TO<br />FACILITY
          </div>
          <div className="h-[90px] sm:h-[150px] lg:h-[200px] py-0.5 sm:py-1">
            <svg viewBox="0 0 32 200" fill="none" preserveAspectRatio="none" className="w-full h-full">
              <path d="M 0 100 C 12 100, 12 20, 30 20" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M 0 100 C 12 100, 12 73, 30 73" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M 0 100 C 12 100, 12 127, 30 127" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M 0 100 C 12 100, 12 180, 30 180" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>

        {/* Col 4 — Outputs */}
        <div className="flex-[1.3] min-w-0 flex flex-col justify-start">
          <p className="text-[5.5px] sm:text-[8.5px] lg:text-[9px] font-display font-black text-brand-navy/60 uppercase tracking-widest text-left leading-tight mb-1 sm:mb-2 select-none pl-0.5">
            OUTPUTS TO<br />FACILITY
          </p>
          <div className="flex flex-col justify-between h-[90px] sm:h-[150px] lg:h-[200px] py-0.5 sm:py-1">
            {[
              { icon: <IconHVAC />, label: "HVAC" },
              { icon: <IconHeat />, label: "Process Heat" },
              { icon: <IconHotWater />, label: "Hot Water" },
              { icon: <IconCooling />, label: "Process Cooling" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-0.5 sm:gap-1.5 h-5 sm:h-10">
                <div className="flex-shrink-0 select-none scale-[0.55] sm:scale-[0.85] lg:scale-100 origin-left">{item.icon}</div>
                <span className="text-[6px] sm:text-[8.5px] lg:text-[10px] text-brand-navy font-sans font-bold leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Col 5 — Typical Benefits */}
        <div className="flex-[1.6] min-w-0 flex flex-col justify-start gap-1.5 sm:gap-3 lg:border-l lg:border-slate-200/80 lg:pl-4 pl-1">
          <p className="text-[5.5px] sm:text-[8.5px] lg:text-[9px] font-display font-black tracking-wider leading-tight mb-1 sm:mb-2 select-none">
            <span className="text-brand-accent uppercase">TYPICAL BENEFITS</span>{" "}
            <span className="text-slate-400 font-normal lowercase font-sans font-medium hidden sm:inline">(indicative)</span>
          </p>
          <div className="flex flex-col gap-1 sm:gap-3">
            {[
              "20–50% Energy Savings",
              "30–70% Water Savings",
              "Up to 60% Heat Recovery",
              "ROI: 3–6 years",
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-0.5 sm:gap-1.5 lg:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 lg:w-4.5 lg:h-4.5 rounded-full bg-[#2e7d32] flex items-center justify-center flex-shrink-0 select-none shadow-sm shadow-[#2e7d32]/10">
                  <Check className="h-1.5 w-1.5 sm:h-2.2 sm:w-2.2 lg:h-2.5 lg:w-2.5 text-white stroke-[3.5]" />
                </div>
                <span className="text-[6px] sm:text-[8.5px] lg:text-[10px] text-brand-navy font-sans font-bold leading-snug">{b}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectConceptCard;
