import React, { useState } from "react";
import frame1 from "../../assets/frame1.webp";
import frame2 from "../../assets/frame2.webp";
import frame3 from "../../assets/frame3.webp";
import emoji from "../../assets/svg/emoji.png";

import "../../App.css";
import FadeIn from "../components/FadeIn";
import WaitList from "../components/WaitList";



const Hero = () => {
  const [openjoinwaitlist, setopenjoinwaitlist] = useState(false);

  return (
    <div>
      <section
        className={
          " h-screen pb-20 px-4  md:px-10 lg:px-20 pt-10 lg:pt-0 bg-[url('./assets/bg/bg1mobile.webp')] md:bg-[url('./assets/bg/bg1desktop.webp')]"
        }
        style={{
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <WaitList
          openjoinwaitlistmodal={openjoinwaitlist}
          setopenjoinwaitlistmodal={setopenjoinwaitlist}
        />
        <div className=" hero gap-x-20 lg:pt-[13rem] w-full mx-auto flex flex-col md:flex-row justify-evenly md:justify-between items-center">
          <div className=" w-full md:w-[70%]  text-center md:text-left fade-in-left">
            <FadeIn delay={0.2} direction="right">
              <p className="text-primaryColor mb-7">
                <span className=" md:text-[1.58rem] lg:text-[2rem]  font-bold hidden md:block text-[#3B513F]">
                  Welcome to Co_lab Apes,
                  <span className="font-normal"> Let’s Remote Create ! </span>
                </span>
              </p>
              <div className="w-[15%] bg-primaryColor h-2 rounded-full mt-8 lg:mt-12 hidden md:block"></div>
            </FadeIn>

            <FadeIn delay={0.4} direction="right">
              <h1 className="w-full text-[3.6rem] text-center md:text-left md:text-[3rem]lg:text-[3.8rem] xl:text-[4rem] pt-10 leading-[1.8]  mt-14 text-[#054E12] font-[700] xl:font-[650] ">
                Unleash Your Productivity. <br /> Collaborate. Innovate.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2} direction="right">
              <p className="text-3xl md:text-2xl xl:text-[1.8rem] mt-14 text-[#3B513F]">
                Join Co_lab Apes and Bring Your Ideas to Life!
              </p>
              <div className="hidden md:flex flex-col-reverse md:flex-row lg:gap-12 justify-center md:justify-between lg:justify-normal items-center mt-5 xl:mt-12">
                <button
                  onClick={() => {
                    setopenjoinwaitlist(true);
                  }}
                  className="btngrad font-bold shadow-[10px_10px_30px_0px_rgba(59,_128,_4,_0.10)] lg:px-16  md:px-10 md:py-6 lg:py-8 rounded-[18px] text-[12px] lg:text-[16px] text-white hover:animate-pulse hover:animate-once hover:animate-duration-[750ms] hover:animate-ease-in-out"
                >
                  Join Waitlist
                </button>
                <img
                  className="hidden md:block  object-contain lg:w-[8rem] md:w-[6rem] xl:w-[6.9rem]"
                  src={emoji}
                  alt="Emoji next"
                  loading="lazy"
                />
                <a
                  className="text-3xl text-[#054E12] font-bold  border-b-2 border-primaryColor hover:animate-pulse hover:animate-once hover:animate-duration-[750ms] hover:animate-ease-in-out"
                  href="#"
                >
                  Scroll for more info
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="left">
            <div className="image-content relative fade-in-top  ">
              <img src={frame1} alt="Frame" className="" loading="lazy"/>
              <img
                className="absolute object-contain md:w-[14rem] lg:w-fit top-24 lg:-left-20 hidden md:block"
                src={frame2}
                alt="frame"
                loading="lazy"
              />
              <img
                className="absolute object-contain  md:w-[14rem] lg:w-fit lg:-bottom-16 md:-bottom-0 md:-right-2  lg:-right-7 hidden md:block"
                src={frame3}
                alt="frame"
                loading="lazy"
              />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4} direction="right">
            <div className="hero-cta hc-mobile w-full flex flex-col justify-center  md:hidden mt-4">
              <button className=" w-[29rem] mx-auto  btngrad px-10 py-7 rounded-[15px] mb-10 ">
                <a
                  onClick={() => {
                    setopenjoinwaitlist(true);
                  }}
                  className="text-[2rem] font-bold text-white"
                >
                  Join Waitlist
                </a>
              </button>
              <div className="flex  items-center justify-center gap-x-10">
                <img
                  className="w-[7.5rem] object-contain"
                  src={emoji}
                  alt="Emoji next"
                  loading="lazy"
                />

                <a
                  className="text-[2.2rem]  text-[#054E12] font-bold text-primaryColor border-b border-primaryColor"
                  href="#"
                >
                  Scroll for more info
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};


export default Hero;
