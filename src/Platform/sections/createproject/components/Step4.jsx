import { IoMdCheckmark } from "react-icons/io";

import img1 from "../assets/circle.svg";
import img2 from "../assets/circle2.svg";
import img3 from "../assets/circle3.svg";

import "../../../../App.css";


const Step4 = ({ openstep4, setopenstep4, setopenstep5, setopenstep3 }) => {

  return (
    <div className={openstep4 ? "" : "hidden"}>


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
          <img src={img3} alt="" className="w-full object-scale-down" />
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
          <img src={img1} alt="" className="" />
          <p className="text-[36px] text-[#054E12] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
            4
          </p>
          <p className="absolute -bottom-14  text-[#054E12] text-[16px] font-bold ">
            Investments
          </p>
        </div>

        <div className="w-[14rem] bg-[#999] h-[2px]"></div>

        <div className="relative flex flex-col  ">
          <img src={img2} alt="" className="" />
          <p className="text-[30px] text-[#999] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
            5
          </p>
          <p className="absolute -bottom-14 text-[#555] text-[16px] font-normal ">
            Documents
          </p>
        </div>

        <div className="w-[14rem] bg-[#999] h-[2px]"></div>

        <div className="relative flex flex-col  ">
          <img src={img2} alt="" className="" />
          <p className="text-[36px] text-[#999] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
            6
          </p>
          <p className="absolute -bottom-14 text-[#555] text-[16px] font-normal ">
            Finish
          </p>
        </div>

      </div>


      <div className=" grid lg:grid-cols-2 mt-48 gap-x-20 gap-y-10">

        <div className="flex flex-col w-full text-[#999] gap-y-4">
          <label htmlFor="" className="text-[#999] text-[16px] font-bold">
            Will  you post any initial investments?
          </label>
          <select
            name=""
            id=""
            className="focus:outline-none text-[#333] bg-[#fff]/[20%] py-4 px-5 border-2 rounded-[10px] text-[16px] font-bold  border-[#999]/[0.5]"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col w-full text-[#999] gap-y-4 ">
          <label htmlFor="" className="text-[#999] text-[16px] font-bold">
            Are you looking to raise funding during development?
          </label>
          <select
            name=""
            id=""
            className="focus:outline-none text-[#999] bg-[#fff]/[20%] py-4 px-5 border-2 rounded-[10px] text-[16px] font-bold border-[#999]/[0.5]"
          >
            <option value="volvo">Choose one</option>
            <option value="saab">Saab</option>
          </select>
          <div className="bg-[#F8F8F8] gap-[20px] flex flex-col  rounded-[10px] p-[20px]">
            <p className="text-[#555]  text-[16px] font-bold">How much?</p>
            <input
              type="email"
              // onChange={(e) => setemail(e.target.value)}
              // value={email}
              className="text-[16px] bg-transparent  w-full md:w-[40rem] lg:w-full px-5 outline-none border-2 rounded-[10px] border-[#999]/[0.5] placeholder:font-bold placeholder:text-[#333] h-[50px] "
              placeholder="$ 10,000"
            />
          </div>
        </div>

        <div className="w-full mt-20 flex justify-between items-center col-span-2">
          <button
            onClick={() => {
              setopenstep4(false);
              setopenstep3(true);
              scrollTo(0, 0);
            }}
            className="p-5 rounded-[30px] h-[80px] text-[20px] font-bold text-[#054E12] w-[206px] shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)]"
          >
            Back
          </button>
          <button
            onClick={() => {
              setopenstep4(false);
              setopenstep5(true);
              scrollTo(0, 0);
            }}
            className="rounded-[30px] text-[#fff] font-bold text-[20px] btngrad h-[80px] w-[206px] bg-[5px_10px_30px_0px_rgba(59,_128,_4,_0,_10)]"
          >
            {" "}
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
