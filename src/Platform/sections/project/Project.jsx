import { Header, Details } from './components';

import Nav from "../../components/Nav";
import TabHook from "../../Hooks/TabHook";



const Project = () => {
  const { tabs, checkindex, setcheckindex } = TabHook();

  return (
    <section className=" bg-[#fff] ">
      <Nav tabs={tabs} checkindex={checkindex} setcheckindex={setcheckindex} />
      <section className=" mt-44 w-screen px-[2.31rem] ">
        <Header />
        <Details />
        

      </section>
    </section>
  )
}

export default Project