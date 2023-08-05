import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel, AccordionItemHeading } from 'react-accessible-accordion'
import './accordion.css';

const AccordionComponent = () => {
    return (
      <Accordion allowMultipleExpanded allowZeroExpanded>
        <AccordionItem className="text-[#054E12] mb-12">
          <AccordionItemHeading>
            <AccordionItemButton>
              <p className="text-4xl text-[#054E12] font-[700]">
                What is Co_lab Apes?
              </p>
              <div className="icon text-[3.5rem]">-</div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel className="">
            <p className="faq-text text-4xl font-[400] leading-relaxed text-center md:text-left pt-10">
              Colab apes aim to link learning and earning by encouraging people
              to develop their skills on the job and creating real-life projects
              that generate revenues, then distributing the profits to all team
              members. Stating its financial targets and discerning how the
              business plans to achieve them promptly.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="mb-12">
          <AccordionItemHeading>
            <AccordionItemButton>
              <p className="faq-border text-[#054E12] text-4xl font-[700] mb-7">
                What is Co_lab Apes?
              </p>
              <div className="icon text-[3.5rem]">-</div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel className="">
            <p className="faq-text text-4xl font-[400] leading-relaxed text-center md:text-left px-10">
              Colab apes aim to link learning and earning by encouraging people
              to develop their skills on the job and creating real-life projects
              that generate revenues, then distributing the profits to all team
              members. Stating its financial targets and discerning how the
              business plans to achieve them promptly.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="mb-12">
          <AccordionItemHeading>
            <AccordionItemButton>
              <p className="faq-border text-[#054E12] text-4xl font-[700] mb-7">
                What is Co_lab Apes?
              </p>
              <div className="icon text-[3.5rem]">-</div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel className="">
            <p className="faq-text text-4xl font-[400] leading-relaxed text-center md:text-left px-10">
              Colab apes aim to link learning and earning by encouraging people
              to develop their skills on the job and creating real-life projects
              that generate revenues, then distributing the profits to all team
              members. Stating its financial targets and discerning how the
              business plans to achieve them promptly.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    );
}

export default AccordionComponent