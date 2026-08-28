import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";
import aquaponicsImg from "../../../assets/aquaponics_system.png";
import { CheckCircle2 } from "lucide-react";

export const AquaponicsEcosystem: React.FC = () => {
  const { t } = useTranslation();

  const checkPoints = [
    t("aqua_eco_check_1"),
    t("aqua_eco_check_2"),
    t("aqua_eco_check_3"),
    t("aqua_eco_check_4"),
  ];

  const stepsData = [
    {
      num: 1,
      badgeBg: "bg-brand-green",
      title: t("aqua_step_1_title"),
      desc: t("aqua_step_1_desc"),
    },
    {
      num: 2,
      badgeBg: "bg-blue-600",
      title: t("aqua_step_2_title"),
      desc: t("aqua_step_2_desc"),
    },
    {
      num: 3,
      badgeBg: "bg-brand-navy",
      title: t("aqua_step_3_title"),
      desc: t("aqua_step_3_desc"),
    },
    {
      num: 4,
      badgeBg: "bg-emerald-500",
      title: t("aqua_step_4_title"),
      desc: t("aqua_step_4_desc"),
    },
    {
      num: 5,
      badgeBg: "bg-rose-500",
      title: t("aqua_step_5_title"),
      desc: t("aqua_step_5_desc"),
    },
  ];

  return (
    <section id="aquaponics-ecosystem" className="py-20 bg-white border-t border-slate-100 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Title, Subtitle, Description & Checkmarks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-4"
          >
            <div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-navy tracking-tight uppercase">
                {t("aqua_eco_title")}
              </h2>
              <h3 className="font-display font-bold text-xs sm:text-sm text-brand-navy mt-1.5 leading-snug">
                {t("aqua_eco_subtitle")}
              </h3>
            </div>

            <p className="text-xs sm:text-sm font-sans text-slate-500 leading-relaxed font-medium">
              {t("aqua_eco_desc")}
            </p>

            {/* Checkmark Bullets */}
            <div className="space-y-3 pt-3">
              {checkPoints.map((text, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-sans font-semibold text-slate-700 leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center Column: Aquaponics 3D Diagram Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex items-center justify-center p-2"
          >
            <img
              src={aquaponicsImg}
              alt="Aquaponics System Architecture"
              className="w-full h-auto object-contain max-h-[460px] drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Right Column: 5 Numbered Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-3"
          >
            {stepsData.map((step) => (
              <div
                key={step.num}
                className="bg-slate-50 hover:bg-white border border-slate-200/80 rounded-xl p-3.5 sm:p-4 flex items-start space-x-3.5 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                {/* Number Badge */}
                <div
                  className={`w-7 h-7 rounded-lg text-white font-black font-display text-sm flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5 ${step.badgeBg}`}
                >
                  {step.num}
                </div>

                {/* Text Content */}
                <div className="flex-grow min-w-0">
                  <h4 className="font-display font-extrabold text-xs sm:text-[13px] text-brand-navy uppercase tracking-wide leading-tight group-hover:text-brand-green transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[11px] font-sans text-slate-500 leading-relaxed mt-1 font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default AquaponicsEcosystem;
