import Header from "./components/Header";
import Section from "./components/Section";

import bg from "./assets/bg.png";
import logoWhite from "./assets/logo-white.png";

import frame1 from "./assets/frame1.png";
import frame2 from "./assets/frame2.png";
import frame3 from "./assets/frame3.png";
import emoji from "./assets/svg/emoji.svg";
import feature1 from "./assets/feature1.png";
import feature2 from "./assets/feature2.png";
import feature3 from "./assets/feature3.png";
import feature4 from "./assets/feature4.png";

import frame from "./assets/svg/frame.svg";
import monitor from "./assets/svg/monitor.svg";
import map from "./assets/svg/map.svg";
import global from "./assets/svg/global.svg";

import facebook from "./assets/svg/facebook.svg";
import insta from "./assets/svg/insta.svg";
import linkedin from "./assets/svg/linkedin.svg";
import twitter from "./assets/svg/twitter.svg";
import youtube from "./assets/svg/youtube.svg";

import userTag from "./assets/svg/user-tag.svg";
import layer from "./assets/svg/layer.svg";
import video from "./assets/svg/video.svg";
import people from "./assets/svg/people.svg";
import repeatCircle from "./assets/svg/repeat-circle.svg";
import locationSlash from "./assets/svg/location-slash.svg";
import mouseCircle from "./assets/svg/mouse-circle.svg";
import dollarCircle from "./assets/svg/dollar-circle.svg";
import lock from "./assets/svg/lock.svg";
import moneys from "./assets/svg/moneys.svg";
import tickCircle from "./assets/svg/tick-circle.svg";

import one from "./assets/svg/1.svg";
import two from "./assets/svg/2.svg";
import three from "./assets/svg/3.svg";
import four from "./assets/svg/4.svg";

