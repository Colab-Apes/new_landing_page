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
        openverifiedmodalprop
          ? " rounded-[20px] lg:rounded-[50px] z-[120]   bg-[#F5FFF7] flex items-center justify-between min-h-[63rem] r  w-full py-0  sm:pb-0 md:py-4      sm:min-h-[35rem] lg:min-h-[32rem] lg:w-full  xl:min-h-[54rem] xl:h-[] lg:p-[3rem]  xl:w-full  md:w-ful sm:px-8 md:px-[3rem] xl:px-[3.5rem] opacity-100 xl:py-[3.5rem]  relative duration-[800ms] ease-in-out"
          : "hidden"
      }
    >
      <div className={"grid lg:grid-cols-2 gap-x-10"}>
        <div className="w-full h-full lg:flex  justify-center hidden   lg:rounded-[50px] ">
          <img
            src={verifiedmodal}
            alt=""
            className=" object-cover lg:rounded-[40px] "
          />
        </div>
        <div className="flex flex-col p  w-full justify-evenly lg:justify-normal h-full  items-center  sm:w-[19rem] lg:w-full lg:h-full md:w-full md:h-full ">
          <div className=" flex flex-col justify-center items-center">
            <img
              src={logo}
              alt=""
              className="w-[12rem] sm:w-[6rem] xl:w-[8.5rem] object-contain "
            />
          </div>

          <div className="flex justify-between w-full items-center mt-4 px-10">
            {" "}
            <BsArrowLeft
              onClick={() => {
                setopenOtpmodalprop(true);
                setopensignupmodalprop(false);
                setopenverifiedmodalprop(false);
              }}
              className="mt-3 cursor-pointer text-xl  left-1 top-[4.1rem] text-[2.1rem]"
            />
            <p className="text-[#555] font-bold text-2xl lg:text-[1.8rem] text-center mt-6 md:mt-4 lg:mt-1  xl:mt-5 xl:text-[1.5rem]">
              You’re Verified!
            </p>
            <p className="text-[#F5FFF7] text-[0.4rem] opacity-0">
              dfgsfgdfgsdf
            </p>
          </div>
          <div className="mt-6 md:mt-8 lg:mt-20 text-[#3B8004] text-xl xl:text-[1.25rem] font-bold">
            Complete a quick profile to start creating
          </div>

          <div className="px-14 w-full">
            <button
              // type="submit"
              className="font-bold w-full text-2xl xl:text-xl btngrad rounded-[10px] h-[4rem] xl:h-[4rem] mt-6 md:mt-8 lg:mt-12   text-white "
            >
              Get Started
            </button>
          </div>
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
    </div>
  );
};

export default VerifiedModal;
