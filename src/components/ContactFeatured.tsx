import React from "react";
import { useTranslation } from "../context/LanguageContext";
import { MapPin, ArrowRight, MessageSquare, Phone, Mail } from "lucide-react";
import shrimImg from "../assets/shrim.png";

// Vector Mock QR Code for Zalo chat
const MockQRCode: React.FC = () => (
  <svg width="100" height="100" viewBox="0 0 120 120" className="mx-auto select-none pointer-events-none">
    <rect width="120" height="120" fill="white" rx="8" />
    
    {/* QR code corners */}
    <rect x="10" y="10" width="30" height="30" fill="#091E36" rx="4" />
    <rect x="15" y="15" width="20" height="20" fill="white" rx="2" />
    <rect x="18" y="18" width="14" height="14" fill="#091E36" rx="1" />

    <rect x="80" y="10" width="30" height="30" fill="#091E36" rx="4" />
    <rect x="85" y="15" width="20" height="20" fill="white" rx="2" />
    <rect x="88" y="18" width="14" height="14" fill="#091E36" rx="1" />

    <rect x="10" y="80" width="30" height="30" fill="#091E36" rx="4" />
    <rect x="15" y="85" width="20" height="20" fill="white" rx="2" />
    <rect x="18" y="88" width="14" height="14" fill="#091E36" rx="1" />
    
    {/* Random bits inside */}
    <rect x="50" y="10" width="10" height="20" fill="#091E36" />
    <rect x="65" y="20" width="10" height="10" fill="#091E36" />
    <rect x="50" y="35" width="25" height="10" fill="#091E36" />
    
    <rect x="10" y="50" width="20" height="10" fill="#091E36" />
    <rect x="35" y="50" width="15" height="15" fill="#091E36" />
    <rect x="55" y="55" width="10" height="25" fill="#091E36" />
    
    <rect x="80" y="50" width="20" height="10" fill="#091E36" />
    <rect x="75" y="65" width="15" height="15" fill="#091E36" />
    <rect x="95" y="85" width="15" height="15" fill="#091E36" />
    <rect x="80" y="105" width="15" height="5" fill="#091E36" />
    
    {/* Zalo badge text or logo in center */}
    <rect x="42" y="42" width="36" height="36" fill="#1B5FBF" rx="8" />
    <text x="60" y="64" fill="white" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="system-ui">Zalo</text>
  </svg>
);

export const ContactFeatured: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
      {/* 1. Left Card: Featured Project */}
      <div className="relative flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-900/5 transition-all duration-300 min-h-[340px] w-full border border-slate-150">
        {/* Left content block */}
        <div className="w-full md:w-[55%] p-6 flex flex-col justify-between z-10 bg-white">
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-display font-black text-xs sm:text-sm tracking-wider uppercase text-emerald-700">
                {t("featured_project_title")}
              </h3>
              <p className="font-display font-black text-lg text-slate-800 tracking-tight leading-snug">
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
                <span className="block text-base sm:text-lg font-display font-black text-emerald-700 leading-tight">
                  {t("featured_stat_1_val")}
                </span>
                <span className="block text-[10px] font-sans font-bold text-slate-500 leading-normal">
                  {t("featured_stat_1_lbl")}
                </span>
              </div>
              <div>
                <span className="block text-base sm:text-lg font-display font-black text-emerald-700 leading-tight">
                  {t("featured_stat_2_val")}
                </span>
                <span className="block text-[10px] font-sans font-bold text-slate-500 leading-normal">
                  {t("featured_stat_2_lbl")}
                </span>
              </div>
              <div>
                <span className="block text-base sm:text-lg font-display font-black text-slate-800 leading-tight">
                  {t("featured_stat_3_val")}
                </span>
                <span className="block text-[10px] font-sans font-bold text-slate-500 leading-normal">
                  {t("featured_stat_3_lbl")}
                </span>
              </div>
              <div>
                <span className="block text-base sm:text-lg font-display font-black text-emerald-700 leading-tight">
                  {t("featured_stat_4_val")}
                </span>
                <span className="block text-[10px] font-sans font-bold text-slate-500 leading-normal">
                  {t("featured_stat_4_lbl")}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Link */}
          <div className="pt-4">
            <a
              href="#ninh-thuan"
              className="inline-flex items-center space-x-1.5 font-display font-black text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer text-emerald-600 hover:text-emerald-700 hover:translate-x-1"
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
      <div className="bg-[#091E36] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-slate-900/10 border border-slate-800 text-white min-h-[340px] w-full relative overflow-hidden">
        {/* Decorative backdrop glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 z-10">
          {/* Left panel: Info & CTAs */}
          <div className="flex-1 space-y-4">
            <div className="space-y-1">
              <h3 className="font-display font-black text-sm tracking-wider uppercase text-emerald-400">
                {t("cta_card_title")}
              </h3>
              <p className="font-sans font-semibold text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t("cta_card_desc")}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-display font-bold text-xs uppercase px-4 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-emerald-950/20"
              >
                <span>{t("cta_card_feasibility")}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

              <a
                href="https://zalo.me/0886017923"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/5 border border-slate-700 hover:border-slate-600 active:bg-white/10 text-white font-display font-bold text-xs uppercase px-4 py-2.5 rounded-full transition-all duration-200"
              >
                <MessageSquare className="h-3.5 w-3.5 text-blue-400 fill-blue-400/20" />
                <span>{t("cta_card_zalo")}</span>
              </a>
            </div>
          </div>

          {/* Right panel: QR Code container */}
          <div className="flex-shrink-0 flex flex-col items-center p-3 bg-white/5 border border-white/10 rounded-2xl w-[124px] mx-auto md:mx-0">
            <div className="bg-white p-1 rounded-xl shadow-md">
              <MockQRCode />
            </div>
            <span className="text-[10px] font-sans font-bold text-slate-300 mt-2 tracking-wide uppercase">
              {t("cta_card_scan_to_chat")}
            </span>
          </div>
        </div>

        {/* Footer Contact Details */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-5 border-t border-slate-800 mt-6 z-10">
          <a
            href="tel:0886017923"
            className="flex items-center space-x-2.5 group text-slate-300 hover:text-white transition-colors"
          >
            <div className="h-8 w-8 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
              <Phone className="h-3.5 w-3.5 text-emerald-400" />
            </div>
            <span className="text-xs font-sans font-bold tracking-wide">
              +84 886 017 923
            </span>
          </a>

          <a
            href="mailto:info@kuodia.vn"
            className="flex items-center space-x-2.5 group text-slate-300 hover:text-white transition-colors"
          >
            <div className="h-8 w-8 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
              <Mail className="h-3.5 w-3.5 text-emerald-400" />
            </div>
            <span className="text-xs font-sans font-bold tracking-wide">
              info@kuodia.vn
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactFeatured;
