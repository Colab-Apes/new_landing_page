import React from "react";
import herobg from "../../assets/newimages/bg.png";
import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";
import emoji from "../../assets/svg/emoji.svg";

import "../../App.css";
const Hero = () => {
  return (
    <div>
      <section
        // style={{
        //   backgroundImage: `url(${bg1mobile})`,
        // }}
        className={
          "pb-20 px-4  md:px-10 lg:px-20 pt-10 bg-[url('./assets/bg/bg1mobile.jpg')] md:bg-[url('./assets/bg/bg1desktop.jpg')]"
        }
      >
        {/* <div className="z-[-1] absolute w-[387px] h-[324.991px] bg-[#C26AAA] blur-[150px] rounded-[387px] left-[-30rem]"></div>
        <div className=" absolute z-[-2] w-[200px] h-[649.982px] bg-[#054E12] blur-[350px] rounded-full left-[-30rem]"></div> */}

        <div className="hero gap-x-20 lg:pt-20 w-full mx-auto flex flex-col md:flex-row justify-evenly md:justify-between items-center">
          <div className=" w-full md:w-[70%]  text-center md:text-left fade-in-left">
            <p className="text-primaryColor mb-7">
              <span className=" md:text-[1.58rem] lg:text-[2rem]  font-bold hidden md:block text-[#3B513F]">
                Welcome to Co_lab Apes,
                <span className="font-normal"> Let’s Remote Create ! </span>
              </span>
              {/* <span className="text-4xl font-light hidden md:inline"></span> */}
            </p>
            <div className="w-[15%] bg-primaryColor h-2 rounded-full mt-8 lg:mt-12 hidden md:block"></div>
            <h1 className="w-full text-[3.6rem] text-center md:text-left md:text-[3rem]lg:text-[3.8rem] xl:text-[4rem] pt-10 leading-[1.8]  mt-14 text-[#054E12] font-[700] xl:font-[650] ">
              Unleash Your Productivity. <br /> Collaborate. Innovate.
            </h1>
            <p className="text-3xl md:text-2xl xl:text-[1.8rem] mt-14 text-[#3B513F]">
              Join Co_lab Apes and Bring Your Ideas to Life!
            </p>
            <div className="hidden md:flex flex-col-reverse md:flex-row  lg:gap-12 justify-center md:justify-between lg:justify-normal items-center mt-5 xl:mt-12">
              <button className="btngrad font-bold shadow-[10px_10px_30px_0px_rgba(59,_128,_4,_0.10)] lg:px-16  md:px-10 md:py-6 lg:py-8 rounded-[18px] text-[12px] lg:text-[16px] text-white ">
                Get Started
              </button>
              <img
                className="hidden md:block  object-contain lg:w-[8rem] md:w-[6rem] xl:w-[6.9rem]"
                src={emoji}
                alt="Emoji next"
              />
              <a
                className="text-3xl text-[#054E12] font-bold  border-b-2 border-primaryColor"
                href="#"
              >
                See how it works
              </a>
            </div>
          </div>

          <div className="image-content relative fade-in-top  ">
            <img src={frame1} alt="Frame" className="" />
            <img
              className="absolute object-contain md:w-[14rem] lg:w-fit top-24 lg:-left-20 hidden md:block"
              src={frame2}
              alt="frame"
            />
            <img
              className="absolute object-contain  md:w-[14rem] lg:w-fit lg:-bottom-16 md:-bottom-0 md:-right-2  lg:-right-7 hidden md:block"
              src={frame3}
              alt="frame"
            />
          </div>

          <div className="hero-cta hc-mobile w-full flex flex-col justify-center  md:hidden mt-4">
            <button className="w-[60%] mx-auto  btngrad px-10 py-7 rounded-[15px] mb-10 ">
              <a href="#" className="text-[2rem] font-bold text-white">
                Get Started
              </a>
            </button>
            <div className="flex  items-center justify-center gap-x-10">
              <img
                className="w-[7.5rem] object-contain"
                src={emoji}
                alt="Emoji next"
              />

              <a
                className="text-[2.2rem]  text-[#054E12] font-bold text-primaryColor border-b border-primaryColor"
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
