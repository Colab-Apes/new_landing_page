import one from "../../../assets/svg/1.svg";
import two from "../../../assets/svg/2.svg";
import three from "../../../assets/svg/3.svg";
import four from "../../../assets/svg/4.svg";
import Card from "./Card";

import FadeIn from "../../components/FadeIn";



const HowItWorks = () => {
  return (
    <section>
      {" "}
      <FadeIn delay={0.6} direction="left">
        <div className=" py-40 lg:mt-36 z-10 w-full bg-no-repeat bg-[url('./assets/bg/bg.webp')]  mx-auto px-4   md:px-14 lg:px-32 xl:px-60 relative">
          <div className="w-full text-center text-5xl text-[#333] font-bold lg:mb-36">
            How It Works
          </div>
          <div className="   flex flex-col mt-20  md:flex-row gap-x-[8rem]  lg:gap-x-[4rem] justify-between items-start lg:mb-10">

            <Card
              img={one}
              title="Join Co_lab Apes"
              details="Sign Up and Complete your profile"
            />

            <Card
              img={two}
              title="Explore Opportunities"
              details="Discover projects, connect with collaborators, and learn from experts"
            />
          </div>
          <div className=" flex flex-col  lg:mt-10  md:flex-row gap-y-[8rem]  lg:gap-x-[4rem] justify-between items-start ">
            <Card
              img={three}
              title="Collaborate & Innovate"
              details="Engage in collaborative projects, leverage the power of shared knowledge, and bring your ideas to life"
            />

            <Card
              img={four}
              title="Grow & Succeed"
              details="Gain exposure, attract investors, and achieve success with your innovative projects."
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default HowItWorks;
