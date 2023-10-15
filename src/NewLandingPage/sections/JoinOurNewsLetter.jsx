import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { ClipLoader } from "react-spinners";

import HeroHooks from "../Hooks/HeroHooks";

import FadeIn from "../components/FadeIn";

import "../../App.css";



const JoinOurNewsLetter = () => {
  const { email, setemail, setsuccess, success, submitEmail, load } =
    HeroHooks();

  return (
    <section id="newsletter">
      <FadeIn delay={0.6} direction="right">
        <div className="relative mt-64 lg:mt-36 px-4   md:px-14 lg:px-20  mx-auto">
          <div className="absolute hidden lg:block z-[-1] blur-[150px] bottom-[-20rem] right-[2rem] w-[200px] h-[210px] bg-[#C26AAA] rounded-[400px]"></div>
          <div className="title text-center text-5xl text-[#333] font-[900] ">
            Join Our Newsletter
          </div>
          <div className=" flex flex-col justify-start md:justify-center items-center mt-20 lg:mt-10 bg-transparent   h-[80%] lg:w-[80%] mx-auto   p-0 md:p-14 xl:p-0">
            <h1 className="text-[#054E12] text-center text-3xl lg:text-[2rem] leading-[1.4]  ">
              Stay connected and informed:
              <p>
                {" "}
                Join our newsletter for the latest successful projects and
                business deals.
              </p>
            </h1>

            {success ? (
              // Success Message
              <div
                className={
                  "w-[92%] md:w-[40rem] xl:w-[45rem] duration-500 origin-left scale-x-[92%] lg:scale-x-[22rem] md:px-10 h-[7rem] border-[#054E12] border-4 text-white  bg-[#054E12]/[50%] rounded-[20px] flex items-center text-center justify-center mt-20"
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
              <div className="border-2 border-solid py-2 origin-left  duration-500 relative lg:w-[50%] border-[#3B8004] gap-10 flex  0 items-center p-3 xl:0 mt-20 rounded-[10px] lg:rounded-[20px] w-full">
                <div className="input py-7">
                  <input
                    type="email"
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                    className="text-3xl bg-transparent  w-full md:w-[40rem] xl:w-[45rem] p-0 pl-[1.5rem] outline-none border-none bg-none placeholder:font-bold placeholder:text-[#999]"
                    placeholder="enter your email address..."
                  />
                </div>
                {load ? (
                  <ClipLoader
                    color="#3B8004"
                    className="right-5 text-2xl  inset-y-4 absolute"
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      submitEmail();
                      console.log("ecco");
                    }}
                    className=" absolute shadow-[15px_15px_50px_0px_rgba(0,_0,_0,_0.05)]  px-12 btngrad py-6 lg:py-6 lg:text-[1.4rem] rounded-[8px] lg:rounded-[15px] text-3xl text-white right-2 font-bold hover:animate-pulse hover:animate-once hover:animate-duration-[750ms] hover:animate-ease-in-out "
                  >
                    Subscribe
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default JoinOurNewsLetter;
