import React from "react";
import img1 from "../assets/circle.svg";
import img2 from "../assets/circle2.svg";
import img3 from "../assets/circle3.svg";
import "../../../../App.css";
import { IoMdCheckmark } from "react-icons/io";
const Step2 = ({ setopenstep1, setopenstep2, openstep2, setopenstep3 }) => {
  return (
    <div className={openstep2 ? "" : "hidden"}>
      <div className={"flex items-center mt-10 w-full"}>
        <div className="relative flex flex-col  ">
          <img src={img3} alt="" className="w-full object-scale-down" />
          {/* <GrCheckmark color="white" className="text-[#fff] text-[36px]" /> */}
          <IoMdCheckmark className="text-[#fff] text-[36px] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold" />
          <p className="absolute gap-x-1 flex -bottom-10 -left-10 text-[#054E12] text-[16px] font-bold ">
            Project <span>Information</span>
          </p>
        </div>{" "}
        <div className="w-[14rem] bg-[#054E12] h-[2px]"></div>
        <div className="relative flex flex-col  ">
          <img src={img1} alt="" className="" />
          <p className="text-[36px] text-[#054E12] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
            2
          </p>
          <p className="absolute gap-x-2 flex -bottom-10 -left-10  text-[#054E12] text-[16px] font-bold ">
            <span>Face</span> <span>of</span>
            <span>Project</span>
          </p>
        </div>
        <div className="w-[14rem] bg-[#054E12] h-[2px]"></div>
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
      <div className=" grid lg:grid-cols-2 mt-64 gap-x-20 gap-y-20">
        <div className="flex flex-col w-full text-[#999] gap-y-4">
          <label htmlFor="">Give your project a name</label>
          <input
            name=""
            placeholder="Type name"
            id=""
            className="focus:outline-none pl-2 text-[#999] bg-[#fff]/[20%] py-4   border-2 rounded-[10px] text-[16px] font-bold  border-[#999]/[0.5]"
          />
        </div>
        <div className="flex flex-col w-full text-[#999] gap-y-4 ">
          <label htmlFor="">Number of owners</label>
          <select
            name=""
            id=""
            placeholder="Select number of owners"
            className="focus:outline-none text-[#999] bg-[#fff]/[20%] py-4   border-2 rounded-[10px] text-[16px] font-bold px-4  border-[#999]/[0.5]"
          >
            <option value="volvo">Choose One</option>
            <option value="saab">Saab</option>
          </select>
        </div>
        <div className="flex flex-col  w-full text-[#999] gap-y-4">
          <label htmlFor="">Give your project a description</label>
          <input
            name=""
            placeholder="Type name"
            id=""
            className="focus:outline-none pl-2 text-[#999] bg-[#fff]/[20%] py-4   border-2 rounded-[10px] text-[16px] font-bold  border-[#999]/[0.5]"
          />
          <span className="float-right text-right text-[14px] text-[#3B8004]">
            500 words maximum
          </span>
        </div>{" "}
        <div className="flex flex-col w-full text-[#999] gap-y-4">
          <label htmlFor="">Give your project a name</label>
          <textarea
            name=""
            placeholder="Type name"
            id=""
            className="focus:outline-none pl-2 text-[#999] bg-[#fff]/[20%] py-4   border-2 rounded-[10px] text-[16px] font-bold  border-[#999]/[0.5]"
          />
        </div>
        <div className="w-full mt-20 flex justify-between items-center col-span-2">
          <button
            onClick={() => {
              setopenstep2(false);
              setopenstep1(true);
              scrollTo(0, 0);
            }}
            className="p-5 rounded-[30px] h-[80px] text-[20px] font-bold text-[#054E12] w-[206px] shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setopenstep2(false);
              setopenstep3(true);
              scrollTo(0, 0);
            }}
            className="rounded-[30px] text-[#fff] font-bold text-[20px] btngrad h-[80px] w-[206px] bg-[5px_10px_30px_0px_rgba(59,_128,_4,_0,_10)]"
          >
            {" "}
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
