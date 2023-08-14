import React from "react";
import feature1 from "../../assets/feature1.png";

import frame from "../../assets/svg/frame.svg";
import monitor from "../../assets/svg/monitor.svg";

import global from "../../assets/svg/global.svg";

const SocialHub = () => {
  return (
    <div>
      {" "}
      <div className="mt-36  container mx-auto relative">
        <div className="bg-[#054E12] rounded-full h-[ 649.982px] w-[774px] blur-[500px] absolute right-[-10rem] top-24 flex justify-center items-center">
          {" "}
        </div>

        <div className="h-[200px] w-[300px] absolute bg-[#C26AAA] rounded-full right-[-10rem] top-24 blur-[200px]"></div>
        <div className="feature_content flex flex-col-reverse md:flex-row items-center md:gap-24 xl:gap-x-32">
          <div className="feat-image">
            <div className="py-5 bg-[#3B8004] h-[58px] w-[91px] absolute top-36 left-[67rem] "></div>
            <img className="w-[100%] " src={feature1} alt="Feature Frame" />
            <div className="key-features kf-mobile text-center">
              <p className="text-[#3B513F] text-[1.5rem] mb-5 font-bold">
                Key Features:
              </p>
              <div className="flex flex-col items-center flex-wrap gap-5 text-[#3B513F] font-bold">
                <div className="stuff flex items-center gap-2 bg-[#F2B6FF] px-10 py-5 rounded-[10px]">
                  <div className="icon">
                    <img src={frame} alt="frame" />
                  </div>
                  <p className="text-[20px] text-[#3B513F] font-bold">
                    Personal profile
                  </p>
                </div>
                <div className="stuff  flex items-center gap-2 bg-[#C8B6FF] px-10 py-5 rounded-[10px]">
                  <div className="icon">
                    <img src={monitor} alt="frame" />
                  </div>
                  <p className="text-[20px] text-[#3B513F] font-bold">
                    Project showcase
                  </p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#FFFC84] px-10 py-5 rounded-[10px]">
                  <div className="icon">
                    <img src={global} alt="frame" />
                  </div>
                  <p className="text-[1.25rem] text-[#3B513F] font-bold">
                    Networking opportunity
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="feat-info text-center  md:text-left w-full md:w-[40%]">
            <h1 className="text-[#333333] font-semibold text-5xl md:text-6xl mb-10">
              Social Hub
            </h1>
            <p className="text-[#3B513F] text-[1.7rem] mb-10">
              Connect with like-minded creators and investors in our exclusive
              online community. Showcase your projects, skills, and ideas to
              gain exposure and find potential collaborators
            </p>
            <div className="key-features hidden md:block">
              <p className="text-[#3B513F] text-[1.5rem] mb-7 font-bold">
                Key Features:
              </p>
              <div className="flex items-center flex-wrap gap-10">
                <div className="stuff flex items-center gap-2 bg-[#F2B6FF] px-10 py-5 rounded-[10px]">
                  <div className="icon">
                    <img src={frame} alt="frame" />
                  </div>
                  <p className="text-[1.25rem] text-[#3B513F] font-bold">
                    Personal profile
                  </p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#C8B6FF] px-10 py-5 rounded-[10px]">
                  <div className="icon">
                    <img src={monitor} alt="frame" />
                  </div>
                  <p className="text-[1.25rem] text-[#3B513F] font-bold">
                    Project showcase
                  </p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#FFFC84] px-10 py-5 rounded-[10px]">
                  <div className="icon">
                    <img src={global} alt="frame" />
                  </div>
                  <p className="text-[1.25rem] text-[#3B513F] font-bold">
                    Networking opportunity
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

export default SocialHub;
