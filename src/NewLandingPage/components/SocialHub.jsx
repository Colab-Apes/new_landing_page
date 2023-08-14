import React from "react";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import feature4 from "../../assets/feature4.png";
import frame from "../../assets/svg/frame.svg";
import monitor from "../../assets/svg/monitor.svg";
import map from "../../assets/svg/map.svg";
import global from "../../assets/svg/global.svg";

const SocialHub = () => {
  return (
    <div>
      {" "}
      <div className="features container mx-auto">
        <div className="title text-center text-5xl text-[#3B8004] font-bold mb-10">
          Features
        </div>
        <div className="feature_content flex flex-col-reverse md:flex-row items-center md:gap-24">
          <div className="feat-image">
            <img
              className="w-[100%] -z-40"
              src={feature1}
              alt="Feature Frame"
            />
            <div className="key-features kf-mobile text-center">
              <p className="text-[#3B513F] text-[1.5rem] mb-5 font-bold">
                Key Features:
              </p>
              <div className="flex flex-col items-center flex-wrap gap-5">
                <div className="stuff flex items-center gap-2 bg-[#F2B6FF] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={frame} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Personal profile</p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#C8B6FF] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={monitor} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Project showcase</p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#FFFC84] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={global} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Networking opportunity</p>
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
                <div className="stuff flex items-center gap-2 bg-[#F2B6FF] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={frame} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Personal profile</p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#C8B6FF] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={monitor} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Project showcase</p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#FFFC84] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={global} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Networking opportunity</p>
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
