import React from "react";

import success from "../../../../assets/ModalImages/success.png";
import logo from "../../../../assets/ModalImages/logo.png";
import { TfiClose } from "react-icons/tfi";
import { BsArrowLeft } from "react-icons/bs";

const Success = ({
  setsuccessprop,
  successprop,
  changeValueprop,
  setopensignupmodalprop,
}) => {
  return (
    <div
      className={
        successprop
          ? " rounded-[20px] lg:rounded-[3.13rem] w-full z-[120]   bg-[#F5FFF7] flex lg:items-center justify-between min-h-[38rem] r   py-0  sm:pb-0 md:py-4      sm:min-h-[35rem] lg:min-h-[32rem] lg:w-full  xl:min-h-[54rem] xl:h-[] lg:p-[3rem]  xl:w-full  md:w-full sm:px-8 md:px-[3rem] xl:px-[3.5rem] opacity-100 xl:py-[3.5rem]  relative duration-[800ms] ease-in-out"
          : "hidden"
      }
    >
      <TfiClose
        onClick={() => {
          changeValueprop(false);
          setsuccessprop(false);
          setopensignupmodalprop(true);
        }}
        className="text-3xl lg:text-xl xl:text-3xl text-[#999999] font-bold cursor-pointer z-[400] absolute right-12 top-16  md:top-8 lg:top-10 xl:right-28 xl:top-14 md:right-8 lg:right-10 "
      />
      <div className="bg-[#C26AAA] blur-[150px] h-[24rem] left-0  top-0 rounded-full w-[24rem] absolute z-10"></div>
      <div className="bg-[#054E12] blur-[500px] h-[50rem] left-0  top-0 rounded-full w-[50rem] absolute -z-10"></div>

      <div
        className={
          "flex flex-col z-[120]  w-full     lg:flex-row lg:gap-x-5 xl:gap-x-[2rem] px-4 lg:px-0  justify-center lg:justify-between h-full items-center lg:items-start"
        }
      >
        <div className="w-full h-full lg:block  hidden  lg:rounded-[50px] ">
          <img
            src={success}
            alt=""
            className="lg:rounded-[40px] object-cover"
          />
        </div>

        <div className="flex flex-col px-4 lg:px-10   gap-y-4 w-full justify-evenly h-full lg:justify-normal mt-14 lg:mt-0  items-center  sm:w-[19rem] lg:w-full lg:h-full md:w-full md:h-full ">
          <div className=" flex flex-col justify-center items-center">
            <img
              src={logo}
              alt=""
              className="w-[12rem] sm:w-[6rem] lg:w-[8.7rem] object-contain "
            />
          </div>

          <div className="px-4 flex justify-between w-full items-center mt-0">
            {" "}
            <BsArrowLeft
              onClick={() => {
                setopenOtpmodalprop(false);
                setopensignupmodalprop(true);
              }}
              className="mt-3 cursor-pointer text-xl  left-1 top-[4.1rem] text-[2.6rem] lg:text-[2.3rem]"
            />
            <p className="text-[#555] font-bold text-3xl text-center mt-6 md:mt-4 lg:mt-1  xl:mt-5 xl:text-[1.5rem]">
              Successful
            </p>
            <p className="text-[#F5FFF7] text-[0.4rem] opacity-0">
              dfgsfgdfgsdf
            </p>
          </div>
          <div className="mt-6 lg:mt-14 text-[#3B8004] text-xl text-center  lg:text-xl font-bold">
            Your password reset is successful You may now Sign In to your
            account
          </div>
          <button
            onClick={() => {
              // setopenOtpmodalprop(false);
              // setopenverifiedmodalprop(true);
              setsuccessprop(false);
              // setsignin()
            }}
            className="font-bold text-2xl w-full xl:text-xl btngrad rounded-[10px] h-[4rem] mt-20 xl:h-[4rem] lg:mt-6  text-white "
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
