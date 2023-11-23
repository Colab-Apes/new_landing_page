import { RiErrorWarningLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import { ClipLoader } from "react-spinners";

import Socials from "./Socials";
import WaitLiskHook from "../../../NewLandingPage/Hooks/WaitLiskHook";

import heroimage from "../assets/waitlistheroimage.png";



const Hero = () => {
  const { email, setemail, setsuccess, success, submitEmail, load } = WaitLiskHook();

  return (
    <section className="grid lg:flex mt-4 lg:mt-0 xl:px-20 md:h-[75vh] lg:h-[80vh] sm:w-[33rem] md:w-[42rem] lg:w-full justify-center lg:gap-x-8 xl:gap-x-16 items-center justify-items-center">
      <div className="flex flex-col lg:min-h-[30vh] justify-between sm:justify-around">
        {/* Heading */}
        <div className="flex items-center gap-x-4">
          <p className=" text-[#054E12] text-lg md:text-2xl lg:text-[2rem] font-bold">
            Coming soon
          </p>
          <div className="bg-[#3B8004] sm:w-[10rem] w-[3rem] lg:w-[4.38rem] h-[0.2rem]"></div>
        </div>
        {/* color: #
        {/* Animated Text */}
        <TypeAnimation
          className=" text-[#054E12] text-[1.5rem] leading-[1.7] md:leading-[1.7] text-left lg:leading-[3.75rem] w-full sm:w-[33rem] md:w-[40rem] lg:w-[40.56rem] h-[8rem] sm:h-[12.6rem]  md:h-[11rem] sm:text-[1.9rem] md:text-4xl lg:text-[2.75rem] mt-4 lg:mt-[2.06rem] font-black "
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
        />

        {/* Hero Image (hidden on lg and larger screens) */}
        <img
          src={heroimage}
          alt=""
          className="w-[80%] sm:w-[27rem] object-contain lg:hidden mx-auto lg:mx-0  mt-8 sm:mt-4 "
          loading="lazy"
        />

        <div className="flex flex-col w-full mt-8  sm:mt-10 gap-[0.6rem] justify-between lg:mt-[5.19rem]">
          {/* Waitlist Form */}
          <p className="text-[#054E12] text-xl font-lato font-medium">
            Join the wait list
          </p>
          <div></div>
          {success ? (
              // Success Message
              <div
                className={
                  "w-[92%] md:w-[40rem] xl:w-full duration-500 origin-left scale-x-[92%] lg:scale-x-[22rem] md:px-10 h-[6rem] border-[#054E12] border-2 text-white  bg-[#054E12]/[50%] rounded-[20px] flex items-center text-center justify-center "
                }
              >
                <RiErrorWarningLine className="text-2xl lg:text-4xl mr-3" />
                <p className="md:text-lg lg:text-xl xl:text-2xl mr-3">
                  Successfully submitted!
                </p>
                <IoIosClose
                  className="text-2xl  lg:text-5xl cursor-pointer"
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
                  className="h-[5rem] placeholder:text-[#999999] text-lg font-medium w-full lg:w-full lg:origin-left px-[1.3rem] pr-[7rem] rounded-[1.25rem] focus:outline-none border-[#3B8004] border-2 bg-transparent"
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
                    className="join absolute right-2 inset-y-2 bg-[#007D16]  hover:bg-transparent hover:text-[#007D16] hover:border hover:border-[#007D16] font-lato font-semibold h-[4.06rem] w-[7.3rem] rounded-[0.94rem] text-white"
                  >
                    Join
                  </button>
                )}
              </div>
            )}

          {/* Social Media Icons (hidden on lg and larger screens) */}
          <div className="lg:hidden mt-6 mb-4 sm:mt-10 ">
            <Socials />
          </div>
        </div>
      </div>

      {/* Hero Image (hidden on sm and smaller screens) */}
      <img
        src={heroimage}
        alt=""
        className="lg:w-[30.75rem] lg:ml-[5.12rem] xl:w-[30vw] object-contain lg:block hidden"
        loading="lazy"
      />
    </section>
  );
};

export default Hero;