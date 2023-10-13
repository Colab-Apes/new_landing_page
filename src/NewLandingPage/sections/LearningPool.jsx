import feature2 from "../../assets/feature2.webp";
import userTag from "../../assets/svg/user-tag.svg";
import layer from "../../assets/svg/layer.svg";
import video from "../../assets/svg/video.svg";
import people from "../../assets/svg/people.svg";

import FadeIn from "../components/FadeIn";



const LearningPool = () => {
  return (
    <section>
      <FadeIn delay={0.6} direction="right">
        <div className="mt-64 lg:mt-36 relative px-4  md:px-14 lg:px-20">
          <div className="px-20"></div>
          <div className="py-5 bg-[#3B8004] hidden lg:block h-[58px] w-[91px] absolute top-[8rem] left-[-6rem] "></div>
          <div className="w-[400px] h-[400px] hidden lg:block top-[-3rem] lg:left-[-20rem] absolute bg-[#054E12] blur-[250px] rounded-[607px]  "></div>
          <div className="feature_content flex flex-col-reverse md:flex-row-reverse items-center md:gap-24">
            <div className="feat-image">
              <img className="w-[100%]" src={feature2} alt="Feature Frame" loading="lazy"/>
              <div className=" lg:hidden text-center">
                <p className="text-[#3B513F] text-[2rem] xl:text-[1.5rem] mb-5 font-bold">
                  Key Features:
                </p>
                <div className="flex  flex-col items-center flex-wrap gap-5 text-[#3B513F] font-bold  ">
                  <div className="flex items-center gap-2 bg-[#7BFF88] px-10 py-5 rounded-[10px]">
                    <div className="icon">
                      <img src={layer} alt="frame" loading="lazy"/>
                    </div>
                    <p className="text-[1.7rem] text-[#3B513F] font-bold">
                      Categorised courses
                    </p>
                  </div>
                  <div className=" flex items-center gap-2 bg-[#A3E3FF] px-10 py-5 rounded-[10px]">
                    <div className="icon">
                      <img src={userTag} alt="frame" loading="lazy"/>
                    </div>
                    <p className="text-[1.7rem] text-[#3B513F] font-bold">
                      Expert instructors
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FFE0A5] px-10 py-5 rounded-[10px]">
                    <div className="icon">
                      <img src={people} alt="frame" loading="lazy"/>
                    </div>
                    <p className="text-[1.7rem] text-[#3B513F] font-bold">
                      Interactive learning environment
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FFB3F3] px-10 py-5 rounded-[10px]">
                    <div className="icon">
                      <img src={video} alt="frame" loading="lazy"/>
                    </div>
                    <p className="text-[1.7rem] text-[#3B513F] font-bold">
                      Live sessions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="feat-info text-center  md:text-left w-full md:w-[40%]">
              <h1 className="text-[#333333] font-semibold text-[4rem] md:text-6xl mb-10">
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
                  <div className=" flex items-center gap-2 bg-[#7BFF88] px-10 py-5 rounded-[10px]">
                    <div className="icon">
                      <img src={layer} alt="frame" loading="lazy"/>
                    </div>
                    <p className="text-[1.25rem] text-[#3B513F]  font-bold">
                      Categorised courses
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#A3E3FF] px-10 py-5 rounded-[10px]">
                    <div className="icon">
                      <img src={userTag} alt="frame" loading="lazy"/>
                    </div>
                    <p className="text-[1.25rem] text-[#3B513F]  font-bold">
                      Expert instructors
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FFE0A5] px-10 py-5 rounded-[10px]">
                    <div className="icon">
                      <img src={people} alt="frame" loading="lazy"/>
                    </div>
                    <p className="text-[1.25rem] text-[#3B513F]  font-bold">
                      Interactive learning environment
                    </p>
                  </div>
                
                  <div className="flex items-center gap-2 bg-[#FFFC84] px-10 py-5 rounded-[10px]">
                    <div className="icon">
                      <img src={video} alt="frame" loading="lazy"/>
                    </div>
                    <p className="text-[1.25rem] text-[#3B513F]  font-bold">
                      Live sessions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default LearningPool;
