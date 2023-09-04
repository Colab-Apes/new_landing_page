import React, { useEffect, useState } from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SocialHub from "./components/SocialHub";
import LearningPool from "./components/LearningPool";
import BuildTheFuture from "./components/BuildTheFuture";
import ValueStake from "./components/ValueStake";
import HowItWorks from "./components/Howitworks/HowItWorks";
import Ready from "./components/Ready";
import JoinOurNewsLetter from "./components/JoinOurNewsLetter";
import Foot from "./components/Foot";
import Faqs from "./components/Faqs/Faqs";
import Overlay from "./components/Modals/Overlay";
import WaitList from "./components/Modals/WaitList";

const LandPage = () => {
  const [isModal, setisModal] = useState(false);

  useEffect(() => {
    const safeDocument = typeof document !== "undefined" ? document : {};
    const { body } = safeDocument;
    if (isModal) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }, [isModal]);


  return (
    <div className=" font-lato">

      {/* overlay for auth */}
      <Overlay value={isModal} changeValue={setisModal} />
      {/* Nav */}
      <Nav changeValue={setisModal} />
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
      {/*FAQS*/}
      <Faqs />
      {/*Join Our News Letter*/}
      <JoinOurNewsLetter />
      {/* Footer */}
      <Foot />
    </div>
  );
};

export default LandPage;
