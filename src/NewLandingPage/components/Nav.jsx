import React, { useState } from "react";
import logo from "../../assets/newimages/logo.png";
import menuicon from "../../assets/svg/menu-icon.svg";
import { TfiClose } from "react-icons/tfi";
import "../../App.css";
const Nav = () => {
  const [opensidenav, setopensidenav] = useState(false);
  return (
    <div className="w-full bg-[#ECF8EE] px-4 md:px-14  lg:px-20">
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
      <nav className="flex font-lato items-center justify-between w-full lg:hidden h-[6rem] md:h-[8rem] ">
        {" "}
        <img
          src={logo}
          alt=""
          className=" w-[16rem] md:w-[18rem] object-contain"
        />
        <img
          onClick={() => setopensidenav(true)}
          src={menuicon}
          alt=""
          className="  w-[4rem]  md:w-[6rem] object-contain"
        />
      </nav>
      {/* Background Overlay */}
      <div
        onClick={() => setopensidenav(false)}
        className={
          opensidenav
            ? "fixed top-0 right-0 bottom-0 h-[100vh] w-full bg-[#000]/[25%] z-30 lg:hidden"
            : "hidden lg:hidden"
        }
      ></div>
      <div
        className={
          opensidenav
            ? "fixed top-0 right-0 duration-500 ease-in-out bottom-0 h-[100vh] w-[75%] sm:w-[60%] px-5 sm:px-16 md:px-20 pt-3 sm:pt-10 bg-[#F8F8F8] bg-sidenav bg-cover z-30 rounded-l-[20px] lg:hidden"
            : "fixed top-0 right-[-100%] duration-500 ease-in-out bottom-0 h-[100vh] w-[75%] sm:w-[60%] px-5 sm:px-16 md:px-20 pt-3 sm:pt-10 bg-[#F8F8F8] bg-sidenav bg-cover z-30 rounded-l-[20px] lg:hidden"
        }
      >
        <div className="flex w-full justify-between items-center relative ">
          {/* <img src={logo} alt="" className="object-cover w-[12rem] " /> */}
          <TfiClose
            onClick={() => setopensidenav(false)}
            className="text-4xl text-black mt-4 top-2 right-3 absolute"
          />
        </div>

        <div className="flex flex-col mt-20 gap-y-10">
          {/* Signup Button - Disabled for now*/}
          <img src={logo} alt="" className="object-contain w-[17rem] mx-auto" />
          <button className="px-[20px] py-[12px] text-[17px] text-white md:bg-green2 btngrad  bg-green1  rounded-[15px] font-bold">
            Sign up
          </button>
          <button className="px-[8px] text-[#054E12] py-[12px] text-[17px]  font-bold">
            Join waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
