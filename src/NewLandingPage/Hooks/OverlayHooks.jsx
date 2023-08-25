import { useState } from "react";

const OverlayHooks = () => {
  const [signinmodal, setsigninmodal] = useState(false);
  const [success, setsuccess] = useState(true);
  const [resetpassword, setresetpassword] = useState(false);
  const [forgotpassword, setforgotpassword] = useState(false);
  const [openOtpmodal, setopenOtpmodal] = useState(false);
  const [openverifiedmodal, setopenverifiedmodal] = useState(false);
  const [opensignupmodal, setopensignupmodal] = useState(true);
  return {
    signinmodal,
    setsigninmodal,
    success,
    setsuccess,
    resetpassword,
    setresetpassword,
    forgotpassword,
    setforgotpassword,
    openOtpmodal,
    setopenOtpmodal,
    openverifiedmodal,
    setopenverifiedmodal,
    opensignupmodal,
    setopensignupmodal,
  };
};

export default OverlayHooks;
