import { Link } from "react-router-dom";

import img1 from "../assets/circle.svg";
import img2 from "../assets/circle2.svg";
import img3 from "../assets/circle3.svg";
import cancel from "../assets/remove.svg";
import add from "../assets/add.svg";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

import "../../../../App.css";
import useStep1 from "./hooks/useStep1";
import ReusableDropdown from "../../../../components/ResuasbleDropDown/ResusableDropDown";
import { useRef, useState } from "react";

const Step1 = ({ setopenstep1, openstep1, setopenstep2 }) => {
  const { formik1 } = useStep1();

  //todo: move to a data file
  const options = [
    { value: "product", label: "Product" },
    { value: "service", label: "Service" },
    { value: "other", label: "Other" },
  ];
  const allRoles = [
    "Brand designer",
    "Digital marketer",
    "Front end developer",
    "Back end developer",
    "Data analyst",
    "Project manager",
    "Business analyst",
  ];

  const [roles, setRoles] = useState([]);

  //logic
  const handleSelect = (selectedOption) => {
    console.log(selectedOption);
  };

  const handleAddRole = (role) => {
    setRoles((prev) => [...prev, role]);
  };

  const handleRemoveRole = (index) => {
    setRoles((prevRoles) => {
      const updatedRoles = [...prevRoles];
      updatedRoles.splice(index, 1);
      return updatedRoles;
    });
  };

  const divRef = useRef(null);

  const scrollLeft = () => {
    if (divRef.current) {
      divRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (divRef.current) {
      divRef.current.scrollLeft += 100;
    }
  };
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

      <div className="flex justify-between  mt-48  gap-x-[85px]">
        <div className="w-1/2">
          <div className="flex flex-col w-full text-[#999] gap-y-5 mb-20">
            <label htmlFor="" className="text-[#999] text-[16px] font-bold">
              Are you looking to create a product or service?
            </label>
            <ReusableDropdown
              name=""
              id="audience"
              options={options}
              onSelect={handleSelect}
              defaultText={"Select one..."}
            />
            {/* {formik1.errors.audience && formik1.touched.audience ? (
            <p className="text-red-500 text-xl">{formik1.errors.audience}</p>
          ) : (
            ""
          )} */}
          </div>

          <div className="flex flex-col w-full text-[#999] gap-y-5 ">
            <label htmlFor="" className="text-[#999] text-[16px] font-bold">
              Product / Service type?
            </label>
            <ReusableDropdown
              name=""
              id="audience"
              options={options}
              onSelect={handleSelect}
              defaultText={"Select one..."}
            />
            {formik1.errors.audience && formik1.touched.audience ? (
              <p className="text-red-500 text-xl">{formik1.errors.audience}</p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex flex-col w-full text-[#999] gap-y-5 mb-[33px]">
            <label htmlFor="" className="text-[#999] text-[16px] font-bold">
              Which roles would your project require?
            </label>
            <div className="flex flex-col">
              <p className="font-bold text-[#333] text-[16px] pb-[14px]">
                Recommended roles
              </p>
              <div className="flex flex-nowrap gap-x-3 overflow-auto remove-scrollbar">
                {roles.map((item, index) => (
                  <div
                    className="px-5 py-12 bg-[#4EAF00] flex items-center justify-between rounded-[20px] flex-none"
                    style={{ width: "200px" }}
                    key={index}
                  >
                    <p className="text-[#fff] text-[16px]">{item}</p>
                    <img
                      src={cancel}
                      alt=""
                      className="pointer"
                      width={24}
                      onClick={() => {
                        handleRemoveRole(index);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-y-5 text-[#999]">
            <label htmlFor="" className="text-[#333] text-[16px] font-bold">
              All roles
            </label>
            <div className="relative">
              <img
                src={arrowLeft}
                alt=""
                className="absolute left-[-30px] top-0 bottom-0 my-auto pointer"
                onClick={scrollLeft}
              />
              <div className="flex flex-nowrap gap-x-3 overflow-auto  remove-scrollbar " ref={divRef}>
                {allRoles.map((item, index) => (
                  <div
                    className="px-6 py-12 bg-[#F8F8F8] flex items-center justify-between rounded-[20px] flex-none w-[205px]"
                    key={index}
                  >
                    <p className="text-[#333333] text-[16px] p-0 m-0 font-bold">
                      {item}
                    </p>
                    <img
                      src={add}
                      alt=""
                      className="pointer"
                      width={24}
                      onClick={() => {
                        handleAddRole(item);
                        console.log(roles);
                      }}
                    />
                  </div>
                ))}
              </div>
              <img
                src={arrowRight}
                alt=""
                className="absolute right-[-30px] top-0 bottom-0 my-auto pointer"
                onClick={scrollRight}
              />
            </div>
          </div>
        </div>
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
      {/* </div> */}
    </div>
  );
};

export default Step1;
