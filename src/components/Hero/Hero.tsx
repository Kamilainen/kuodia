import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { useLayout } from '../../layouts/MainLayout';
import Button from '../Button';
import resortBg from '../../assets/resort-backgound.png';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { openCalculator } = useLayout();

  // Scroll to contact section
  const handleScrollToContact = () => {
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-36 lg:pb-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={resortBg}
          alt="Luxury Resort Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft gradient overlay for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent md:bg-gradient-to-r md:from-white/95 md:via-white/70 md:to-black/20" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="max-w-2xl md:max-w-xl lg:max-w-2xl">
          {/* Animated Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.08] text-brand-navy">
              ENGINEERING <br />
              THE FUTURE OF <br />
              <span className="text-brand-green bg-clip-text">ENERGY EFFICIENCY</span>
            </h1>
            
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium font-sans">
              {t('hero_subtitle')}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mt-8"
          >
            <Button
              onClick={handleScrollToContact}
              variant="primary"
              size="lg"
              className="group flex items-center justify-center space-x-2 bg-brand-navy shadow-lg shadow-brand-navy/20"
            >
              <span>{t('hero_cta_consult')}</span>
              <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              onClick={openCalculator}
              variant="outline"
              size="lg"
              className="bg-white/90 border border-slate-300 hover:bg-slate-50 shadow-sm"
            >
              {t('hero_cta_calc')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
