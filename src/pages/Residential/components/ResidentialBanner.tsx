import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";
import kubiImg from "../../../assets/kubi.png";
import {
  Home as HomeIcon,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export const ResidentialBanner: React.FC = () => {
  const { t } = useTranslation();

  const handleContactMascot = () => {
    window.dispatchEvent(new CustomEvent("open-contact-mascot"));
  };

  return (
    <section id="residential-banner" className="pb-20 bg-slate-50 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-brand-navy-dark border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden text-white shadow-2xl">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
              
              {/* Left Column: Yellow House Icon & Text (7 cols) */}
              <div className="lg:col-span-7 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 text-yellow-400 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                  <HomeIcon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl lg:text-2xl text-white tracking-tight leading-snug">
                    {t("res_banner_title")}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed mt-2 font-medium max-w-xl">
                    {t("res_banner_desc")}
                  </p>
                </div>
              </div>

              {/* Right Column: Action Buttons & Kubi Mascot (5 cols) */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-end gap-3.5">
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleContactMascot}
                    className="inline-flex items-center justify-center space-x-2 bg-brand-green hover:bg-brand-green-light active:bg-brand-green text-white font-display font-extrabold text-xs uppercase px-5 py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-brand-green/20 cursor-pointer w-full sm:w-auto whitespace-nowrap transform hover:-translate-y-0.5"
                  >
                    <span>{t("res_banner_btn_eval")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleContactMascot}
                    className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/5 border border-slate-700 hover:border-slate-500 text-white font-display font-extrabold text-xs uppercase px-5 py-3.5 rounded-xl transition-all duration-300 w-full sm:w-auto whitespace-nowrap cursor-pointer"
                  >
                    <span>{t("res_banner_btn_expert")}</span>
                    <MessageSquare className="w-4 h-4 text-slate-300" />
                  </button>
                </div>

                {/* Kubi Mascot Image */}
                {/* <img
                  src={kubiImg}
                  alt="Kubi Mascot"
                  className="w-20 sm:w-24 lg:w-28 h-auto object-contain flex-shrink-0 select-none pointer-events-none drop-shadow-xl hidden sm:block transform translate-y-2"
                /> */}
              </div>

            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ResidentialBanner;
