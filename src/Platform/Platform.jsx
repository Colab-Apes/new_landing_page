import { Foot } from "../NewLandingPage/sections";
import TabHook from "./Hooks/TabHook";
import MobileTabs from "./components/MobileTabs";
import Nav from "./components/Nav";
import { CreateProject, HomePage, LearningPool, Project } from "./sections";

const Platform = () => {
  const { tabs, checkindex, setcheckindex } = TabHook();
  return (
    <>
      <div className=" font-lato  bg-white ">
        <Nav
          tabs={tabs}
          checkindex={checkindex}
          setcheckindex={setcheckindex}
        />
        <div className=" px-8 sm:px-10 lg:px-6 xl:px-10 mt-[6rem] sm:mt-32  lg:mt-[10rem] xl:mt-[12rem]   ">
          <MobileTabs
            tabs={tabs}
            checkindex={checkindex}
            setcheckindex={setcheckindex}
          />

          {checkindex === 0 ? (
            <HomePage />
          ) : checkindex === 1 ? (
            <LearningPool />
          ) : (
            <CreateProject />
          )}
          <Foot />
        </div>
      </div>

      {/* <Project /> */}
    </>
  );
};

export default Platform;
