import { useState } from "react";

import minus from "../../../assets/icons/minus.svg";
import plus from "../../../assets/icons/plus.svg";
import Community from "./Community";
import Colabapes from "./Colabapes";
import SeeAll from "./SeeAll";

import FadeIn from "../../components/FadeIn";

import "../../../App.css";



const Faqs = () => {
  const [arr, setarr] = useState(["Co_lab Apes", "Community", "See All"]);
  const [getindex, setgetindex] = useState(0);
  const [openclose, setopenclose] = useState(false);

  return (
    <section className="font-lato px-4 p  md:px-14 lg:px-20 mt-64 lg:mt-36 relative">
      {/* <FadeIn delay={0.6} direction="left"> */}
        <div className="title mt-36 text-center  text-5xl lg:text-6xl ext-[#333] lg:text-[#3B8004] font-bold mb-20">
          Frequently Asked Questions
        </div>
        <div className="absolute z-[-1]  hidden lg:block blur-[200px] bottom-[-20rem] left-[-20rem] w-[387px] h-[410px] bg-[#C26AAA] rounded-[400px]"></div>
        <div className="absolute z-[-1]   hidden lg:block blur-[200px] top-[-30rem] right-[0rem] w-[200px] h-[200px] bg-[#C26AAA] rounded-[410.85px]"></div>

        <div className="faq  bg-[#D5EEDA]  pb-[10rem] mt-2 w-full text-center  mx-auto px-10 relative lg:mt-40 rounded-[20px] py-10">
          <div className="w-full flex justify-center items-center">
            <div className="bg-white w-[50rem] flex rounded-[20px]  justify-between px-2 py-2">
              {arr.map((item, index) => (
                <button
                  onClick={() => setgetindex(index)}
                  className={
                    getindex === index
                      ? "bg-[#E9F6EC] btngrad text-white font-bold text-2xl text-[#054E12] rounded-[15px] py-6 w-[10rem] lg:py-[16px] lg:w-[14rem] "
                      : "bg-[#E9F6EC] font-bold text-2xl text-[#054E12] rounded-[15px] py-6 w-[10rem] lg:py-[16px] lg:w-[14rem] hover:animate-pulse hover:animate-once hover:animate-duration-[750ms] hover:animate-ease-in-out "
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className=" lg:px-32 mt-20 0">
            {getindex === 0 ? (
              <Colabapes
                setopenclose={setopenclose}
                openclose={openclose}
                minus={minus}
                plus={plus}
              />
            ) : getindex === 1 ? (
              <Community
                setopenclose={setopenclose}
                openclose={openclose}
                minus={minus}
                plus={plus}
              />
            ) : (
              <SeeAll
                setopenclose={setopenclose}
                openclose={openclose}
                minus={minus}
                plus={plus}
              />
            )}
          </div>
        </div>
      {/* </FadeIn> */}
    </section>
  );
};
export default Faqs;
