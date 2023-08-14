import React from "react";
import logo from "../assets/newimages/logo.png";
import "../App.css";
const LandPage = () => {
  return (
    <div>
      <nav className="flex font-lato items-center justify-between container mx-auto">
        <img src={logo} alt="" />
        <div className="flex items-center gap-x-10 text-[#555] font-bold text-[20px]">
          <p>Projects</p>
          <p>Learning pool</p>
          <p>Create project</p>
        </div>
        <div className="flex gap-10">
          <button className="px-[20px] py-[12px] text-[17px] rounded-[20px] font-bold font-600 text-[#222]">
            Sign in
          </button>
          <button className=" text-[17px] text-white md:bg-green2 btngrad  bg-green1 px-12 py-5 rounded-[20px] font-bold">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LandPage;