import "./App.css";
import TabComponent from "./components/TabComponent";

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
                  Welcome to Co_lab Apes, Let’s Remote Create !{" "}
                </span>
                {/* <span className="text-4xl font-light hidden md:inline"></span> */}
              </p>
              <div className="w-[10%] bg-primaryColor h-2 rounded-full my-10 hidden md:block"></div>
              <h1 className="w-full leading-normal text-[3rem] text-primaryColor font-semibold mb-12">
                Unleash Your Creativity. <br /> Collaborate. Innovate.
              </h1>
              <p className="text-3xl md:text-4xl text-acentColor">
                Join Co_lab Apes and Bring Your Ideas to Life!
              </p>
              <div className="hero-cta hidden md:flex flex-col-reverse md:flex-row gap-12 justify-center md:justify-normal  items-center mt-10">
                <button className="bg-green2 px-10 py-7 rounded-xl">
                  <a href="#" className="text-2xl text-white">
                    Get Started
                  </a>
                </button>
                <img className="hidden md:block" src={emoji} alt="Emoji next" />
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
              <button className="w-full bg-green2 px-10 py-7 rounded-xl mb-10">
                <a href="#" className="text-2xl text-white">
                  Get Started
                </a>
              </button>
              <div className="flex items-center justify-center gap-5">
                <div className="img w-[5rem]">
                  <img className="w-full" src={emoji} alt="Emoji next" />
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
                  <p className="text-[#3B513F] text-[1.5rem] mb-5 font-semibold">
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
                  Connect with like-minded creators and investors in our
                  exclusive online community. Showcase your projects, skills,
                  and ideas to gain exposure and find potential collaborators
                </p>
                <div className="key-features hidden md:block">
                  <p className="text-[#3B513F] text-[1.5rem] mb-7 font-semibold">
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
                  live group-based learning sessions. Enhance your skills,
                  expand your knowledge, and stay updated with the latest
                  industry trends
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
                  Collaborate with other talented creators, leverage the power
                  of First Principle Thinking, and create innovative projects
                  together
                </p>
                <div className="key-features hidden md:block">
                  <p className="text-[#3B513F] text-[1.5rem] mb-7 font-semibold">
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
                  your ideas, demonstrate value, and attract early-stage
                  investors who believe in your vision{" "}
                </p>
                <div className="key-features hidden md:block">
                  <p className="text-[#3B513F] text-[1.5rem] mb-7 font-semibold">
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
        </Section>
        <Section backgroundImg={bg} className={"width-remove"}>
          <div className="collaborate py-52 container mx-auto">
            <div className="title px-10 text-center text-5xl text-[#3B8004] font-bold mb-5 md:mb-20">
              Ready to collaborate & Innovate ?
            </div>
            <div className="coll-box flex flex-col justify-center items-center bg-transparent md:bg-[#ECF8EE] h-[80%] w-[100%] rounded-xl p-14">
              <h1 className="text-[#333333] text-center text-[2rem] font-semibold mb-20">
                Join Co_lab Apes Today & Explore a World of Possibilities
              </h1>
              <div className="coll-cta flex flex-col md:flex-row w-full md:w-1/2 gap-5 md:gap-10">
                <button className="w-full bg-green2 px-7 py-7 rounded-xl mb-10">
                  <a href="#" className="text-2xl text-white">
                    Get Started
                  </a>
                </button>
                <button className="w-full bg-white px-7 py-7 rounded-xl mb-10">
                  <a href="#" className="text-2xl text-black">
                    Join the wait list
                  </a>
                </button>
              </div>
            </div>
          </div>
        </Section>
        <Section backgroundImg={bg}>
          <div className="works py-40 container mx-auto px-10">
            <div className="title text-center text-5xl text-[#3B8004] font-bold mb-20">
              How It Works
            </div>
            <div className="works flex flex-col md:flex-row gap-12 justify-between mb-10">
              <div className="w-box bg-[#ECF8EE] flex gap-10 p-7 rounded-xl w-full md:w-1/2">
                <div className="w-number">
                  <img src={one} alt="One" className="" />
                </div>
                <div className="w-text mt-7">
                  <h1 className="text-[2rem] text-[#333333] font-semibold mb-16 ">
                    Join Co_lab Apes
                  </h1>
                  <p className="text-[1.7rem] text-[#445C48] border-t pt-10">
                    Sign Up and Complete your profile
                  </p>
                </div>
              </div>
              <div className="w-box bg-[#ECF8EE] flex gap-10  p-7 rounded-xl w-full md:w-1/2">
                <div className="w-number">
                  <img src={two} alt="One" className="" />
                </div>
                <div className="w-text mt-7">
                  <h1 className="text-[2rem] text-[#333333] font-semibold mb-16 ">
                    Explore Opportunities
                  </h1>
                  <p className="text-[1.7rem] text-[#445C48] border-t pt-10">
                    Discover projects, connect with collaborators, and learn
                    from experts
                  </p>
                </div>
              </div>
            </div>
            <div className="works flex flex-col md:flex-row gap-12 justify-between">
              <div className="w-box bg-[#ECF8EE] flex gap-10 p-7 rounded-xl w-full md:w-1/2">
                <div className="w-number]">
                  <img src={three} alt="One" className="" />
                </div>
                <div className="w-text mt-7">
                  <h1 className="text-[2rem] text-[#333333] font-semibold mb-16 ">
                    Collaborate & Innovate
                  </h1>
                  <p className="text-[1.7rem] text-[#445C48] border-t pt-10">
                    Engage in collaborative projects, leverage the power of
                    shared knowledge, and bring your ideas to life
                  </p>
                </div>
              </div>
              <div className="w-box bg-[#ECF8EE] flex gap-10  p-7 rounded-xl w-full md:w-1/2">
                <div className="w-number">
                  <img src={four} alt="One" className="" />
                </div>
                <div className="w-text mt-7">
                  <h1 className="text-[2rem] text-[#333333] font-semibold mb-16 ">
                    Grow & Succeed
                  </h1>
                  <p className="text-[1.7rem] text-[#445C48] border-t pt-10">
                    Gain exposure, attract investors, and achieve success with
                    your innovative projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section backgroundImg={bg} className={"mt-72 md:mt-0"}>
          {/* <div className="collaborate mt-48 container mx-auto">
            <div className="title text-center text-5xl text-[#3B8004] font-bold mb-20">
              Frequently Asked Questions
            </div>
            <div className="coll-box flex flex-col justify-center items-center bg-[#ECF8EE] h-[70%] w-[100%] rounded-xl p-14">
              <h1 className="text-[#333333] text-center text-[2rem] font-semibold mb-20">
                Join Co_lab Apes Today & Explore a World of Possibilities
              </h1>
              <div className="coll-cta flex flex-col md:flex-row w-full md:w-1/2 gap-5 md:gap-10">
                <button className="w-full bg-green2 px-7 py-7 rounded-xl mb-10">
                  <a href="#" className="text-2xl text-white">
                    Get Started
                  </a>
                </button>
                <button className="w-full bg-white px-7 py-7 rounded-xl mb-10">
                  <a href="#" className="text-2xl text-black">
                    Join the wait list
                  </a>
                </button>
              </div>
            </div>
          </div> */}
          <div className="faq mt-56 mt text-center container mx-auto px-10">
            <div className="title text-center text-6xl text-[#3B8004] font-bold mb-20">
              Frequently Asked Questions
            </div>
            <TabComponent />
          </div>
        </Section>
        <Section backgroundImg={bg} className={"width-remove"}>
          <div className="collaborate mt-48 container mx-auto">
            <div className="title text-center text-5xl text-[#3B8004] font-bold mb-20">
              Join Our Newsletter
            </div>
            <div className="footer-box flex flex-col justify-center items-center bg-transparent md:bg-[#ECF8EE]  h-[80%] w-[80%] mx-auto rounded-2xl p-0 md:p-14">
              <h1 className="text-[#054E12] text-center text-[2rem]  mb-28">
                Stay connected and informed: <br />
                Join our newsletter for the latest successful projects and
                business deals.
              </h1>
              <form className="coll-form gap-10 flex items-center p-3 rounded-3xl">
                <div className="input">
                  <input
                    className="text-3xl bg-transparent w-full md:w-[30rem] p-2 outline-none border-none bg-none"
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
                <button className="bg-green2 px-12 py-7 rounded-3xl">
                  <a href="#" className="text-3xl text-white">
                    Subscribe
                  </a>
                </button>
              </form>
            </div>
          </div>
        </Section>
        <Section backgroundImg={bg}>
          <div className="collaborate mt-48 container mx-auto">
            <div className="title text-center text-5xl text-[#3B8004] font-bold mb-20">
              Co_lab Apes
            </div>
            <div className="coll-box  bg-[green] text-[white] mx-auto rounded-2xl px-10 md:px-60 py-28">
              <div className="footer__links flex flex-col md:flex-row justify-between">
                <div className="footer-link">
                  <h1 className="text-3xl mb-10">Co_lab Apes</h1>
                  <ul className="flex flex-col gap-5 text-2xl font-light">
                    <li>About Us</li>
                    <li>Privacy policy</li>
                    <li>FAQs</li>
                    <li>Terms of Use</li>
                    <li>Legal</li>
                  </ul>
                </div>
                <div className="footer-link">
                  <h1 className="text-3xl mb-10">Features</h1>
                  <ul className="flex flex-col gap-5 text-2xl font-light">
                    <li>Home</li>
                    <li>Top 10 projects</li>
                    <li>Learning pool</li>
                    <li>Join </li>
                    <li>Create project</li>
                  </ul>
                </div>
                <div className="footer-link">
                  <h1 className="text-3xl mb-10">Learning pool</h1>
                  <ul className="flex flex-col gap-5 text-2xl font-light">
                    <li>Analytics</li>
                    <li>Artificial intelligence</li>
                    <li>Animation</li>
                    <li>Coding</li>
                    <li>Content writing</li>
                    <li>Data science</li>
                    <li>Video editting</li>
                    <li>3D modelling</li>
                  </ul>
                </div>
                <div className="footer-link ">
                  <img src={logoWhite} alt="Logo" className="mb-10" />
                  <p className="text-2xl text-center mb-7">
                    help@colabapes.com
                  </p>
                  <div className="socials flex items-center justify-end gap-5 mb-10">
                    <div className="social-img">
                      <img src={youtube} alt="Youtube" className="w-full" />
                    </div>
                    <div className="social-img">
                      <img src={facebook} alt="Facebook" />
                    </div>
                    <div className="social-img">
                      <img src={insta} alt="Insta" className="w-full" />
                    </div>
                    <div className="social-img">
                      <img src={twitter} alt="Twitter" className="w-full" />
                    </div>
                    <div className="social-img">
                      <img src={linkedin} alt="Linkedin" className="w-full" />
                    </div>
                  </div>
                  <button className="w-full bg-white px-5 py-7 rounded-full mb-10">
                    <a href="#" className="text-3xl text-black">
                      Contact Us
                    </a>
                  </button>
                </div>
              </div>
              <div className="copywright">
                <p className="text-center mt-10 text-2xl font-[300]">
                  <span>&copy; </span>
                  2023, all rights reserved
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
      {/* Items end */}
    </div>
  );
}

export default App;
