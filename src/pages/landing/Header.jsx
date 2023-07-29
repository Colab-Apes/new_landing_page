import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import "./landing.css";

import polygon from "../../assets/Polygon.png";
import logo from "../../assets/logo.png";
import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";

import next from "../../assets/svg/next.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((e) => !e);
  };

  return (
    <header className="header bg h-screen">
      <div className="bg-image hidden md:block -z-10">
        <img src={polygon} alt="polygon" />
      </div>
      <div className="web-nav">
        <nav className="nav container flex mx-auto py-10 justify-between items-center px-10">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <ul className="flex gap-10 md:gap-20 flex-col md:flex-row  ">
            <li className="text-3xl text-[#555555]">
              <a href="#">Projects</a>
            </li>
            <li className="text-3xl text-[#555555]">
              <a href="#">Learning pool</a>
            </li>
            <li className="text-3xl text-[#555555]">
              <a href="#">Create project</a>
            </li>
          </ul>

          <div className="nav-cta flex gap-10">
            <button className="">
              <a
                href="#"
                className="text-2xl md:text-primaryColor font-600 text-[#222]"
              >
                Sign in
              </a>
            </button>
            <button className="md:bg-green2  bg-green1 px-10 py-4 rounded-md">
              <a href="#" className="text-2xl text-white ">
                Sign up
              </a>
            </button>
          </div>
        </nav>
      </div>

      <div className="mobile-nav">
        <nav className="nav container flex mx-auto py-10 justify-between items-center px-10">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="mobile-nav-icon">
            <nav className="nav container  mx-auto  py-10 flex justify-between items-center">
              <div className="nav-cta flex items-center gap-10 md:flex">
                <button onClick={handleClick} className="text-green2">
                  {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                </button>
              </div>
            </nav>
          </div>
        </nav>

        <div className={`mobile px-10 py-20 ${isOpen ? "open" : ""}`}>
          <ul className="mb-10">
            <li className="text-4xl text-[#222] mb-10">
              <a href="#">Projects</a>
            </li>
            <li className="text-4xl text-[#222] mb-10">
              <a href="#">Learning pool</a>
            </li>
            <li className="text-4xl text-[#222] mb-10">
              <a href="#">Create project</a>
            </li>
          </ul>

          <div className="nav-cta flex gap-10">
            <button className="text-left">
              <a href="#" className="text-2xl font-600 text-[#222]">
                Sign in
              </a>
            </button>
            <button className="md:bg-green2  bg-green1 px-10 py-4 rounded-md">
              <a href="#" className="text-2xl text-white ">
                Sign up
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="hero mx-auto mt-32 flex flex-col md:flex-row justify-between items-center">
        <div className="text-content w-full md:w-[70%] text-center md:text-left mb-16 md:mb-0 fade-in-left">
          <p className="text-primaryColor mb-7">
            <span className="text-4xl font-600">Welcome to Co_lab Apes, </span>
            <span className="text-4xl font-light block md:inline">
              Let’s Remote Create !
            </span>
          </p>
          <div className="w-[10%] bg-primaryColor h-2 rounded-full my-10 hidden md:block"></div>
          <h1 className="w-full leading-normal text-[5rem] text-primaryColor font-semibold mb-12">
            Unleash Your Creativity. Collaborate. Innovate.
          </h1>
          <p className="text-4xl text-acentColor">
            Join Co_lab Apes and Bring Your Ideas to Life!
          </p>
          <div className="hero-cta flex flex-col-reverse md:flex-row gap-20 justify-center md:justify-normal  items-center mt-10">
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
      </div>
    </header>
  );
};

export default Header;
