import React from "react";
import otpmodal from "../../../assets/ModalImages/otpmodal.png";
import logo from "../../../assets/ModalImages/logo.png";
import { BsArrowLeft } from "react-icons/bs";
// import OTPInput from "react-otp-input";
import OtpInputField from "../../../components/OtpInputField";
import "../../../App.css";
import { TfiClose } from "react-icons/tfi";
import OverlayHooks from "../../Hooks/OverlayHooks";
const OtpModal = ({
  openOtpmodalprop,
  setopenOtpmodalprop,
  setopenverifiedmodalprop,
  setopensignupmodalprop,
}) => {
  const hooks = OverlayHooks();
  return (
    <div
      className={
        openOtpmodalprop
          ? " rounded-[20px] lg:rounded-[3.13rem] z-[120] mt-20 lg:mt-0   bg-[#F5FFF7] flex items-center justify-between min-h-[63rem] r  w-[40rem] py-0  sm:pb-0 md:py-4      sm:min-h-[35rem] lg:min-h-[32rem] lg:w-[67.9rem]  xl:min-h-[54rem] xl:h-[] lg:p-[3rem]  xl:w-full  md:w-ful sm:px-8 md:px-[3rem] xl:px-[3.5rem] opacity-100 xl:py-[3.5rem]  relative duration-[800ms] ease-in-out"
          : "hidden"
      }
    >
      <TfiClose
        onClick={() => {
          hooks.changeValue(false);
          hooks.setopensignupmodal(true);
          hooks.setopenverifiedmodal(false);
          hooks.setopenOtpmodal(false);
          hooks.setsigninmodal(false);
        }}
        className="text-3xl lg:text-xl xl:text-3xl text-[#999999] font-bold cursor-pointer z-[200] absolute right-12 top-16  md:top-8 lg:top-10 xl:right-28 xl:top-14 md:right-8 lg:right-10 "
      />
      <div className="bg-[#C26AAA] blur-[150px] h-[24rem] left-0  top-0 rounded-full w-[24rem] absolute z-10"></div>
      <div className="bg-[#054E12] blur-[500px] h-[50rem] left-0  top-0 rounded-full w-[50rem] absolute -z-10"></div>
      <div
        className={
          "flex flex-col z-[120]  w-full   lg:flex-row lg:gap-x-5 xl:gap-x-[2rem] px-4 lg:px-0  justify-center lg:justify-between h-full items-center lg:items-start "
        }
      >
        <div className="w-full h-full lg:block  hidden  lg:rounded-[50px] ">
          <img
            src={otpmodal}
            alt=""
            className="lg:rounded-[40px] object-cover"
          />
        </div>
        <div className="flex flex-col items-center lg:justify-start w-full h-full gap-x-20 lg:gap-x-0  md:w-full md:h-full">
          {/* <div className="flex flex-col  w-full justify-evenly h-full lg:justify-normal   items-center  sm:w-[19rem] lg:w-full lg:h-full md:w-full md:h-full "> */}
          {/* <div className=" flex flex-col justify-center items-center"> */}
          <div className=" flex flex-col justify-center items-center">
            <img
              src={logo}
              alt=""
              className="w-[12rem] sm:w-[6rem] lg:w-[8.7rem] object-contain "
            />
          </div>
          <div className="flex justify-between w-full items-center mt-0">
            {" "}
            <BsArrowLeft
              onClick={() => {
                setopenOtpmodalprop(false);
                setopensignupmodalprop(true);
              }}
              className="mt-3 cursor-pointer text-xl  left-1 top-[4.1rem] text-[2.6rem] lg:text-[2.3rem]"
            />
            <p className="text-[#555] font-bold text-3xl text-center mt-6 md:mt-4 lg:mt-1  xl:mt-5 xl:text-[1.5rem]">
              Verify Email
            </p>
            <p className="text-[#F5FFF7] text-[0.4rem] opacity-0">
              dfgsfgdfgsdf
            </p>
          </div>
          <div className=" text-[#3B8004] text-xl font-semibold mt-8 lg:mt-6 ">
            Enter 4 - digit code sent to johndoe@email.com
          </div>

          <OtpInputField length={4} />
          <div className="w-full text-[#999] text-center text-xl mt-10  lg:mt-4">
            Resend code after <span className="text-[#3B8004]">0:59 s</span>
          </div>
          <button
            onClick={() => {
              setopenOtpmodalprop(false);
              setopenverifiedmodalprop(true);
            }}
            className="font-semibold btngrad w-full rounded-[10px] h-[3.8rem] mt-14 md:mt-8 lg:mt-4 text-xl  text-white "
          >
            Verify
          </button>
          <div className="mt-10  text-lg   md:mt-8 lg:mt-4 xl:mt-6 ">
            <p className="flex justify-center items-center text-center lg:text-lg">
              <span className="text-[#999999]">Already have an account?</span>
              <p
                onClick={() => {
                  setopensignupmodalprop(false);
                  setsigninmodalprop(true);
                }}
                className="text-[#054E12] font-bold cursor-pointer ml-1"
                href="/"
              >
                Sign In
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpModal;
