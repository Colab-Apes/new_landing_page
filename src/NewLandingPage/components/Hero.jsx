import React from "react";
import herobg from "../../assets/newimages/bg.png";
import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";
import emoji from "../../assets/svg/emoji.svg";

const Hero = () => {
  return (
    <div>
      <section
        style={{
       
        }}
        className="pb-20 "
      >
        <div className="hero container pt-10 w-full mx-auto flex flex-col md:flex-row justify-evenly md:justify-between items-center">
          <div className="text-content w-full md:w-[70%] text-center md:text-left fade-in-left">
            <p className="text-primaryColor mb-7">
              <span className="text-4xl font-600 hidden md:block">
                Welcome to  Apes, Let’s Remote Create !{" "}
              </span>
              {/* <span className="text-4xl font-light hidden md:inline"></span> */}
            </p>
            <div className="w-[10%] bg-primaryColor h-2 rounded-full my-10 hidden md:block"></div>
            <h1 className="w-full leading-normal text-[3rem] text-primaryColor font-semibold mb-12">
              Unleash Your Creativity. <br /> Collaborate. Innovate.
            </h1>
            <p className="text-3xl md:text-4xl text-acentColor">
              Join Co_lab Apes and Bring Your Ideas to Life!
            </p>
            <div className="hero-cta hidden md:flex flex-col-reverse md:flex-row gap-12 justify-center md:justify-normal  items-center mt-10">
              <button className="btngrad shadow-[10px_10px_30px_0px_rgba(59,_128,_4,_0.10)] px-14 py-7 rounded-[20px] text-[17px] text-white">
                Get Started
              </button>
              <img className="hidden md:block" src={emoji} alt="Emoji next" />
              <a
                className="text-3xl text-primaryColor border-b-2 border-primaryColor"
                href="#"
              >
                See how it works
              </a>
            </div>
          </div>

          <div className="image-content relative fade-in-top">
            <img src={frame1} alt="Frame" />
            <img
              className="absolute top-24 -left-20 hidden md:block"
              src={frame2}
              alt="frame"
            />
            <img
              className="absolute -bottom-16 -right-7 hidden md:block"
              src={frame3}
              alt="frame"
            />
          </div>

          <div className="hero-cta hc-mobile container mx-auto">
            <button className="w-full bg-green2 px-10 py-7 rounded-xl mb-10">
              <a href="#" className="text-2xl text-white">
                Get Started
              </a>
            </button>
            <div className="flex items-center justify-center gap-5">
              <div className="img w-[5rem]">
                <img className="w-full" src={emoji} alt="Emoji next" />
              </div>
              <a
                className="text-3xl text-primaryColor border-b border-primaryColor"
                href="#"
              >
                See how it works
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
