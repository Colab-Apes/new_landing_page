import { IoMdCheckmark } from "react-icons/io";
import { PiShareFat } from "react-icons/pi";

import img1 from "../assets/circle.svg";
import img2 from "../assets/circle2.svg";
import img3 from "../assets/circle3.svg";
import badge from "../assets/founderbadge.svg";

import "../../../../App.css";


const Step6 = ({ openstep6, setopenstep6, setopenstep5 }) => {

  return (
    <div className={openstep6 ? "" : "hidden"}>


      <div className={"flex items-center mt-10 w-full"}>

        <div className="relative flex flex-col  ">
          <img src={img3} alt="" className="w-full object-scale-down" />
          {/* <GrCheckmark color="white" className="text-[#fff] text-[36px]" /> */}
          <IoMdCheckmark className="text-[#fff] text-[36px] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold" />
          <p className="absolute gap-x-1 flex -bottom-14 -left-10 text-[#054E12] text-[16px] font-bold ">
            Project <span>Information</span>
          </p>
        </div>{" "}

        <div className="w-[14rem] bg-[#054E12] h-[2px]"></div>

        <div className="relative flex flex-col  ">
          <img src={img3} alt="" className="w-full obje1ct-scale-down" />
          {/* <GrCheckmark color="white" className="text-[#fff] text-[36px]" /> */}
          <IoMdCheckmark className="text-[#fff] text-[36px] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold" />
          <p className="absolute gap-x-2 flex -bottom-14 -left-10  text-[#054E12] text-[16px] font-bold ">
            <span>Face</span> <span>of</span>
            <span>Project</span>
          </p>
        </div>

        <div className="w-[14rem] bg-[#054E12] h-[2px]"></div>

        <div className="relative flex flex-col ">
          <img src={img3} alt="" className="w-full object-scale-down" />
          {/* <GrCheckmark color="white" className="text-[#fff] text-[36px]" /> */}
          <IoMdCheckmark className="text-[#fff] text-[36px] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold" />
          <p className="absolute -bottom-14   text-[#054E12] text-[16px] font-bold ">
            Analysis
          </p>
        </div>

        <div className="w-[14rem] bg-[#054E12] h-[2px]"></div>

        <div className="relative flex flex-col ">
          <img src={img3} alt="" className="w-full object-scale-down" />
          {/* <GrCheckmark color="white" className="text-[#fff] text-[36px]" /> */}
          <IoMdCheckmark className="text-[#fff] text-[36px] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold" />
          <p className="absolute -bottom-14  text-[#054E12] text-[16px] font-bold ">
            Investments
          </p>
        </div>

        <div className="w-[14rem] bg-[#054E12] h-[2px]"></div>

        <div className="relative flex flex-col  ">
          <img src={img3} alt="" className="w-full object-scale-down" />
          {/* <GrCheckmark color="white" className="text-[#fff] text-[36px]" /> */}
          <IoMdCheckmark className="text-[#fff] text-[36px] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold" />
          <p className="absolute -bottom-14  text-[#054E12] text-[16px] font-bold ">
            Documents
          </p>
        </div>

        <div className="w-[14rem] bg-[#054E12] h-[2px]"></div>

        <div className="relative flex flex-col  ">
          <img src={img1} alt="" className="" />
          <p className="text-[36px] text-[#054E12]  absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
            6
          </p>
          <p className="absolute -bottom-14 text-[#054E12]  text-[16px] font-bold ">
            Finish
          </p>
        </div>

      </div>


      <div className=" flex flex-col mt-48 gap-x-10 gap-y-10">

        <div className="flex">
          <div className="w-full">
            <p className="text-[#4EAF00] text-[16px] font-[900]">
              Congratulations !
            </p>
            <p className="text-[#555] text-[16px] font-bold">
              Here’s your founder’s badge
            </p>
            <img src={badge} alt="" />
          </div>
          <div className="flex flex-col ">
            <div className="p-[20px]  bg-[#F8F8F8] rounded-[10px]">
              <p className="text-[16px] font-[900] text-[#333]">
                Recruiting members
              </p>

              <p className="text-[#555] text-[16px] font-bold mt-8">
                it’s vital to the project's future development to secure a good
                team that works well together. To ensure this, we use the
                existing user base and their profile data to find suitable
                matches in hobbies and interest to find the right team fit.
              </p>

              <p className="text-[#555] text-[16px] font-bold mt-8">
                Remote work also introduces many challenges when it comes to
                consistency and quality of work, we aim to fix this by giving
                equity to the recruited founders. Not only will this give a
                sense of ownership, but can be used to lower costs further to
                build, increasing return on investment.
              </p>
            </div>
            <button className="rounded-[30px] w-[206px] mt-10 h-[80px] border  border-[#999] text-[#fff] flex  justify-center gap-x-2 items-center ">
              <PiShareFat className="text-3xl text-[#333]" />
              <p className="text-[#333] text-[14px] font-bold">Share project</p>
            </button>
          </div>
        </div>

        <div className="w-full mt-20 flex justify-between items-center col-span-2">
          <button
            onClick={() => {
              setopenstep6(false);
              setopenstep5(true);
              scrollTo(0, 0);
            }}
            className="p-5 rounded-[30px] h-[80px] text-[20px] font-bold text-[#054E12] w-[206px] shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)]"
          >
            Back
          </button>
          <button className="rounded-[30px] text-[#fff] font-bold text-[20px] btngrad h-[80px] w-[206px] bg-[5px_10px_30px_0px_rgba(59,_128,_4,_0,_10)]">
            {" "}
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step6;
