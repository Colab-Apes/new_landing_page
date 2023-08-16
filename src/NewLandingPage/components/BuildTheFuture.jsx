import React from "react";
import feature3 from "../../assets/feature3.png";
import map from "../../assets/svg/map.svg";
import repeatCircle from "../../assets/svg/repeat-circle.svg";
import locationSlash from "../../assets/svg/location-slash.svg";
import mouseCircle from "../../assets/svg/mouse-circle.svg";

const BuildTheFuture = () => {
  return (
    <div>
      <div className="mt-64 lg:mt-36 relative px-4 lg:px-20  z-[10]">
        <div className="py-5 hidden lg:block bg-[#3B8004] h-[58px] w-[80px] absolute top-36 left-[68.2rem] "></div>
        <div className="bg-[#054E12] hidden lg:flex rounded-full h-[400px] w-[400px]   absolute left-[-20rem] top-0 justify-center items-center blur-[500px]">
          {" "}
        </div>
        <div className="bg-[#C26AAA]  hidden lg:flex rounded-full h-[200px] w-[200px]   absolute left-[-20rem] top-0  justify-center items-center blur-[200px]">
          {" "}
        </div>
        <div className="bg-[#054E12]  hidden lg:flex rounded-full h-[400px] w-[400px]   absolute right-[-10rem] top-[24rem] justify-center items-center blur-[250px]">
          {" "}
        </div>

        <div className=" flex flex-col-reverse md:flex-row items-center   justify-center xl:items-center md:gap-24">
          <div className="">
            <img
              className="w-full h-full object-contain  "
              src={feature3}
              alt="Feature Frame"
            />
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

          <div className=" text-center  md:text-left w-full md:w-[40%]">
            <h1 className="text-[#333333] font-semibold text-5xl md:text-6xl ">
              Build The Future
            </h1>
            <p className="text-[#3B513F] text-[1.7rem] mb-10 mt-20">
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
                  <p className="text-[1.25rem] text-[#3B513F] font-bold">
                    Project collaboration
                  </p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#C0FFCE] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={mouseCircle} alt="frame" />
                  </div>
                  <p className="text-[1.25rem] text-[#3B513F] font-bold">
                    Project tracking
                  </p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#FFFB6B] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={map} alt="frame" />
                  </div>
                  <p className="text-[1.25rem] text-[#3B513F] font-bold">
                    First principle thinking roadmap
                  </p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#BBD2FF] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={locationSlash} alt="frame" />
                  </div>
                  <p className="text-[1.25rem] text-[#3B513F] font-bold">
                    Virtual shared workspace
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

export default BuildTheFuture;
