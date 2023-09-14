import bag from "../assets/icons/bag.svg";
import group from "../assets/icons/user.svg";
import info from "../assets/icons/info.svg";

import hand from "../assets/icons/group-3.svg";
import like from "../assets/icons/like.svg";
import "../../../../App.css";
import { useState } from "react";
import SingleFounder from "./SingleFounder";
import MultiFounders from "./MultiFounders";
const Project = ({ image, name, creator }) => {
  const [opendetailssinglefounder, setopendetailssinglefounder] =
    useState(false);
  const [opendetailsmultiplefounders, setopendetailsmultiplefounders] =
    useState(false);
  return (
    <div className=" w-full  font-lato flex flex-col  shadow-[3px_15px_50px_0px_rgba(5,78,18,0.10)] hover:shadow-sm cursor-pointer ease-out hover:duration-200 min-h-[34rem] sm:min-h-[26rem] relative md:min-h-[36rem] lg:min-h-[30rem] xl:min-h-[52rem] rounded-[30px] pb-8">
      <img src={image} alt="" className="object-cover w-full " />
      <div className="px-4 sm:px-4 lg:px-4 w-full text-lg lg:text-xs flex-1 rounded-b-[30px] flex flex-col justify-evenly xl:px-8">
        <div className="flex flex-col text-base sm:text-2xl lg:text-base gap-y-3 sm:gap-y-6  lg:gap-y-3 xl:gap-y-8 text-[#333]">
          <div className="flex gap-x-3 text-xl sm:text-3xl mt-4  lg:text-base">
            <img
              src={bag}
              alt=""
              className="object-contain sm:w-[1.9rem] lg:w-[1rem] xl:w-[20px] xl:h-[20.849px]"
            />
            <p className="font-bold text-xl xl:text-[24px]">{name}</p>
          </div>

          {creator !== "Multiple owners" ? (
            <div className="flex gap-x-3 items-center">
              <div
                onMouseEnter={() => setopendetailssinglefounder(true)}
                onMouseLeave={() => setopendetailssinglefounder(false)}
              >
                <SingleFounder
                  creator={creator}
                  opendetails={opendetailssinglefounder}
                />
                <img
                  className="w-[20px] h-[20px] rounded-full border-[2px]  border-[#fff] shadow-[0px_4px_4px_0px_rgba(59,_128,_4,_0.20)]"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt="Rounded avatar"
                />
              </div>
              <p className="text-[#999] font-semibold sm:text-base lg:text-base xl:text-[16px]">
                {creator}
              </p>
            </div>
          ) : (
            <div className="flex gap-x-3 items-center">
              <div
                className="s"
                onMouseEnter={() => setopendetailsmultiplefounders(true)}
                onMouseLeave={() => setopendetailsmultiplefounders(false)}
              >
                <MultiFounders
                  opendetailsmultiplefounders={opendetailsmultiplefounders}
                />
                <div className="flex  -space-x-4 shadow-[0px_4px_4px_0px_rgba(59,_128,_4,_0.20)]  rounded-full bg-transparent">
                  <img
                    class="w-[20px] h-[20px] border-[2px]  border-[#fff] border-white  rounded-full "
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="w-[20px] h-[20px] border-[2px]  border-[#fff] rounded-full"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="w-[20px] h-[20px] border-[2px]  border-[#fff] rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-[#999] font-semibold sm:text-base lg:text-base xl:text-[16px]">
                {creator}
              </p>
            </div>
          )}
          <div className="flex  lg:text-xs gap-x-3 items-start">
            <img
              src={info}
              alt=""
              className="object-contain  sm:w-[1.9rem]  w-[1rem] lg:w-[1rem] xl:w-[20px] xl:h-[20px]"
            />
            <p className="text-[#999999] sm:text-base lg:text-sm font-normal  xl:leading-[1.4] xl:text-[15px]  ">
              Lorem ipsum dolor sit amet consectetur. Justo feugiat pharetra eu
              eu enim...
            </p>
          </div>
        </div>
        <div className="flex text-[#999999] w-full items-center  justify-between md:mt-2">
          <div className="flex items-center gap-x-1">
            <span className=" text-sm">
              <img
                src={like}
                alt=""
                className="object-contain w-[1rem] sm:w-[1.9rem] lg:w-full  xl:w-[20px] xl:h-[20px]"
              />
            </span>
            <p className=" font-bold text-[14px]">19+</p>
          </div>
          <div className="flex items-center gap-x-1">
            <img
              src={hand}
              alt=""
              className="object-contain  sm:w-[2.2rem] lg:w-full  xl:w-[20px] xl:h-[20px]"
            />
            <p className="font-bold text-[14px]">5</p>
          </div>
          <button className=" xl:px-[25px] xl:py-[10px] font-bold border-[1px] border-solid text-[14px] border-[#999] rounded-[15px] hover:text-white  view">
            View project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
