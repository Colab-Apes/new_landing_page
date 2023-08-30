import React from "react";

import { TfiClose } from "react-icons/tfi";
import { TypeAnimation } from "react-type-animation";
import box from "../../assets/container.png";
import WaitLiskHook from "../Hooks/WaitLiskHook";
import "../../App.css";
const WaitList = ({ openjoinwaitlistmodal, setopenjoinwaitlistmodal }) => {
  const { email, setemail, setsuccess, success, submitEmail, load } =
    WaitLiskHook();

  return (
    <div
      className={
        openjoinwaitlistmodal
          ? "bg-[#000]/[25%] fixed h-screen z-[120] lg:px-[10vw] xl:px-[19vw] w-full    px-4 sm:px-32 md:px-32 left-0 flex justify-center items-center font-lato duration-300 ease-in-out"
          : "bg-[#000]/[25%] fixed h-screen w-full z-[-100] opacity-0 px-4 sm:px-32 md:px-32 left-0 flex justify-center items-center font-lato  duration-300 ease-in-out"
      }
    >
      <div
        className={
          " rounded-[20px] lg:rounded-[50px] bg-[url('./assets/waitlist1.png')]  z-[120] bg-[#F5FFF7] flex items-center justify-between min-h-[63rem] w-full py-0  sm:pb-0 md:py-4  sm:min-h-[35rem] lg:min-h-[32rem] lg:w-full  xl:min-h-[50rem] xl:h-[] lg:p-[3rem]  xl:w-full  md:w-ful sm:px-8 md:px-[3rem] xl:px-[5rem] opacity-100 xl:py-[3.5rem]  relative duration-[800ms] ease-in-out"
        }
      >
        <TfiClose
          onClick={() => {
            setopenjoinwaitlistmodal(false);
          }}
          className="text-3xl lg:text-xl xl:text-3xl text-[#999999] font-bold cursor-pointer z-[200] absolute right-12 top-16  md:top-8 lg:top-10 xl:right-28 xl:top-14 md:right-8 lg:right-10 "
        />

        <div className="grid lg:flex mt-4 lg:mt-0 h-[75vh] lg:h-[80vh]  lg:w-full  justify-between items-center justify-items-center">
          <div className="flex flex-col lg:min-h-[30vh] justify-between sm:justify-around ">
            {/* Heading */}
            <div className="flex items-center gap-x-4">
              <p className="text-[#054E12] text-lg md:text-2xl lg:text-lg xl:text-xl font-bold">
                Coming soon
              </p>
              <div className="bg-[#3B8004] sm:w-[10rem] w-[3rem] xl:w-[6rem]  rounded-[30px] h-[0.2rem]"></div>
            </div>

            {/* Animated Text */}
            <TypeAnimation
              className="text-[1.5rem] text-[#054E12] leading-[1.7] md:leading-[1.7] text-left lg:leading-[1.5] w-full sm:w-[33rem] md:w-[40rem] lg:w-[30rem] xl:w-[35rem] h-[8rem] sm:h-[12.6rem]  md:h-[11rem] xl:h-[16rem] xl:leading-[1.6] sm:text-[1.9rem] md:text-4xl lg:text-[2rem] xl:text-[2.5rem] xl:mt-10 mt-4 lg:mt-2 font-bold"
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Unlock Your Digital Team: Find, Collaborate, and Build the Future Together",
                10000,
                "Unlock Your Digital Dream Team: Find, Collaborate, and Soar Together",
                10000,
                "Unleash Your Digital Vision with the Perfect Dream Team",
                10000,
                "Empowering Digital Entrepreneurs to Build their Dream Team for Success",
                10000,
                "Unleash Your Digital Vision. Find Your Dream Team Today!",
                10000,
              ]}
              speed={62.5}
              repeat={Infinity}
              color="#054E12"
            />
            {/* Hero Image (hidden on lg and larger screens) */}
            <img
              src={box}
              alt=""
              className="w-[80%] sm:w-[27rem] object-contain lg:hidden mx-auto lg:mx-0  mt-8 sm:mt-4 "
              loading="lazy"
            />

            <div className="flex flex-col w-full mt-8  sm:mt-10 justify-between lg:mt-2 xl:mt-8">
              {/* Waitlist Form */}
              <p className="text-[#054E12] text-[1.8rem] font-lato font-medium">
                Join the wait list
              </p>
              <div className="mt-2"></div>
              {success ? (
                // Success Message
                <div
                  className={
                    "w-[92%] lg:w-[22rem] duration-500 origin-left scale-x-[92%] lg:scale-x-[22rem] md:px-10 h-[4.5rem] border-main border-4 text-white bg-main/[50%] rounded-[20px] flex items-center text-center justify-center"
                  }
                >
                  <RiErrorWarningLine className="text-2xl mr-3" />
                  <p className="md:text-lg mr-3">Successfully submitted!</p>
                  <IoIosClose
                    className="text-2xl cursor-pointer"
                    onClick={() => setsuccess(false)}
                  />
                </div>
              ) : (
                // Waitlist Form Input
                <div className="relative w-full duration-500 origin-left scale-x-[100%]">
                  <input
                    type="email"
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                    placeholder="enter your email address..."
                    className="h-[5rem] placeholder:text-[#999999]  text-xl font-medium w-full lg:w-full lg:origin-left px-[1.3rem] pr-[7rem] rounded-[14px] focus:outline-none border-[#3B8004] border-2 bg-transparent"
                  />
                  {load ? (
                    <ClipLoader
                      color="#3B8004"
                      className="right-5 text-2xl  inset-y-4 absolute"
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  ) : (
                    <button
                      onClick={() => submitEmail()}
                      className="join absolute btngrad right-2 inset-y-2 text-2xl  hover:bg-transparent hover:text-main h-[4rem] w-[9rem] rounded-[10px] text-white"
                    >
                      Join
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
          <img
            src={box}
            alt=""
            className="lg:w-[33vw] xl:w-[18vw] object-contain lg:block hidden"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default WaitList;
