import React from "react";
import img1 from "./assets/circle.svg";
import img2 from "./assets/circle2.svg";
import img3 from "./assets/circle3.svg";
import "../../../App.css";
import Step1 from "./components/Step1";
import { useState } from "react";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
const CreateProject = () => {
  const [openstep1, setopenstep1] = useState(true);
  const [openstep2, setopenstep2] = useState(false);
  const [openstep3, setopenstep3] = useState(false);
  const [openstep4, setopenstep4] = useState(false);
  return (
    <div className="font-lato">
      <div className="w-full mt-8 lg:mt-0 py-32 shadow-[-5px_15px_50px_0px_rgba(5,_78,_18,_0.05)] min-h-[32rem] bg-white rounded-[30px] px-60">
        <p className="text-[#333] xl:text-[40px] font-bold">
          Create new project
        </p>
        <Step1
          setopenstep1={setopenstep1}
          openstep1={openstep1}
          setopenstep2={setopenstep2}
        />
        <Step2
          setopenstep2={setopenstep2}
          openstep2={openstep2}
          setopenstep3={setopenstep3}
        />
         <Step3
          setopenstep3={setopenstep3}
          openstep3={openstep3}
          setopenstep4={setopenstep4}
        />
      </div>
    </div>
  );
};

export default CreateProject;
