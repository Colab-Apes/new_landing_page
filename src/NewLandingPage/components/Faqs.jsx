import React, { useState } from "react";
import "../../App.css";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";

const Faqs = () => {
  const [arr, setarr] = useState([]);
  return (
    <div className="font-lato px-4 lg:px-20 mt-64 lg:mt-36 relative">
      <div className="title mt-36 text-center  text-5xl lg:text-6xl ext-[#333] lg:text-[#3B8004] font-bold mb-20">
        Frequently Asked Questions
      </div>
      <div className="absolute z-[-1]  hidden lg:block blur-[200px] bottom-[-20rem] left-[-20rem] w-[387px] h-[410px] bg-[#C26AAA] rounded-[400px]"></div>
      <div className="absolute z-[-1]   hidden lg:block blur-[200px] top-[-30rem] right-[0rem] w-[200px] h-[200px] bg-[#C26AAA] rounded-[410.85px]"></div>

      <div className="faq bg-[#D5EEDA] mt-2 w-full text-center  mx-auto px-10 relative rounded-[20px] h-[450px] py-10">
        <div className="w-full flex justify-center items-center">
          <div className="bg-white w-[50rem] flex rounded-[20px]  justify-between px-2 py-2">
            <button className="btngrad text-white text-2xl font-bold rounded-[15px] py-6 w-[10rem] lg:py-[16px] lg:w-[14rem] ">
              Co_lab Apes
            </button>

            <button className=" bg-[#E9F6EC] text-2xl font-bold text-[#054E12] rounded-[15px] py-6 w-[10rem] lg:py-[16px] lg:w-[14rem] ">
              Community
            </button>
            <button className="bg-[#E9F6EC] font-bold text-2xl text-[#054E12] rounded-[15px] py-6 w-[10rem] lg:py-[16px] lg:w-[14rem] ">
              See All
            </button>
          </div>
        </div>
        ;
        <div className=" lg:px-32 mt-20">
          <div className="flex justify-between items-center border-b border-b-[#999] pb-10">
            <p className="text-3xl font-bold  text-[#054E12]">
              What is Co_lab Apes?
            </p>
            <img src={plus} alt="" className="cursor-pointer" />
          </div>
          <div className="flex justify-between mt-20 items-center border-b border-b-[#999] pb-10">
            <p className="text-3xl font-bold  text-[#054E12]">
              Is Co_lab Apes free to join?
            </p>
            <img src={plus} alt="" className="cursor-pointer" />
          </div>
          <div className="flex mt-20 justify-between items-center ">
            <p className="text-3xl font-bold  text-[#054E12]">
              Why should I join Co_lab Apes?
            </p>
            <img src={plus} alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faqs;
