import React from "react";
import img1 from "./assets/circle.svg";
import img2 from "./assets/circle2.svg";
import img3 from "./assets/circle3.svg";
import "../../../App.css";
const CreateProject = () => {
  return (
    <div className="font-lato">
      <div className="w-full mt-8 lg:mt-0 shadow-[-5px_15px_50px_0px_rgba(5,_78,_18,_0.05)] h-[32rem] bg-white rounded-[30px] px-20">
        <p className="text-[#333] xl:text-[40px] font-bold">
          Create new project
        </p>
        <div className="flex items-center mt-10 w-full">
          <div className="relative flex flex-col  ">
            <img src={img1} alt="" className="w-full object-scale-down" />
            <p className="text-[36px] text-[#054E12] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
              1
            </p>
            <p className="absolute gap-x-1 flex -bottom-10 -left-10 text-[#054E12] text-[16px] font-bold ">
              Project <span>Information</span>
            </p>
          </div>{" "}
          <div className="w-[14rem] bg-[#555] h-[2px]"></div>
          <div className="relative flex flex-col  ">
            <img src={img2} alt="" className="" />
            <p className="text-[36px] text-[#999] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
              2
            </p>
            <p className="absolute gap-x-2 flex -bottom-10 -left-10  text-[#555] text-[16px] font-normal ">
              <span>Face</span> <span>of</span>
              <span>Project</span>
            </p>
          </div>
          <div className="w-[14rem] bg-[#999] h-[2px]"></div>
          <div className="relative flex flex-col ">
            <img src={img2} alt="" className="" />
            <p className="text-[36px] text-[#999] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
              3
            </p>
            <p className="absolute -bottom-10   text-[#555] text-[16px] font-normal ">
              Analysis
            </p>
          </div>
          <div className="w-[14rem] bg-[#999] h-[2px]"></div>
          <div className="relative flex flex-col ">
            <img src={img2} alt="" className="" />
            <p className="text-[36px] text-[#999] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
              4
            </p>
            <p className="absolute -bottom-10  text-[#555] text-[16px] font-normal ">
              Investments
            </p>
          </div>
          <div className="w-[14rem] bg-[#999] h-[2px]"></div>
          <div className="relative flex flex-col  ">
            <img src={img2} alt="" className="" />
            <p className="text-[30px] text-[#999] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
              5
            </p>
            <p className="absolute -bottom-10 text-[#555] text-[16px] font-normal ">
              Documents
            </p>
          </div>
          <div className="w-[14rem] bg-[#999] h-[2px]"></div>
          <div className="relative flex flex-col  ">
            <img src={img2} alt="" className="" />
            <p className="text-[36px] text-[#999] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
              6
            </p>
            <p className="absolute -bottom-10 text-[#555] text-[16px] font-normal ">
              Finish
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center  mt-10 mb-10"></div>
    </div>
  );
};

export default CreateProject;
