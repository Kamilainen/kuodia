import React from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { useLayout } from '../../layouts/MainLayout';
import Container from '../Container';
import Button from '../Button';

export const CalculatorBanner: React.FC = () => {
  const { t } = useTranslation();
  const { openCalculator } = useLayout();

  return (
    <section className="py-16 bg-gradient-to-br from-brand-navy via-[#0d3b6e] to-[#071d3a] relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-green/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand-blue-light/10 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left info column */}
          <div className="flex items-start space-x-4 md:space-x-6 text-left max-w-2xl">
            <div className="bg-brand-green/20 text-brand-green-light p-3.5 md:p-4 rounded-2xl flex-shrink-0 shadow-lg shadow-brand-navy/30">
              <Calculator className="h-7 w-7 md:h-8 md:w-8" />
            </div>
            <div className="space-y-2 md:space-y-3">
              <h2 className="font-display font-extrabold text-xl md:text-2xl text-white tracking-tight leading-tight uppercase">
                {t('calc_banner_title')}
              </h2>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans font-medium">
                {t('calc_banner_subtitle')}
              </p>
            </div>
          </div>

          {/* Right action column */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <Button
              onClick={openCalculator}
              variant="secondary"
              size="lg"
              className="w-full lg:w-auto group flex items-center justify-center space-x-2 bg-brand-green hover:bg-green-700 shadow-lg shadow-brand-green/25 py-4 px-8 text-sm md:text-base"
            >
              <span>{t('calc_banner_cta')}</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CalculatorBanner;
