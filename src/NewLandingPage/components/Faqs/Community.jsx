import React, { useState } from "react";
import { faqscommunity } from "./faqsdata";

const Community = ({  minus, plus }) => {
  const [getindex, setgetindex] = useState(0);

  const [openclose, setopenclose] = useState(false);
  return (
    <div>
      {" "}
      {faqscommunity.map((item, index) => (
        <div key={index} className="border-b border-b-[#999] pb-10 lg:pb-10 mt-10">
          <div
            onClick={() => {
              let val = index;
              val === index ? setopenclose(!openclose) : "";
              setgetindex(val);
              console.log("getindex" + getindex);
              console.log("index" + index);
            }}
            className="flex cursor-pointer justify-between mb-8 items-center "
          >
            <p className="text-3xl font-bold  text-[#054E12]">{item.title}</p>
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
Community.propTypes = {
  //   children: PropTypes.object.isRequired,
  //   backgroundImg: PropTypes.string.isRequired,
};

export default Community;
