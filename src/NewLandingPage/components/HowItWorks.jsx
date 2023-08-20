import React from "react";
import one from "../../assets/svg/1.svg";
import two from "../../assets/svg/2.svg";
import three from "../../assets/svg/3.svg";
import four from "../../assets/svg/4.svg";

const HowItWorks = () => {
  return (
    <div>
      {" "}
      <div className=" py-40 mt-64 lg:mt-36 z-10 w-full bg-no-repeat bg-[url('./assets/bg/bg.png')]  mx-auto px-4   md:px-14 lg:px-32 relative">
        {/* <div className="absolute -z-10 blur-[150px] right-[2rem] w-[300px] h-[300px]  hidden lg:block  bg-[#C26AAA] rounded-[410.85px]"></div>
        <div className="absolute hidden lg:block -z-10 blur-[150px] bottom-[-18rem] left-[-6rem]  lg:w-[387px] h-[410.85px] bg-[#C26AAA] rounded-[410.85px]"></div> */}
        <div className="w-full text-center text-5xl text-[#333] font-bold mb-36">
          How It Works
        </div>
        <div className="   flex flex-col mt-20  md:flex-row gap-x-[8rem]  lg:gap-x-[4rem] justify-between items-start lg:mb-10">
          {/* <div className="flex rounded-[20px]  bg-[#ECF8EE] h-[22rem] w-full"></div> */}

          <div className="flex mt-20 lg:mt-0  items-start gap-x-20 rounded-[20px] pb-26  lg:pb-20  shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)] bg-[#D5EEDA] py-10 px-10  h-[30rem] w-[50%] ">
            <img src={one} alt="One" className="w-[6rem] object-contain" />

            <div className="w-text mt-7">
              <h1 className="text-[2rem] text-[#333333] font-semibold mb-16 ">
                Join Co_lab Apes
              </h1>
              <div className="border border-[#999]/[0.3] mt-8"></div>
              <p className="text-[1.5rem] text-[#445C48]  font-normal mt-8">
                Sign Up and Complete your profile
              </p>
            </div>
          </div>

          <div className="flex mt-20 lg:mt-0  items-start gap-x-20 rounded-[20px] pb-26  lg:pb-20  shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)] bg-[#D5EEDA] py-10 px-10 w-[50%] h-[30rem]">
            <img src={two} alt="One" className="w-[6rem] object-contain" />

            <div className="w-text mt-7">
              <h1 className="text-[2rem] text-[#333333] font-semibold mb-16 ">
                Explore Opportunities
              </h1>
              <div className="border border-[#999]/[0.3] mt-8"></div>
              <p className="text-[1.5rem] text-[#445C48]  font-normal mt-8">
                Discover projects, connect with collaborators, and learn from
                experts
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col mt-20 lg:mt-10  md:flex-row gap-x-[8rem]  lg:gap-x-[4rem] justify-between items-start ">
          <div className="flex mt-20 lg:mt-0  items-start gap-x-20 rounded-[20px] pb-26  lg:pb-20  shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)] bg-[#D5EEDA] py-10 px-10  w-[50%] h-[30rem]">
            <img src={three} alt="One" className="w-[6rem] object-contain" />

            <div className="w-text mt-7">
              <h1 className="text-[2rem] text-[#333333] font-semibold mb-16 ">
                Collaborate & Innovate
              </h1>
              <div className="border border-[#999]/[0.3] mt-8"></div>
              <p className="text-[1.5rem] text-[#445C48]  font-normal mt-8">
                Engage in collaborative projects, leverage the power of shared
                knowledge, and bring your ideas to life
              </p>
            </div>
          </div>

          <div className="flex mt-20 lg:mt-0  items-start gap-x-20 rounded-[20px] pb-26  lg:pb-20  shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)] bg-[#D5EEDA] py-10 px-10  w-[50%] h-[30rem]">
            <img src={four} alt="One" className="w-[6rem] object-contain" />

            <div className="w-text mt-7">
              <h1 className="text-[2rem] text-[#333333] font-semibold mb-16 ">
                Grow & Succeed
              </h1>
              <div className="border border-[#999]/[0.3] mt-8"></div>
              <p className="text-[1.5rem] text-[#445C48]  font-normal mt-8">
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
