import React from 'react';
import Hero from '../../components/Hero/Hero';
import SolutionGrid from '../../components/SolutionCard/SolutionGrid';
import StatBar from '../../components/StatCard/StatBar';
import WhyKuodia from '../../components/FloatingLabel/WhyKuodia';
import ProjectCarousel from '../../components/ProjectCard/ProjectCarousel';
import CalculatorBanner from '../../components/CTA/CalculatorBanner';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <SolutionGrid />
      <StatBar />
      <WhyKuodia />
      <ProjectCarousel />
      <CalculatorBanner />
    </div>
  );
};

export default Home;
