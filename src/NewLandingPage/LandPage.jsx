import React from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SocialHub from "./components/SocialHub";
import LearningPool from "./components/LearningPool";
import BuildTheFuture from "./components/BuildTheFuture";
import ValueStake from "./components/ValueStake";
import HowItWorks from "./components/HowItWorks";
import Ready from "./components/Ready";
import JoinOurNewsLetter from "./components/JoinOurNewsLetter";

const LandPage = () => {
  return (
    <div className=" font-lato">
      {/* Nav */}
      <Nav />
      {/* Hero */}
      <Hero />
      {/* SocialHub */}
      <SocialHub />
      {/* Learning Pool */}
      <LearningPool />
      {/* Build the Future */}
      <BuildTheFuture />
      {/* Value Stake*/}
      <ValueStake />
      {/* How it works */}
      <HowItWorks />
      {/*Ready to collaborate & Innovation */}
      <Ready />
      {/*Join Our News Letter*/}
      <JoinOurNewsLetter />
      {/* Footer */}
    </div>
  );
};

export default LandPage;
