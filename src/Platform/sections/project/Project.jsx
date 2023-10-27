import { Header } from './components';

import Nav from "../../components/Nav";
import TabHook from "../../Hooks/TabHook";

import pdf from './assets/pdf.svg';
import download from './assets/download.svg';



const Project = () => {
  const { tabs, checkindex, setcheckindex } = TabHook();

  return (
    <section className=" bg-[#fff] ">
      <Nav tabs={tabs} checkindex={checkindex} setcheckindex={setcheckindex} />
      <section className=" mt-44 w-screen px-[2.31rem] ">
        <Header />

        <div className=' font-lato '>
          <div className=' mt-[1.88rem] flex flex-col gap-[0.63rem] '>
            <p className=' text-[#333] text-[3.5rem] font-bold '>Product title</p>
            <p className=' text-[#555] text-[2.33rem] font-normal '>Mobile game</p>
          </div>

          <div className=' mt-[1.88rem] flex flex-col gap-[0.63rem] '>
            <p className=' text-[#333] text-[3.5rem] font-bold '>Product overview</p>
            <p className=' text-[#555] text-[2.33rem] font-normal '>Lorem ipsum dolor sit amet consectetur. Et sit donec est at nec orci sem. Varius placerat velit egestas quam turpis. Elementum et odio malesuada vulputate sollicitudin porttitor. Justo at purus aliquam eget. Orci aliquet duis accumsan semper fermentum urna.</p>
          </div>

          <div className=' mt-[1.88rem] flex flex-col gap-[0.63rem] '>
            <p className=' text-[#333] text-[3.5rem] font-bold '>Objectives</p>
            <ul className=' mx-[2.31rem] pl-[1.25rem] text-[#555] text-[2.33rem] font-normal flex flex-col gap-[0.5rem] '>
              <li>Objective 1</li>
              <li>Objective 2</li>
              <li>Objective 3</li>
            </ul>
          </div>

          <div className=' mt-[1.88rem] flex flex-col gap-[0.63rem] '>
            <p className=' text-[#333] text-[3.5rem] font-bold '>Expected outcomes</p>
            <ul className=' mx-[2.31rem] pl-[1.25rem] text-[#555] text-[2.33rem] font-normal flex flex-col gap-[0.5rem] '>
              <li>Outcome 1</li>
              <li>Outcome 2</li>
              <li>Outcome 3</li>
            </ul>
          </div>

          <div className=' mt-[1.88rem] flex flex-col gap-[0.63rem] '>
            <p className=' text-[#333] text-[3.5rem] font-bold '>Operational document</p>
            <div className=' pr-16 w-full flex items-center justify-between '>
              <div className=' flex items-center gap-[0.81rem] py-2 pl-2 pr-44 rounded-[1rem] border-[2px] border-solid border-[#D5D5D5] '>
                <div className=' flex items-center justify-center p-4 rounded-[1.25rem] border-[2px] border-solid border-[#D5D5D5] '>
                  <img src={pdf} alt="pdf" className=' w-[6rem] h-[6rem] ' />
                </div>

                <div className=' flex flex-col items-start gap-3 '>
                  <p className=' text-[#555] text-[2.33rem] font-medium '>Business plan</p>
                  <p className=' text-[#999] text-[2rem] font-medium '>12KB  .  2 pages</p>
                </div>
              </div>

              <img src={download} alt="download" className=' w-[6rem] h-[6rem] ' />
            </div>
          </div>

          <div className=' mt-[1.88rem] '>
            <p className=' text-[#333] text-[3.5rem] font-bold '>Project Collaborators</p>
          </div>
        </div>

      </section>
    </section>
  )
}

export default Project