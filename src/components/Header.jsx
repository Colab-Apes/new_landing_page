import "./Header.css";
import logo from "../assets/logo.png";
import MenuIcon from "../assets/svg/menu-icon.svg";

import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const handleClick = () => {
    setIsOpen((e) => !e);
  };

  const handleScroll = () => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header bg-[#ECF8EE]   ${navBackground ? "scrolled" : ""}`}
      >
        <div className="top container relative mx-auto hidden md:flex items-center justify-between z-10 py-10">
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
            <button className="px-12 py-5 text-[17px] rounded-[20px] font-bold font-600 text-[#222]">
              Sign in
            </button>
            <button className=" text-[17px] text-white md:bg-green2 btngrad  bg-green1 px-12 py-5 rounded-[20px] font-bold">
              Sign up
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-nav bg-[#ECF8EE] ${navBackground ? "scrolled" : ""}`}
      >
        <nav className="nav container px-10 flex mx-auto justify-between items-center">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="mobile-nav-icon">
            <nav className="nav container  mx-auto  py-10 flex justify-between items-center">
              <div className="nav-cta flex items-center gap-10 md:flex">
                <button onClick={handleClick} className="text-green2">
                  {isOpen ? (
                    <FaTimes size={24} />
                  ) : (
                    <img src={MenuIcon} alt="menu-icon" />
                  )}
                </button>
              </div>
            </nav>
          </div>
        </nav>

        {/* <img src={MenuIcon} alt="menu-icon" /> */}

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
            <button className="md:bg-green2  bg-green1 px-10 py-4 rounded-xl">
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
