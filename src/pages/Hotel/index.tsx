import React from "react";
import HotelHero from "./components/HotelHero";
import Hotel8Systems from "./components/Hotel8Systems";
import HotelDashboard from "./components/HotelDashboard";

export const Hotel: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hotel Hero Section with White Background */}
      <HotelHero />

      {/* 8 Integrated Smart Systems Section with solarpv.jpg mock */}
      <Hotel8Systems />

      {/* Real-time Dashboard & Mascot Banner Section */}
      <HotelDashboard />
    </div>
  );
};

export default Hotel;
