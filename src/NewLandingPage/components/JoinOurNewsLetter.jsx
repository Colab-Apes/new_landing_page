import React from "react";
import "../../App.css";
const JoinOurNewsLetter = () => {
  return (
    <div>
      <div className="relative mt-64 lg:mt-36 px-4 lg:px-20  mx-auto">
        <div className="absolute hidden lg:block z-[-1] blur-[150px] bottom-[-20rem] right-[2rem] w-[200px] h-[210px] bg-[#C26AAA] rounded-[400px]"></div>
        <div className="title text-center text-5xl text-[#3B8004] font-bold ">
          Join Our Newsletter
        </div>
        <div className=" flex flex-col justify-start md:justify-center items-center mt-20 lg:mt-10 bg-transparent   h-[80%] lg:w-[80%] mx-auto   p-0 md:p-14 xl:p-0">
          <h1 className="text-[#054E12] text-center text-3xl lg:text-[2rem] leading-[1.4]  ">
            Stay connected and informed:
            <p>
              {" "}
              Join our newsletter for the latest successful projects and
              business deals.
            </p>
          </h1>
          <form className="border-2 border-solid py-2 relative lg:w-[50%] border-[#3B8004] gap-10 flex  mt-20 items-center p-3 xl:0  rounded-[10px] lg:rounded-[20px] w-full">
            <div className="input py-7">
              <input
                className="text-3xl bg-transparent w-full md:w-[40rem] xl:w-[45rem] p-0 outline-none border-none bg-none placeholder:font-bold placeholder:text-[#999]"
                type="text"
                placeholder="enter your email address..."
              />
            </div>
            <button className=" absolute shadow-[15px_15px_50px_0px_rgba(0,_0,_0,_0.05)] px-12 btngrad py-6 lg:py-6 lg:text-[1.4rem] rounded-[8px] lg:rounded-[15px] text-3xl text-white right-2 font-bold">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinOurNewsLetter;
