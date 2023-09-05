import React, { useState } from "react";
import reset from "../../../../assets/ModalImages/reset.png";
import logo from "../../../../assets/ModalImages/logo.png";
import { Lock } from "react-iconly";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import { BsArrowLeft } from "react-icons/bs";
const ResetPassword = ({
  resetpasswordprop,
  setresetpasswordprop,
  changeValueprop,
  setsuccessprop,
}) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const [isconfirmPasswordVisible, setisconfirmPasswordVisible] =
    useState(false);
  return (
    <div
      className={
        resetpasswordprop
          ? " rounded-[20px] lg:rounded-[3.13rem] w-full z-[120]   bg-[#F5FFF7] flex lg:items-center justify-between min-h-[54rem] r   py-0  sm:pb-0 md:py-4      sm:min-h-[35rem] lg:min-h-[32rem] lg:w-full  xl:min-h-[54rem] xl:h-[] lg:p-[3rem]  xl:w-full  md:w-full sm:px-8 md:px-[3rem] xl:px-[3.5rem] opacity-100 xl:py-[3.5rem]  relative duration-[800ms] ease-in-out"
          : "hidden"
      }
    >
      <TfiClose
        onClick={() => {
          changeValueprop(false);
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
          <img src={reset} alt="" className="lg:rounded-[40px] object-cover" />
        </div>

        <div className="flex flex-col px-4 lg:px-0   gap-y-4 w-full justify-evenly h-full lg:justify-normal mt-14 lg:mt-0  items-center  sm:w-[19rem] lg:w-full lg:h-full md:w-full md:h-full ">
          <div className=" flex flex-col justify-center items-center">
            <img
              src={logo}
              alt=""
              className="w-[12rem] sm:w-[6rem] lg:w-[8.7rem] object-contain "
            />
          </div>
          <p className="text-[#555] font-bold text-3xl text-center mt-6 md:mt-4 lg:mt-1  xl:mt-5 xl:text-[1.5rem]">
            Reset password
          </p>
          {/* It has back button
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
              Reset password
            </p>
            <p className="text-[#F5FFF7] text-[0.4rem] opacity-0">
              dfgsfgdfgsdf
            </p>
          </div> */}

          <div className="mt-6 lg:mt-14 text-[#3B8004] text-xl  lg:text-xl font-bold">
            Reset password to regain access into your account
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // setopensignupmodalprop(false);
              // setopenOtpmodalprop(false);
              setresetpasswordprop(false);
            }}
            className="w-full relative flex flex-col  justify-evenly lg:px-10  lg:gap-y-3 gap-y-4  text-sm lg:mt-3 mt-10"
            action=""
          >
            <div className="relative  mt-4 md:mt-8 lg:mt-4">
              <span>
                <Lock
                  set="curved"
                  primaryColor="#999999"
                  className="absolute inset-y-[3.5rem] left-1 px-[0.2rem]"
                />
              </span>
              <label
                htmlFor="resetpassword"
                className="text-[#333] block font-bold text-xl"
              >
                New password
              </label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="resetpassword"
                className="w-full pl-14 lg:pl-11  h-[4.5rem] md:h-[3.8rem]  text-xl bg-[#FFFFFF] mt-4 xl:mt-4 rounded-[5px] px-10  border  border-[#999999] focus:border-2 focus:border-[#3B8004] focus:outline-none"
                placeholder="● ● ● ● ● ● "
              />

              {isPasswordVisible ? (
                <MdOutlineVisibilityOff
                  onClick={() => setisPasswordVisible(!isPasswordVisible)}
                  className="absolute inset-y-[3.5rem] right-4 px-[0.2rem] text-4xl text-[#333333]"
                />
              ) : (
                <MdOutlineVisibility
                  onClick={() => setisPasswordVisible(!isPasswordVisible)}
                  className="absolute inset-y-[3.5rem] right-4 px-[0.2rem] text-4xl text-[#333333]"
                />
              )}
            </div>
            <div className="relative  mt-4 md:mt-8 lg:mt-4">
              <span>
                <Lock
                  set="curved"
                  primaryColor="#999999"
                  className="absolute inset-y-[3.5rem] left-1 px-[0.2rem]"
                />
              </span>
              <label
                htmlFor="confirmresetpassword"
                className="text-[#333] block font-bold text-xl"
              >
                Confirm password
              </label>
              <input
                type={isconfirmPasswordVisible ? "text" : "password"}
                id="confirmresetpassword"
                className="w-full pl-14 lg:pl-11  h-[4.5rem] md:h-[3.8rem]  text-xl bg-[#FFFFFF] mt-4 xl:mt-4 rounded-[5px] px-10  border  border-[#999999] focus:border-2 focus:border-[#3B8004] focus:outline-none"
                placeholder="● ● ● ● ● ● "
              />

              {isconfirmPasswordVisible ? (
                <MdOutlineVisibilityOff
                  onClick={() =>
                    setisconfirmPasswordVisible(!isconfirmPasswordVisible)
                  }
                  className="absolute inset-y-[3.5rem] right-4 px-[0.2rem] text-4xl text-[#333333]"
                />
              ) : (
                <MdOutlineVisibility
                  onClick={() =>
                    setisconfirmPasswordVisible(!isconfirmPasswordVisible)
                  }
                  className="absolute inset-y-[3.5rem] right-4 px-[0.2rem] text-4xl text-[#333333]"
                />
              )}
            </div>
            <button
              // type="submit"
              onClick={() => {
                // setforgotpasswordprop(false);
                // setresetpasswordprop(true);
                setresetpasswordprop(false);
                setsuccessprop(true);
              }}
              className="font-bold text-2xl xl:text-xl btngrad rounded-[10px] h-[4rem] mt-8 xl:h-[4rem] lg:mt-6  text-white "
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
