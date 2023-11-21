import { useCallback } from "react";
// import Header from "../components/Header";

const NewMember = () => {
  const onVuesaxoutlinearrowLeftIconClick = useCallback(() => {
    // Please sync "Learning pool" to the project
  }, []);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "returning member" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[249.06rem] overflow-hidden text-left text-[0.88rem] text-darkgray font-lato">
      <div className="absolute top-[-204.15rem] left-[33.75rem] flex flex-col items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.31rem]">
          <img
            className="relative w-[1.25rem] h-[0.99rem]"
            alt=""
            src="/group-3.svg"
          />
          <b className="relative">5</b>
        </div>
      </div>
      <div className="absolute top-[12.25rem] left-[10rem] flex flex-row items-center justify-start gap-[2.19rem] text-[3rem] text-darkgreen">
        <img
          className="relative w-[1.88rem] h-[1.88rem] cursor-pointer"
          alt=""
          src="/vuesaxoutlinearrowleft.svg"
          onClick={onVuesaxoutlinearrowLeftIconClick}
        />
        <div className="flex flex-row items-start justify-start gap-[1.88rem]">
          <img
            className="relative rounded-xl w-[6.25rem] h-[6.25rem] object-cover"
            alt=""
            src="/rectangle-25@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[0.63rem]">
            <div className="relative leading-[3.13rem] font-semibold inline-block w-[18.63rem] h-[3.75rem] shrink-0">
              Analytics
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.88rem] text-[1.5rem] text-dimgray">
              <div className="flex flex-row items-center justify-start gap-[0.63rem]">
                <img
                  className="relative w-[1.26rem] h-[1.5rem]"
                  alt=""
                  src="/vector.svg"
                />
                <div className="relative inline-block w-[12.56rem] h-[1.88rem] shrink-0">
                  310,000 resources
                </div>
              </div>
              <div className="relative rounded-[50%] bg-darkgray w-[0.44rem] h-[0.44rem]" />
              <div className="flex flex-row items-center justify-start gap-[0.63rem]">
                <img
                  className="relative w-[1.94rem] h-[1.59rem]"
                  alt=""
                  src="/3user.svg"
                />
                <div className="relative inline-block w-[10.25rem] h-[1.88rem] shrink-0">
                  10K+ members
                </div>
              </div>
              <div className="relative rounded-[50%] bg-darkgray w-[0.44rem] h-[0.44rem]" />
              <div className="flex flex-row items-center justify-start gap-[0.63rem]">
                <img
                  className="relative w-[1.56rem] h-[1.59rem]"
                  alt=""
                  src="/3user1.svg"
                />
                <div className="relative inline-block w-[10.25rem] h-[1.88rem] shrink-0">
                  10 mentors
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] py-[0.94rem] px-[1.25rem] bg-[transparent] absolute top-[13.84rem] right-[10.33rem] rounded-xl [background:linear-gradient(263.66deg,_#007d16,_#4ba900)] flex flex-row items-center justify-end"
        onClick={onFrameButtonClick}
      >
        <b className="relative text-[1.5rem] font-lato text-white text-left">
          Join group
        </b>
      </button>
      <div className="absolute top-[245.19rem] left-[calc(50%_-_91px)] flex flex-row items-center justify-start gap-[0.94rem] text-darkslategray-100">
        <img
          className="relative w-[1.25rem] h-[1.25rem]"
          alt=""
          src="/vector1.svg"
        />
        <div className="relative">2023, all rights reserved</div>
      </div>
      <div className="absolute top-[22.25rem] left-[10rem] leading-[3.13rem] text-darkslategray-100 text-[3rem] font-inter">
        <p className="m-0 font-semibold">Acquire a new skill in analytics</p>
        <p className="m-0 text-[1.5rem] font-lato">
          Consider learning an in-demand course in analytics with other learners
          today
        </p>
      </div>
      <div className="absolute top-[32.81rem] left-[10rem] w-[22.38rem] h-[37.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white shadow-[15px_15px_50px_rgba(5,_78,_18,_0.1)] w-[22.38rem] h-[37.87rem]" />
      </div>
      <div className="absolute top-[112.31rem] left-[10rem] w-[22.38rem] h-[37.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white shadow-[15px_15px_50px_rgba(5,_78,_18,_0.1)] w-[22.38rem] h-[37.87rem]" />
      </div>
      <div className="absolute top-[72.56rem] left-[10rem] w-[22.38rem] h-[37.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white shadow-[15px_15px_50px_rgba(5,_78,_18,_0.1)] w-[22.38rem] h-[37.87rem]" />
      </div>
      <div className="absolute top-[152.06rem] left-[10rem] w-[22.38rem] h-[37.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white shadow-[15px_15px_50px_rgba(5,_78,_18,_0.1)] w-[22.38rem] h-[37.87rem]" />
      </div>
      <div className="absolute top-[191.81rem] left-[10rem] w-[22.38rem] h-[37.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white shadow-[15px_15px_50px_rgba(5,_78,_18,_0.1)] w-[22.38rem] h-[37.87rem]" />
      </div>
      <div className="absolute top-[32.81rem] left-[33.69rem] w-[22.44rem] h-[37.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white shadow-[15px_15px_50px_rgba(5,_78,_18,_0.1)] w-[22.38rem] h-[37.87rem]" />
      </div>
      <div className="absolute top-[112.31rem] left-[33.69rem] w-[22.44rem] h-[37.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white shadow-[15px_15px_50px_rgba(5,_78,_18,_0.1)] w-[22.38rem] h-[37.87rem]" />
      </div>
      <div className="absolute top-[72.56rem] left-[33.69rem] w-[22.44rem] h-[37.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white shadow-[15px_15px_50px_rgba(5,_78,_18,_0.1)] w-[22.38rem] h-[37.87rem]" />
      </div>
      <div className="absolute top-[152.06rem] left-[33.69rem] w-[22.44rem] h-[37.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white shadow-[15px_15px_50px_rgba(5,_78,_18,_0.1)] w-[22.38rem] h-[37.87rem]" />
      </div>
      <div className="absolute top-[191.81rem] left-[33.69rem] w-[22.44rem] h-[37.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white shadow-[15px_15px_50px_rgba(5,_78,_18,_0.1)] w-[22.38rem] h-[37.87rem]" />
      </div>
      <div className="absolute top-[32.81rem] left-[57.44rem] w-[22.38rem] h-[37.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white shadow-[15px_15px_50px_rgba(5,_78,_18,_0.1)] w-[22.38rem] h-[37.87rem]" />
      </div>
      <div className="absolute top-[112.31rem] left-[57.44rem] w-[22.38rem] h-[37.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white shadow-[15px_15px_50px_rgba(5,_78,_18,_0.1)] w-[22.38rem] h-[37.87rem]" />
      </div>
      <div className="absolute top-[72.56rem] left-[57.44rem] w-[22.38rem] h-[37.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white shadow-[15px_15px_50px_rgba(5,_78,_18,_0.1)] w-[22.38rem] h-[37.87rem]" />
      </div>
      <div className="absolute top-[152.06rem] left-[57.44rem] w-[22.38rem] h-[37.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white shadow-[15px_15px_50px_rgba(5,_78,_18,_0.1)] w-[22.38rem] h-[37.87rem]" />
      </div>
      <div className="absolute top-[191.81rem] left-[57.44rem] w-[22.38rem] h-[37.88rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-white shadow-[15px_15px_50px_rgba(5,_78,_18,_0.1)] w-[22.38rem] h-[37.87rem]" />
      </div>
      <img
        className="absolute top-[32.81rem] left-[10rem] rounded-11xl w-[22.38rem] h-[19.13rem] object-cover"
        alt=""
        src="/rectangle-24@2x.png"
      />
      <img
        className="absolute top-[112.31rem] left-[10rem] rounded-11xl w-[22.38rem] h-[19.13rem] object-cover"
        alt=""
        src="/rectangle-104@2x.png"
      />
      <img
        className="absolute top-[72.56rem] left-[10rem] rounded-11xl w-[22.38rem] h-[19.13rem] object-cover"
        alt=""
        src="/rectangle-101@2x.png"
      />
      <img
        className="absolute top-[152.06rem] left-[10rem] rounded-11xl w-[22.38rem] h-[19.13rem] object-cover"
        alt=""
        src="/rectangle-105@2x.png"
      />
      <img
        className="absolute top-[191.81rem] left-[10rem] rounded-11xl w-[22.38rem] h-[19.13rem] object-cover"
        alt=""
        src="/rectangle-110@2x.png"
      />
      <img
        className="absolute top-[32.81rem] left-[33.69rem] rounded-11xl w-[22.38rem] h-[19.13rem] object-cover"
        alt=""
        src="/rectangle-100@2x.png"
      />
      <img
        className="absolute top-[112.31rem] left-[33.69rem] rounded-11xl w-[22.38rem] h-[19.13rem] object-cover"
        alt=""
        src="/rectangle-106@2x.png"
      />
      <img
        className="absolute top-[72.56rem] left-[33.69rem] rounded-11xl w-[22.38rem] h-[19.13rem] object-cover"
        alt=""
        src="/rectangle-102@2x.png"
      />
      <img
        className="absolute top-[152.06rem] left-[33.69rem] rounded-11xl w-[22.38rem] h-[19.13rem] object-cover"
        alt=""
        src="/rectangle-107@2x.png"
      />
      <img
        className="absolute top-[191.81rem] left-[33.69rem] rounded-11xl w-[22.38rem] h-[19.13rem] object-cover"
        alt=""
        src="/rectangle-111@2x.png"
      />
      <img
        className="absolute top-[32.81rem] left-[57.44rem] rounded-11xl w-[22.38rem] h-[19.13rem] object-cover"
        alt=""
        src="/rectangle-99@2x.png"
      />
      <img
        className="absolute top-[112.31rem] left-[57.44rem] rounded-11xl w-[22.38rem] h-[19.13rem] object-cover"
        alt=""
        src="/rectangle-108@2x.png"
      />
      <img
        className="absolute top-[72.56rem] left-[57.44rem] rounded-11xl w-[22.38rem] h-[19.13rem] object-cover"
        alt=""
        src="/rectangle-103@2x.png"
      />
      <img
        className="absolute top-[152.06rem] left-[57.44rem] rounded-11xl w-[22.38rem] h-[19.13rem] object-cover"
        alt=""
        src="/rectangle-109@2x.png"
      />
      <img
        className="absolute top-[191.81rem] left-[57.44rem] rounded-11xl w-[22.38rem] h-[19.13rem] object-cover"
        alt=""
        src="/rectangle-112@2x.png"
      />
      <div className="absolute top-[53.63rem] left-[11.88rem] flex flex-row items-center justify-start gap-[0.94rem] text-[1.5rem] text-darkslategray-100">
        <img
          className="relative w-[1.26rem] h-[1.5rem]"
          alt=""
          src="/vector2.svg"
        />
        <b className="relative">
          <p className="m-0">Google data analytics</p>
          <p className="m-0">professional certificate</p>
        </b>
      </div>
      <div className="absolute top-[133.13rem] left-[11.88rem] flex flex-row items-center justify-start gap-[0.94rem] text-[1.5rem] text-darkslategray-100">
        <img
          className="relative w-[1.26rem] h-[1.5rem]"
          alt=""
          src="/vector3.svg"
        />
        <b className="relative">
          <p className="m-0">Google data analytics</p>
          <p className="m-0">professional certificate</p>
        </b>
      </div>
      <div className="absolute top-[93.38rem] left-[11.88rem] flex flex-row items-center justify-start gap-[0.94rem] text-[1.5rem] text-darkslategray-100">
        <img
          className="relative w-[1.26rem] h-[1.5rem]"
          alt=""
          src="/vector4.svg"
        />
        <b className="relative">
          <p className="m-0">Google data analytics</p>
          <p className="m-0">professional certificate</p>
        </b>
      </div>
      <div className="absolute top-[172.88rem] left-[11.88rem] flex flex-row items-center justify-start gap-[0.94rem] text-[1.5rem] text-darkslategray-100">
        <img
          className="relative w-[1.26rem] h-[1.5rem]"
          alt=""
          src="/vector5.svg"
        />
        <b className="relative">
          <p className="m-0">Google data analytics</p>
          <p className="m-0">professional certificate</p>
        </b>
      </div>
      <div className="absolute top-[212.63rem] left-[11.88rem] flex flex-row items-center justify-start gap-[0.94rem] text-[1.5rem] text-darkslategray-100">
        <img
          className="relative w-[1.26rem] h-[1.5rem]"
          alt=""
          src="/vector6.svg"
        />
        <b className="relative">
          <p className="m-0">Google data analytics</p>
          <p className="m-0">professional certificate</p>
        </b>
      </div>
      <div className="absolute top-[53.63rem] left-[35.56rem] flex flex-row items-center justify-start gap-[0.94rem] text-[1.5rem] text-darkslategray-100">
        <img
          className="relative w-[1.26rem] h-[1.5rem]"
          alt=""
          src="/vector7.svg"
        />
        <b className="relative">
          <p className="m-0">Microsoft data analyst</p>
          <p className="m-0">associate certification</p>
        </b>
      </div>
      <div className="absolute top-[133.13rem] left-[35.56rem] flex flex-row items-center justify-start gap-[0.94rem] text-[1.5rem] text-darkslategray-100">
        <img
          className="relative w-[1.26rem] h-[1.5rem]"
          alt=""
          src="/vector8.svg"
        />
        <b className="relative">
          <p className="m-0">Microsoft data analyst</p>
          <p className="m-0">associate certification</p>
        </b>
      </div>
      <div className="absolute top-[93.38rem] left-[35.56rem] flex flex-row items-center justify-start gap-[0.94rem] text-[1.5rem] text-darkslategray-100">
        <img
          className="relative w-[1.26rem] h-[1.5rem]"
          alt=""
          src="/vector9.svg"
        />
        <b className="relative">
          <p className="m-0">Microsoft data analyst</p>
          <p className="m-0">associate certification</p>
        </b>
      </div>
      <div className="absolute top-[172.88rem] left-[35.56rem] flex flex-row items-center justify-start gap-[0.94rem] text-[1.5rem] text-darkslategray-100">
        <img
          className="relative w-[1.26rem] h-[1.5rem]"
          alt=""
          src="/vector10.svg"
        />
        <b className="relative">
          <p className="m-0">Microsoft data analyst</p>
          <p className="m-0">associate certification</p>
        </b>
      </div>
      <div className="absolute top-[212.63rem] left-[35.56rem] flex flex-row items-center justify-start gap-[0.94rem] text-[1.5rem] text-darkslategray-100">
        <img
          className="relative w-[1.26rem] h-[1.5rem]"
          alt=""
          src="/vector11.svg"
        />
        <b className="relative">
          <p className="m-0">Microsoft data analyst</p>
          <p className="m-0">associate certification</p>
        </b>
      </div>
      <div className="absolute top-[53.63rem] left-[59.31rem] flex flex-row items-center justify-start gap-[0.94rem] text-[1.5rem] text-darkslategray-100">
        <img
          className="relative w-[1.26rem] h-[1.5rem]"
          alt=""
          src="/vector12.svg"
        />
        <b className="relative">
          <p className="m-0">IBM Data science</p>
          <p className="m-0">professional certificate</p>
        </b>
      </div>
      <div className="absolute top-[133.13rem] left-[59.31rem] flex flex-row items-center justify-start gap-[0.94rem] text-[1.5rem] text-darkslategray-100">
        <img
          className="relative w-[1.26rem] h-[1.5rem]"
          alt=""
          src="/vector13.svg"
        />
        <b className="relative">
          <p className="m-0">IBM Data science</p>
          <p className="m-0">professional certificate</p>
        </b>
      </div>
      <div className="absolute top-[93.38rem] left-[59.31rem] flex flex-row items-center justify-start gap-[0.94rem] text-[1.5rem] text-darkslategray-100">
        <img
          className="relative w-[1.26rem] h-[1.5rem]"
          alt=""
          src="/vector14.svg"
        />
        <b className="relative">
          <p className="m-0">IBM Data science</p>
          <p className="m-0">professional certificate</p>
        </b>
      </div>
      <div className="absolute top-[172.88rem] left-[59.31rem] flex flex-row items-center justify-start gap-[0.94rem] text-[1.5rem] text-darkslategray-100">
        <img
          className="relative w-[1.26rem] h-[1.5rem]"
          alt=""
          src="/vector15.svg"
        />
        <b className="relative">
          <p className="m-0">IBM Data science</p>
          <p className="m-0">professional certificate</p>
        </b>
      </div>
      <div className="absolute top-[212.63rem] left-[59.31rem] flex flex-row items-center justify-start gap-[0.94rem] text-[1.5rem] text-darkslategray-100">
        <img
          className="relative w-[1.26rem] h-[1.5rem]"
          alt=""
          src="/vector16.svg"
        />
        <b className="relative">
          <p className="m-0">IBM Data science</p>
          <p className="m-0">professional certificate</p>
        </b>
      </div>
      <div className="absolute top-[59.13rem] left-[11.81rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlinebank.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Google</b>
        </div>
      </div>
      <div className="absolute top-[138.63rem] left-[11.81rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlinebank1.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Google</b>
        </div>
      </div>
      <div className="absolute top-[98.88rem] left-[11.81rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlinebank2.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Google</b>
        </div>
      </div>
      <div className="absolute top-[178.38rem] left-[11.81rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlinebank3.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Google</b>
        </div>
      </div>
      <div className="absolute top-[218.13rem] left-[11.81rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlinebank4.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Google</b>
        </div>
      </div>
      <div className="absolute top-[59.13rem] left-[35.56rem] flex flex-row items-center justify-start gap-[0.69rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlinebank5.svg"
        />
        <b className="relative">Microsoft</b>
      </div>
      <div className="absolute top-[138.63rem] left-[35.56rem] flex flex-row items-center justify-start gap-[0.69rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlinebank6.svg"
        />
        <b className="relative">Microsoft</b>
      </div>
      <div className="absolute top-[98.88rem] left-[35.56rem] flex flex-row items-center justify-start gap-[0.69rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlinebank7.svg"
        />
        <b className="relative">Microsoft</b>
      </div>
      <div className="absolute top-[178.38rem] left-[35.56rem] flex flex-row items-center justify-start gap-[0.69rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlinebank8.svg"
        />
        <b className="relative">Microsoft</b>
      </div>
      <div className="absolute top-[218.13rem] left-[35.56rem] flex flex-row items-center justify-start gap-[0.69rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlinebank9.svg"
        />
        <b className="relative">Microsoft</b>
      </div>
      <div className="absolute top-[59.13rem] left-[59.31rem] flex flex-row items-center justify-start gap-[0.69rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlinebank10.svg"
        />
        <b className="relative">IBM</b>
      </div>
      <div className="absolute top-[138.63rem] left-[59.31rem] flex flex-row items-center justify-start gap-[0.69rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlinebank11.svg"
        />
        <b className="relative">IBM</b>
      </div>
      <div className="absolute top-[98.88rem] left-[59.31rem] flex flex-row items-center justify-start gap-[0.69rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlinebank12.svg"
        />
        <b className="relative">IBM</b>
      </div>
      <div className="absolute top-[178.38rem] left-[59.31rem] flex flex-row items-center justify-start gap-[0.69rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlinebank13.svg"
        />
        <b className="relative">IBM</b>
      </div>
      <div className="absolute top-[218.13rem] left-[59.31rem] flex flex-row items-center justify-start gap-[0.69rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlinebank14.svg"
        />
        <b className="relative">IBM</b>
      </div>
      <div className="absolute top-[62.5rem] left-[11.88rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlineteacher.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Degree</b>
        </div>
      </div>
      <div className="absolute top-[142rem] left-[11.88rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlineteacher1.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Degree</b>
        </div>
      </div>
      <div className="absolute top-[102.25rem] left-[11.88rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlineteacher2.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Degree</b>
        </div>
      </div>
      <div className="absolute top-[181.75rem] left-[11.88rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlineteacher3.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Degree</b>
        </div>
      </div>
      <div className="absolute top-[221.5rem] left-[11.88rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlineteacher4.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Degree</b>
        </div>
      </div>
      <div className="absolute top-[62.5rem] left-[35.56rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlineteacher5.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Certificate</b>
        </div>
      </div>
      <div className="absolute top-[142rem] left-[35.56rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlineteacher6.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Certificate</b>
        </div>
      </div>
      <div className="absolute top-[102.25rem] left-[35.56rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlineteacher7.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Certificate</b>
        </div>
      </div>
      <div className="absolute top-[181.75rem] left-[35.56rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlineteacher8.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Certificate</b>
        </div>
      </div>
      <div className="absolute top-[221.5rem] left-[35.56rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlineteacher9.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Certificate</b>
        </div>
      </div>
      <div className="absolute top-[62.5rem] left-[59.31rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlineteacher10.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Masters</b>
        </div>
      </div>
      <div className="absolute top-[142rem] left-[59.31rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlineteacher11.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Masters</b>
        </div>
      </div>
      <div className="absolute top-[102.25rem] left-[59.31rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlineteacher12.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Masters</b>
        </div>
      </div>
      <div className="absolute top-[181.75rem] left-[59.31rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlineteacher13.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Masters</b>
        </div>
      </div>
      <div className="absolute top-[221.5rem] left-[59.31rem] flex flex-row items-center justify-start gap-[0.75rem] text-[1rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem]"
          alt=""
          src="/vuesaxoutlineteacher14.svg"
        />
        <div className="relative w-[12rem] h-[1.19rem]">
          <b className="absolute top-[0rem] left-[0rem]">Masters</b>
        </div>
      </div>
      <div className="absolute top-[66.41rem] left-[11.88rem] flex flex-row items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/solarstaroutline.svg"
          />
          <b className="relative">4.5</b>
        </div>
      </div>
      <div className="absolute top-[145.91rem] left-[11.88rem] flex flex-row items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/solarstaroutline1.svg"
          />
          <b className="relative">4.5</b>
        </div>
      </div>
      <div className="absolute top-[106.16rem] left-[11.88rem] flex flex-row items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/solarstaroutline2.svg"
          />
          <b className="relative">4.5</b>
        </div>
      </div>
      <div className="absolute top-[185.66rem] left-[11.88rem] flex flex-row items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/solarstaroutline3.svg"
          />
          <b className="relative">4.5</b>
        </div>
      </div>
      <div className="absolute top-[225.41rem] left-[11.88rem] flex flex-row items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/solarstaroutline4.svg"
          />
          <b className="relative">4.5</b>
        </div>
      </div>
      <div className="absolute top-[65.88rem] left-[22.5rem] rounded-mini bg-white flex flex-row items-center justify-center py-[0.63rem] px-[1.56rem] text-center border-[1px] border-solid border-darkgray">
        <b className="relative">View course</b>
      </div>
      <div className="absolute top-[145.38rem] left-[22.5rem] rounded-mini bg-white flex flex-row items-center justify-center py-[0.63rem] px-[1.56rem] text-center border-[1px] border-solid border-darkgray">
        <b className="relative">View course</b>
      </div>
      <div className="absolute top-[105.63rem] left-[22.5rem] rounded-mini bg-white flex flex-row items-center justify-center py-[0.63rem] px-[1.56rem] text-center border-[1px] border-solid border-darkgray">
        <b className="relative">View course</b>
      </div>
      <div className="absolute top-[185.13rem] left-[22.5rem] rounded-mini bg-white flex flex-row items-center justify-center py-[0.63rem] px-[1.56rem] text-center border-[1px] border-solid border-darkgray">
        <b className="relative">View course</b>
      </div>
      <div className="absolute top-[224.88rem] left-[22.5rem] rounded-mini bg-white flex flex-row items-center justify-center py-[0.63rem] px-[1.56rem] text-center border-[1px] border-solid border-darkgray">
        <b className="relative">View course</b>
      </div>
      <div className="absolute top-[66.41rem] left-[35.56rem] flex flex-row items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/solarstaroutline5.svg"
          />
          <b className="relative">4.0</b>
        </div>
      </div>
      <div className="absolute top-[145.91rem] left-[35.56rem] flex flex-row items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/solarstaroutline6.svg"
          />
          <b className="relative">4.0</b>
        </div>
      </div>
      <div className="absolute top-[106.16rem] left-[35.56rem] flex flex-row items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/solarstaroutline7.svg"
          />
          <b className="relative">4.0</b>
        </div>
      </div>
      <div className="absolute top-[185.66rem] left-[35.56rem] flex flex-row items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/solarstaroutline8.svg"
          />
          <b className="relative">4.0</b>
        </div>
      </div>
      <div className="absolute top-[225.41rem] left-[35.56rem] flex flex-row items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/solarstaroutline9.svg"
          />
          <b className="relative">4.0</b>
        </div>
      </div>
      <div className="absolute top-[65.88rem] left-[46.19rem] rounded-mini bg-white flex flex-row items-center justify-center py-[0.63rem] px-[1.56rem] text-center border-[1px] border-solid border-darkgray">
        <b className="relative">View course</b>
      </div>
      <div className="absolute top-[145.38rem] left-[46.19rem] rounded-mini bg-white flex flex-row items-center justify-center py-[0.63rem] px-[1.56rem] text-center border-[1px] border-solid border-darkgray">
        <b className="relative">View course</b>
      </div>
      <div className="absolute top-[105.63rem] left-[46.19rem] rounded-mini bg-white flex flex-row items-center justify-center py-[0.63rem] px-[1.56rem] text-center border-[1px] border-solid border-darkgray">
        <b className="relative">View course</b>
      </div>
      <div className="absolute top-[185.13rem] left-[46.19rem] rounded-mini bg-white flex flex-row items-center justify-center py-[0.63rem] px-[1.56rem] text-center border-[1px] border-solid border-darkgray">
        <b className="relative">View course</b>
      </div>
      <div className="absolute top-[224.88rem] left-[46.19rem] rounded-mini bg-white flex flex-row items-center justify-center py-[0.63rem] px-[1.56rem] text-center border-[1px] border-solid border-darkgray">
        <b className="relative">View course</b>
      </div>
      <div className="absolute top-[66.41rem] left-[59.31rem] flex flex-row items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/solarstaroutline10.svg"
          />
          <b className="relative">4.9</b>
        </div>
      </div>
      <div className="absolute top-[145.91rem] left-[59.31rem] flex flex-row items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/solarstaroutline11.svg"
          />
          <b className="relative">4.9</b>
        </div>
      </div>
      <div className="absolute top-[106.16rem] left-[59.31rem] flex flex-row items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/solarstaroutline12.svg"
          />
          <b className="relative">4.9</b>
        </div>
      </div>
      <div className="absolute top-[185.66rem] left-[59.31rem] flex flex-row items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/solarstaroutline13.svg"
          />
          <b className="relative">4.9</b>
        </div>
      </div>
      <div className="absolute top-[225.41rem] left-[59.31rem] flex flex-row items-start justify-start text-center">
        <div className="flex flex-row items-center justify-start gap-[0.38rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/solarstaroutline14.svg"
          />
          <b className="relative">4.9</b>
        </div>
      </div>
      <div className="absolute top-[65.88rem] left-[69.94rem] rounded-mini bg-white flex flex-row items-center justify-center py-[0.63rem] px-[1.56rem] text-center border-[1px] border-solid border-darkgray">
        <b className="relative">View course</b>
      </div>
      <div className="absolute top-[145.38rem] left-[69.94rem] rounded-mini bg-white flex flex-row items-center justify-center py-[0.63rem] px-[1.56rem] text-center border-[1px] border-solid border-darkgray">
        <b className="relative">View course</b>
      </div>
      <div className="absolute top-[105.63rem] left-[69.94rem] rounded-mini bg-white flex flex-row items-center justify-center py-[0.63rem] px-[1.56rem] text-center border-[1px] border-solid border-darkgray">
        <b className="relative">View course</b>
      </div>
      <div className="absolute top-[185.13rem] left-[69.94rem] rounded-mini bg-white flex flex-row items-center justify-center py-[0.63rem] px-[1.56rem] text-center border-[1px] border-solid border-darkgray">
        <b className="relative">View course</b>
      </div>
      <div className="absolute top-[224.88rem] left-[69.94rem] rounded-mini bg-white flex flex-row items-center justify-center py-[0.63rem] px-[1.56rem] text-center border-[1px] border-solid border-darkgray">
        <b className="relative">View course</b>
      </div>
      <b className="absolute top-[30.38rem] left-[69.25rem] text-[1rem]">
        Sort by:
      </b>
      <div className="absolute top-[30.38rem] left-[73.25rem] flex flex-row items-center justify-center text-[1rem] text-active-field">
        <div className="flex flex-row items-start justify-start gap-[0.63rem]">
          <img
            className="relative w-[1rem] h-[1rem]"
            alt=""
            src="/vuesaxoutlinearrowswap.svg"
          />
          <b className="relative">Most rated</b>
        </div>
      </div>
    </div>
  );
};

export default NewMember;
