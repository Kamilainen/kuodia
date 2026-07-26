import React from "react";
import { useTranslation } from "../context/LanguageContext";
import { Wrench, ShieldCheck, Leaf, TrendingDown, TrendingUp } from "lucide-react";

export const WhyKuodia: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    {
      icon: <Wrench className="h-5 w-5 text-emerald-600" />,
      title: t("why_item_1_title"),
      desc: t("why_item_1_desc"),
    },
    {
      icon: <TrendingDown className="h-5 w-5 text-emerald-600" />,
      title: t("why_item_2_title"),
      desc: t("why_item_2_desc"),
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: t("why_item_3_title"),
      desc: t("why_item_3_desc"),
    },
    {
      icon: <Leaf className="h-5 w-5 text-emerald-600" />,
      title: t("why_item_4_title"),
      desc: t("why_item_4_desc"),
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-emerald-600" />,
      title: t("why_item_5_title"),
      desc: t("why_item_5_desc"),
    },
  ];

  return (
    <div className="bg-white border border-slate-150 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/5 w-full">
      {/* Title */}
      <h3 className="font-display font-black text-lg text-emerald-700 uppercase tracking-wider mb-6 pb-4 border-b border-slate-100">
        {t("why_farm_title")}
      </h3>

      {/* Grid of items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start space-x-3.5">
            {/* Circular Icon Outline */}
            <div className="flex-shrink-0 h-10 w-10 rounded-full border border-emerald-100 bg-emerald-50/50 flex items-center justify-center">
              {item.icon}
            </div>
            {/* Content */}
            <div className="flex flex-col space-y-1">
              <span className="text-xs sm:text-sm font-display font-black text-slate-800 leading-snug">
                {item.title}
              </span>
              <span className="text-[10px] sm:text-xs font-sans font-semibold text-slate-500 leading-normal">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyKuodia;
