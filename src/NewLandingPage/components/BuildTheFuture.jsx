import React from "react";

const BuildTheFuture = () => {
  return (
    <div>
      <div className="features container mt-36">
        <div className="title text-center text-5xl text-[#3B8004] font-bold mb-10">
          Features
        </div>
        <div className="feature_content flex flex-col-reverse md:flex-row items-center md:gap-24">
          <div className="feat-image">
            <img className="w-[100%]" src={feature3} alt="Feature Frame" />
            <div className="key-features kf-mobile text-center">
              <p className="text-[#3B513F] text-[1.5rem] mb-5 font-bold">
                Key Features:
              </p>
              <div className="flex flex-col items-center flex-wrap gap-5">
                <div className="stuff flex items-center gap-2 bg-[#FFD6BF] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={repeatCircle} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Project collaboration</p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#C0FFCE] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={mouseCircle} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Project tracking</p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#FFFB6B] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={map} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">
                    First principle thinking roadmap
                  </p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#BBD2FF] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={locationSlash} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Virtual shared workspace</p>
                </div>
              </div>
            </div>
          </div>

          <div className="feat-info text-center  md:text-left w-full md:w-[40%]">
            <h1 className="text-[#333333] font-semibold text-5xl md:text-6xl mb-10">
              Build The Future
            </h1>
            <p className="text-[#3B513F] text-[1.7rem] mb-10">
              Transform your ideas into reality with our Build Feature.
              Collaborate with other talented creators, leverage the power of
              First Principle Thinking, and create innovative projects together
            </p>
            <div className="key-features hidden md:block">
              <p className="text-[#3B513F] text-[1.5rem] mb-7 font-bold">
                Key Features:
              </p>
              <div className="flex items-center flex-wrap gap-5">
                <div className="stuff flex items-center gap-2 bg-[#FFD6BF] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={repeatCircle} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Project collaboration</p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#C0FFCE] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={mouseCircle} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Project tracking</p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#FFFB6B] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={map} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">
                    First principle thinking roadmap
                  </p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#BBD2FF] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={locationSlash} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Virtual shared workspace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildTheFuture;
