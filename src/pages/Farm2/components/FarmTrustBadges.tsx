import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../context/LanguageContext";
import Container from "../../../components/Container";
import {
  ShieldCheck,
  FolderCheck,
  Users,
  Globe,
  HeartHandshake,
} from "lucide-react";

export const FarmTrustBadges: React.FC = () => {
  const { t } = useTranslation();

  const badges = [
    {
      icon: <ShieldCheck className="w-6 h-6 stroke-[1.75]" />,
      title: t("tb_1_title"),
      desc: t("tb_1_desc"),
    },
    {
      icon: <FolderCheck className="w-6 h-6 stroke-[1.75]" />,
      title: t("tb_2_title"),
      desc: t("tb_2_desc"),
    },
    {
      icon: <Users className="w-6 h-6 stroke-[1.75]" />,
      title: t("tb_3_title"),
      desc: t("tb_3_desc"),
    },
    {
      icon: <Globe className="w-6 h-6 stroke-[1.75]" />,
      title: t("tb_4_title"),
      desc: t("tb_4_desc"),
    },
    {
      icon: <HeartHandshake className="w-6 h-6 stroke-[1.75]" />,
      title: t("tb_5_title"),
      desc: t("tb_5_desc"),
    },
  ];

  return (
    <section id="farm-trust-badges" className="py-8 bg-slate-50 border-t border-slate-200/60 overflow-hidden">
      <Container>
        {/* Floating White Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-4 sm:p-6 md:py-6 md:px-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-center">
            {badges.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3.5 group"
              >
                {/* Rounded Square Light Blue Icon Container */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50/80 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col min-w-0">
                  <h4 className="font-display font-black text-xs sm:text-sm text-brand-navy leading-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-sans font-medium text-slate-500 leading-snug mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FarmTrustBadges;
