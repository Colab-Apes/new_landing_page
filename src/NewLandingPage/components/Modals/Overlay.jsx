import React, { useState } from "react";
import Signup from "./Signup";
import OtpModal from "./OtpModal";
import img from "../../../assets/ModalImages/authbg.png";

import { TfiClose } from "react-icons/tfi";
import VerifiedModal from "./VerifiedModal";
import ForgotPassword from "./RecoverPassword/ForgotPassword";
import Signin from "./Signin";
// import ResetPassword from "./RecoverPassword/ResetPassword";
// import Success from "./RecoverPassword/Success";

const Overlay = ({ value, changeValue }) => {
  const [signinmodal, setsigninmodal] = useState(false);
  // const [success, setsuccess] = useState(true);
  // const [resetpassword, setresetpassword] = useState(false);
  const [forgotpassword, setforgotpassword] = useState(false);
  const [openOtpmodal, setopenOtpmodal] = useState(false);
  const [openverifiedmodal, setopenverifiedmodal] = useState(false);
  const [opensignupmodal, setopensignupmodal] = useState(true);

  return (
    <div
      className={
        value
          ? "bg-[#000]/[25%] fixed h-screen z-[120] xl:px-[18vw]  w-full   px-8 sm:px-32 md:px-32 left-0 flex justify-center items-center font-lato duration-300 ease-in-out "
          : "bg-[#000]/[25%] fixed h-screen w-full z-[-100] opacity-0 px-4 sm:px-32 md:px-32 left-0 flex justify-center items-center font-lato  duration-300 ease-in-out"
      }
    >
      <div
        className={
          value
            ? " rounded-[20px] lg:rounded-[50px] z-[120]   bg-[#F5FFF7] flex items-center justify-betwee min-h-[63rem] r  w-full py-0  sm:pb-0 md:py-4  lg:py-4   sm:min-h-[35rem] lg:min-h-[32rem] lg:w-[54rem] xl:min-h-[86vh] xl:w-full  md:w-full  px-4 sm:px-8 md:px-[3rem] xl:px-[5rem] opacity-100 xl:py-[3rem]  relative duration-[800ms] ease-in-out"
            : ""
        }
      >
        <img
          src={img}
          alt=""
          className="bg-cover h-full  w-full fixed top-0 left-0 z-[-1]  rounded-2xl lg:rounded-[40px] hidden lg:block"
        />
        <TfiClose
          onClick={() => {
            changeValue(false);
            setopensignupmodal(true);
            setopenverifiedmodal(false);
            setopenOtpmodal(false);
          }}
          className="text-3xl lg:text-xl xl:text-3xl text-[#999999] font-bold cursor-pointer z-[200] absolute right-12 top-16  md:top-8 lg:top-10 xl:right-28 xl:top-14 md:right-8 lg:right-10 "
        />

        <Signup
          setopenOtpmodalprop={setopenOtpmodal}
          setopensignupmodalprop={setopensignupmodal}
          opensignupmodalprop={opensignupmodal}
          setsigninmodalprop={setsigninmodal}
        />
        <OtpModal
          openOtpmodalprop={openOtpmodal}
          setopenOtpmodalprop={setopenOtpmodal}
          setopensignupmodalprop={setopensignupmodal}
          setopenverifiedmodalprop={setopenverifiedmodal}
        />
        <VerifiedModal
          setopenOtpmodalprop={setopenOtpmodal}
          setopensignupmodalprop={setopensignupmodal}
          setopenverifiedmodalprop={setopenverifiedmodal}
          openverifiedmodalprop={openverifiedmodal}
        />
        <ForgotPassword
          forgotpasswordprop={forgotpassword}
          setforgotpasswordprop={setforgotpassword}
          setsigninmodalprop={setsigninmodal}
        />
        {/* <ResetPassword
          resetpasswordprop={resetpassword}
          setresetpasswordprop={setresetpassword}
        /> */}
        {/* <Success setsuccessprop={setsuccess} successprop={success} /> */}
        <Signin
          setsigninmodalprop={setsigninmodal}
          signinmodalprop={signinmodal}
        />
      </div>
    </div>
  );
};

export default Overlay;
