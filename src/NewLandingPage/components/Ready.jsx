import React from "react";
import "../../App.css";
const Ready = () => {
  return (
    <div>
      <div className=" mt-64 lg:mt-36 relative z-10 px-4 w-full lg:px-20 ">
        <div className=" px-10 text-center text-5xl text-[#333] font-bold mb-5 md:mb-20  xl:mb-0 ">
          Ready to collaborate & Innovate
        </div>
        <div className=" flex flex-col w justify-center items-center  h-[80%] w-[100%] rounded-xl p-14">
          <h1 className="text-[#333] text-center text-[2rem] lg:text-[1.5rem]  mb-20">
            Join Co_lab Apes Today & <br className="lg:hidden" />
            Explore a World of Possibilities
          </h1>
          <div className="flex flex-col lg:flex-row w-full items-center gap-x-20  justify-center">
            <button className="  text-2xl text-white w-full lg:w-[17rem]  py-8 lg:py-10  btngrad font-bold rounded-lg  lg:rounded-[20px]">
              Get Started
            </button>
            <button className=" bg-white text-2xl text-black mt-8 lg:mt-0 w-full lg:w-[17rem]  py-8 lg:py-10  font-bold  rounded-lg lg:rounded-[20px] shadow-md">
              Join the wait list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
