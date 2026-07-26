import React, { useState } from "react";
import Container from "../Container";
import WhyKuodiaVisual from "./WhyKuodiaVisual";
import WhyKuodiaText from "./WhyKuodiaText";
import StatBar from "../StatCard/StatBar";

export const WhyKuodia: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <section id="about" className="py-16 bg-white border-b border-slate-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Video with Hotspots */}
          <WhyKuodiaVisual
            activeHotspot={activeHotspot}
            setActiveHotspot={setActiveHotspot}
          />

          {/* StatBar: order-2 (directly below video on mobile), lg:order-3 (below grid row on desktop) */}
          <div className="lg:col-span-12 order-2 lg:order-3 mt-4 lg:mt-8">
            <StatBar />
          </div>

          {/* Right Column: Text content and description */}
          <WhyKuodiaText />
        </div>
      </Container>
    </section>
  );
};

export default WhyKuodia;
