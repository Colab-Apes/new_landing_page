import React from "react";

const LearningPool = () => {
  return (
    <div>
      <div className="features container mt-36">
        <div className="title text-center text-5xl text-[#3B8004] font-bold mb-10">
          Features
        </div>
        <div className="feature_content flex flex-col-reverse md:flex-row-reverse items-center md:gap-24">
          <div className="feat-image">
            <img className="w-[100%]" src={feature2} alt="Feature Frame" />
            <div className="key-features kf-mobile text-center">
              <p className="text-[#3B513F] text-[1.5rem] mb-5 font-bold">
                Key Features:
              </p>
              <div className="flex flex-col items-center flex-wrap gap-5">
                <div className="stuff flex items-center gap-2 bg-[#7BFF88] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={layer} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Categorised courses</p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#A3E3FF] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={userTag} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Expert instructors</p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#FFE0A5] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={people} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Engaging environment</p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#FFB3F3] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={video} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Live sessions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="feat-info text-center  md:text-left w-full md:w-[40%]">
            <h1 className="text-[#333333] font-semibold text-5xl md:text-6xl mb-10">
              Learning Pool
            </h1>
            <p className="text-[#3B513F] text-[1.7rem] mb-10">
              Access our comprehensive learning resources and participate in
              live group-based learning sessions. Enhance your skills, expand
              your knowledge, and stay updated with the latest industry trends
            </p>
            <div className="key-features hidden md:block">
              <p className="text-[#3B513F] text-[1.5rem] mb-7 font-semibold">
                Key Features:
              </p>
              <div className="flex items-center flex-wrap gap-5">
                <div className="stuff flex items-center gap-2 bg-[#7BFF88] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={layer} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Categorised courses</p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#A3E3FF] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={userTag} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Expert instructors</p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#FFE0A5] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={people} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">
                    Interactive learning environment
                  </p>
                </div>
                <div className="stuff flex items-center gap-2 bg-[#FFB3F3] px-10 py-5 rounded-lg">
                  <div className="icon">
                    <img src={video} alt="frame" />
                  </div>
                  <p className="text-[1.3rem]">Live sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPool;
