import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Zap, Clock, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { projectsData } from '../../data/projects';
import Container from '../Container';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const ProjectCarousel: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-12 bg-slate-50/50 border-b border-slate-100">
      <Container>
        {/* Section Header Centered */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-brand-navy tracking-tight leading-tight uppercase">
            {t('projects_title')}
          </h2>
        </div>

        {/* Swiper Slider Wrapper with Side Paddings for Buttons */}
        <div className="relative px-8 md:px-12">
          {/* Custom Navigation Arrows positioned on the left and right edges */}
          <button className="swiper-prev-btn absolute left-0 top-[42%] -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-brand-navy hover:text-brand-green flex items-center justify-center transition-all shadow-md hover:shadow-lg cursor-pointer">
            <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
          </button>
          <button className="swiper-next-btn absolute right-0 top-[42%] -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-brand-navy hover:text-brand-green flex items-center justify-center transition-all shadow-md hover:shadow-lg cursor-pointer">
            <ChevronRight className="h-5 w-5 stroke-[2.5]" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: '.swiper-prev-btn',
              nextEl: '.swiper-next-btn',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            className="pb-14"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col h-full group">
                  {/* Image container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={t(project.titleKey as any)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Body Info */}
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-5">
                    <div>
                      <h3 className="font-display font-bold text-base text-brand-navy group-hover:text-brand-green transition-colors leading-tight">
                        {t(project.titleKey as any)}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-2">
                        {t(project.descKey as any)}
                      </p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-50 bg-slate-50/50 p-2.5 rounded-lg">
                      <div className="text-center space-y-0.5">
                        <div className="flex items-center justify-center space-x-0.5 text-brand-green">
                          <Zap className="h-3 w-3 stroke-[2.5]" />
                          <span className="font-display font-extrabold text-lg">{project.savings}</span>
                        </div>
                        <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider leading-none">
                          {t('project_savings')}
                        </p>
                      </div>

                      <div className="text-center space-y-0.5 border-x border-slate-250/60">
                        <div className="flex items-center justify-center space-x-0.5 text-brand-blue">
                          <Clock className="h-3 w-3 stroke-[2.5]" />
                          <span className="font-display font-extrabold text-lg">{project.payback}</span>
                        </div>
                        <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider leading-none">
                          {t('project_payback')}
                        </p>
                      </div>

                      <div className="text-center space-y-0.5">
                        <div className="flex items-center justify-center space-x-0.5 text-emerald-600">
                          <Leaf className="h-3 w-3 stroke-[2.5]" />
                          <span className="font-display font-extrabold text-lg">{project.co2}</span>
                        </div>
                        <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider leading-none">
                          {t('project_co2')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default ProjectCarousel;
