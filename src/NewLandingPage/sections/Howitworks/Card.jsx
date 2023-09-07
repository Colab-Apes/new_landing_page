import React from "react";

const Card = ({ img, title, details }) => {
  return (
    <div className="flex mt-20 lg:mt-0  items-start gap-x-20 rounded-[20px] pb-26  lg:pb-10  shadow-[5px_10px_30px_0px_rgba(59,_128,_4,_0.10)] bg-[#D5EEDA] py-10 px-10  min-h-full pb-20  lg:h-[25rem] lg:w-[50%]  ">
      <img src={img} alt="One" className="w-[6.2rem] object-contain" />

      <div className=" mt-7">
        <h1 className="text-[2.5rem] text-[#333333] font-bold mb-10 ">
          {title}
        </h1>
        <div className="w-full h-[1px] bg-[#999]/[0.3] mt-2"></div>
        <p className="text-[2rem] text-[#445C48] text-left  font-medium mt-8 leading-[3rem]">
          {details}
        </p>
      </div>
    </div>
  );
};

export default Card;
