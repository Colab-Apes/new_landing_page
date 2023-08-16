import React from "react";
import one from "../../assets/svg/1.svg";
import two from "../../assets/svg/2.svg";
import three from "../../assets/svg/3.svg";
import four from "../../assets/svg/4.svg";

const HowItWorks = () => {
  return (
    <div>
      {" "}
      <div className=" py-40 mt-36 z-10  mx-auto px-4 lg:px-32 relative">
        <div className="absolute -z-10 blur-[150px] right-[-20rem] w-[387px] h-[410.85px]  hidden lg:block  bg-[#C26AAA] rounded-[410.85px]"></div>
        <div className="absolute hidden lg:block -z-10 blur-[150px] bottom-[-18rem] left-[-6rem]  lg:w-[387px] h-[410.85px] bg-[#C26AAA] rounded-[410.85px]"></div>
        <div className="w-full text-center text-5xl text-[#333] font-bold mb-36">
          How It Works
        </div>
        <div className="   flex flex-col mt-20  md:flex-row gap-x-[8rem] justify-between items-start lg:mb-10">
          <div className="flex items-start gap-x-16 rounded-[20px] pb-26 shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)] bg-[#ECF8EE] py-10 px-10 w-full">
            <img src={one} alt="One" className="w-[5rem] object-contain" />
            <div className=" flex flex-col mt-4 ">
              <h1 className="text-[2.127rem] text-[#333] font-bold ">
                Join Co_lab Apes
              </h1>
              <div className="border mt-8"></div>
              <p className="text-[1.5rem] text-[#445C48]  font-normal mt-8">
                Sign Up and Complete your profile
              </p>
            </div>
          </div>
          {/* <div className="flex rounded-[20px]  bg-[#ECF8EE] h-[22rem] w-full"></div> */}

          <div className="flex mt-20  items-start gap-x-20 rounded-[20px] pb-26  lg:pb-20  shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)] bg-[#ECF8EE] py-10 px-10 w-full">
            <img src={two} alt="One" className="w-[6rem] object-contain" />

            <div className="w-text mt-7">
              <h1 className="text-[2rem] text-[#333333] font-semibold mb-16 ">
                Explore Opportunities
              </h1>
              <div className="border mt-8"></div>
              <p className="text-[1.5rem] text-[#445C48]  font-normal mt-8">
                Discover projects, connect with collaborators, and learn from
                experts
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col mt-20  md:flex-row gap-x-[8rem] justify-between items-start ">
          <div className="flex items-start gap-x-20 rounded-[20px] pb-26 lg:pb-20  shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)] bg-[#ECF8EE] py-10 px-10 w-full">
            <img src={three} alt="One" className="w-[6rem] object-contain" />

            <div className="w-text mt-7">
              <h1 className="text-[2rem] text-[#333333] font-semibold mb-16 ">
                Collaborate & Innovate
              </h1>
              <div className="border mt-8"></div>
              <p className="text-[1.5rem] text-[#445C48] font-normal mt-8">
                Engage in collaborative projects, leverage the power of shared
                knowledge, and bring your ideas to life
              </p>
            </div>
          </div>
          <div className="flex items-start mt-20 gap-x-16 rounded-[20px] pb-26 shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)] bg-[#ECF8EE]   py-10 px-10 w-full">
            <img src={four} alt="One" className="w-[6rem] object-contain" />
            <div className=" flex flex-col mt-4 ">
              <h1 className="text-[2.127rem] text-[#333] font-bold ">
                Grow & Succeed
              </h1>
              <div className="border mt-8"></div>
              <p className="text-[1.5rem] text-[#445C48] font-normal mt-8">
                Gain exposure, attract investors, and achieve success with your
                innovative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
