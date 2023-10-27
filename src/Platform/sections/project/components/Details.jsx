import pdf from '../assets/Details/pdf.svg';
import download from '../assets/Details/download.svg';
import award from '../assets/Details/award.svg';
import brush from '../assets/Details/brush.svg';
import sms from '../assets/Details/sms.png';
import location from '../assets/Details/location.svg';
import { img3 } from "../../homepage/assets/images/BullkImport";



const Details = () => {
  return (
    <div className=' font-lato '>
        <div className=' mt-[1.88rem] flex flex-col gap-[0.75rem] '>
            <p className=' text-[#333] text-[3.5rem] font-bold '>Product title</p>
            <p className=' text-[#555] text-[2.33rem] font-normal '>Mobile game</p>
        </div>

        <div className=' mt-[1.88rem] flex flex-col gap-[0.75rem] '>
            <p className=' text-[#333] text-[3.5rem] font-bold '>Product overview</p>
            <p className=' text-[#555] text-[2.33rem] font-normal '>Lorem ipsum dolor sit amet consectetur. Et sit donec est at nec orci sem. Varius placerat velit egestas quam turpis. Elementum et odio malesuada vulputate sollicitudin porttitor. Justo at purus aliquam eget. Orci aliquet duis accumsan semper fermentum urna.</p>
        </div>

        <div className=' mt-[1.88rem] flex flex-col gap-[0.75rem] '>
            <p className=' text-[#333] text-[3.5rem] font-bold '>Objectives</p>
            <ul className=' mx-[2.31rem] pl-[1.25rem] text-[#555] text-[2.33rem] font-normal flex flex-col gap-[0.5rem] '>
                <li>Objective 1</li>
                <li>Objective 2</li>
                <li>Objective 3</li>
            </ul>
        </div>

        <div className=' mt-[1.88rem] flex flex-col gap-[0.75rem] '>
            <p className=' text-[#333] text-[3.5rem] font-bold '>Expected outcomes</p>
            <ul className=' mx-[2.31rem] pl-[1.25rem] text-[#555] text-[2.33rem] font-normal flex flex-col gap-[0.5rem] '>
                <li>Outcome 1</li>
                <li>Outcome 2</li>
                <li>Outcome 3</li>
            </ul>
        </div>

        <div className=' mt-[1.88rem] flex flex-col gap-[2.25rem] '>
            <p className=' text-[#333] text-[3.5rem] font-bold '>Operational document</p>
            <div className=' pr-16 w-full flex items-center justify-between '>
                <div className=' flex items-center gap-[0.81rem] py-2 pl-2 pr-44 rounded-[1rem] border-[2px] border-[#D5D5D5] '>
                    <div className=' flex items-center justify-center p-4 rounded-[1.25rem] border-[2px] border-[#D5D5D5] '>
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

        <div className=' mt-[1.88rem] flex flex-col gap-[2.75rem] '>
            <p className=' text-[#333] text-[3.5rem] font-bold '>Project Collaborators</p>
            <div className=' flex items-center gap-32 '>
                <div className=' border-b-4 border-[#054E12] '>
                    <p className=' text-[#333] text-[2.33rem] font-bold '>Collaborators</p>
                </div>
                <div>
                    <p className=' text-[#999] text-[2.33rem] font-medium '>Investors</p>
                </div>
            </div>
            <div className=' flex items-start gap-9 '>
                <img src={img3} alt="profile" className=' w-[9rem] h-[9rem] rounded-[7.5rem] '/>
                <div className=' flex flex-col items-start gap-9 '>
                    <div className=' flex items-start gap-5 '>
                        <div className=' flex flex-col items-start gap-2 '>
                            <p className=' text-[#555] text-[3rem] font-bold '>Wright Ramses</p>
                            <p className=' text-[#555] text-[2.15rem] font-medium '>@wrightramses</p>
                        </div>
                        <div className=' flex items-center py-3 px-5 gap-[0.63rem] rounded-[1.75rem] bg-[#EDF7E5] '>
                            <img src={award} alt="Founder badge" className=' w-[3rem] h-[3rem] ' />
                            <p className=' text-[#4EAF00] text-[2rem] font-bold '>Founder</p>
                        </div>
                    </div>
                    <div className=' flex items-end gap-5 '>
                        <img src={brush} alt="brush" />
                        <p className=' text-[#555] text-3xl font-medium '>Game Developer</p>
                    </div>
                    <div className=' flex items-end gap-5 '>
                        <img src={sms} alt="brush" />
                        <p className=' text-[#555] text-3xl font-medium '>wrightramses@gmail.com</p>
                    </div>
                    <div className=' flex items-end gap-5 '>
                        <img src={location} alt="brush" />
                        <p className=' text-[#555] text-3xl font-medium '>New york, USA</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details