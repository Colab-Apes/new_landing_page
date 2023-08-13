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
import logo from "./assets/logo.png";

import "./App.css";
import TabComponent from "./components/TabComponent";
import ape from "./assets/apehead.png";
import footlogo from "./assets/footlogo.png";
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
                <button className="btngrad shadow-[10px_10px_30px_0px_rgba(59,_128,_4,_0.10)] px-14 py-7 rounded-[20px] text-[17px] text-white">
                  Get Started
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
                  Connect with like-minded creators and investors in our
                  exclusive online community. Showcase your projects, skills,
                  and ideas to gain exposure and find potential collaborators
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
                  Collaborate with other talented creators, leverage the power
                  of First Principle Thinking, and create innovative projects
                  together
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
                  your ideas, demonstrate value, and attract early-stage
                  investors who believe in your vision{" "}
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
        </Section>
        <Section backgroundImg={bg} className={"width-remove"}>
          <div className="collaborate pt-52 container mx-auto">
            <div className="title px-10 text-center text-5xl text-[#3B8004] font-bold mb-5 md:mb-20">
              Ready to collaborate & Innovate ?
            </div>
            <div className="coll-box flex flex-col justify-center items-center bg-transparent md:bg-[#ECF8EE] h-[80%] w-[100%] rounded-xl p-14">
              <h1 className="text-[#333333] text-center text-[2rem] font-semibold mb-20">
                Join Co_lab Apes Today & Explore a World of Possibilities
              </h1>
              <div className="flex flex-col md:flex-row  gap-5 md:gap-10 w-full md:w-1/2 items-center xl:w-[26%]">
                <button className="w-full bg-green2 text-2xl text-white px-7 py-7  mb-10 btngrad font-bold rounded-[20px]">
                  Get Started
                </button>
                <button className="w-full bg-white text-2xl text-black px-7 py-7  mb-10 font-bold rounded-[20px]">
                  Join the wait list
                </button>
              </div>
            </div>
          </div>
        </Section>
        <Section backgroundImg={bg} className={"width-remove"}>
          <div className="works py-40 container mx-auto px-10">
            <div className="title text-center text-5xl text-[#3B8004] font-bold mb-20">
              How It Works
            </div>
            <div className="works flex flex-col md:flex-row gap-12 justify-between mb-10">
              <div className="w-box bg-[#ECF8EE] flex gap-10 p-7 rounded-xl w-full md:w-1/2 box-shadow">
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
              <div className="w-box bg-[#ECF8EE] flex gap-10  p-7 rounded-xl w-full md:w-1/2 box-shadow">
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
              <div className="w-box bg-[#ECF8EE] flex gap-10 p-7 rounded-xl w-full md:w-1/2 box-shadow">
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
              <div className="w-box bg-[#ECF8EE] flex gap-10  p-7 rounded-xl w-full md:w-1/2 box-shadow">
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
        <Section backgroundImg={bg} className={"mt-92 md:mt-0 space-add"}>
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
        <Section className={"width-remove height-remove"}>
          <div className="collaborate mt-48 container mx-auto">
            <div className="title text-center text-5xl text-[#3B8004] font-bold mb-20">
              Join Our Newsletter
            </div>
            <div className="footer-box flex flex-col justify-start md:justify-center items-center bg-transparent md:bg-[#ECF8EE]  h-[80%] w-[80%] mx-auto rounded-2xl p-0 md:p-14">
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
                <button className=" px-12 btngrad py-7 rounded-3xl text-3xl text-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </Section>

        <Section className="h-fit  mx-auto w-full px-5 mt-20">
          <footer className=" mt-2 container    pb-2 px-10 lg:px-10 w-full rounded-[15px]  graid relative mb-4 z-[1]  xl:px-24">
            <img
              src={ape}
              alt=""
              className="bottom-0 absolute object-contain w-[30rem] hidden lg:block lg:w-[29.2rem] xl:w-[38.7rem] rounded-bl-[15px] lg:rounded-l-[15px] left-[-0.2rem]  lg:left-0 z-[1] "
            />
            <div className="grid   text-[2rem] grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 z-[10] text-white pt-20 h-full gap-x-8 gap-y-10 lg:gap-y-0 ">
              <div className="flex flex-col  w-full mx-auto  text-sm lg:text-2xl text-left z-[3] gap-y-8">
                <p className="text-3xl font-bold ">Co_lab Apes</p>
                <p className="lg:mt-4 mt-2">About Us</p>
                <p className="">About Us</p>
                <p className="">Privacy policy</p>
                <p className="">Terms of Use</p> <p className="">Legal</p>
              </div>
              <div className="flex flex-col w-full mx-auto    text-sm lg:text-2xl text-left z-[3] gap-y-6">
                <p className="text-3xl font-bold">Features</p>
                <p className="lg:mt-4 mt-2">Home</p>
                <p className="">Top 10 projects</p>
                <p className="">Learning pool</p> <p className="">Join </p>
                <p className="">Create project</p>
              </div>
              <div className="flex flex-col w-full mx-auto  text-sm lg:text-2xl text-left z-[3] gap-y-6">
                <p className="text-3xl font-bold">Learning pool</p>
                <p className="lg:mt-4 mt-2">Analytics</p>
                <p className="">Artificial intelligence</p>{" "}
                <p className="">Animation </p>
                <p className="">Coding</p>
                <p className="">Content writing</p>
                <p className="">Data science</p>
                <p className="">Video editting</p>
                <p className="">3D modelling</p>
              </div>
              <div className="flex flex-col items-end lg:items-center  z-[3] text-sm">
                <img
                  src={footlogo}
                  alt=""
                  className="z-[2] w-[10rem] object-contain"
                />
                <p className="mt-5 font-semibold xl:font-bold xl:text-2xl xl:mt-12">
                  help@colabapes.com
                </p>
                <div className="socials flex items-center justify-end gap-5 mt-5">
                  <div className="social-img">
                    <img src={youtube} alt="Youtube" className="w-full" />
                  </div>
                  <div className="social-img">
                    <img src={facebook} alt="Facebook" className="w-full" />
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
                <button className=" font-[700] w-full lg:w-fit text-3xl lg:px-12 py-8 mt-8 lg:mt-20 z-[3] text-[#054E12] bg-white rounded-[30px] font-latoxl:mt-20">
                  Contact Us
                </button>
              </div>
              <div
                className="h-[0.1px] rounded w-full bg-[#999] z-[3] col-span-2 lg:col-span-4
              xl:col-span-4 
              lg:mt-14 "
              ></div>
              <div className="col-span-2 lg:col-span-4 flex justify-center items-center  z-[3] lg:mt-8 mb-2">
                <div className="flex items-center">
                  {" "}
                  <div className="text-2xl font-[500]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="mr-2"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433268 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34873 18.9426 4.80688 17.0679 2.93215C15.1931 1.05741 12.6513 0.0029116 10 0ZM10 19.2C8.18042 19.2 6.40169 18.6604 4.88876 17.6495C3.37583 16.6386 2.19664 15.2018 1.50031 13.5207C0.803986 11.8396 0.621796 9.98979 0.97678 8.20517C1.33176 6.42054 2.20798 4.78126 3.49462 3.49462C4.78126 2.20797 6.42055 1.33176 8.20517 0.976775C9.9898 0.621791 11.8396 0.803982 13.5207 1.50031C15.2018 2.19663 16.6386 3.37582 17.6495 4.88875C18.6604 6.40168 19.2 8.18041 19.2 10C19.1974 12.4392 18.2272 14.7777 16.5025 16.5025C14.7777 18.2272 12.4392 19.1973 10 19.2ZM13.52 12.641C12.9658 13.3795 12.1932 13.925 11.3118 14.2001C10.4304 14.4753 9.48471 14.4661 8.60876 14.174C7.73281 13.8819 6.97096 13.3216 6.43111 12.5725C5.89125 11.8233 5.60075 10.9234 5.60075 10C5.60075 9.07662 5.89125 8.17665 6.43111 7.42753C6.97096 6.67841 7.73281 6.11811 8.60876 5.82599C9.48471 5.53387 10.4304 5.52473 11.3118 5.79986C12.1932 6.07499 12.9658 6.62045 13.52 7.359C13.5516 7.40102 13.5746 7.44885 13.5877 7.49976C13.6008 7.55067 13.6037 7.60367 13.5963 7.65571C13.589 7.70776 13.5714 7.75784 13.5447 7.8031C13.5179 7.84836 13.4825 7.88792 13.4405 7.9195C13.3985 7.95108 13.3506 7.97408 13.2997 7.98717C13.2488 8.00027 13.1958 8.00321 13.1438 7.99583C13.0917 7.98845 13.0417 7.97089 12.9964 7.94415C12.9511 7.91741 12.9116 7.88202 12.88 7.84C12.4267 7.23554 11.7946 6.78904 11.0734 6.56375C10.3522 6.33846 9.57839 6.3458 8.86158 6.58474C8.14478 6.82367 7.52132 7.28209 7.07953 7.89504C6.63774 8.508 6.4 9.24442 6.4 10C6.4 10.7556 6.63774 11.492 7.07953 12.105C7.52132 12.7179 8.14478 13.1763 8.86158 13.4153C9.57839 13.6542 10.3522 13.6615 11.0734 13.4362C11.7946 13.211 12.4267 12.7645 12.88 12.16C12.9438 12.0751 13.0387 12.0191 13.1438 12.0042C13.2489 11.9893 13.3556 12.0167 13.4405 12.0805C13.5254 12.1443 13.5814 12.2392 13.5963 12.3443C13.6112 12.4494 13.5838 12.5561 13.52 12.641Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="text-[14px] font-[500] ">
                    2023, all rights reserved
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </Section>
      </div>
      {/* Items end */}
    </div>
  );
}

export default App;
