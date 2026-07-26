import React from "react";
import { ArrowRight, Thermometer, Droplet, Activity, Sliders, ShieldCheck, BatteryCharging } from "lucide-react";

interface NurseryCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href?: string;
  // Specifications translated
  specs: {
    waterTempLabel: string;
    waterTempValue: string;
    oxygenLabel: string;
    oxygenValue: string;
    phLabel: string;
    phValue: string;
    salinityLabel: string;
    salinityValue: string;
    uvLabel: string;
    uvValue: string;
    powerLabel: string;
    powerValue: string;
  };
}

export const NurseryCard: React.FC<NurseryCardProps> = ({
  title,
  subtitle,
  description,
  image,
  href = "#",
  specs,
}) => {
  const specList = [
    { icon: <Thermometer className="h-4.5 w-4.5 text-brand-green" />, label: specs.waterTempLabel, value: specs.waterTempValue },
    { icon: <Droplet className="h-4.5 w-4.5 text-brand-green" />, label: specs.oxygenLabel, value: specs.oxygenValue },
    { icon: <Activity className="h-4.5 w-4.5 text-brand-green" />, label: specs.phLabel, value: specs.phValue },
    { icon: <Sliders className="h-4.5 w-4.5 text-brand-green" />, label: specs.salinityLabel, value: specs.salinityValue },
    { icon: <ShieldCheck className="h-4.5 w-4.5 text-brand-green" />, label: specs.uvLabel, value: specs.uvValue },
    { icon: <BatteryCharging className="h-4.5 w-4.5 text-brand-green" />, label: specs.powerLabel, value: specs.powerValue },
  ];

  return (
    <div className="relative flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-900/5 transition-all duration-300 min-h-[460px] w-full">
      {/* Left Column: Content */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between z-10 bg-white">
        <div className="space-y-4">
          {/* Header */}
          <div className="space-y-1">
            <h3 className="font-display font-black text-lg tracking-wider uppercase text-brand-navy">
              {title}
            </h3>
            <p className="font-display font-bold text-sm text-brand-navy tracking-tight">
              {subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-600 font-sans text-xs leading-relaxed font-medium">
            {description}
          </p>

          {/* Specifications Table */}
          <div className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50">
            {specList.map((spec, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between px-3 py-2 border-b border-slate-100 last:border-0 hover:bg-slate-50/80 transition-colors"
              >
                <div className="flex items-center space-x-2.5 min-w-0">
                  <div className="flex-shrink-0">{spec.icon}</div>
                  <span className="text-[11px] font-sans font-semibold text-slate-600 truncate">
                    {spec.label}
                  </span>
                </div>
                <span className="text-[11px] font-sans font-bold text-slate-800 text-right ml-4 flex-shrink-0">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Learn More Link */}
        <div className="pt-6">
          <a
            href={href}
            className="inline-flex items-center space-x-1.5 font-display font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer text-brand-navy hover:text-brand-green hover:translate-x-1"
          >
            <span>LEARN MORE</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Right Column: Image and Blend Overlay */}
      <div className="w-full md:w-1/2 relative min-h-[240px] md:min-h-full bg-slate-100 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover absolute inset-0 select-none pointer-events-none"
        />
        {/* Responsive Blend Gradient */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="block md:hidden absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default NurseryCard;
