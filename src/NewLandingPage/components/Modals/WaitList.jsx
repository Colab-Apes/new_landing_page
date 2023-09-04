import React from "react";

const WaitList = ({ openjoinwaitlistmodal }) => {
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
          " rounded-[20px] lg:rounded-[50px] z-[120] bg-[#F5FFF7] flex items-center justify-between min-h-[63rem] w-full py-0  sm:pb-0 md:py-4  sm:min-h-[35rem] lg:min-h-[32rem] lg:w-full  xl:min-h-[54rem] xl:h-[] lg:p-[3rem]  xl:w-full  md:w-ful sm:px-8 md:px-[3rem] xl:px-[3.5rem] opacity-100 xl:py-[3.5rem]  relative duration-[800ms] ease-in-out"
        }
      ></div>
    </div>
  );
};

export default WaitList;
