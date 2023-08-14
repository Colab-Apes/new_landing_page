import React from "react";

const ValueStake = () => {
  return (
    <div>
      <div className="mx-auto container mt-36">
        <div className="title text-center text-5xl text-[#3B8004] font-bold mb-10">
          Features
        </div>
        <div className="feature_content flex flex-col-reverse md:flex-row-reverse items-center md:gap-24">
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
        </div>
      </div>
    </div>
  );
};

export default ValueStake;
