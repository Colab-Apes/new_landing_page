import React from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SocialHub from "./components/SocialHub";
const LandPage = () => {
  return (
    <div className="bg-[#F5FFF7] font-lato">
      {/* Nav */}
      <Nav />
      {/* Hero */}
      <Hero />
      {/* SocialHub */}
      <SocialHub />
    </div>
  );
};

export default LandPage;
