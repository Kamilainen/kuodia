import React from "react";
import { useTranslation } from "../context/LanguageContext";
import { ArrowRight, MessageSquare, Phone, Mail } from "lucide-react";
import zaloQrImg from "../assets/zalo_qr.jpg";

const ZaloContactCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#091E36] rounded-3xl p-3 sm:p-5 lg:p-6 xl:p-8 flex flex-col justify-between shadow-xl shadow-slate-900/10 border border-slate-800 text-white min-h-[220px] sm:min-h-[280px] lg:min-h-[340px] w-full relative overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-brand-green/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-row items-center justify-between gap-4 lg:gap-6 z-10 w-full">
        {/* Left panel: Info & CTAs */}
        <div className="flex-1 space-y-3 lg:space-y-4 w-full">
          <div className="space-y-0.5 sm:space-y-1">
            <h3 className="font-display font-black text-[9px] sm:text-xs lg:text-sm tracking-wider uppercase text-brand-green">
              {t("cta_card_title")}
            </h3>
            <p className="font-sans font-semibold text-[8px] sm:text-[10px] lg:text-sm text-slate-300 leading-normal sm:leading-relaxed">
              {t("cta_card_desc")}
            </p>
          </div>

          {/* Buttons - Stacked vertically to prevent layout cramping */}
          <div className="flex flex-col gap-2 w-full">
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-contact-mascot"))
              }
              className="inline-flex items-center justify-center space-x-1.5 bg-brand-green hover:bg-brand-green-light active:bg-brand-green text-white font-display font-bold text-[8px] sm:text-[10px] lg:text-xs uppercase px-3 py-2 sm:px-4 sm:py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-brand-green/20 cursor-pointer w-full"
            >
              <span>{t("cta_card_feasibility")}</span>
              <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </button>

            <a
              href="https://zalo.me/0886017923"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-1.5 bg-transparent hover:bg-white/5 border border-slate-700 hover:border-slate-600 active:bg-white/10 text-white font-display font-bold text-[8px] sm:text-[10px] lg:text-xs uppercase px-3 py-2 sm:px-4 sm:py-2.5 rounded-full transition-all duration-200 w-full"
            >
              <MessageSquare className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-400 fill-blue-400/20" />
              <span>{t("cta_card_zalo")}</span>
            </a>
          </div>
        </div>

        {/* Right panel: QR Code container (hidden on mobile/tablet, shown on desktop lg) */}
        <div className="hidden lg:flex flex-shrink-0 flex-col items-center p-3 bg-white/5 border border-white/10 rounded-2xl w-[124px]">
          <div className="bg-white p-1 rounded-xl shadow-md overflow-hidden">
            <img
              src={zaloQrImg}
              alt="Zalo QR"
              className="w-24 h-24 object-cover select-none pointer-events-none rounded-lg"
            />
          </div>
          <span className="text-[10px] font-sans font-bold text-slate-300 mt-2 tracking-wide uppercase">
            {t("cta_card_scan_to_chat")}
          </span>
        </div>
      </div>

      {/* Footer Contact Details - Stacked vertically to prevent phone number wrapping */}
      <div className="flex flex-col gap-2 sm:gap-2.5 pt-3 sm:pt-4 border-t border-slate-800 mt-4 lg:mt-6 z-10 w-full">
        <a
          href="tel:0886017923"
          className="flex items-center space-x-2 group text-slate-300 hover:text-white transition-colors w-full"
        >
          <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center group-hover:border-brand-green/30 transition-colors flex-shrink-0">
            <Phone className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-brand-green" />
          </div>
          <span className="text-[8px] sm:text-[10px] lg:text-xs font-sans font-bold tracking-wide whitespace-nowrap">
            +84 886 017 923
          </span>
        </a>

        <a
          href="mailto:david@kuodia.vn"
          className="flex items-center space-x-2 group text-slate-300 hover:text-white transition-colors w-full"
        >
          <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center group-hover:border-brand-green/30 transition-colors flex-shrink-0">
            <Mail className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-brand-green" />
          </div>
          <span className="text-[8px] sm:text-[10px] lg:text-xs font-sans font-bold tracking-wide whitespace-nowrap">
            david@kuodia.vn
          </span>
        </a>
      </div>
    </div>
  );
};

export default ZaloContactCard;
