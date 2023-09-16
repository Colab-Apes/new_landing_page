import React from "react";
import img1 from "./assets/circle.svg";
import img2 from "./assets/circle2.svg";
import img3 from "./assets/circle3.svg";
import "../../../App.css";
const CreateProject = () => {
  return (
    <div className="font-lato">
      <div className="w-full mt-8 lg:mt-0 shadow-[-5px_15px_50px_0px_rgba(5,_78,_18,_0.05)] h-[32rem] bg-white rounded-[30px] px-10">
        <p className="text-[#333] xl:text-[40px] font-bold">
          Create new project
        </p>
        <div className="flex items-center">
          <div className="relative">
            <img src={img1} alt="" className="" />
            <p className="text-[36px] text-[#054E12] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
              1
            </p>
          </div>
          <div className="w-[15rem] bg-[#054E12] h-[2px]"></div>
          <div className=" relative w-fit">
            <img src={img2} alt="" className="" />
            <p className="text-[36px] text-[#999] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
              2
            </p>
          </div>
          <div className="w-[15rem] bg-[#999] h-[2px]"></div>
          <div className="relative ">
            <img src={img2} alt="" className="" />
            <p className="text-[36px] text-[#999] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
              3
            </p>
          </div>
          <div className="w-[15rem] bg-[#999] h-[2px]"></div>
          <div className="relative ">
            <img src={img2} alt="" className="" />
            <p className="text-[36px] text-[#999] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
              4
            </p>
          </div>
          <div className="w-[15rem] bg-[#999] h-[2px]"></div>
          <div className="relative ">
            <img src={img2} alt="" className="" />
            <p className="text-[30px] text-[#999] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
              5
            </p>
          </div>
          <div className="w-[15rem] bg-[#999] h-[2px]"></div>
          <div className="relative ">
            <img src={img2} alt="" className="" />
            <p className="text-[36px] text-[#999] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
              6
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center  mt-10 mb-10"></div>
    </div>
  );
};

export default CreateProject;
