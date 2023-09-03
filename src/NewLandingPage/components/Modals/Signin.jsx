import React, { useState } from "react";

import img1 from "../../../assets/ModalImages/signin.png";
import logo from "../../../assets/ModalImages/logo.png";

import { Lock, Message } from "react-iconly";
import google from "../../../assets/ModalImages/social/Google logo.png";
import facebook from "../../../assets/ModalImages/social/Facbook.png";
import apple from "../../../assets/ModalImages/social/Vector.svg";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import "../../../App.css";
import { useSigninHook } from "../../../Validation/Hooks/useSigninHook";

const Signin = ({ setsigninmodalprop, signinmodalprop }) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const { formik } = useSigninHook();
  return (
    <div
      className={
        signinmodalprop
          ? " rounded-[20px] lg:rounded-[3.13rem] z-[120]   bg-[#F5FFF7] flex items-center justify-between min-h-[63rem] r  w-full py-0  sm:pb-0 md:py-4      sm:min-h-[35rem] lg:min-h-[32rem] lg:w-[67.9rem]  xl:min-h-[54rem] xl:h-[] lg:p-[3rem]  xl:w-full  md:w-ful sm:px-8 md:px-[3rem] xl:px-[3.5rem] opacity-100 xl:py-[3.5rem]  relative duration-[800ms] ease-in-out"
          : "hidden"
      }
    >
      <div className="bg-[#C26AAA] blur-[150px] h-[24rem] left-0  top-0 rounded-full w-[24rem] absolute z-10"></div>
      <div className="bg-[#054E12] blur-[500px] h-[50rem] left-0  top-0 rounded-full w-[50rem] absolute -z-10"></div>
      <div
        className={
          "flex flex-col  w-full lg:grid lg:grid-cols-2 gap-x-10 z-[200]"
        }
      >
        <div className="w-full h-full lg:flex  justify-center hidden   lg:rounded-[50px] ">
          <img src={img1} alt="" className=" object-cover lg:rounded-[20px] " />
        </div>
        <div className="flex flex-col items-center w-[19rem] h-[30rem] md:w-full md:h-full">
          <img
            src={logo}
            alt=""
            className="w-[10rem] sm:w-[12rem] object-contain "
          />
          <p className="text-[#555] font-bold text-[1.67rem] text-center mt-1 md:mt-4 lg:mt-[1.69rem] mb-0">
            Welcome Back!
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // setopensignupmodalprop(false);
              // setopenOtpmodalprop(true);
            }}
            className="w-full relative flex flex-col lg:mt-[1.28rem] justify-evenly   text-sm"
            action=""
          >
            <div className="relative">
              <span>
                {" "}
                <Message
                  set="curved"
                  primaryColor="#999999"
                  className="inset-y-[2rem] left-1 absolute px-[0.2rem] "
                />
              </span>
              <label htmlFor="e_mail" className="text-[#333] block font-bold text-[1.25rem]">
                Email
              </label>
              <input
                type="email"
                id="e_mail"
                className="w-[24.3rem] h-[3.13rem] py-2 bg-[#FFFFFF] rounded-[5px] font-lato px-8 mt-4 border border-[#999999] focus:outline-none"
                placeholder="johndoe@email.com"
              />
            </div>

            <div className="relative  mt-4 md:mt-8 lg:mt-4">
              <span>
                <Lock
                  set="curved"
                  primaryColor="#999999"
                  className="absolute inset-y-[2rem] left-1 px-[0.2rem]"
                />
              </span>
              <div className="flex justify-between items-center ">
                {" "}
                <label htmlFor="p_assword" className="text-[#333] font-bold block text-[1.25rem]">
                  Password
                </label>
                <button className="text-[#3B8004] font-semibold text-[1.25rem]">
                  {" "}
                  Forgot password?
                </button>
              </div>
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="p_assword"
                className="w-full py-2 bg-[#FFFFFF] rounded-[5px] px-8 mt-1 border border-[#999999] focus:outline-none"
                placeholder="● ● ● ● ● ● "
              />

              {isPasswordVisible ? (
                <MdOutlineVisibilityOff
                  onClick={() => setisPasswordVisible(!isPasswordVisible)}
                  className="absolute inset-y-[2rem] right-1 px-[0.2rem] text-2xl text-[#333333]"
                />
              ) : (
                <MdOutlineVisibility
                  onClick={() => setisPasswordVisible(!isPasswordVisible)}
                  className="absolute inset-y-[2rem] right-1 px-[0.2rem] text-2xl text-[#333333]"
                />
              )}
            </div>

            <button className="font-semibold btngrad  rounded-[10px] h-[2.6rem] mt-6 md:mt-8 lg:mt-6  text-white ">
              Sign In
            </button>
          </form>{" "}
          <div className="flex flex-col w-full mt-4 md:mt-8 lg:mt-6 gap-1">
            <p className="text-[#999] text-center text-[1.1rem]">
              Or Continue with
            </p>
            <div className="flex justify-evenly mt-4">
              <div className="flex justify-center cursor-pointer items-center h-[3.13rem] w-[7.5rem] border border-solid border-[#DDD] rounded-[6px] bg-[#F5FFF7]">
                <img src={google} alt="" className="w-[1.5rem] h-[1.5rem]"/>
              </div>{" "}
              <div className="flex justify-center cursor-pointer items-center h-[3.13rem] w-[7.5rem] border border-solid border-[#DDD] rounded-[6px] bg-[#F5FFF7]">
                <img src={facebook} alt="" className="w-[1.5rem] h-[1.5rem]"/>
              </div>{" "}
              <div className="flex justify-center cursor-pointer items-center h-[3.13rem] w-[7.5rem] border border-solid border-[#DDD] rounded-[6px] bg-[#F5FFF7]">
                <img src={apple} alt="" className="w-[1.3rem] h-[1.5rem]"/>
              </div>
            </div>
            <div className="mt-6  md:mt-8 lg:mt-4 text-sm">
              <p className=" text-center text-[1.20rem]">
                <span className="text-[#999]">Don't have an account?  </span>
                <button className="text-[#054E12] font-bold">  Sign Up</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
