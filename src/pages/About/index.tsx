import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../context/LanguageContext';
import Container from '../../components/Container';
import Button from '../../components/Button';
import { Calendar, Award, Leaf, Globe, ArrowRight, Target, Eye, Handshake, BarChart3, Settings, Calculator, Wrench, CheckCircle2, ShieldCheck, Users, BadgeCheck } from 'lucide-react';
import skyBg from '../../assets/sky_background.png';
import kubiImg from '../../assets/kubi.png';
import footerBg from '../../assets/footer-background.png';

export const About: React.FC = () => {
  const { t } = useTranslation();

  // Scroll to contact section
  const handleScrollToContact = () => {
    window.dispatchEvent(new CustomEvent("open-contact-mascot"));
  };

  const steps = [
    {
      number: 1,
      icon: <Handshake className="h-6 w-6 stroke-[1.5]" />,
      title: t('process_step_1_title'),
      desc: t('process_step_1_desc'),
    },
    {
      number: 2,
      icon: <BarChart3 className="h-6 w-6 stroke-[1.5]" />,
      title: t('process_step_2_title'),
      desc: t('process_step_2_desc'),
    },
    {
      number: 3,
      icon: <Settings className="h-6 w-6 stroke-[1.5]" />,
      title: t('process_step_3_title'),
      desc: t('process_step_3_desc'),
    },
    {
      number: 4,
      icon: <Calculator className="h-6 w-6 stroke-[1.5]" />,
      title: t('process_step_4_title'),
      desc: t('process_step_4_desc'),
    },
    {
      number: 5,
      icon: <Wrench className="h-6 w-6 stroke-[1.5]" />,
      title: t('process_step_5_title'),
      desc: t('process_step_5_desc'),
    },
    {
      number: 6,
      icon: <CheckCircle2 className="h-6 w-6 stroke-[1.5]" />,
      title: t('process_step_6_title'),
      desc: t('process_step_6_desc'),
    },
    {
      number: 7,
      icon: <Leaf className="h-6 w-6 stroke-[1.5]" />,
      title: t('process_step_7_title'),
      desc: t('process_step_7_desc'),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-36 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={skyBg}
            alt="Sky and mountains with wind turbines"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay matching the layout for high text contrast */}
          <div className="absolute inset-0 bg-linear-to-r from-white/10 via-white/10 to-transparent md:bg-linear-to-r md:from-white/80 md:via-white/45 md:to-transparent" />
        </div>

        {/* Content Container */}
        <Container className="z-10 relative">
          <div className="max-w-xl md:max-w-2xl">
            {/* Top Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-3"
            >
              <span className="text-brand-green font-display font-bold uppercase tracking-wider text-xs md:text-sm">
                {t('about_breadcrumb')}
              </span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.08] text-brand-navy">
                {t('about_title')}
              </h1>
              {/* Divider Underline */}
              <div className="w-16 h-1 bg-brand-green mt-4 mb-6 rounded-full" />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base text-brand-navy/90 leading-relaxed font-sans font-medium max-w-xl"
            >
              <p>{t('about_desc')}</p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8"
            >
              <Button
                onClick={handleScrollToContact}
                variant="primary"
                size="lg"
                className="group flex items-center justify-center space-x-2 bg-brand-navy shadow-lg shadow-brand-navy/20"
              >
                <span className="uppercase tracking-wider text-xs sm:text-sm font-bold">
                  {t('about_cta')}
                </span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Cards Panel Overlap Section */}
      <section className="relative z-25 -mt-16 sm:-mt-20 px-4 mb-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white shadow-xl shadow-slate-200/50 rounded-[28px] p-6 md:p-8 border border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4"
          >
            {/* Stat Item 1 */}
            <div className="flex flex-col items-center text-center p-2">
              <div className="bg-brand-green/10 text-brand-green p-2.5 md:p-3.5 rounded-full border border-brand-green/20 mb-2 md:mb-4 flex items-center justify-center">
                <Calendar className="h-5 w-5 md:h-6 md:w-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display font-black text-sm md:text-xl text-brand-navy mb-1 leading-tight">
                {t('about_stat_1_val')}
              </h3>
              <p className="text-[10px] md:text-xs font-semibold text-slate-500 font-sans tracking-wide max-w-[150px]">
                {t('about_stat_1_lbl')}
              </p>
            </div>

            {/* Stat Item 2 */}
            <div className="flex flex-col items-center text-center p-2 border-l border-slate-100/50 md:border-l">
              <div className="bg-brand-green/10 text-brand-green p-2.5 md:p-3.5 rounded-full border border-brand-green/20 mb-2 md:mb-4 flex items-center justify-center">
                <Award className="h-5 w-5 md:h-6 md:w-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display font-black text-sm md:text-xl text-brand-navy mb-1 leading-tight">
                {t('about_stat_2_val')}
              </h3>
              <p className="text-[10px] md:text-xs font-semibold text-slate-500 font-sans tracking-wide max-w-[150px]">
                {t('about_stat_2_lbl')}
              </p>
            </div>

            {/* Stat Item 3 */}
            <div className="flex flex-col items-center text-center p-2 border-t md:border-t-0 md:border-l border-slate-100/50 col-span-1">
              <div className="bg-brand-green/10 text-brand-green p-2.5 md:p-3.5 rounded-full border border-brand-green/20 mb-2 md:mb-4 flex items-center justify-center">
                <Leaf className="h-5 w-5 md:h-6 md:w-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display font-black text-sm md:text-xl text-brand-navy mb-1 leading-tight">
                {t('about_stat_3_val')}
              </h3>
              <p className="text-[10px] md:text-xs font-semibold text-slate-500 font-sans tracking-wide max-w-[150px]">
                {t('about_stat_3_lbl')}
              </p>
            </div>

            {/* Stat Item 4 */}
            <div className="flex flex-col items-center text-center p-2 border-t md:border-t-0 border-l border-slate-100/50 md:border-l col-span-1">
              <div className="bg-brand-green/10 text-brand-green p-2.5 md:p-3.5 rounded-full border border-brand-green/20 mb-2 md:mb-4 flex items-center justify-center">
                <Globe className="h-5 w-5 md:h-6 md:w-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display font-black text-sm md:text-xl text-brand-navy mb-1 leading-tight">
                {t('about_stat_4_val')}
              </h3>
              <p className="text-[10px] md:text-xs font-semibold text-slate-500 font-sans tracking-wide max-w-[150px]">
                {t('about_stat_4_lbl')}
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative z-20 pb-24 px-4">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white shadow-xl shadow-slate-200/50 rounded-[28px] p-8 md:p-10 border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100"
          >
            {/* Mission Card */}
            <div className="flex flex-col space-y-4 pt-6 md:pt-0">
              <div className="flex items-center space-x-3">
                <div className="text-brand-green bg-brand-green/10 p-2 rounded-full border border-brand-green/20 flex items-center justify-center">
                  <Target className="h-6 w-6 stroke-[2]" />
                </div>
                <h2 className="font-display font-black text-xl md:text-2xl text-brand-green">
                  {t('about_mission_title')}
                </h2>
              </div>
              <p 
                className="text-xs sm:text-sm md:text-base text-brand-navy/85 leading-relaxed font-sans font-medium [&>strong]:text-brand-navy [&>strong]:font-bold"
                dangerouslySetInnerHTML={{ __html: t('about_mission_desc') }}
              />
            </div>

            {/* Vision Card */}
            <div className="flex flex-col space-y-4 pt-8 md:pt-0 md:pl-12">
              <div className="flex items-center space-x-3">
                <div className="text-brand-green bg-brand-green/10 p-2 rounded-full border border-brand-green/20 flex items-center justify-center">
                  <Eye className="h-6 w-6 stroke-[2]" />
                </div>
                <h2 className="font-display font-black text-xl md:text-2xl text-brand-green">
                  {t('about_vision_title')}
                </h2>
              </div>
              <p 
                className="text-xs sm:text-sm md:text-base text-brand-navy/85 leading-relaxed font-sans font-medium [&>strong]:text-brand-navy [&>strong]:font-bold"
                dangerouslySetInnerHTML={{ __html: t('about_vision_desc') }}
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* History & Timeline Section */}
      <section className="bg-white py-24 px-4 border-t border-slate-100 relative overflow-hidden">
        <Container>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-green font-display font-bold uppercase tracking-wider text-xs md:text-sm block">
              {t('history_tagline')}
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-tight leading-tight">
              {t('history_title')}
            </h2>
          </div>

          {/* Centered Timeline */}
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative border-l-2 border-slate-100 pl-8 ml-4 space-y-10 py-2">
                {/* Year 2012 */}
                <div className="relative group">
                  <div className="absolute -left-[39.5px] top-1 w-4 h-4 rounded-full bg-brand-green border-4 border-white shadow-md shadow-brand-green/20 group-hover:scale-125 transition-transform duration-200" />
                  <div>
                    <span className="font-display font-black text-lg text-brand-green block mb-1">2012</span>
                    <p className="text-xs sm:text-sm text-brand-navy/85 leading-relaxed font-sans font-medium">
                      {t('history_year_2012_desc')}
                    </p>
                  </div>
                </div>

                {/* Year 2015 */}
                <div className="relative group">
                  <div className="absolute -left-[39.5px] top-1 w-4 h-4 rounded-full bg-brand-green border-4 border-white shadow-md shadow-brand-green/20 group-hover:scale-125 transition-transform duration-200" />
                  <div>
                    <span className="font-display font-black text-lg text-brand-green block mb-1">2015</span>
                    <p className="text-xs sm:text-sm text-brand-navy/85 leading-relaxed font-sans font-medium">
                      {t('history_year_2015_desc')}
                    </p>
                  </div>
                </div>

                {/* Year 2018 */}
                <div className="relative group">
                  <div className="absolute -left-[39.5px] top-1 w-4 h-4 rounded-full bg-brand-green border-4 border-white shadow-md shadow-brand-green/20 group-hover:scale-125 transition-transform duration-200" />
                  <div>
                    <span className="font-display font-black text-lg text-brand-green block mb-1">2018</span>
                    <p className="text-xs sm:text-sm text-brand-navy/85 leading-relaxed font-sans font-medium">
                      {t('history_year_2018_desc')}
                    </p>
                  </div>
                </div>

                {/* Year 2021 */}
                <div className="relative group">
                  <div className="absolute -left-[39.5px] top-1 w-4 h-4 rounded-full bg-brand-green border-4 border-white shadow-md shadow-brand-green/20 group-hover:scale-125 transition-transform duration-200" />
                  <div>
                    <span className="font-display font-black text-lg text-brand-green block mb-1">2021</span>
                    <p className="text-xs sm:text-sm text-brand-navy/85 leading-relaxed font-sans font-medium">
                      {t('history_year_2021_desc')}
                    </p>
                  </div>
                </div>

                {/* Year 2026 */}
                <div className="relative group">
                  <div className="absolute -left-[39.5px] top-1 w-4 h-4 rounded-full bg-brand-green border-4 border-white shadow-md shadow-brand-green/20 group-hover:scale-125 transition-transform duration-200" />
                  <div>
                    <span className="font-display font-black text-lg text-brand-green block mb-1">2026</span>
                    <p className="text-xs sm:text-sm text-brand-navy/85 leading-relaxed font-sans font-medium">
                      {t('history_year_2026_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* How We Work (Process) Section */}
      <section className="bg-slate-50 py-24 px-4 border-t border-slate-100 relative overflow-hidden">
        <Container>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-green font-display font-bold uppercase tracking-wider text-xs md:text-sm block">
              {t('process_tagline')}
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-tight leading-tight">
              {t('process_title')}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-brand-navy/70 leading-relaxed font-sans font-medium max-w-2xl mx-auto">
              {t('process_subtitle')}
            </p>
          </div>

          {/* Workflow Steps Grid + Mascot Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative">
            {/* Workflow Steps */}
            <div className="lg:col-span-10 relative">
              {/* Connecting line on desktop */}
              <div className="absolute top-[32px] left-[5%] right-[5%] h-0.5 bg-brand-green/20 z-0 hidden lg:block" />

              <div className="flex lg:grid lg:grid-cols-7 overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-4 pb-6 lg:pb-0 scrollbar-none relative z-10 -mx-4 px-4 lg:mx-0 lg:px-0">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-shrink-0 min-w-[75vw] sm:min-w-[40vw] lg:min-w-0 snap-center flex flex-col items-center text-center group bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none border lg:border-none border-slate-100 shadow-sm lg:shadow-none"
                  >
                    {/* Step Icon Container */}
                    <div className="w-16 h-16 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center text-brand-navy group-hover:border-brand-green group-hover:text-brand-green group-hover:scale-105 transition-all duration-300 z-10 relative">
                      {step.icon}
                    </div>

                    {/* Step Number circular badge */}
                    <div className="w-6 h-6 rounded-full bg-brand-green text-white font-display font-bold text-[10px] sm:text-xs flex items-center justify-center mt-4 border border-white shadow-sm shadow-brand-green/20">
                      {step.number}
                    </div>

                    {/* Title & Desc */}
                    <div className="mt-4 space-y-2">
                      <h3 className="font-display font-bold text-xs sm:text-sm text-brand-navy leading-tight group-hover:text-brand-green transition-colors duration-200 min-h-[32px] flex items-center justify-center">
                        {step.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-slate-500 font-sans leading-relaxed max-w-[170px] mx-auto">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mascot Kubi */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex flex-col items-center justify-end relative mt-8 lg:mt-0"
            >
              {/* Handwritten style text above mascot */}
              <div className="relative mb-2 flex flex-col items-center">
                <span 
                  className="text-brand-green italic font-bold text-center tracking-wide leading-tight max-w-[140px] block"
                  style={{ fontFamily: "'Caveat', cursive", fontSize: '1.25rem' }}
                >
                  {t('process_mascot_text')}
                </span>
                
                {/* SVG Curved Arrow pointing to the mascot */}
                <svg className="w-12 h-12 text-brand-green/80 mt-1 animate-pulse hidden lg:block" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10 C 25 15, 30 25, 15 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3"/>
                  <path d="M12 30 L 15 40 L 25 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Mascot image */}
              <img
                src={kubiImg}
                alt="Kubi Mascot"
                className="w-32 sm:w-36 lg:w-full max-w-[150px] object-contain transform hover:scale-105 transition-transform duration-300 animate-float"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-24 px-4 border-t border-slate-100 relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-green/5 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="text-brand-green font-display font-bold uppercase tracking-wider text-xs md:text-sm block">
              {t('values_tagline')}
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-tight leading-tight">
              {t('values_title')}
            </h2>
          </motion.div>

          {/* Values Cards */}
          <div className="flex lg:grid lg:grid-cols-5 overflow-x-auto snap-x snap-mandatory gap-6 pb-6 lg:pb-0 scrollbar-none -mx-4 px-4 lg:mx-0 lg:px-0">
            {([
              { key: 1, Icon: Leaf },
              { key: 2, Icon: ShieldCheck },
              { key: 3, Icon: Users },
              { key: 4, Icon: BadgeCheck },
              { key: 5, Icon: Handshake },
            ] as { key: number; Icon: React.FC<{ className?: string; strokeWidth?: number }> }[]).map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="flex-shrink-0 min-w-[75vw] sm:min-w-[40vw] lg:min-w-0 snap-center group flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:border-brand-green/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="text-brand-green mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.Icon className="w-14 h-14" strokeWidth={1.5} />
                </div>

                {/* Green separator line */}
                <div className="w-8 h-0.5 bg-brand-green/40 rounded-full mb-4 group-hover:w-16 group-hover:bg-brand-green transition-all duration-300" />

                {/* Title */}
                <h3 className="font-display font-bold text-sm md:text-base text-brand-navy mb-3 group-hover:text-brand-green transition-colors duration-200">
                  {t(`values_${item.key}_title` as any)}
                </h3>

                {/* Description */}
                <p className="text-[11px] sm:text-xs text-slate-500 font-sans leading-relaxed max-w-[180px] mx-auto">
                  {t(`values_${item.key}_desc` as any)}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={footerBg}
            alt="Project discussion background"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay matching the design for text readability */}
          <div className="absolute inset-0 bg-[#071d3a]/80 md:bg-[#071d3a]/75 backdrop-blur-[0.5px]" />
        </div>

        <Container className="relative z-10">
          {/* Centered Content */}
          <div className="text-center max-w-3xl mx-auto space-y-6 text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight"
            >
              {t('footer_cta_title')}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs sm:text-sm md:text-base text-slate-100/90 leading-relaxed font-sans font-medium"
            >
              {t('footer_cta_subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-4"
            >
              <Button
                onClick={handleScrollToContact}
                variant="secondary"
                size="lg"
                className="group inline-flex items-center space-x-2 bg-brand-green hover:bg-brand-green/90 border border-brand-green text-white font-bold shadow-lg shadow-brand-green/20"
              >
                <span className="uppercase tracking-wider text-xs sm:text-sm">
                  {t('footer_cta_btn')}
                </span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
