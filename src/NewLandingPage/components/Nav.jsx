import React, { useState } from "react";
import logo from "../../assets/newimages/logo.png";
import menuicon from "../../assets/svg/menu-icon.svg";
import { TfiClose } from "react-icons/tfi";
import "../../App.css";
import OverlayHooks from "../Hooks/OverlayHooks";
import WaitList from "./WaitList";
import { useEffect } from "react";

const Nav = ({ changeValue }) => {
  const [openwaitlist, setopenwaitlist] = useState(false);
  const [opensidenav, setopensidenav] = useState(false);
  const hooks = OverlayHooks();
  const [openjoinwaitlist, setopenjoinwaitlist] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setopenjoinwaitlist(true);
    }, 15000);
  }, []);


  return (
    <header className="w-full bg-[#ECF8EE] px-4 md:px-14  lg:px-20 ">
      <WaitList
        openjoinwaitlistmodal={openjoinwaitlist}
        setopenjoinwaitlistmodal={setopenjoinwaitlist}
      />
      <nav className="lg:flex z-[100] font-lato px-4 md:px-14  lg:px-20 bg-[#ECF8EE]/[50%] left-0 fixed  items-center justify-between w-full hidden  py-8 lg:py-4 animate-fade-down animate-duration-[1000ms] animate-ease-in-out ">
        <img src={logo} alt="" />
        <div className="flex items-center gap-x-10 text-[#555] font-bold text-[20px]">
          <p>Projects</p>
          <p>Learning pool</p>
          <p>Create project</p>
        </div>
        <div className="flex gap-10">
          <button
            className="px-[8px] text-[#054E12] py-[12px] text-[17px] font-bold hover:animate-pulse hover:animate-once hover:animate-duration-[750ms] hover:animate-ease-in-out "
            onClick={() => {
              setopenjoinwaitlist(true);
            }}
          >
            Join waitlist
          </button>
          <button
            onClick={() => {
              hooks.setopensignupmodal(true);
              changeValue(true);
            }}
            className="px-[20px] py-[12px] text-[17px] text-white md:bg-green2 btngrad  bg-green1 rounded-[20px] font-bold hover:animate-pulse hover:animate-once hover:animate-duration-[750ms] hover:animate-ease-in-out "
          >
            Sign up
          </button>
        </div>
      </nav>


      {/* MOBILE */}
      <nav className="flex font-lato fixed bg-[#ECF8EE]/[20%]  left-0 items-center  px-4 justify-between w-full lg:hidden h-[6rem] md:h-[8rem] z-[90]">
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
            ? "fixed top-0 right-0 bottom-0 h-[100vh] w-full bg-[#000]/[25%] z-[100] lg:hidden"
            : "hidden lg:hidden"
        }
      ></div>
      <div
        className={
          opensidenav
            ? "fixed top-0 right-0 duration-500 ease-in-out bottom-0 h-[100vh] w-[75%] sm:w-[60%] px-5 sm:px-16 md:px-20 pt-3 sm:pt-10 bg-[#F8F8F8] bg-sidenav bg-cover  rounded-l-[20px] lg:hidden z-[100]"
            : "fixed top-0 right-[-100%] duration-500 ease-in-out bottom-0 h-[100vh] w-[75%] sm:w-[60%] px-5 sm:px-16 md:px-20 pt-3 sm:pt-10 bg-[#F8F8F8] bg-sidenav bg-cover rounded-l-[20px] lg:hidden z-[100]"
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

          <button
            onClick={() => {
              setopensidenav(false);
              setopenjoinwaitlist(true);

              // scrollToSection();
            }}
            className="px-[8px] text-[#054E12] py-[12px] text-[17px]  font-bold"
          >
            Join waitlist
          </button>
          <button
            onClick={() => {
              setopensidenav(false);
              changeValue(true);
            }}
            className="px-[20px] py-[12px] text-[17px] text-white md:bg-green2 btngrad  bg-green1  rounded-[15px] font-bold"
          >
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
