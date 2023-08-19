import React, { useState } from "react";
import "../../../App.css";
import minus from "../../../assets/icons/minus.svg";
import plus from "../../../assets/icons/plus.svg";

const Faqs = () => {
  const [arr, setarr] = useState(["Co_lab Apes", "Community", "See All"]);
  const [getindex, setgetindex] = useState(0);
  const [openclose, setopenclose] = useState(false);
  return (
    <div className="font-lato px-4 p  md:px-14 lg:px-20 mt-64 lg:mt-36 relative">
      <div className="title mt-36 text-center  text-5xl lg:text-6xl ext-[#333] lg:text-[#3B8004] font-bold mb-20">
        Frequently Asked Questions
      </div>
      <div className="absolute z-[-1]  hidden lg:block blur-[200px] bottom-[-20rem] left-[-20rem] w-[387px] h-[410px] bg-[#C26AAA] rounded-[400px]"></div>
      <div className="absolute z-[-1]   hidden lg:block blur-[200px] top-[-30rem] right-[0rem] w-[200px] h-[200px] bg-[#C26AAA] rounded-[410.85px]"></div>

      <div className="faq  bg-[#D5EEDA]  pb-[10rem] mt-2 w-full text-center  mx-auto px-10 relative lg:mt-40 rounded-[20px] h-[600px] py-10">
        <div className="w-full flex justify-center items-center">
          <div className="bg-white w-[50rem] flex rounded-[20px]  justify-between px-2 py-2">
            {arr.map((item, index) => (
              <button
                onClick={() => setgetindex(index)}
                className={
                  getindex === index
                    ? "bg-[#E9F6EC] btngrad text-white font-bold text-2xl text-[#054E12] rounded-[15px] py-6 w-[10rem] lg:py-[16px] lg:w-[14rem] "
                    : "bg-[#E9F6EC] font-bold text-2xl text-[#054E12] rounded-[15px] py-6 w-[10rem] lg:py-[16px] lg:w-[14rem] "
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className=" lg:px-32 mt-20 0">
          <div className="border-b border-b-[#999] pb-10 lg:pb-10">
            <div
              onClick={() => {
                setopenclose(!openclose);
              }}
              className="flex cursor-pointer justify-between mb-8 items-center "
            >
              <p className="text-3xl font-bold  text-[#054E12]">
                What is Co_lab Apes?
              </p>
              <img
                src={openclose ? minus : plus}
                alt=""
                className="cursor-pointer"
              />
            </div>{" "}
            <p
              className={
                openclose
                  ? "text-[#054E12] text-3xl text-left mb-4 leading-[3.5rem] duration-500 ease-in-out"
                  : "hidden duration-500 ease-in-out"
              }
            >
              Colab apes aim to link learning and earning by encouraging people
              to develop their skills on the job and creating real-life projects
              that generate revenues, then distributing the profits to all team
              members. Stating its financial targets and discerning how the
              business plans to achieve them promptly.
            </p>
          </div>

          <div className="flex justify-between mt-20  items-center border-b border-b-[#999] pb-10 lg:pb-32">
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
