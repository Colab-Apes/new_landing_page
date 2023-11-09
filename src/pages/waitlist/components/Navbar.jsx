import { Link } from "react-router-dom";

import logo from "../../../assets/newimages/logo.webp";



const NavBar = () => {

  return (
    <nav className="inline-flex justify-between items-center min-h-[10vh] sm:pt-8 pt-3 lg:py-5 lg:px-[3.2rem] ">
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          alt=""
          className="object-contain w-[10rem] md:w-[15rem] lg:w-[19rem]"
        />
      </Link>
    </nav>
  );
};

export default NavBar;