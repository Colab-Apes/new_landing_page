import React from "react";
import logo from "../../assets/newimages/logo.png";
import "../../App.css";
const Nav = () => {
  return (
    <div className="w-full bg-[#ECF8EE]">
      <nav className="flex  container font-lato items-center justify-between w-full  py-4 mx-auto">
        <img src={logo} alt="" />
        <div className="flex items-center gap-x-10 text-[#555] font-bold text-[20px]">
          <p>Projects</p>
          <p>Learning pool</p>
          <p>Create project</p>
        </div>
        <div className="flex gap-10">
          <button className="px-[20px] py-[12px] text-[17px] text-white md:bg-green2 btngrad  bg-green1  rounded-[20px] font-bold">
            Sign up
          </button>
          <button className="px-[8px] text-[#054E12] py-[12px] text-[17px]  font-bold">
            Join waitlist
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
