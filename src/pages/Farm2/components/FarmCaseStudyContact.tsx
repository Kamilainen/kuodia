import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";
import ZaloContactCard from "../../../components/ZaloContactCard";
import smartAquaponicsImg from "../../../assets/smart_aquaponics.jpg";
import { MapPin, ArrowRight } from "lucide-react";

export const FarmCaseStudyContact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="farm-case-study-contact" className="py-12 bg-slate-50 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Smart Aquaponics Farm Case Study Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-900/5 border border-slate-200/80 flex flex-col justify-between w-full relative overflow-hidden group">
              
              {/* Header Info */}
              <div>
                <span className="text-[11px] font-display font-extrabold text-slate-400 tracking-widest uppercase">
                  {t("cs_aquaponics_tag")}
                </span>

                {/* Title Left, Location Right */}
                <div className="flex flex-row items-center justify-between w-full mt-0.5 gap-2">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-brand-navy tracking-tight">
                    {t("cs_aquaponics_title")}
                  </h3>
                  <div className="flex items-center space-x-1 text-xs font-sans font-bold text-slate-500 flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                    <span>{t("cs_aquaponics_location")}</span>
                  </div>
                </div>
              </div>

              {/* Middle Section: Image Left (8 cols) + Metrics & Link Right (4 cols) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mt-4 items-center flex-grow">
                {/* Image */}
                <div className="sm:col-span-8 flex items-center justify-center overflow-hidden rounded-2xl w-full">
                  <img
                    src={smartAquaponicsImg}
                    alt="Smart Aquaponics Farm System"
                    className="w-full h-48 sm:h-60 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Metrics + Action Link */}
                <div className="sm:col-span-4 space-y-2.5 pl-1">
                  <div>
                    <span className="font-display font-black text-lg sm:text-xl text-brand-navy block leading-none">
                      {t("cs_aquaponics_stat_1_val")}
                    </span>
                    <span className="text-[11px] font-sans font-medium text-slate-500">
                      {t("cs_aquaponics_stat_1_lbl")}
                    </span>
                  </div>

                  <div>
                    <span className="font-display font-black text-lg sm:text-xl text-brand-navy block leading-none">
                      {t("cs_aquaponics_stat_2_val")}
                    </span>
                    <span className="text-[11px] font-sans font-medium text-slate-500">
                      {t("cs_aquaponics_stat_2_lbl")}
                    </span>
                  </div>

                  <div>
                    <span className="font-display font-black text-lg sm:text-xl text-brand-navy block leading-none">
                      {t("cs_aquaponics_stat_3_val")}
                    </span>
                    <span className="text-[11px] font-sans font-medium text-slate-500">
                      {t("cs_aquaponics_stat_3_lbl")}
                    </span>
                  </div>

                  <div>
                    <span className="font-display font-black text-lg sm:text-xl text-brand-navy block leading-none">
                      {t("cs_aquaponics_stat_4_val")}
                    </span>
                    <span className="text-[11px] font-sans font-medium text-slate-500">
                      {t("cs_aquaponics_stat_4_lbl")}
                    </span>
                  </div>

                  {/* VIEW CASE STUDY -> Action Link */}
                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center space-x-1.5 text-xs font-display font-black text-brand-green hover:text-brand-green/80 uppercase tracking-wider transition-colors"
                    >
                      <span>{t("cs_aquaponics_link")}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: ZaloContactCard Component */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex"
          >
            <ZaloContactCard
              title="LET'S BUILD THE FUTURE OF FARMING TOGETHER."
              description="Smarter technologies for more productive, profitable and sustainable farms."
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default FarmCaseStudyContact;
