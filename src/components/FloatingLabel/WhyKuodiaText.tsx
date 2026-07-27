import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { useTranslation } from "../../context/LanguageContext";
import Button from "../Button";

export const WhyKuodiaText: React.FC = () => {
  const { t } = useTranslation();

  const checklist = [
    t("why_check_1"),
    t("why_check_2"),
    t("why_check_3"),
    t("why_check_4"),
  ];

  // Trigger contact mascot menu
  const handleScrollToContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-mascot"));
  };

  return (
    <div className="lg:col-span-6 order-3 lg:order-2 space-y-7">
      <div className="space-y-3">
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-brand-navy tracking-tight leading-tight">
          {t("why_title")}
        </h2>
      </div>

      <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
        <p className="font-semibold text-slate-800">{t("why_p1")}</p>
        <p>{t("why_p2")}</p>
      </div>

      {/* Checklist */}
      <ul className="space-y-3 pt-2">
        {checklist.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700"
          >
            <div className="bg-brand-green-bg text-brand-green p-1 rounded-full flex-shrink-0 mt-0.5 shadow-sm">
              <Check className="h-3.5 w-3.5 stroke-[3]" />
            </div>
            <span className="leading-relaxed font-medium">{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="pt-4">
        <Button
          onClick={handleScrollToContact}
          variant="primary"
          size="md"
          className="group flex items-center space-x-2"
        >
          <span>{t("why_cta")}</span>
          <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default WhyKuodiaText;
