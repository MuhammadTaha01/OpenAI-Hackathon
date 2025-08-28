// Pages/Home.jsx
import React from "react";
import HomeHero from "../CommonCompo/HomeHero";
import HomeFeatures from "../CommonCompo/HomeFeatures";
import HomeCTA from "../CommonCompo/HomeCTA";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <HomeHero />
      <HomeFeatures />
      <HomeCTA />
    </div>
  );
};

export default Home;