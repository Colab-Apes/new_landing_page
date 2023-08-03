import "./Header.css";
import logo from "../assets/logo.png";
import MenuIcon from '../assets/svg/menu-icon.svg'

import { FaTimes } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((e) => !e);

    console.log('cjcjcjhjhdjhd');
  };

  return (
    <>
      <header className="header container relative mx-auto hidden md:flex items-center justify-between z-10 py-10">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <ul className=" header__center flex gap-10 md:gap-20 flex-col md:flex-row  ">
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
      </header>

      <div className="mobile-nav">
        <nav className="nav container flex mx-auto justify-between items-center">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="mobile-nav-icon">
            <nav className="nav container  mx-auto  py-10 flex justify-between items-center">
              <div className="nav-cta flex items-center gap-10 md:flex">
                <button onClick={handleClick} className="text-green2">
                  {isOpen ? <FaTimes size={24} /> : <img src={MenuIcon} alt="menu-icon" />}
                </button>
              </div>
            </nav>
          </div>
        </nav>

        {/* <img src={MenuIcon} alt="menu-icon" /> */}

        <div className={`mobile px-10 py-20 ${isOpen ? 'open' : ''}`}>
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
    </>
  );
}

export default Header;
