import React from "react";
import herobg from "../../assets/newimages/bg.png";

const Hero = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${herobg})`,
        }}
        className="h-[20rem]"
      ></section>
    </div>
  );
};

export default Hero;
