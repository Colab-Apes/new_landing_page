import { Header } from './components';

import Nav from "../../components/Nav";
import TabHook from "../../Hooks/TabHook";



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
          <div className=' mt-[1.88rem] '>
            <p className=' text-[#333] text-[3.5rem] font-bold '>Operational document</p>
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