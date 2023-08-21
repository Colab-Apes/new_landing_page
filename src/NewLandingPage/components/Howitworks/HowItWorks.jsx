import React from "react";
import one from "../../../assets/svg/1.svg";
import two from "../../../assets/svg/2.svg";
import three from "../../../assets/svg/3.svg";
import four from "../../../assets/svg/4.svg";
import Card from "./Card";

const HowItWorks = () => {
  return (
    <div>
      {" "}
      <div className=" py-40 mt-64 lg:mt-36 z-10 w-full bg-no-repeat bg-[url('./assets/bg/bg.png')]  mx-auto px-4   md:px-14 lg:px-32 xl:px-60 relative">
        {/* <div className="absolute -z-10 blur-[150px] right-[2rem] w-[300px] h-[300px]  hidden lg:block  bg-[#C26AAA] rounded-[410.85px]"></div>
        <div className="absolute hidden lg:block -z-10 blur-[150px] bottom-[-18rem] left-[-6rem]  lg:w-[387px] h-[410.85px] bg-[#C26AAA] rounded-[410.85px]"></div> */}
        <div className="w-full text-center text-5xl text-[#333] font-bold mb-36">
          How It Works
        </div>
        <div className="   flex flex-col mt-20  md:flex-row gap-x-[8rem]  lg:gap-x-[4rem] justify-between items-start lg:mb-10">
          {/* <div className="flex rounded-[20px]  bg-[#ECF8EE] h-[22rem] w-full"></div> */}

          <Card
            img={one}
            title="Join Co_lab Apes"
            details="Sign Up and Complete your profile"
          />

          <Card
            img={two}
            title="Explore Opportunities"
            details="Discover projects, connect with collaborators, and learn from experts"
          />
        </div>
        <div className=" flex flex-col mt-20 lg:mt-10  md:flex-row gap-x-[8rem]  lg:gap-x-[4rem] justify-between items-start ">
          <Card
            img={three}
            title="Collaborate & Innovate"
            details="Engage in collaborative projects, leverage the power of shared knowledge, and bring your ideas to life"
          />

          <Card
            img={four}
            title="Grow & Succeed"
            details="Gain exposure, attract investors, and achieve success with your innovative projects."
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
