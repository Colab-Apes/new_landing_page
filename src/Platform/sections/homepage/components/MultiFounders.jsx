import React from "react";
import award from "../assets/icons/award.svg";
import location from "../assets/icons/location.svg";
import follower from "../assets/icons/follower.svg";
import threedot from "../assets/icons/threedot.svg";
import following from "../assets/icons/following2.svg";
import "../../../../App.css";

const MultiFounders = ({ opendetailsmultiplefounders }) => {
  return (
    <div
      className={
        opendetailsmultiplefounders
          ? "absolute top-20 rounded-[20px] -left-20 shadow-[15px_15px_50px_0px_rgba(5,_78,_18,_0.10)] px-6 pb-8 min-h-[280px] w-[242px] z-10 bg-[#fff] flex flex-col gap-y-2"
          : "hidden"
      }
    >
      <div className="flex justify-between border-b pb-10 mt-6">
        <p className="text-[16px] font-bold text-[#054E12] ">Multiple owners</p>
        <p className="text-[#999] text-[12px] font-bold">7 owners</p>
      </div>
      <div className="flex flex-col gap-8">
        {/* Founder */}
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4">
            {" "}
            <img
              className="w-[30px] h-[30px] rounded-full border-[2px]  border-[#fff] shadow-[0px_4px_4px_0px_rgba(59,_128,_4,_0.20)]"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt="Rounded avatar"
            />
            <div className="flex flex-col">
              <div className="flex gap-x-3 items-center">
                {" "}
                <p className="text-[#054E12] text-[12px] font-bold">
                  Wright R...
                </p>
                <div className="bg-[#4EAF00]/[0.1] rounded-[8px] flex justify-center px-[5px] gap-x-2 py-[3px] items-center w-fit mx-auto ">
                  <img src={award} alt="" loading="lazy" />
                  <p className="text-[#4EAF00] font-[700] text-[8px]">
                    Founder
                  </p>
                </div>
              </div>
              <div className="flex text-[12px] items-center gap-x-1">
                <img src={location} alt="" className="w-[12px] h-[12px]" />
                <p className="text-[8px] font-bold text-[#555]">
                  Madrid, Spain
                </p>
              </div>
            </div>
          </div>
          <button className="btngrad p-[5px] gap-[10px] rounded-[8px]">
            <img src={follower} alt="" />
          </button>
        </div>
        {/* Founder */}
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4">
            {" "}
            <img
              className="w-[30px] h-[30px] rounded-full border-[2px]  border-[#fff] shadow-[0px_4px_4px_0px_rgba(59,_128,_4,_0.20)]"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt="Rounded avatar"
            />
            <div className="flex flex-col">
              <div className="flex gap-x-3 items-center">
                {" "}
                <p className="text-[#054E12] text-[12px] font-bold">
                  Wright R...
                </p>
                <div className="bg-[#333333]/[0.1] rounded-[8px] flex justify-center px-[5px] gap-x-2 py-[3px] items-center w-fit mx-auto ">
                  <img src={threedot} alt="" loading="lazy" />
                  <p className="text-[#333] font-[700] text-[8px]">Co_lab</p>
                </div>
              </div>
              <div className="flex text-[12px] items-center gap-x-1">
                <img src={location} alt="" className="w-[12px] h-[12px]" />
                <p className="text-[8px] font-bold text-[#555]">
                  Madrid, Spain
                </p>
              </div>
            </div>
          </div>
          <button className="bg-[#999] p-[5px] gap-[10px] rounded-[8px]">
            <img src={following} alt="" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4">
            {" "}
            <img
              className="w-[30px] h-[30px] rounded-full border-[2px]  border-[#fff] shadow-[0px_4px_4px_0px_rgba(59,_128,_4,_0.20)]"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt="Rounded avatar"
            />
            <div className="flex flex-col">
              <div className="flex gap-x-3 items-center">
                {" "}
                <p className="text-[#054E12] text-[12px] font-bold">
                  Wright R...
                </p>
                <div className="bg-[#333333]/[0.1] rounded-[8px] flex justify-center px-[5px] gap-x-2 py-[3px] items-center w-fit mx-auto ">
                  <img src={threedot} alt="" loading="lazy" />
                  <p className="text-[#333] font-[700] text-[8px]">Co_lab</p>
                </div>
              </div>
              <div className="flex text-[12px] items-center gap-x-1">
                <img src={location} alt="" className="w-[12px] h-[12px]" />
                <p className="text-[8px] font-bold text-[#555]">
                  Madrid, Spain
                </p>
              </div>
            </div>
          </div>
          <button className="bg-[#999] p-[5px] gap-[10px] rounded-[8px]">
            <img src={following} alt="" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4">
            {" "}
            <img
              className="w-[30px] h-[30px] rounded-full border-[2px]  border-[#fff] shadow-[0px_4px_4px_0px_rgba(59,_128,_4,_0.20)]"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt="Rounded avatar"
            />
            <div className="flex flex-col">
              <div className="flex gap-x-3 items-center">
                {" "}
                <p className="text-[#054E12] text-[12px] font-bold">
                  Wright R...
                </p>
                <div className="bg-[#333333]/[0.1] rounded-[8px] flex justify-center px-[5px] gap-x-2 py-[3px] items-center w-fit mx-auto ">
                  <img src={threedot} alt="" loading="lazy" />
                  <p className="text-[#333] font-[700] text-[8px]">Co_lab</p>
                </div>
              </div>
              <div className="flex text-[12px] items-center gap-x-1">
                <img src={location} alt="" className="w-[12px] h-[12px]" />
                <p className="text-[8px] font-bold text-[#555]">
                  Madrid, Spain
                </p>
              </div>
            </div>
          </div>
          <button className="bg-[#999] p-[5px] gap-[10px] rounded-[8px]">
            <img src={following} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiFounders;
