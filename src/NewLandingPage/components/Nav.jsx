import React from "react";
import logo from "../../assets/newimages/logo.png";
import menuicon from "../../assets/svg/menu-icon.svg";

import "../../App.css";
const Nav = () => {
  return (
    <div className="w-full bg-[#ECF8EE] px-4 lg:px-20">
      <nav className="lg:flex font-lato items-center justify-between w-full hidden  py-8">
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
      <nav className="flex font-lato items-center justify-between w-full lg:hidden h-[6rem] ">
        {" "}
        <img src={logo} alt="" className=" w-[16rem]  object-contain" />
        <img src={menuicon} alt="" className="  w-[4rem] object-contain" />
      </nav>
    </div>
  );
};

export default Nav;
