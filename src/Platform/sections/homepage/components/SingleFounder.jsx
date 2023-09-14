import React from "react";
import location from "../assets/icons/location.svg";
import award from "../assets/icons/award.svg";
import following from "../assets/icons/following.svg";
import polygon from "../assets/icons/polygon.svg";
const SingleFounder = ({ creator, opendetails }) => {
  return (
    <div
      className={
        opendetails
          ? "absolute top-56 rounded-[20px] right-5 shadow-[15px_15px_50px_0px_rgba(5,_78,_18,_0.10)] px-10 pb-8 min-h-[280px] w-[242px] z-10 bg-[#fff] flex flex-col gap-y-2"
          : "hidden"
      }
    >
      <img
        className="w-[80px] h-[80px] -mt-[3rem] mx-auto rounded-full border  border-[#fff] shadow-[0px_4px_4px_0px_rgba(59,_128,_4,_0.20)]"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        alt="Rounded avatar"
      />
      <p className=" text-[#054E12] text-[20px] font-bold text-center mt-5">
        {creator}
      </p>
      <p className="text-center text-[12px] font-bold text-[#555]">
        @templetonpeck
      </p>
      <div className="flex text-[12px] justify-center gap-x-1">
        <img src={location} alt="" className="w-[12px] h-[12px]" />
        <p className="text-[12px] font-bold text-[#555]">Texas, USA</p>
      </div>
      <div className="bg-[#4EAF00]/[0.1] rounded-[8px] flex justify-center px-[10px] gap-x-2 py-[5px] items-center w-fit mx-auto ">
        <img src={award} alt="" />
        <p className="text-[#4EAF00] font-[700] text-[10px]">Founder</p>
      </div>
      <div className="flex justify-around items-center mt-10">
        <p className="flex flex-col">
          <span className=" text-[#333] text-[15px] font-bold">5</span>
          <span className="text-[#555] text-[10px] font-medium">Projects</span>
        </p>
        <span className="h-[5px] w-[5px] rounded-full bg-[#999]"></span>

        <p className="flex flex-col">
          <span className=" text-[#333] text-[15px] font-bold">1.3K</span>
          <span className="text-[#555] text-[10px] font-medium">Followers</span>
        </p>
        <span className="h-[5px] w-[5px] rounded-full bg-[#999]"></span>
        <p className="flex flex-col">
          <span className=" text-[#333] text-[15px] font-bold">2.5K</span>
          <span className="text-[#555] text-[10px] font-medium">Following</span>
        </p>
      </div>
      <button className="w-full rounded-[15px] flex items-center justify-center gap-x-2 shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10);] bg-[#999] text-white mt-4  font-bold text-[14px] py-[10px] ">
        <img src={following} alt="" />
        Following
      </button>
      {/* <div className=" w-0 h-0 border-t-transparent border-b-transparent border-t-[25px] border-solid border-b-[25px] border-r-[50px] ">
        {" "}
      </div> */}
    </div>
  );
};

export default SingleFounder;
// height: 0;
// 	border-top: 25px solid transparent;
// 	border-right: 50px solid #555;
// 	border-bottom: 25px solid transparent;
