import Project from "./components/Project";
import { img1, img2, img3, img4 } from "./assets/images/BullkImport";

const HomePage = () => {
  return (
    <div className=" mt-[2.75rem] lg:mt-[4.13rem] px-[0.13rem] ">
      {/* <MobileTabs /> */}
      <div className="text-left font-lato text-[#333] mt-4 ">
        <p className="  text-[2.95rem] sm:text-3xl lg:text-[5.3rem] font-semibold ">
          Discover Amazing Projects From Around The World
        </p>
        <p className=" font-[300] text-left mt-4 text-[1.7rem]/[3.75rem] lg:text-[2.65rem] sm:text-base lg:mt-[4.5rem] ">
          Join Projects That Interests You And Be A Part Of Their Success Story
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-[2.44rem] sm:mt-20 lg:mt-[6rem] gap-y-10 sm:gap-y-20 sm:gap-x-10 md:gap-10 lg:gap-y-10  lg:gap-x-4  xl:gap-x-6 xl:gap-y-10   mx-auto w-full ">
        <Project image={img1} name="Mobile game" creator="Templeton Peck" />
        <Project image={img2} name="Product design" creator="Multiple owners" />
        <Project image={img3} name="Video game" creator="Mercy Torello" />
        <Project
          image={img4}
          name="Data analysis"
          creator="Multiple owners"
        />{" "}
        <Project image={img1} name="Mobile game" creator="Templeton Peck" />
        <Project image={img2} name="Product design" creator="Multiple owners" />
        <Project image={img3} name="Video game" creator="Mercy Torello" />
        <Project
          image={img4}
          name="Data analysis"
          creator="Multiple owners"
        />{" "}
        <Project image={img1} name="Mobile game" creator="Templeton Peck" />
        <Project image={img2} name="Product design" creator="Multiple owners" />
        <Project image={img3} name="Video game" creator="Mercy Torello" />
        <Project image={img4} name="Data analysis" creator="Multiple owners" />
      </div>
      
      <div className=" w-full flex justify-center items-center  mt-10 mb-10 ">
        <button className="h-[2rem] mx-auto  w-[8rem] sm:h-[3rem] sm:w-[12rem] lg:h-[2.6rem] lg:w-[8rem] xl:h-[3rem] xl:w-[10rem] xl:text-xl border border-solid border-[#999] text-[#999] rounded-[15px] font-bold ">
          Load more...
        </button>
      </div>
    </div>
  );
};

export default HomePage;
