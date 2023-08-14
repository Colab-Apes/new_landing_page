import React from "react";
import logo from "../assets/newimages/logo.pooling";
const LandPage = () => {
  return (
    <div>
      <nav className="flex items-center justify-between container">
        <img src={logo} alt="" />
        <div className="flex items-center">
          <p>Projects</p>
          <p>Learning pool</p>
          <p>Create project</p>
        </div>
        <div className="flex gap-10">
          <button className="px-12 py-5 text-[17px] rounded-[20px] font-bold font-600 text-[#222]">
            Sign in
          </button>
          <button className=" text-[17px] text-white md:bg-green2 btngrad  bg-green1 px-12 py-5 rounded-[20px] font-bold">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LandPage;
