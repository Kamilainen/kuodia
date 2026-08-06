import React from "react";
import { useTranslation } from "../context/LanguageContext";
import { MapPin, ArrowRight } from "lucide-react";
import shrimImg from "../assets/shrim.png";
import ZaloContactCard from "./ZaloContactCard";
export const ContactFeatured: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
      {/* 1. Left Card: Featured Project */}
      <div className="relative flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-900/5 transition-all duration-300 min-h-[340px] w-full">
        {/* Left content block */}
        <div className="w-full md:w-[55%] p-6 flex flex-col justify-between z-10 bg-white">
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-display font-black text-xs sm:text-sm tracking-wider uppercase text-brand-green">
                {t("featured_project_title")}
              </h3>
              <p className="font-display font-black text-lg text-brand-navy tracking-tight leading-snug">
                {t("featured_project_name")}
              </p>
              <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-semibold font-sans pt-0.5">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                <span>{t("featured_project_location")}</span>
              </div>
            </div>

            {/* Project statistics */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 pt-2">
              <div>
                <span className="block text-base sm:text-lg font-display font-black text-brand-navy leading-tight">
                  {t("featured_stat_1_val")}
                </span>
                <span className="block text-[10px] font-sans font-bold text-slate-600 leading-normal">
                  {t("featured_stat_1_lbl")}
                </span>
              </div>
              <div>
                <span className="block text-base sm:text-lg font-display font-black text-brand-navy leading-tight">
                  {t("featured_stat_2_val")}
                </span>
                <span className="block text-[10px] font-sans font-bold text-slate-600 leading-normal">
                  {t("featured_stat_2_lbl")}
                </span>
              </div>
              <div>
                <span className="block text-base sm:text-lg font-display font-black text-brand-navy leading-tight">
                  {t("featured_stat_3_val")}
                </span>
                <span className="block text-[10px] font-sans font-bold text-slate-600 leading-normal">
                  {t("featured_stat_3_lbl")}
                </span>
              </div>
              <div>
                <span className="block text-base sm:text-lg font-display font-black text-brand-navy leading-tight">
                  {t("featured_stat_4_val")}
                </span>
                <span className="block text-[10px] font-sans font-bold text-slate-600 leading-normal">
                  {t("featured_stat_4_lbl")}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Link */}
          <div className="pt-4">
            <a
              href="#ninh-thuan"
              className="inline-flex items-center space-x-1.5 font-display font-black text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer text-brand-green hover:text-brand-green-light hover:translate-x-1"
            >
              <span>{t("featured_view_case_study")}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right image panel with fading mask */}
        <div className="w-full md:w-[45%] relative min-h-[180px] md:min-h-full bg-slate-100 flex-shrink-0">
          <img
            src={shrimImg}
            alt={t("featured_project_name")}
            className="w-full h-full object-cover absolute inset-0 select-none pointer-events-none"
          />
          <div className="hidden md:block absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="block md:hidden absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      {/* 2. Right Card: Ready to Build Your Farm? (CTA & Zalo Scan) */}
      <ZaloContactCard />
    </div>
  );
};

export default ContactFeatured;
