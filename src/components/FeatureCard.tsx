import React from "react";
import { Check, ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  image: string;
  themeColor: "green" | "blue";
  href?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  description,
  bullets,
  image,
  themeColor,
  href = "#",
}) => {
  const isGreen = themeColor === "green";

  // Color theme selectors
  const titleClass = isGreen ? "text-emerald-700" : "text-indigo-900";
  const iconBgClass = isGreen ? "bg-emerald-50 text-emerald-500 border-emerald-100" : "bg-blue-50 text-blue-500 border-blue-100";
  const linkClass = isGreen
    ? "text-emerald-600 hover:text-emerald-700 hover:translate-x-1"
    : "text-blue-600 hover:text-blue-700 hover:translate-x-1";

  return (
    <div className="relative flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-900/5 transition-all duration-300 min-h-[460px] w-full">
      {/* Left Column: Content */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between z-10 bg-white">
        <div className="space-y-4">
          {/* Main Title & Subtitle */}
          <div className="space-y-1">
            <h3 className={`font-display font-black text-lg tracking-wider uppercase ${titleClass}`}>
              {title}
            </h3>
            <p className="font-display font-bold text-sm text-slate-800 tracking-tight">
              {subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-600 font-sans text-xs leading-relaxed font-medium">
            {description}
          </p>

          {/* Check List Grid */}
          <ul className="space-y-2.5 pt-2">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-700 font-semibold font-sans">
                <span className={`p-0.5 rounded-full border flex-shrink-0 mt-0.5 ${iconBgClass}`}>
                  <Check className="h-3 w-3 stroke-[3]" />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Learn More Link */}
        <div className="pt-6">
          <a
            href={href}
            className={`inline-flex items-center space-x-1.5 font-display font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${linkClass}`}
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
        {/* On desktop/tablet (md+): horizontal fade from left to right */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* On mobile: vertical fade from top to bottom */}
        <div className="block md:hidden absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default FeatureCard;
