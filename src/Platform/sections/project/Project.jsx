import { Header, Details } from './components';

import Nav from "../../components/Nav";
import TabHook from "../../Hooks/TabHook";
import CopyRight from '../../../components/Copyright/CopyRight';




const Project = () => {
  const { tabs, checkindex, setcheckindex } = TabHook();

  return (
    <section className=" bg-[#fff] pb-[30px]">
      <Nav tabs={tabs} checkindex={checkindex} setcheckindex={setcheckindex} />
      <section className=" pt-52 w-full px-[2.31rem] pb-10 md:px-40 lg:px-60">
        <Header />
        <Details />
        
      </section>
      <CopyRight/>
    </section>
  )
}

export default Project