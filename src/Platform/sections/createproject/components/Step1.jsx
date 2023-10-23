import { Link } from "react-router-dom";

import img1 from "../assets/circle.svg";
import img2 from "../assets/circle2.svg";
import img3 from "../assets/circle3.svg";

import "../../../../App.css";
import useStep1 from "./hooks/useStep1";

const Step1 = ({ setopenstep1, openstep1, setopenstep2 }) => {
  const { formik1 } = useStep1();
  return (
    <div className={openstep1 ? "" : "hidden"}>
      <div className={"flex items-center mt-10 w-full"}>
        <div className="relative flex flex-col  ">
          <img src={img1} alt="" className="w-full object-scale-down" />
          <p className="text-[36px] text-[#054E12] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
            1
          </p>
          <p className="absolute gap-x-1 flex -bottom-14 -left-10 text-[#054E12] text-[16px] font-bold ">
            Project <span>Information</span>
          </p>
        </div>{" "}
        <div className="w-[14rem] bg-[#054E12] h-[2px]"></div>
        <div className="relative flex flex-col  ">
          <img src={img2} alt="" className="" />
          <p className="text-[36px] text-[#999] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
            2
          </p>
          <p className="absolute gap-x-2 flex -bottom-14 -left-10  text-[#555] text-[16px] font-normal ">
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
          <p className="absolute -bottom-14   text-[#555] text-[16px] font-normal ">
            Analysis
          </p>
        </div>
        <div className="w-[14rem] bg-[#999] h-[2px]"></div>
        <div className="relative flex flex-col ">
          <img src={img2} alt="" className="" />
          <p className="text-[36px] text-[#999] absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  top-[50%] font-bold">
            4
          </p>
          <p className="absolute -bottom-14  text-[#555] text-[16px] font-normal ">
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

      <div className=" grid lg:grid-cols-2 mt-48 gap-x-20 gap-y-20">
        <div className="flex flex-col w-full text-[#999] gap-y-4">
          <label htmlFor="" className="text-[#999] text-[16px] font-bold">
            Are you looking to create a product or service?
          </label>
          <select
            name=""
            id="audience"
            className="focus:outline-none text-[#999] bg-[#fff]/[20%] py-4 px-5 border-2 rounded-[10px] text-[16px] font-bold  border-[#999]/[0.5]"
            onChange={formik1.handleChange}
            value={formik1.values.audience}
            onBlur={formik1.handleBlur}
          >
            <option value="volvo">Choose one</option>
            <option value="saab">Saab</option>
          </select>
          {formik1.errors.audience && formik1.touched.audience ? (
            <p className="text-red-500 text-xl">{formik1.errors.audience}</p>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col w-full text-[#999] gap-y-4 ">
          <label htmlFor="" className="text-[#999] text-[16px] font-bold">
            Which roles would your project require?
          </label>
          <div className="flex flex-col">
            <p className="ss">Recommended roles</p>
            <div className="flex gap-x-20">
              <div className="p-10 bg-[#4EAF00] flex items-center rounded-xl">
                <p className="text-[#fff]">Brand designer</p>
              </div>
              <div className="p-10 bg-[#4EAF00] flex items-center rounded-xl">
                <p className="text-[#fff]">Brand designer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full text-[#999] gap-y-4 ">
          <label htmlFor="" className="text-[#999] text-[16px] font-bold">
            Product / Service type?
          </label>
          <select
            name=""
            id=""
            className="focus:outline-none text-[#999] bg-[#fff]/[20%] py-4 px-5  border-2 rounded-[10px] text-[16px] font-bold border-[#999]/[0.5]"
            onChange={formik1.handleChange}
            value={formik1.values.audience}
            onBlur={formik1.handleBlur}
          >
            <option value="volvo">Choose one</option>
            <option value="saab">Saab</option>
          </select>
          {formik1.errors.audience && formik1.touched.audience ? (
            <p className="text-red-500 text-xl">{formik1.errors.audience}</p>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col w-full gap-y-4 text-[#999]">
          <label htmlFor="" className="text-[#999] text-[16px] font-bold">
            Which roles would your project require?
          </label>
          <div className="flex items-center justify-between bg-[#ddd]/[0.2] rounded-[10px] h-[50px] px-8">
            <p className="text-[#333] text-[16px] font-bold">Typist</p>
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="26"
                viewBox="0 0 23 26"
                fill="none"
              >
                <path
                  d="M20.054 9.88281C20.054 20.295 21.5527 25.0015 11.4719 25.0015C1.3899 25.0015 2.91957 20.295 2.91957 9.88281"
                  stroke="#FF7B7B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.9703 5.89062H1"
                  stroke="#FF7B7B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.932 5.88953C15.932 5.88953 16.6183 1 11.484 1C6.35083 1 7.03714 5.88953 7.03714 5.88953"
                  stroke="#FF7B7B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="border-2 border-solid mt-10 origin-left  duration-500 relative lg:w-full border-[#999]/[50%] bg-[#fff]/[20%]  h-[60px] flex  0 items-center  rounded-[10px] lg:rounded-[10px] w-full">
            <div className="input h-full w-full pr-32 pl-2">
              <input
                type="email"
                // onChange={(e) => setemail(e.target.value)}
                // value={email}
                className="text-[16px] bg-transparent  w-full md:w-[40rem] lg:w-full px-5 outline-none border-none bg-none placeholder:font-bold placeholder:text-[#999]   h-full"
                placeholder="Type role..."
              />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                submitEmail();
                console.log("ecco");
              }}
              className=" absolute shadow-[15px_15px_50px_0px_rgba(0,_0,_0,_0.05)]  px-12 btngrad py-6 lg:py-[10px] lg:px-[20px] lg:text-[1.4rem] rounded-[8px] lg:rounded-[15px] text-3xl text-white right-2 font-bold"
            >
              Add
            </button>
          </div>{" "}
        </div>

        <div className="w-full mt-32 flex justify-between items-center col-span-2">
          <Link
            to="/home"
            className="flex justify-center items-center rounded-[30px] h-[80px] text-[20px] font-bold text-[#054E12] w-[206px] shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)]"
          >
            Cancel
          </Link>
          <button
            onClick={() => {
              setopenstep1(false);
              setopenstep2(true);
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

export default Step1;
