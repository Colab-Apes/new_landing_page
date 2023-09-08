import { useEffect } from "react";
import { Foot } from "../NewLandingPage/sections";
import TabHook from "./Hooks/TabHook";
import MobileTabs from "./components/MobileTabs";
import Nav from "./components/Nav";
import { CreateProject, HomePage, LearningPool, Project } from "./sections";
import { useNavigate } from "react-router-dom";

const Platform = () => {
  const { tabs, checkindex, setcheckindex } = TabHook();
  const navigate = useNavigate();
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
    const val = localStorage.getItem("LoggedIntoken");
    if (!val) {
      navigate("/");
    }
  });
  return (
    <div className=" bg-[#fff]">
      <Nav tabs={tabs} checkindex={checkindex} setcheckindex={setcheckindex} />
      <div className="bg-[#] px-8 sm:px-10 lg:px-6 xl:px-10 pt-[10rem] sm:mt-32 lg:mt-0  lg:pt-[10rem] xl:pt-[12rem]   ">
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
      {/* <Project /> */}
    </div>
  );
};

export default Platform;