import React, { useState, useRef, useEffect } from "react";
import "../App.css";

const OTPInputField = ({ length }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const otpInputRefs = useRef([]); // To store references of each OTP input field

  const handleInputChange = (index, event) => {
    const value = event.target.value;

    if (value.length === 0) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    } else if (value.length === 1 && /^\d+$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (otpInputRefs.current[index + 1]) {
        otpInputRefs.current[index + 1].focus();
      }
    }
  };

  const handleInputPaste = (event) => {
    const pasteData = event.clipboardData.getData("text");
    // Split the pasted data into individual characters
    const pastedDigits = pasteData.slice(0, length).split("");

    const newOtp = [...otp];
    for (let i = 0; i < length; i++) {
      if (pastedDigits[i] && /^\d+$/.test(pastedDigits[i])) {
        newOtp[i] = pastedDigits[i];
      }
    }
    otpInputRefs.current[3].focus();
    setOtp(newOtp);
  };
  const handleKeyDown = (e, index) => {
    console.log(otp);
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      console.log(index);
      otpInputRefs.current[index - 1].focus();
    }
  };
  return (
    <div className="w-full">
      {" "}
      <p className="text-[#333] text-lg text-left w-full mt-6 font-bold">
        Enter Code
      </p>
      <div className="flex justify-between w-full mt-6 ">
        {otp.map((value, index) => (
          <div className="relative" key={index}>
            <input
              type="text"
              className="w-[6.7rem] h-[4rem] text-xl border-[1px] rounded-md text-center  focus:outline-none border-[#999] focus:border-[#4EAF00]"
              value={value}
              maxLength="1"
              onChange={(e) => handleInputChange(index, e)}
              onPaste={(e) => handleInputPaste(e)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(input) => (otpInputRefs.current[index] = input)}
            />
            {!value && (
              <div className="absolute left-[50%]  right-[50%] w-[2rem]  translate-x-[-50%]  translate-y-[-50%] bottom-2 bg-[#999999] h-[1.2px] "></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OTPInputField;
