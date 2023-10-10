import { useState } from "react";

import WaitList from "../components/WaitList";
import OverlayHooks from "../Hooks/OverlayHooks";

import "../../App.css";



const Ready = ({ changeValue }) => {
  const [openjoinwaitlist, setopenjoinwaitlist] = useState(false);
  const hooks = OverlayHooks();
  return (
    <div>
      <WaitList
        openjoinwaitlistmodal={openjoinwaitlist}
        setopenjoinwaitlistmodal={setopenjoinwaitlist}
      />
      <div className=" mt-64 lg:mt-36 relative z-10 px-10 w-full  md:px-14 lg:px-20 ">
        <div className=" px-10 text-center text-5xl text-[#333] font-bold mb-5 md:mb-20  xl:mb-0 ">
          Ready to collaborate & Innovate
        </div>
        <div className=" flex flex-col w justify-center items-center  h-[80%] w-[100%] rounded-xl p-14">
          <h1 className="text-[#333] text-center text-[2rem] lg:text-[1.5rem]  mb-20">
            Join Co_lab Apes Today & <br className="lg:hidden" />
            Explore a World of Possibilities
          </h1>
          <div className="flex flex-col lg:flex-row w-full items-center gap-x-20  justify-center">
            <button
              onClick={() => {
                hooks.setopensignupmodal(true);
                changeValue(true);
              }}
              className="  text-2xl text-white w-full lg:w-[17rem]  py-8 lg:py-10  btngrad font-bold rounded-[15px]  lg:rounded-[20px] hover:animate-pulse hover:animate-once hover:animate-duration-[750ms] hover:animate-ease-in-out "
            >
              Get Started
            </button>
            <button
              className=" bg-white text-2xl text-black mt-8 lg:mt-0 w-full lg:w-[17rem] py-8 lg:py-10  font-bold  rounded-[15px] lg:rounded-[20px] shadow-md hover:animate-pulse hover:animate-once hover:animate-duration-[750ms] hover:animate-ease-in-out "
              onClick={() => {
                setopenjoinwaitlist(true);
              }}
            >
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
