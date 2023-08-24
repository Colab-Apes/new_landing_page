import React from "react";
// import img from "../../assets/ModalImages/authbg.png";
import verifiedmodal from "../../../assets/ModalImages/verifiedmodal.png";
import logo from "../../../assets/ModalImages/logo.png";
import { BsArrowLeft } from "react-icons/bs";
import "../../../App.css";
const VerifiedModal = ({
  openverifiedmodalprop,
  setopenOtpmodalprop,
  setopensignupmodalprop,
  setopenverifiedmodalprop,
}) => {
  return (
    <div
      className={
        openverifiedmodalprop ? "grid lg:grid-cols-2 gap-x-10" : "hidden"
      }
    >
      <div className="w-full h-full lg:flex  justify-center hidden   lg:rounded-[50px] ">
        <img
          src={verifiedmodal}
          alt=""
          className=" object-cover lg:rounded-[40px] "
        />
      </div>
      <div className="flex flex-col  w-full justify-evenly lg:justify-normal h-full  items-center  sm:w-[19rem] lg:w-full lg:h-full md:w-full md:h-full ">
        <div className=" flex flex-col justify-center items-center">
          <img
            src={logo}
            alt=""
            className="w-[12rem] sm:w-[6rem] xl:w-[8.5rem] object-contain "
          />
        </div>

        <div className="flex justify-between w-full items-center mt-4">
          {" "}
          <BsArrowLeft
            onClick={() => {
              setopenOtpmodalprop(true);
              setopensignupmodalprop(false);
              setopenverifiedmodalprop(false);
            }}
            className="mt-3 cursor-pointer text-xl  left-1 top-[4.1rem] text-[2.1rem]"
          />
          <p className="text-[#555] font-bold text-2xl text-center mt-6 md:mt-4 lg:mt-1  xl:mt-5 xl:text-[1.5rem]">
            You’re Verified!
          </p>
          <p className="text-[#F5FFF7] text-[0.4rem] opacity-0">dfgsfgdfgsdf</p>
        </div>
        <div className="mt-6 md:mt-8 lg:mt-12 text-[#3B8004] text-xl font-bold">
          Complete a quick profile to start creating
        </div>

        <button
          // type="submit"
          className="font-bold w-full text-2xl xl:text-xl btngrad rounded-[10px] h-[4rem] xl:h-[4rem] mt-6 md:mt-8 lg:mt-12   text-white "
        >
          Get Started
        </button>
        <div className="mt-20  text-lg   md:mt-8 lg:mt-4 xl:mt-6 ">
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
  );
};

export default VerifiedModal;
