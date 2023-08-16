import React from "react";
import dollarCircle from "../../assets/svg/dollar-circle.svg";
import lock from "../../assets/svg/lock.svg";
import moneys from "../../assets/svg/moneys.svg";
import tickCircle from "../../assets/svg/tick-circle.svg";
import feature4 from "../../assets/feature4.png";

const ValueStake = () => {
  return (
    <div>
      <div className="mx-auto  mt-36  relative">
        <div className="py-5 bg-[#3B8004] h-[58px] w-[91px] absolute top-[5rem] left-[-10rem] "></div>
        <div className="bg-[#054E12] bottom-3 z-[-1] blur-[500px] rounded-full h-[300px] w-[300px] absolute"></div>
        <div className="bg-[#C26AAA] bottom-[-6rem] z-[-1] blur-[150px] rounded-full h-[200px] w-[200px] absolute"></div>
        <div className=" flex flex-col-reverse md:flex-row-reverse items-center md:gap-24">
          <div className="feat-image">
            <img className="w-[100%]" src={feature4} alt="Feature Frame" />
            <div className="key-features kf-mobile text-center">
              <p className="text-[#3B513F] text-[1.5rem] mb-5 font-bold">
                Key Features:
              </p>
              <div className="flex flex-col items-center flex-wrap gap-5">
                <div className="stuff flex items-center gap-2 bg-[#85FF91] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={tickCircle} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Smart-contract protocol</p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#FF88EC] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={lock} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Secure funding</p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#FFDFA0] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={dollarCircle} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">
                    Progress-based payments fraud prevention technology
                  </p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#ADE6FF] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={moneys} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Investor pooling</p>
                </div>
              </div>
            </div>
          </div>

          <div className="feat-info text-center  md:text-left w-full md:w-[40%]">
            <h1 className="text-[#333333] font-semibold text-5xl md:text-6xl mb-10">
              Value Stake Protocol
            </h1>
            <p className="text-[#3B513F] text-[1.7rem] mb-10">
              Secure project funding with our Value Stake Protocol. Showcase
              your ideas, demonstrate value, and attract early-stage investors
              who believe in your vision{" "}
            </p>
            <div className="key-features hidden md:block">
              <p className="text-[#3B513F] text-[1.5rem] mb-7 font-bold">
                Key Features:
              </p>
              <div className="flex items-center flex-wrap gap-5">
                <div className="stuff flex items-center gap-2 bg-[#85FF91] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={tickCircle} alt="frame" />
                  </div>
                  <p className="text-[1.25rem] text-[#3B513F] font-bold">
                    Smart-contract protocol
                  </p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#FF88EC] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={lock} alt="frame" />
                  </div>
                  <p className="text-[1.25rem] text-[#3B513F] font-bold">
                    Secure funding
                  </p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#FFDFA0] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={dollarCircle} alt="frame" />
                  </div>
                  <p className="text-[1.25rem] text-[#3B513F] font-bold">
                    Progress-based payments fraud prevention technology
                  </p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#ADE6FF] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={moneys} alt="frame" />
                  </div>
                  <p className="text-[1.25rem] text-[#3B513F] font-bold">
                    Investor pooling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueStake;
