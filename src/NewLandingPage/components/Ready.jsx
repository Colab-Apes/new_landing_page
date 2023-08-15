import React from "react";
import "../../App.css";
const Ready = () => {
  return (
    <div>
      <div className=" mt-28 container mx-auto relative z-10 ">
        <div className="absolute -z-10 blur-[150px] bottom-[-30rem] right-[-20rem] w-[387px] h-[410.85px] bg-[#C26AAA] rounded-[410.85px]"></div>
        <div className=" px-10 text-center text-5xl text-[#333] font-bold mb-5 md:mb-20  xl:mb-0 ">
          Ready to collaborate & Innovate
        </div>
        <div className=" flex flex-col justify-center items-center  h-[80%] w-[100%] rounded-xl p-14">
          <h1 className="text-[#333] text-center text-[1.5rem]  mb-20">
            Join Co_lab Apes Today & Explore a World of Possibilities
          </h1>
          <div className="flex items-center gap-x-20  justify-center">
            <button className="  text-2xl text-white w-[17rem] py-10  btngrad font-bold rounded-[20px]">
              Get Started
            </button>
            <button className=" bg-white text-2xl text-black w-[17rem] py-10  font-bold rounded-[20px] shadow-md">
              Join the wait list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
