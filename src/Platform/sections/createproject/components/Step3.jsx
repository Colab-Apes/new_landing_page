import React, { useRef } from "react";
import img1 from "../assets/circle.svg";
import img2 from "../assets/circle2.svg";
import img3 from "../assets/circle3.svg";
import dateicon from "../assets/dateicon.svg";
import editicon from "../assets/editicon.svg";
import remove from "../assets/remove.svg";
import "../../../../App.css";
import { IoMdCheckmark } from "react-icons/io";
const Step3 = ({ openstep3, setopenstep3, setopenstep4, setopenstep2 }) => {
  const ref = useRef();
  return (
    <div className={openstep3 ? "" : "hidden"}>
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
          <img src={img3} alt="" className="w-full object-scale-down" />
          {/* <GrCheckmark color="white" className="text-[#fff] text-[36px]" /> */}
          <IoMdCheckmark className="text-[#fff] text-[36px] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold" />
          <p className="absolute gap-x-2 flex -bottom-10 -left-10  text-[#054E12] text-[16px] font-bold ">
            <span>Face</span> <span>of</span>
            <span>Project</span>
          </p>
        </div>
        <div className="w-[14rem] bg-[#054E12] h-[2px]"></div>
        <div className="relative flex flex-col ">
          <img src={img1} alt="" className="" />
          <p className="text-[36px] text-[#054E12] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
            3
          </p>
          <p className="absolute -bottom-10    text-[#054E12] text-[16px] font-bold">
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
      <div className=" grid lg:grid-cols-2 mt-32 gap-x-20 gap-y-32">
        <div className="w-full flex flex-col gap-y-4 ">
          <label className="text-[#999] text-[16px] font-bold" htmlFor="">
            Who are your targeted audience?
          </label>
          <div className=" bg-[#fff]/[20%]   border-2 rounded-[10px] text-[16px] font-bold h-[10rem] px-4 flex relative border-[#999]/[0.5]  flex-col w-full  ">
            <input
              name=""
              placeholder="Type name"
              id=""
              className="focus:outline-none absolute bottom-0 pl-4 text-[#999] bg-[#fff] w-full py-1 left-0 rounded-b-[10px]  text-[12px] font-bold  "
            />

            <div className="flex flex-wrap mt-3 gap-5 overflow-y-auto">
              <div className="bg-[#F8F8F8] rounded-[5px] flex items-center  py-2 gap-10 px-4">
                <span className="text-[16px] font-bold">John Doe</span>
                <img src={remove} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-full text-[#999] gap-y-4">
          <label className="text-[#999] text-[16px] font-bold" htmlFor="">
            How will this project solve problem?
          </label>
          <input
            name=""
            placeholder="Explain...."
            id=""
            className="focus:outline-none pl-2 text-[#999] bg-[#fff]/[20%] py-4   border-2 rounded-[10px] text-[16px] font-bold  border-[#999]/[0.5]"
          />
          <span className="float-right text-right text-[14px] text-[#3B8004]">
            500 words maximum
          </span>
        </div>
        <div className="flex flex-col  w-full text-[#999] gap-y-4">
          <div className="flex items-center justify-between ">
            <label className="text-[#999] text-[16px] font-bold" htmlFor="">
              Milestone and timeline
            </label>
            <span className=" text-[#3B8004] text-[14px]">
              e.g., user experience research
            </span>
          </div>
          <input
            name=""
            placeholder="Type milestone..."
            id=""
            className="focus:outline-none pl-2 text-[#999] bg-[#fff]/[20%] py-4   border-2 rounded-[10px] text-[16px] font-bold  border-[#999]/[0.5]"
          />
          <span className="float-right text-right text-[14px] text-[#3B8004]">
            500 words maximum
          </span>
          <div className="mt-5 flex flex-col gap-y-[20px] w-full px-[10px] py-[20px] rounded-[10px] bg-[#F8F8F8]">
            <p className="text-[#555] text-[16px] font-bold">Wireframing</p>
            <div className="flex justify-between">
              <p className="flex text-[16px] font-bold gap-x-1">
                <img src={dateicon} alt="" />
                <span className="text-[#4EAF00]">Start: </span>
                <span className="text-[#999]">MM/DD/YY</span>
              </p>
              <p className="flex text-[16px] font-bold gap-x-1">
                <img src={dateicon} alt="" />
                <span className="text-[#4EAF00]">Deadline: </span>
                <span className="text-[#999] font-bold"> MM/DD/YY</span>
              </p>
            </div>
            <div className="h-[1px] bg-[#999] "></div>
            <div className="flex justify-between items-center text-[16px]">
              <p className="text-[#555] text-[16px]  font-bold">
                Brainstorming:
              </p>
              <p className="flex gap-x-1">
                <span className="text-[#555] font-bold ">
                  Aug 24, 2024 - Sep 2, 2024
                </span>
                <img src={editicon} alt="" />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-full text-[#999] gap-y-4">
          <label className="text-[#999] text-[16px] font-bold" htmlFor="">
            How will you make money?
          </label>

          <input
            name=""
            placeholder="Explain..."
            id=""
            className="focus:outline-none pl-2 text-[#999] bg-[#fff]/[20%] py-4   border-2 rounded-[10px] text-[16px] font-bold  border-[#999]/[0.5]"
          />
          <span className="float-right text-right text-[14px] text-[#3B8004]">
            500 words maximum
          </span>
        </div>
        <div className="flex flex-col  w-full text-[#999] gap-y-4">
          <label
            htmlFor="dateInput"
            className="text-[#999] text-[16px] font-bold"
          >
            How will this project solve problem?
          </label>
          <input
            name=""
            type="date"
            placeholder="MM/DD/YYYY"
            id="dateInput"
            ref={ref}
            onchange={(e) => console.log(e.target.value)}
            onfocus={() => (ref.current.type = "date")}
            onblur={() => (ref.current.type = "text")}
            className="focus:outline-none pl-2 text-[#999] bg-[#fff]/[20%] py-4   border-2 rounded-[10px] text-[16px] font-bold  border-[#999]/[0.5]"
          />
        </div>
        <div className="flex flex-col  w-full text-[#999] gap-y-4">
          <label className="text-[#999] text-[16px] font-bold" htmlFor="">
            How will this project solve problem?
          </label>
          <input
            name=""
            type="date"
            placeholder="MM/DD/YYYY"
            id=""
            className="focus:outline-none pl-2 text-[#999] bg-[#fff]/[20%] py-4   border-2 w-full rounded-[10px] text-[16px] font-bold  border-[#999]/[0.5]"
          />
        </div>
        <div className="w-full mt-20 flex justify-between items-center col-span-2">
          <button
            onClick={() => {
              setopenstep3(false);
              setopenstep2(true);
              scrollTo(0, 0);
            }}
            className="p-5 rounded-[30px] h-[80px] text-[20px] font-bold text-[#054E12] w-[206px] shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setopenstep3(false);
              setopenstep4(true);
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

export default Step3;
