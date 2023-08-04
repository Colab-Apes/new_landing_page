import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import AccordionComponent from './AccordionComponent';
const TabComponent = () => {
  return (
    <Tabs className="modal-tabs bg-[#D5EEDA] h-[85%] w-[100%] overflow-auto rounded-xl p-30 px-10 md:px-40 py-32">
      <TabList className="mb-20 border-b inline-block ">
        <div className="tab flex gap-3 bg-[#fff] p-2 rounded-3xl">
          <Tab className="modal-tabs__tab cursor-pointer text-[1.4rem] md:text-[1.8rem] text-[#054E12] bg-[#E9F6EC] rounded-3xl px-7 py-4" selectedClassName="modal-tabs__tab--selected bg-gradient-to-r from-[#4BA900] to-[#007D16] text-[#fff] transition-all duration-300">
            Co_lab Apes
          </Tab>
          <Tab className="modal-tabs__tab cursor-pointer text-[1.4rem] md:text-[1.8rem] text-[#054E12] bg-[#E9F6EC] rounded-3xl px-7 py-4" selectedClassName="modal-tabs__tab--selected bg-gradient-to-r from-[#4BA900] to-[#007D16] text-[#fff] transition-all duration-300">
            Community
          </Tab>
          <Tab className="modal-tabs__tab cursor-pointer text-[1.4rem] md:text-[1.8rem] text-[#054E12] bg-[#E9F6EC] rounded-3xl px-7 py-4" selectedClassName="modal-tabs__tab--selected bg-gradient-to-r from-[#4BA900] to-[#007D16] text-[#fff] transition-all duration-300">
            See All
          </Tab>
        </div>
      </TabList>

      <TabPanel className="modal-tabs__tab-panel" selectedClassName="modal-tabs__tab-panel--selected">
        <AccordionComponent />
      </TabPanel>
      <TabPanel className="modal-tabs__tab-panel" selectedClassName="modal-tabs__tab-panel--selected">
        <AccordionComponent />
      </TabPanel>
      <TabPanel className="modal-tabs__tab-panel" selectedClassName="modal-tabs__tab-panel--selected">
        <AccordionComponent />
      </TabPanel>
    </Tabs>
  )
}

export default TabComponent
