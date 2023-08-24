import React from "react";
import otpmodal from "../../../assets/ModalImages/otpmodal.png";
import logo from "../../../assets/ModalImages/logo.png";
import { BsArrowLeft } from "react-icons/bs";
// import OTPInput from "react-otp-input";
import OtpInputField from "../../../components/OtpInputField";
import "../../../App.css";

const OtpModal = ({
  openOtpmodalprop,
  setopenOtpmodalprop,
  setopenverifiedmodalprop,
  setopensignupmodalprop,
}) => {
  // const [otp, setOtp] = useState("");
  return (
    <div
      className={
        openOtpmodalprop
          ? "flex flex-col z-[120]  w-full  lg:flex-row lg:gap-x-5 xl:gap-x-[6rem] px-4  justify-center lg:justify-between lg:items-start h-full items-center"
          : "hidden"
      }
    >
      <div className="w-full h-full lg:flex  justify-center hidden   lg:rounded-[50px] ">
        <img
          src={otpmodal}
          alt=""
          className=" object-cover lg:rounded-[40px] "
        />
      </div>
      <div className="flex flex-col h w-full justify-evenly h-full  items-center  sm:w-[19rem] lg:w-full lg:h-full md:w-full md:h-full ">
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
              setopenOtpmodalprop(false);
              setopensignupmodalprop(true);
            }}
            className="mt-3 cursor-pointer text-xl  left-1 top-[4.1rem] text-[2.1rem]"
          />
          <p className="text-[#555] font-bold text-2xl text-center mt-6 md:mt-4 lg:mt-1  xl:mt-5 xl:text-[1.5rem]">
            Verify Email
          </p>
          <p className="text-[#F5FFF7] text-[0.4rem] opacity-0">dfgsfgdfgsdf</p>
        </div>
        <div className=" text-[#3B8004] text-xl font-semibold mt-12">
          Enter 4 - digit code sent to johndoe@email.com
        </div>

        <OtpInputField length={4} />
        <div className="w-full text-[#999] text-center text-xl  mt-4">
          Resend code after <span className="text-[#3B8004]">0:59 s</span>
        </div>
        <button
          onClick={() => {
            setopenOtpmodalprop(false);
            setopenverifiedmodalprop(true);
          }}
          className="font-semibold btngrad w-full rounded-[10px] h-[3.8rem] mt-6 md:mt-8 lg:mt-8 text-xl  text-white "
        >
          Verify
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

export default OtpModal;
