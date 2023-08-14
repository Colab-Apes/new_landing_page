import React from "react";
import one from "../../assets/svg/1.svg";
import two from "../../assets/svg/2.svg";
import three from "../../assets/svg/3.svg";
import four from "../../assets/svg/4.svg";

const HowItWorks = () => {
  return (
    <div>
      {" "}
      <div className="works py-40 container mx-auto px-10">
        <div className="title text-center text-5xl text-[#333] font-bold mb-20">
          How It Works
        </div>
        <div className=" flex flex-col  md:flex-row gap-x-[20rem] justify-between items-start mb-10">
          {/* <div className=" rounded-[20px]  bg-[#ECF8EE] flex gap-10 p-7  w-full md:w-1/2 box-shadow">
            <div className="w-number">
              <img src={one} alt="One" className="" />
            </div>
            <div className="w-text mt-7">
              <h1 className="text-[2rem] text-[#333333] font-semibold mb-16 ">
                Join Co_lab Apes
              </h1>
              <p className="text-[1.7rem] text-[#445C48] border-t pt-10">
                Sign Up and Complete your profile
              </p>
            </div>
          </div> */}

          <div className="flex gap-x-10 rounded-[20px]  shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)] bg-[#ECF8EE]   py-10 px-10 w-full">
            <div className="">
              <img src={one} alt="One" className="" />
            </div>
            <div className=" flex flex-col mt-4 ">
              <h1 className="text-[2.127rem] text-[#333] font-bold ">
                Join Co_lab Apes
              </h1>
              <div className="border mt-8"></div>
              <p className="text-[1.5rem] text-[#445C48]  font-bold mt-8">
                Sign Up and Complete your profile
              </p>
            </div>
          </div>
          {/* <div className="flex rounded-[20px]  bg-[#ECF8EE] h-[22rem] w-full"></div> */}

          <div className="flex gap-x-20 rounded-[20px]  shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)] bg-[#ECF8EE] py-10 px-10 w-full">
            <div className="">
              <img src={two} alt="One" className="" />
            </div>
            <div className="w-text mt-7">
              <h1 className="text-[2rem] text-[#333333] font-semibold mb-16 ">
                Join Co_lab Apes
              </h1>
              <p className="text-[1.7rem] text-[#445C48] border-t pt-10">
                Sign Up and Complete your profile
              </p>
            </div>
          </div>
        </div>
        <div className="works flex flex-col md:flex-row gap-12 justify-between">
          <div className="w-box bg-[#ECF8EE] flex gap-10 p-7 rounded-[20px] w-full md:w-1/2 box-shadow">
            <div className="w-number]">
              <img src={three} alt="One" className="" />
            </div>
            <div className="w-text mt-7">
              <h1 className="text-[2rem] text-[#333333] font-semibold mb-16 ">
                Collaborate & Innovate
              </h1>
              <p className="text-[1.7rem] text-[#445C48] border-t pt-10">
                Engage in collaborative projects, leverage the power of shared
                knowledge, and bring your ideas to life
              </p>
            </div>
          </div>
          <div className="w-box bg-[#ECF8EE] flex gap-10  p-7 rounded-[20px] w-full md:w-1/2 box-shadow">
            <div className="w-number">
              <img src={four} alt="One" className="" />
            </div>
            <div className="w-text mt-7">
              <h1 className="text-[2rem] text-[#333333] font-semibold mb-16 ">
                Grow & Succeed
              </h1>
              <p className="text-[1.7rem] text-[#445C48] border-t pt-10">
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
