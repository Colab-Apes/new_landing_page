import React from "react";
import password from "../../../../assets/ModalImages/password.png";
import logo from "../../../../assets/ModalImages/logo.png";
import { Message } from "react-iconly";
import { TfiClose } from "react-icons/tfi";
import { BsArrowLeft } from "react-icons/bs";
const ForgotPassword = ({
  forgotpasswordprop,
  setforgotpasswordprop,
  resetpasswordprop,
  setresetpasswordprop,
}) => {
  return (
    <div
      className={
        forgotpasswordprop
          ? " rounded-[20px] lg:rounded-[3.13rem] w-full z-[120]   bg-[#F5FFF7] flex lg:items-center justify-between min-h-[47rem] r   py-0  sm:pb-0 md:py-4      sm:min-h-[35rem] lg:min-h-[32rem] lg:w-full  xl:min-h-[54rem] xl:h-[] lg:p-[3rem]  xl:w-full  md:w-full sm:px-8 md:px-[3rem] xl:px-[3.5rem] opacity-100 xl:py-[3.5rem]  relative duration-[800ms] ease-in-out"
          : "hidden"
      }
    >
      <TfiClose
        onClick={() => {
          changeValueprop(false);
          setopensignupmodalprop(true);
          setopenverifiedmodalprop(false);
          setopenOtpmodalprop(false);
          setsigninmodalprop(false);
        }}
        className="text-3xl lg:text-xl xl:text-3xl text-[#999999] font-bold cursor-pointer z-[400] absolute right-12 top-16  md:top-8 lg:top-10 xl:right-28 xl:top-14 md:right-8 lg:right-10 "
      />
      <div className="bg-[#C26AAA] blur-[150px] h-[24rem] left-0  top-0 rounded-full w-[24rem] absolute z-10"></div>
      <div className="bg-[#054E12] blur-[500px] h-[50rem] left-0  top-0 rounded-full w-[50rem] absolute -z-10"></div>

      <div
        className={
          "flex flex-col z-[120]  w-full    lg:flex-row lg:gap-x-5 xl:gap-x-[2rem] px-4 lg:px-0  justify-center lg:justify-between h-full items-center lg:items-start"
        }
      >
        <div className="w-full h-full lg:block  hidden  lg:rounded-[50px] ">
          <img
            src={password}
            alt=""
            className="lg:rounded-[40px] object-cover"
          />
        </div>

        <div className="flex flex-col px-4 lg:px-0  gap-y-4 w-full justify-evenly h-full lg:justify-normal mt-14 lg:mt-0  items-center  sm:w-[19rem] lg:w-full lg:h-full md:w-full md:h-full ">
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
              Forgot password
            </p>
            <p className="text-[#F5FFF7] text-[0.4rem] opacity-0">
              dfgsfgdfgsdf
            </p>
          </div>
          <div className="flex"> </div>
          <div className="mt-6 lg:mt-20 text-[#3B8004] text-2xl  lg:text-2xl font-bold">
            Enter you email address
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // setopensignupmodalprop(false);
              // setopenOtpmodalprop(false);
              setforgotpasswordprop(false);
            }}
            className="w-full relative flex flex-col lg:px-10 justify-evenly gap-y-8  text-sm"
            action=""
          >
            <div className="relative  mt-4 md:mt-8 lg:mt-4">
              <span>
                {" "}
                <Message
                  set="curved"
                  primaryColor="#999999"
                  className="inset-y-[3.5rem] left-1 absolute px-[0.2rem] "
                />
              </span>
              <label htmlFor="email" className="block font-bold text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full pl-14 lg:pl-11  h-[4.5rem] md:h-[3.8rem]  text-xl bg-[#FFFFFF] mt-4 xl:mt-4 rounded-[5px] px-10  border  border-[#999999] focus:border-2 focus:border-[#3B8004] focus:outline-none"
                placeholder="johndoe@email.com"
              />
            </div>
            <button
              // type="submit"
              onClick={() => {
                setforgotpasswordprop(false);
                setresetpasswordprop(true);
              }}
              className="font-bold text-2xl xl:text-xl btngrad rounded-[10px] h-[4rem] xl:h-[4rem] lg:mt-6  text-white "
            >
              Confirm email
            </button>
          </form>
          <p className=" lg:text-xl mt-6 font-semibold text-xl">
            Remember password?
            <a className="text-[#054E12]" href="/">
              {" "}
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
