import React from "react";
import Farm2Hero from "./components/Farm2Hero";
import FarmFeatureStrip from "./components/FarmFeatureStrip";
import OurFarmSolutions from "./components/OurFarmSolutions";
import AquaponicsEcosystem from "./components/AquaponicsEcosystem";
import FarmImpactBanner from "./components/FarmImpactBanner";
import FarmCaseStudyContact from "./components/FarmCaseStudyContact";
import FarmTrustBadges from "./components/FarmTrustBadges";

export const Farm2: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-navy">
      {/* Modular Hero Section with bgfarm.jpg */}
      <Farm2Hero />

      {/* Floating Panel Feature Strip in Home Page Style */}
      <FarmFeatureStrip />

      {/* New 12 Farm Solutions Grid Body Section matching screenshot */}
      <OurFarmSolutions />

      {/* New Aquaponics Ecosystem Section with aquaponics_system.png */}
      <AquaponicsEcosystem />

      {/* New 5 Impact Stat Metrics Banner Bar */}
      <FarmImpactBanner />

      {/* Case Study Card with smart_aquaponics.jpg + ZaloContactCard */}
      <FarmCaseStudyContact />

      {/* Bottom Trust Badges Section */}
      <FarmTrustBadges />
    </div>
  );
};

export default Farm2;
