import React from "react";
import ResidentialHero from "./components/ResidentialHero";
import ResidentialHowItWorks from "./components/ResidentialHowItWorks";
import ResidentialBenefits from "./components/ResidentialBenefits";
import ResidentialBanner from "./components/ResidentialBanner";

export const Residential: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* 1. Residential Hero Section with bgresidantial.png */}
      <ResidentialHero />

      {/* 2. How It Works Section (6 Step Cards) */}
      <ResidentialHowItWorks />

      {/* 3. Main Benefits Panel (5 Items) */}
      <ResidentialBenefits />

      {/* 4. Bottom Mascot CTA Banner */}
      <ResidentialBanner />
    </div>
  );
};

export default Residential;
