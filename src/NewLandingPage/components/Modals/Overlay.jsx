import React, { useState } from "react";
import Signup from "./Signup";
import OtpModal from "./OtpModal";
import img from "../../../assets/ModalImages/authbg.png";

import { TfiClose } from "react-icons/tfi";
import VerifiedModal from "./VerifiedModal";
import ForgotPassword from "./RecoverPassword/ForgotPassword";
import Signin from "./Signin";
import ResetPassword from "./RecoverPassword/ResetPassword";
import Success from "./RecoverPassword/Success";
// import ResetPassword from "./RecoverPassword/ResetPassword";
// import Success from "./RecoverPassword/Success";

const Overlay = ({ value, changeValue }) => {
  const [signinmodal, setsigninmodal] = useState(false);
  const [success, setsuccess] = useState(false);
  const [resetpassword, setresetpassword] = useState(false);
  const [forgotpassword, setforgotpassword] = useState(false);
  const [openOtpmodal, setopenOtpmodal] = useState(false);
  const [openverifiedmodal, setopenverifiedmodal] = useState(false);
  const [opensignupmodal, setopensignupmodal] = useState(true);

  return (
    <div
      className={
        value
          ? "bg-[#000]/[25%] fixed h-screen z-[120] lg:px-[10vw] xl:px-[19vw] w-full    px-6 sm:px-32 md:px-32 left-0 flex justify-center items-center font-lato duration-300 ease-in-out"
          : "bg-[#000]/[25%] fixed h-screen w-full z-[-100] opacity-0 px-4 sm:px-32 md:px-32 left-0 flex justify-center items-center font-lato  duration-300 ease-in-out"
      }
    >
      {/* <img
          src={img}
          alt=""
          className="bg-cover h-full  w-full fixed top-0 left-0 z-[-1]  rounded-2xl lg:rounded-[40px] hidden lg:block"
        /> */}
      {/* <TfiClose
          onClick={() => {
            changeValue(false);
            setopensignupmodal(true);
            setopenverifiedmodal(false);
            setopenOtpmodal(false);
            setsigninmodal(false);
          }}
          className="text-3xl lg:text-xl xl:text-3xl text-[#999999] font-bold cursor-pointer z-[200] absolute right-12 top-16  md:top-8 lg:top-10 xl:right-28 xl:top-14 md:right-8 lg:right-10 "
        /> */}

      <Signup
        setopenOtpmodalprop={setopenOtpmodal}
        setopensignupmodalprop={setopensignupmodal}
        opensignupmodalprop={opensignupmodal}
        setsigninmodalprop={setsigninmodal}
        changeValueprop={changeValue}
        setopenverifiedmodalprop={setopenverifiedmodal}
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
        setopenOtpmodalprop={setopenOtpmodal}
        setopensignupmodalprop={setopensignupmodal}
        opensignupmodalprop={opensignupmodal}
        resetpasswordprop={resetpassword}
        setresetpasswordprop={setresetpassword}
        changeValueprop={changeValue}
      />
      <ResetPassword
        resetpasswordprop={resetpassword}
        setresetpasswordprop={setresetpassword}
        setsuccessprop={setsuccess}
        changeValueprop={changeValue}
      />
      <Success
        setsuccessprop={setsuccess}
        successprop={success}
        changeValueprop={changeValue}
        setopensignupmodalprop={setopensignupmodal}
      />
      <Signin
        setsigninmodalprop={setsigninmodal}
        signinmodalprop={signinmodal}
        setforgotpasswordprop={setforgotpassword}
        setopenOtpmodalprop={setopenOtpmodal}
        setopensignupmodalprop={setopensignupmodal}
        opensignupmodalprop={opensignupmodal}
        changeValueprop={changeValue}
        setopenverifiedmodalprop={setopenverifiedmodal}
      />
      
    </div>
  );
};

export default Overlay;
