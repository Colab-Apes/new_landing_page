import React, { useEffect, useState } from "react";
import {
  Faqs,
  HowItWorks,
  BuildTheFuture,
  Foot,
  Hero,
  JoinOurNewsLetter,
  LearningPool,
  Ready,
  SocialHub,
  ValueStake,
} from "./sections";
import Nav from "./components/Nav";
import Overlay from "./components/Modals/Overlay";

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
      <Hero changeValue={setisModal} />
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
      <Ready changeValue={setisModal} />
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
