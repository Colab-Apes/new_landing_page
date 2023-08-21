import React, { useState } from "react";
import { faqsseeall } from "./faqsdata";

const SeeAll = ({ minus, plus }) => {
  const [getindex, setgetindex] = useState(0);

  const [openclose, setopenclose] = useState(false);

  return (
    <div>
      {" "}
      {faqsseeall.map((item, index) => (
        <div
          key={index}
          className="border-b border-b-[#999] pb-10 lg:pb-10 mt-10"
        >
          <div
            onClick={() => {
              setgetindex(index);
              let val = index;
              val === index ? setopenclose(!openclose) : "";

              console.log("getindex" + getindex);
              console.log("index" + index);
            }}
            className="flex cursor-pointer justify-between mb-8 items-center "
          >
            <p className="text-3xl font-bold  text-left text-[#054E12]">
              {item.title}
            </p>
            <img
              src={getindex === index ? (openclose ? minus : plus) : plus}
              alt=""
              className="cursor-pointer"
            />
          </div>{" "}
          <p
            className={
              getindex === index && openclose
                ? "text-[#054E12] text-3xl text-left mb-4 leading-[3.5rem] duration-500 ease-in-out"
                : "hidden duration-500 ease-in-out"
            }
          >
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
};
export default SeeAll;
