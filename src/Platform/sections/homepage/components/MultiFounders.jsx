import React from "react";

const MultiFounders = ({ opendetailsmultiplefounders }) => {
  return (
    <div
      className={
        opendetailsmultiplefounders
          ? "absolute top-56 rounded-[20px] right-5 shadow-[15px_15px_50px_0px_rgba(5,_78,_18,_0.10)] px-10 pb-8 min-h-[280px] w-[242px] z-10 bg-[#fff] flex flex-col gap-y-2"
          : "hidden"
      }
    >
        
    </div>
  );
};

export default MultiFounders;
