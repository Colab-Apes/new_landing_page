import Header from "./components/Header";
import Section from "./components/Section";

import bg from "./assets/bg.png";

import frame1 from "./assets/frame1.png";
import frame2 from "./assets/frame2.png";
import frame3 from "./assets/frame3.png";
import next from "./assets/svg/next.svg";
import feature1 from "./assets/feature1.png";
import feature2 from "./assets/feature2.png";
import feature3 from "./assets/feature3.png";
import feature4 from "./assets/feature4.png";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ once: false });

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Header end */}

      {/* Items */}
      <div className="app__itemsContainer">
        <Section backgroundImg={bg}>
          <div className="hero container w-full mx-auto mt-32 flex flex-col md:flex-row justify-evenly md:justify-between items-center">
            <div className="text-content w-full md:w-[70%] text-center md:text-left fade-in-left">
              <p className="text-primaryColor mb-7">
                <span className="text-4xl font-600 hidden md:block">
                  Welcome to Co_lab Apes,{" "}
                </span>
                <span className="text-4xl font-light hidden md:inline">
                  Let’s Remote Create !
                </span>
              </p>
              <div className="w-[10%] bg-primaryColor h-2 rounded-full my-10 hidden md:block"></div>
              <h1 className="w-full leading-normal text-[3rem] text-primaryColor font-semibold mb-12">
                Unleash Your Creativity. <br /> Collaborate. Innovate.
              </h1>
              <p className="text-3xl md:text-4xl text-acentColor">
                Join Co_lab Apes and Bring Your Ideas to Life!
              </p>
              <div className="hero-cta hidden md:flex flex-col-reverse md:flex-row gap-20 justify-center md:justify-normal  items-center mt-10">
                <button className="bg-green2 px-10 py-7 rounded-md">
                  <a href="#" className="text-2xl text-white">
                    Get Started
                  </a>
                </button>
                <img className="hidden md:block" src={next} alt="Emoji next" />
                <a
                  className="text-3xl text-primaryColor border-b-2 border-primaryColor"
                  href="#"
                >
                  See how it works
                </a>
              </div>
            </div>

            <div className="image-content relative fade-in-top">
              <img src={frame1} alt="Frame" />
              <img
                className="absolute top-24 -left-20 hidden md:block"
                src={frame2}
                alt="frame"
              />
              <img
                className="absolute -bottom-16 -right-7 hidden md:block"
                src={frame3}
                alt="frame"
              />
            </div>

            <div className="hero-cta hc-mobile container mx-auto">
              <button className="w-full bg-green2 px-10 py-7 rounded-md mb-10">
                <a href="#" className="text-2xl text-white">
                  Get Started
                </a>
              </button>
              <div className="flex items-center justify-center gap-5">
                <div className="img w-[5rem]">
                  <img className="w-full" src={next} alt="Emoji next" />
                </div>
                <a
                  className="text-3xl text-primaryColor border-b border-primaryColor"
                  href="#"
                >
                  See how it works
                </a>
              </div>
            </div>
          </div>
        </Section>
        <Section backgroundImg={bg}>
          <div className="features">
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
                  <p className="text-[#3B513F] text-[1.5rem] mb-5 font-semibold">
                    Key Features:
                  </p>
                  <div className="flex flex-col items-center flex-wrap gap-5">
                    <div className="stuff bg-[#F2B6FF] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Personal profile</p>
                    </div>
                    <div className="stuff bg-[#C8B6FF] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Project showcase</p>
                    </div>
                    <div className="stuff bg-[#FFFC84] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
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
                  Connect with like-minded creators and investors in our
                  exclusive online community. Showcase your projects, skills,
                  and ideas to gain exposure and find potential collaborators
                </p>
                <div className="key-features hidden md:block">
                  <p className="text-[#3B513F] text-[1.5rem] mb-7 font-semibold">
                    Key Features:
                  </p>
                  <div className="flex items-center flex-wrap gap-10">
                    <div className="stuff bg-[#F2B6FF] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Personal profile</p>
                    </div>
                    <div className="stuff bg-[#C8B6FF] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Project showcase</p>
                    </div>
                    <div className="stuff bg-[#FFFC84] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Networking opportunity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section backgroundImg={bg}>
          <div className="features container mt-36">
            <div className="title text-center text-5xl text-[#3B8004] font-bold mb-10">
              Features
            </div>
            <div className="feature_content flex flex-col-reverse md:flex-row-reverse items-center md:gap-24">
              <div className="feat-image">
                <img className="w-[100%]" src={feature2} alt="Feature Frame" />
                <div className="key-features kf-mobile text-center">
                  <p className="text-[#3B513F] text-[1.5rem] mb-5 font-semibold">
                    Key Features:
                  </p>
                  <div className="flex flex-col items-center flex-wrap gap-5">
                    <div className="stuff bg-[#7BFF88] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Categorised courses</p>
                    </div>
                    <div className="stuff bg-[#A3E3FF] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Expert instructors</p>
                    </div>
                    <div className="stuff bg-[#FFE0A5] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">
                        Interactive learning environment
                      </p>
                    </div>
                    <div className="stuff bg-[#FFB3F3] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
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
                  live group-based learning sessions. Enhance your skills,
                  expand your knowledge, and stay updated with the latest
                  industry trends
                </p>
                <div className="key-features hidden md:block">
                  <p className="text-[#3B513F] text-[1.5rem] mb-7 font-semibold">
                    Key Features:
                  </p>
                  <div className="flex items-center flex-wrap gap-5">
                    <div className="stuff bg-[#7BFF88] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Categorised courses</p>
                    </div>
                    <div className="stuff bg-[#A3E3FF] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Expert instructors</p>
                    </div>
                    <div className="stuff bg-[#FFE0A5] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">
                        Interactive learning environment
                      </p>
                    </div>
                    <div className="stuff bg-[#FFB3F3] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Live sessions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section backgroundImg={bg}>
          <div className="features container mt-36">
            <div className="title text-center text-5xl text-[#3B8004] font-bold mb-10">
              Features
            </div>
            <div className="feature_content flex flex-col-reverse md:flex-row items-center md:gap-24">
              <div className="feat-image">
                <img className="w-[100%]" src={feature3} alt="Feature Frame" />
                <div className="key-features kf-mobile text-center">
                  <p className="text-[#3B513F] text-[1.5rem] mb-5 font-semibold">
                    Key Features:
                  </p>
                  <div className="flex flex-col items-center flex-wrap gap-5">
                    <div className="stuff bg-[#FFD6BF] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Project collaboration</p>
                    </div>
                    <div className="stuff bg-[#C0FFCE] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Project tracking</p>
                    </div>
                    <div className="stuff bg-[#FFFB6B] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">
                        First principle thinking roadmap
                      </p>
                    </div>
                    <div className="stuff bg-[#BBD2FF] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
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
                  Collaborate with other talented creators, leverage the power
                  of First Principle Thinking, and create innovative projects
                  together
                </p>
                <div className="key-features hidden md:block">
                  <p className="text-[#3B513F] text-[1.5rem] mb-7 font-semibold">
                    Key Features:
                  </p>
                  <div className="flex items-center flex-wrap gap-5">
                    <div className="stuff bg-[#FFD6BF] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Project collaboration</p>
                    </div>
                    <div className="stuff bg-[#C0FFCE] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Project tracking</p>
                    </div>
                    <div className="stuff bg-[#FFFB6B] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">
                        First principle thinking roadmap
                      </p>
                    </div>
                    <div className="stuff bg-[#BBD2FF] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Virtual shared workspace</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section backgroundImg={bg}>
          <div className="features container mt-36">
            <div className="title text-center text-5xl text-[#3B8004] font-bold mb-10">
              Features
            </div>
            <div className="feature_content flex flex-col-reverse md:flex-row-reverse items-center md:gap-24">
              <div className="feat-image">
                <img className="w-[100%]" src={feature4} alt="Feature Frame" />
                <div className="key-features kf-mobile text-center">
                  <p className="text-[#3B513F] text-[1.5rem] mb-5 font-semibold">
                    Key Features:
                  </p>
                  <div className="flex flex-col items-center flex-wrap gap-5">
                    <div className="stuff bg-[#85FF91] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Smart-contract protocol</p>
                    </div>
                    <div className="stuff bg-[#FF88EC] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Secure funding</p>
                    </div>
                    <div className="stuff bg-[#FFDFA0] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">
                        Progress-based payments fraud prevention technology
                      </p>
                    </div>
                    <div className="stuff bg-[#ADE6FF] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Investor pooling</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="feat-info text-center  md:text-left w-full md:w-[40%]"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h1 className="text-[#333333] font-semibold text-5xl md:text-6xl mb-10">
                  Value Stake Protocol
                </h1>
                <p className="text-[#3B513F] text-[1.7rem] mb-10">
                  Secure project funding with our Value Stake Protocol. Showcase
                  your ideas, demonstrate value, and attract early-stage
                  investors who believe in your vision{" "}
                </p>
                <div className="key-features hidden md:block">
                  <p className="text-[#3B513F] text-[1.5rem] mb-7 font-semibold">
                    Key Features:
                  </p>
                  <div className="flex items-center flex-wrap gap-5">
                    <div className="stuff bg-[#85FF91] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Smart-contract protocol</p>
                    </div>
                    <div className="stuff bg-[#FF88EC] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Secure funding</p>
                    </div>
                    <div className="stuff bg-[#FFDFA0] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">
                        Progress-based payments fraud prevention technology
                      </p>
                    </div>
                    <div className="stuff bg-[#ADE6FF] px-10 py-5 rounded-lg">
                      <div className="icon"></div>
                      <p className="text-[1.3rem]">Investor pooling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section backgroundImg={bg}></Section>
        <Section backgroundImg={bg}></Section>
      </div>
      {/* Items end */}
    </div>
  );
}

export default App;
