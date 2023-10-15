import Learn from "./components/Learn";
import { img1, img2, img3, img4, img5, img6, img7, img8 } from "./assets/BulkImport";

const LearningPool = () => {
  return (
    <div className=" mt-[8rem] lg:mt-[4.13rem] px-[0.13rem] ">
      {" "}
      <p className="text-left font-lato text-[#333] mt-4 ">
        <p className=" text-[2.95rem] sm:text-3xl lg:text-[5.3rem] font-semibold">
          Get A New Skill Or Master An Existing One
        </p>
        <p className=" font-[300] text-left mt-4 text-[1.7rem]/[3.75rem] lg:text-[2.65rem] sm:text-base lg:mt-[4.5rem] ">
          Join A Learning Pool Group to Start Learning And Interacting With
          Other Learners
        </p>
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-[2.44rem] sm:mt-20 lg:mt-[6rem] gap-y-10 sm:gap-y-20 sm:gap-x-10 md:gap-10 lg:gap-y-10  lg:gap-x-4  xl:gap-x-6 xl:gap-y-10   mx-auto w-full ">
        <Learn image={img1} name="Analytics" />
        <Learn image={img2} name="Artificial Intelligence" />
        <Learn image={img3} name="Animation" />
        <Learn image={img4} name="Coding" />
        <Learn image={img5} name="Data Science" />
        <Learn image={img6} name="Content Writing" />
        <Learn image={img7} name="Video Editing" />
        <Learn image={img8} name="3D Modelling" />
        <Learn image={img1} name="Analytics" />
        <Learn image={img2} name="Artificial Intelligence" />
        <Learn image={img3} name="Animation" />
        <Learn image={img4} name="Coding" />
        <Learn image={img5} name="Data Science" />
        <Learn image={img6} name="Content Writing" />
        <Learn image={img7} name="Video Editing" />
        <Learn image={img8} name="3D Modelling" />
        <Learn image={img1} name="Analytics" />
        <Learn image={img2} name="Artificial Intelligence" />
        <Learn image={img3} name="Animation" />
        <Learn image={img4} name="Coding" />
      </div>
      <div className="w-full flex justify-center items-center  mt-10 mb-10">
        <button className="h-[2rem] mx-auto  w-[8rem] sm:h-[3rem] sm:w-[12rem] lg:h-[2.6rem] lg:w-[8rem] xl:h-[3rem] xl:w-[10rem] xl:text-xl border border-solid border-[#999] text-[#999] rounded-[15px] font-bold ">
          Load more...
        </button>
      </div>
    </div>
    // <section className=" mt-[2.75rem] lg:mt-[4.13rem] px-[0.13rem] ">
    //   <header className=" text-[#333] font-lato text-[1.5rem]/[3.75rem]  ">
    //     <h4 className=" font-[700] text-[2.95rem] lg:text-[4rem] ">Get A New Skill Or Master An Existing One</h4>
    //     <p className=" font-[400] text-[1.7rem] ">Join A Learning Pool Group To Start Learning And Interacting With Other Learners</p>
    //   </header>
    // </section>
  )
}

export default LearningPool