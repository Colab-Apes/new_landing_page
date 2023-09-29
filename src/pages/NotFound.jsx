import React from "react";
import logo from "./assets/logo404.png";
import zero from "./assets/zero.png";
import plus from "./assets/plus.svg";
import plus1 from "./assets/plugreen.svg";
import circlegreen from "./assets/circlegreen.svg";
import circlewhite from "./assets/circle.svg";
const NotFound = () => {
  return (
    <div>
      <div className="bg-[#4B6550] relative  min-h-screen flex items-center justify-center">
        <div className="absolute top-0 left-0 ">
          <img src={logo} alt="" className="w-[20vw] object-contain" />{" "}
        </div>
        {/* <img src={circle} alt="" className="absolute top-3 w-[2rem] object-contain"/> */}
        <img
          src={circlegreen}
          alt=""
          className="absolute top-[40rem] left-[100rem] w-[1.2rem] object-contain "
        />
        <img
          src={circlegreen}
          alt=""
          className="absolute top-[20rem] left-[40rem] z-20 w-[1.2rem] object-contain "
        />
        <img
          src={circlewhite}
          alt=""
          className="absolute top-[10rem] left-[82rem] w-[1.2rem] object-contain "
        />
        <img
          src={circlewhite}
          alt=""
          className="absolute top-[40rem] left-[80.2rem] w-[1.2rem] object-contain "
        />
        <img
          src={circlewhite}
          alt=""
          className="absolute top-[40rem] left-[80.2rem] w-[1.2rem] object-contain "
        />
        <img
          src={circlewhite}
          alt=""
          className="absolute top-[18rem] left-[89rem] w-[1.2rem] object-contain "
        />
        <img
          src={circlewhite}
          alt=""
          className="absolute bottom-[2rem] left-[60rem] w-[1.2rem] object-contain "
        />
        <img
          src={plus}
          alt=""
          className="absolute top-[5rem] left-[60rem] w-[2rem] object-contain"
        />
        <img
          src={plus}
          alt=""
          className="absolute top-[5rem] left-[60rem] w-[2rem] object-contain"
        />
        <img
          src={plus1}
          alt=""
          className="absolute w-[2rem] bottom-[10rem]  left-[40rem]"
        />
        <div className="absolute top-20 left-32">
          <div className="bg-[#c26AAA] absolute translate-x-[-50%] translate-y-[50%] top-[-20%] blur-[90px] left-[66%]  rounded-full  w-[200px] h-[200px]"></div>
          <div className="h-[400px] w-[400px] rounded-full bg-[#054E12] blur-[200px]"></div>
        </div>
        <div className="h-[75vh] flex relative flex-col items-center justify-center w-[75vh] rounded-full bg-[#D9D9D91A]/[10%]">
          <div className="h-[50vh] flex  items-center justify-center w-[50vh] rounded-full flex-col bg-[#D9D9D91A]/[10%] ">
            <div className="flex h-fit gap-x-8 items-center justify-around">
              <span className="text-[17vh] text-[#D9D9D9] font-black"> 4 </span>
              <img src={zero} alt="" className="w-[17vh]" />{" "}
              <span className="text-[17vh] text-[#D9D9D9] font-black"> 4 </span>
            </div>
            <p className="text-center text-[#D9D9D9] font-semibold text-[25px]">
              Error
            </p>
          </div>
          <button className=" absolute border-2 bottom-10 border-solid rounded-[20px] text-[#D9D9D9] text-[24px] px-[30px] py-[15px] border-[#D9D9D9]">
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
