import React from "react";

const JoinOurNewsLetter = () => {
  return (
    <div>
      <div className="collaborate mt-48 container mx-auto">
        <div className="title text-center text-5xl text-[#3B8004] font-bold mb-20">
          Join Our Newsletter
        </div>
        <div className="footer-box flex flex-col justify-start md:justify-center items-center bg-transparent md:bg-[#ECF8EE]  h-[80%] w-[80%] mx-auto rounded-2xl p-0 md:p-14">
          <h1 className="text-[#054E12] text-center text-[2rem]  mb-28">
            Stay connected and informed: <br />
            Join our newsletter for the latest successful projects and business
            deals.
          </h1>
          <form className="coll-form gap-10 flex items-center p-3 rounded-3xl">
            <div className="input">
              <input
                className="text-3xl bg-transparent w-full md:w-[30rem] p-2 outline-none border-none bg-none"
                type="text"
                placeholder="Email Address"
              />
            </div>
            <button className=" px-12 btngrad py-7 rounded-3xl text-3xl text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinOurNewsLetter;
