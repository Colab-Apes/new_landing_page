import { IoIosCheckmark } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

import logo from "../../../../assets/ModalImages/logo1.webp";
import bio from "../../../../assets/ModalImages/bio.webp";

import "../../../../App.css";



const Step2 = ({ openstep2modalprop }) => {
  return (
    <div
      className={
        openstep2modalprop
          ? " rounded-[20px] lg:rounded-[3.13rem] w-full z-[120]   bg-[#F5FFF7] flex items-center justify-between min-h-[50rem] r   py-0  sm:pb-0 md:py-4      sm:min-h-[35rem] lg:min-h-[32rem] lg:w-full  xl:min-h-[54rem] xl:h-[] lg:p-[3rem]  xl:w-full  md:w-ful sm:px-8 md:px-[3rem] xl:px-[3.5rem] opacity-100 xl:py-[3.5rem]  relative duration-[800ms] ease-in-out"
          : "hidden"
      }
    >
      <div className="bg-[#C26AAA] blur-[150px] h-[24rem] left-0  top-0 rounded-full w-[24rem] absolute z-10"></div>
      <div className="bg-[#054E12] blur-[500px] h-[50rem] left-0  top-0 rounded-full w-[50rem] absolute -z-10"></div>
      <div
        className={
          "flex flex-col z-[120]  w-full  lg:flex-row lg:gap-x-5 xl:gap-x-[2rem] px-4 lg:px-0  justify-center lg:justify-between h-full items-center lg:items-start"
        }
      >
        <TfiClose
          onClick={() => {
            changeValueprop(false);
            setopensignupmodalprop(true);
          }}
          className="text-3xl lg:text-xl xl:text-3xl text-[#999999] font-bold cursor-pointer z-[200] absolute right-12 top-16  md:top-8 lg:top-10 xl:right-28 xl:top-14 md:right-8 lg:right-10 "
        />
        <div className="w-full h-full lg:block  hidden  lg:rounded-[1.56rem] ">
          <img src={bio} alt="" className="lg:rounded-[1.56rem] object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col px-4 lg:px-10   gap-y-4 w-full justify-evenly items-center lg:items-start  h-full lg:justify-normal mt-14 lg:mt-0    sm:w-[19rem] lg:w-full lg:h-full md:w-full md:h-full ">
          <div className=" flex flex-col justify-center items-center ">
            <img
              src={logo}
              alt=""
              className="w-[2rem] sm:w-[6rem] lg:w-[10rem] object-contain "
              loading="lazy"
            />
          </div>

          <p className="text-[#555] mx font-bold text-3xl text-center mx-auto mt-6 md:mt-4 lg:mt-1  xl:mt-5 xl:text-[1.5rem]">
            Complete Your Quick Profile
          </p>
          <div className="flex items-center">
            <div className="flex flex-col items-center mt-4">
              <div className="flex h-[4.5rem] w-[4.5rem] justify-center text-xl font-bold items-center rounded-full text-[#054E12] bg-[#054E12]">
                <IoIosCheckmark className="text-4xl text-white" />
              </div>
              <div className="text-[#054E12] font-bold text-xl mt-2">Bio</div>
            </div>

            <div className="h-[0.2rem] w-[10rem] bg-[#999]"></div>
            <div className="flex flex-col justify-start mt-4">
              <div className="flex h-[4.5rem] w-[4.5rem] justify-center text-xl font-bold items-center rounded-full border-[2px]  text-[#999] border-[#999]">
                2
              </div>
              <div className="text-[#054E12] font-bold text-xl mt-2">
                Profession
              </div>
            </div>
            <div className="h-[0.2rem] w-[10rem] bg-[#999]"></div>
            <div className="flex flex-col items-center mt-4">
              <div className="flex h-[4.5rem] w-[4.5rem] justify-center text-xl font-bold items-center rounded-full border-[2px]  text-[#999] border-[#999]">
                3
              </div>
              <div className="text-[#054E12] font-bold text-xl mt-2">Photo</div>
            </div>
          </div>
          <form
            action="
        "
            className="w-full gap-y-4 flex flex-col"
          >
            <div className="w-full ">
              <label htmlFor="profession" className="block font-bold text-xl">
                Profession
              </label>
              <input
                type="text"
                placeholder="Your Profession"
                id="profession"
                className="w-full pl-4 lg:pl-3 h-[4.5rem] md:h-[3.8rem] text-xl   bg-[#FFFFFF] mt-2 rounded-[5px] font-lato px-10 border focus:border-3  focus:border-[#3B8004] border-[#999999] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="skill" className="block font-bold text-xl">
                Skill
              </label>
              <select
                name=""
                id="skill"
                className="w-full pl-4 lg:pl-3 h-[4.5rem] md:h-[3.8rem] text-xl   bg-[#FFFFFF] mt-2 rounded-[5px] font-lato px-10 border focus:border-3  focus:border-[#3B8004] border-[#999999] focus:outline-none"
              >
                <option
                  disabled
                  selected
                  hidden
                  value=""
                  className="text-[#99999]"
                >
                  Choose Skill
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="experience" className="block font-bold text-xl">
                Experience
              </label>
              <select
                name=""
                id="experience"
                className="w-full pl-4 lg:pl-3 h-[4.5rem] md:h-[3.8rem] text-xl   bg-[#FFFFFF] mt-2 rounded-[5px] font-lato px-10 border focus:border-3  focus:border-[#3B8004] border-[#999999] focus:outline-none"
              >
                <option
                  disabled
                  selected
                  hidden
                  value=""
                  className="text-[#99999]"
                >
                  Choose years of experience
                </option>
              </select>
            </div>

            <button
              // type="submit"
              className="font-bold w-full text-2xl xl:text-xl btngrad rounded-[10px] h-[4rem] xl:h-[4rem] lg:mt-4  text-white "
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step2;
