import React from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SocialHub from "./components/SocialHub";
import LearningPool from "./components/LearningPool";
const LandPage = () => {
  return (
    <div className="bg-[#F5FFF7] font-lato">
      {/* Nav */}
      <Nav />
      {/* Hero */}
      <Hero />
      {/* SocialHub */}
      <SocialHub />
      {/* Learning Pool */}
      <LearningPool />
    </div>
  );
};

export default LandPage;
