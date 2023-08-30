import React from "react";

import { TfiClose } from "react-icons/tfi";
const WaitList = ({ openjoinwaitlistmodal, setopenjoinwaitlistmodal }) => {
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
          " rounded-[20px] lg:rounded-[50px] bg-[url('./assets/waitlist1.png')]  z-[120] bg-[#F5FFF7] flex items-center justify-between min-h-[63rem] w-full py-0  sm:pb-0 md:py-4  sm:min-h-[35rem] lg:min-h-[32rem] lg:w-full  xl:min-h-[54rem] xl:h-[] lg:p-[3rem]  xl:w-full  md:w-ful sm:px-8 md:px-[3rem] xl:px-[3.5rem] opacity-100 xl:py-[3.5rem]  relative duration-[800ms] ease-in-out"
        }
      >
        <TfiClose
          onClick={() => {
            setopenjoinwaitlistmodal(false);
          }}
          className="text-3xl lg:text-xl xl:text-3xl text-[#999999] font-bold cursor-pointer z-[200] absolute right-12 top-16  md:top-8 lg:top-10 xl:right-28 xl:top-14 md:right-8 lg:right-10 "
        />
      </div>
    </div>
  );
};

export default WaitList;
