import React from "react";

const Ready = () => {
  return (
    <div>
      <div className="collaborate pt-52 container mx-auto">
        <div className="title px-10 text-center text-5xl text-[#3B8004] font-bold mb-5 md:mb-20">
          Ready to collaborate & Innovate ?
        </div>
        <div className="coll-box flex flex-col justify-center items-center bg-transparent md:bg-[#ECF8EE] h-[80%] w-[100%] rounded-xl p-14">
          <h1 className="text-[#333333] text-center text-[2rem] font-semibold mb-20">
            Join Co_lab Apes Today & Explore a World of Possibilities
          </h1>
          <div className="flex flex-col md:flex-row  gap-5 md:gap-10 w-full md:w-1/2 items-center xl:w-[26%]">
            <button className="w-full bg-green2 text-2xl text-white px-7 py-7  mb-10 btngrad font-bold rounded-[20px]">
              Get Started
            </button>
            <button className="w-full bg-white text-2xl text-black px-7 py-7  mb-10 font-bold rounded-[20px]">
              Join the wait list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
