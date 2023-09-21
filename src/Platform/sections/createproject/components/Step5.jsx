import React from "react";
import img1 from "../assets/circle.svg";
import img2 from "../assets/circle2.svg";
import img3 from "../assets/circle3.svg";
import upload from "../assets/upload.svg";
import { GoArrowRight } from "react-icons/go";
import "../../../../App.css";
import { IoMdCheckmark } from "react-icons/io";
const Step5 = ({ openstep5, setopenstep5, setopenstep6, setopenstep4 }) => {
  return (
    <div className={openstep5 ? "" : "hidden"}>
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
          <img src={img3} alt="" className="w-full object-scale-down" />
          {/* <GrCheckmark color="white" className="text-[#fff] text-[36px]" /> */}
          <IoMdCheckmark className="text-[#fff] text-[36px] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold" />
          <p className="absolute -bottom-10   text-[#054E12] text-[16px] font-bold ">
            Analysis
          </p>
        </div>
        <div className="w-[14rem] bg-[#054E12] h-[2px]"></div>
        <div className="relative flex flex-col ">
          <img src={img3} alt="" className="w-full object-scale-down" />
          {/* <GrCheckmark color="white" className="text-[#fff] text-[36px]" /> */}
          <IoMdCheckmark className="text-[#fff] text-[36px] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold" />
          <p className="absolute -bottom-10  text-[#054E12] text-[16px] font-bold ">
            Investments
          </p>
        </div>
        <div className="w-[14rem] bg-[#054E12] h-[2px]"></div>
        <div className="relative flex flex-col  ">
          <img src={img1} alt="" className="" />
          <p className="text-[30px]  text-[#054E12] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
            5
          </p>
          <p className="absolute -bottom-10  text-[#054E12] text-[16px] font-bold ">
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
      <div className=" grid lg:grid-cols-2 mt-32 gap-x-20 gap-y-20">
        <div className="py-[20px] leading-[24px] px-[10px] rounded-[10px] bg-[#F8F8F8] text-[#555] text-[16px] font-bold">
          Congratulations on the first step to building your first project with
          Co_lab Apes, just a few more steps, then you would be on the
          recruitment process. The “Co” in Colab_Apes stands for cooperation, we
          believe teamwork is vital to creating anything of significant value -
          all build on the platform, most from a team.
        </div>
        <div className="py-[20px] leading-[24px] px-[10px] rounded-[10px] h-fit bg-[#F8F8F8] text-[#555] text-[16px] font-bold">
          As the first founder of this project, you are the team lead. this is a
          big responsibility, but we got your back and will help you become a
          pro in no time.
        </div>
        <div className="flex flex-col w-full text-[#999] gap-y-4 ">
          <label htmlFor="" className="text-[16px] text-[#999] font-bold">
            When will you start the initial first step of the project?
          </label>
          <select
            name=""
            id=""
            className="focus:outline-none bg-[#fff]/[20%] py-4   border-2 text-[#333] rounded-[10px] text-[16px] font-bold px-4  border-[#999]/[0.5]"
          >
            <option value="volvo">Before recruitment</option>
            <option value="saab">Saab</option>
          </select>
          <div>
            <p className="text-[#4EAF00] font-bold text-[16px] mt-8 ">
              Don’t have business or operaional plan document?
            </p>
            <button className="flex justify-around mt-8 h-[50px] w-[45%] rounded-[10px] border-2 border-[#999]/[0.5] items-center gap-x-2">
              <p className="text-[#333] font-bold text-[16px]">
                Formulate one here
              </p>
              <GoArrowRight className="text-3xl " />
            </button>
          </div>
        </div>
        <div className="gap-y-4 flex flex-col">
          <label className="text-[16px] text-[#999]  font-bold" htmlFor="">
            Upload Business or Operational plan
          </label>
          <div className="border-2  rounded-[10px] border-dashed px-[19px] py-[23px]">
            <div className=" rounded-[10px] py-[33px] w-full gap-[10px] flex flex-col items-center justify-center bg-[#F8F8F8]">
              <img src={upload} alt="" />
              <p className="text-[#555] font-bold text-[16px]">
                Upload .pdf, .jpg, .PNG files
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-20 flex justify-between items-center col-span-2">
          <button
            onClick={() => {
              setopenstep5(false);
              setopenstep4(true);
              scrollTo(0, 0);
            }}
            className="p-5 rounded-[30px] h-[80px] text-[20px] font-bold text-[#054E12] w-[206px] shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setopenstep5(false);
              setopenstep6(true);
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

export default Step5;
