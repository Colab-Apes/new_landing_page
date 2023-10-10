import { useState } from "react";

import Signup from "./Signup";
import Signin from "./Signin";
import OtpModal from "./OtpModal";
import VerifiedModal from "./VerifiedModal";
import ForgotPassword from "./RecoverPassword/ForgotPassword";
import ResetPassword from "./RecoverPassword/ResetPassword";
import Success from "./RecoverPassword/Success";
import Step1 from "./ProfileModals/Step1";
import Step3 from "./ProfileModals/Step3";
import Step2 from "./ProfileModals/Step2";

const Overlay = ({ value, changeValue }) => {
  const [signinmodal, setsigninmodal] = useState(false);
  const [success, setsuccess] = useState(false);
  const [resetpassword, setresetpassword] = useState(false);
  const [forgotpassword, setforgotpassword] = useState(false);
  const [openOtpmodal, setopenOtpmodal] = useState(false);
  const [openverifiedmodal, setopenverifiedmodal] = useState(false);
  const [opensignupmodal, setopensignupmodal] = useState(true);
  const [step1, setstep1] = useState(false);
  const [step2, setstep2] = useState(false);
  const [step3, setstep3] = useState(false);

  return (
    <div
      className={
        value
          ? "bg-[#000]/[25%] fixed h-screen z-[120] lg:px-[10vw] xl:px-[19vw] w-full    px-6 sm:px-32 md:px-32 left-0 flex justify-center items-center font-lato duration-300 ease-in-out"
          : "bg-[#000]/[25%] fixed h-screen w-full z-[-100] opacity-0 px-4 sm:px-32 md:px-32 left-0 flex justify-center items-center font-lato  duration-300 ease-in-out"
      }
    >
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
        setresetpasswordprop={setresetpassword}
        changeValueprop={changeValue}
      />
      <ResetPassword
        resetpasswordprop={resetpassword}
        setresetpasswordprop={setresetpassword}
        setsuccessprop={setsuccess}
        changeValueprop={changeValue}
        setopensignupmodalprop={setopensignupmodal}
      />
      <Success
        setsuccessprop={setsuccess}
        successprop={success}
        changeValueprop={changeValue}
        setopensignupmodalprop={setopensignupmodal}
        setsigninmodalprop={setsigninmodal}
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
      <Step1 opensetstep1modalprop={setstep1} openstep1modalprop={step1} />
      <Step2 opensetstep2modalprop={setstep2} openstep2modalprop={step2} />
      <Step3 opensetstep3modalprop={setstep3} openstep3modalprop={step3} />
    </div>
  );
};

export default Overlay;
