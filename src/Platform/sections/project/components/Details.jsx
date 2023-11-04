import pdf from "../assets/Details/pdf.svg";
import download from "../assets/Details/download.svg";
import award from "../assets/Details/award.svg";
import investor from "../assets/Details/investor.svg";
import brush from "../assets/Details/brush.svg";
import sms from "../assets/Details/sms.png";
import location from "../assets/Details/location.svg";
import { img3 } from "../../homepage/assets/images/BullkImport";
import calendarIcon from "../../../../assets/icons/calendar-icon.svg";
import { useState } from "react";

const Details = () => {
  const [toggleTab, setToggleTab] = useState(0);

  return (
    <div className=" font-lato lg:flex gap-[100px]">
      <div className="lg:flex flex-col gap-[10px]  flex-1">
        <div className=" mt-[30px] flex flex-col gap-[0.75rem] ">
          <p className=" text-[#333] text-[24px] font-bold ">Product title</p>
          <p className=" text-[#555] text-[2rem] font-normal ">Mobile game</p>
        </div>

        <div className=" mt-[30px] flex flex-col gap-[0.75rem] ">
          <p className=" text-[#333] text-[24px] font-bold ">
            Product overview
          </p>
          <p className=" text-[#555] text-[16px] font-normal ">
            Lorem ipsum dolor sit amet consectetur. Et sit donec est at nec orci
            sem. Varius placerat velit egestas quam turpis. Elementum et odio
            malesuada vulputate sollicitudin porttitor. Justo at purus aliquam
            eget. Orci aliquet duis accumsan semper fermentum urna.
          </p>
        </div>

        <div className=" mt-[30px] flex flex-col gap-[0.75rem] ">
          <p className=" text-[#333] text-[24px] font-bold ">Objectives</p>
          <ul className=" mx-[2.31rem] pl-[1.25rem] text-[#555] text-[16px] font-normal flex flex-col gap-[0.5rem] ">
            <li>Objective 1</li>
            <li>Objective 2</li>
            <li>Objective 3</li>
          </ul>
        </div>

        <div className=" mt-[30px] flex flex-col gap-[0.75rem] ">
          <p className=" text-[#333] text-[24px] font-bold ">
            Expected outcomes
          </p>
          <ul className=" mx-[2.31rem] pl-[1.25rem] text-[#555] text-[16px] font-normal flex flex-col gap-[0.5rem] ">
            <li>Outcome 1</li>
            <li>Outcome 2</li>
            <li>Outcome 3</li>
          </ul>
        </div>

        <div className=" mt-[30px] flex flex-col gap-[2.25rem] ">
          <p className=" text-[#333] text-[24px] font-bold ">
            Operational document
          </p>
          <div className="w-full flex items-center gap-[25px] ">
            <div className=" flex items-center gap-[0.81rem] py-2 pl-2 pr-20 rounded-[1rem] border-[2px] border-[#D5D5D5] bg-[#FBFBFB] ">
              <div className=" flex items-center justify-center p-4 rounded-[1.25rem] border-[1px] border-[#D5D5D5] bg-[#FFF]">
                <img src={pdf} alt="pdf" className=" w-[6rem] h-[6rem] " />
              </div>

              <div className=" flex flex-col items-start gap-3 pl-4">
                <p className=" text-[#555] text-[16px] font-bold ">
                  Business plan
                </p>
                <p className=" text-[#999] text-[12px] font-bold ">
                  12KB . 2 pages
                </p>
              </div>
            </div>

            <img
              src={download}
              alt="download"
              className=" w-[6rem] h-[6rem] "
            />
          </div>
        </div>

        <div className=" mt-[30px] flex flex-col gap-[28px] pb-[50px]">
          <p className=" text-[#333] text-[24px] font-bold ">
            Project Collaborators
          </p>
          <div className=" flex items-center gap-32 ">
            <div
              className={`pointer ${
                toggleTab === 0 ? "border-b-4 border-[#054E12]" : ""
              }`}
              onClick={() => {
                setToggleTab(0);
              }}
            >
              <p className=" text-[#333] text-[16px] font-bold ">
                Collaborators
              </p>
            </div>
            <div
              className={`pointer ${
                toggleTab === 1 ? "border-b-4 border-[#054E12]" : ""
              }`}
              onClick={() => {
                setToggleTab(1);
              }}
            >
              <p className=" text-[#999] text-[16px] font-medium ">Investors</p>
            </div>
          </div>

          <div className={`${toggleTab === 0 ? "block" : "hidden"}`}>
            <div className=" flex items-start gap-9 ">
              <div className=" w-[55px] h-[55px] p-2 shadow-[0_4px_4px_0px_rgba(59,128,4,0.10)] rounded-[50%] lg:w-[88px] lg:h-[88px]">
                <img
                  src={img3}
                  alt="profile"
                  className="rounded-[50%]  w-[100%] h-[100%]"
                />
              </div>
              <div className=" flex flex-col items-start gap-9 ">
                <div className=" flex items-start gap-5 ">
                  <div className=" flex flex-col items-start gap-2 ">
                    <p className=" text-[#555] text-[20px] font-bold ">
                      Wright Ramses
                    </p>
                    <p className=" text-[#555] text-[14px] font-medium ">
                      @wrightramses
                    </p>
                  </div>
                  <div className=" flex items-center py-3 px-5 gap-[0.63rem] rounded-[1.75rem] bg-[#EDF7E5] ">
                    <img
                      src={award}
                      alt="Founder badge"
                      className=" w-[3rem] h-[3rem] "
                    />
                    <p className=" text-[#4EAF00] text-[14px] font-bold ">
                      Founder
                    </p>
                  </div>
                </div>
                <div className=" flex items-end gap-5 ">
                  <img src={brush} alt="brush" />
                  <p className=" text-[#555] text-[14px] font-medium ">
                    Game Developer
                  </p>
                </div>
                <div className=" flex items-end gap-5 ">
                  <img src={sms} alt="brush" />
                  <p className=" text-[#555] text-[14px] font-medium ">
                    wrightramses@gmail.com
                  </p>
                </div>
                <div className=" flex items-end gap-5 ">
                  <img src={location} alt="brush" />
                  <p className=" text-[#555] text-[14px] font-medium ">
                    New york, USA
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${toggleTab === 1 ? "block" : "hidden"}`}>
            <div className=" flex items-start gap-9 ">
              <div className=" w-[55px] h-[55px] p-2 shadow-[0_4px_4px_0px_rgba(59,128,4,0.10)] rounded-[50%] lg:w-[88px] lg:h-[88px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/cd4a/0404/dec3b899cca2dd171b89dcf57941c471?Expires=1699833600&Signature=DVg~w~Nps-ANvKE9l2Ug6SDQaQoW~f4Vrtq1OiBJ7G0AiBomJGcUDmiW8pwgsnlhJ-V7tbgog0JZVDqnTDI4dfkSefTbnCWAyDc40oN-XeCLuW3N5yGwChzBAKaZhwzn4zGGmdngVqlRAwhhLDw7BCcFACr7qsv2b8~9~jGrue5BaPfezm5Gk2JZlOs0kFc6SK0euXgrlRnyYHJL7lwwxTL1tvxTZUvWwawqLH7djed4b1ZgKNW06QYEwug~SZM3xNWJKz7f9~Om0AnAvT9rRVmRvJ2KGpvtTYO61bPFM8dZoJs3wezu5eoEYOeX9p794mN3o7KcjF326xyz-yWzOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="profile"
                  className="rounded-[50%]  w-[100%] h-[100%]"
                />
              </div>

              <div className=" flex flex-col items-start gap-9 ">
                <div className=" flex items-start gap-5 ">
                  <div className=" flex flex-col items-start gap-2 ">
                    <p className=" text-[#555] text-[20px] font-bold ">
                      mikelo Michael
                    </p>
                    <p className=" text-[#555] text-[14px] font-medium ">
                      @mikelomichael
                    </p>
                  </div>
                  <div className=" flex items-center py-3 px-5 gap-[0.63rem] rounded-[1.75rem] bg-[#FBECFF] ">
                    <img
                      src={investor}
                      alt="Investor badge"
                      className=" w-[3rem] h-[3rem] "
                    />
                    <p className=" text-[#9747FF] text-[14px] font-bold ">
                      Investor
                    </p>
                  </div>
                </div>
                <div className=" flex items-end gap-5 ">
                  <img src={brush} alt="brush" />
                  <p className=" text-[#555] text-[14px] font-medium ">
                    Venture capitalist
                  </p>
                </div>
                <div className=" flex items-end gap-5 ">
                  <img src={sms} alt="brush" />
                  <p className=" text-[#555] text-[14px] font-medium ">
                    mikelomichael@gmail.com
                  </p>
                </div>
                <div className=" flex items-end gap-5 ">
                  <img src={location} alt="brush" />
                  <p className=" text-[#555] text-[14px] font-medium ">
                  Washington DC, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#F7F7F7] rounded-[40px] py-[30px] px-[15px] lg:bg-[#FFF] flex flex-col gap-[10px] py-0 flex-1">
        <div className="mb-[30px]">
          <p className=" text-[#333] text-[24px] font-bold ">
            Project timeline
          </p>
          <div className="bg-[#EDF7E5] px-[20px] py-[30px] rounded-[20px] mt-[20px] flex items-center gap-[10px]">
            <img src={calendarIcon} />
            <p className="text-[#333] text-[15px] font-bold">
              Aug 24, 2024 - Feb 24, 2025
            </p>
          </div>
        </div>

        <div className="mb-[30px]">
          <p className=" text-[#333] text-[24px] font-bold ">Milestones</p>
          <div className="bg-[#EDF7E5] px-[20px] py-[30px] rounded-[20px] mt-[20px] flex items-center gap-[10px]">
            <ul className=" mx-[2.31rem] text-[#555] text-[16px] font-normal flex flex-col gap-[0.5rem] ">
              <li>
                <span className="font-bold">Brainstorming: </span>Aug 24, 2024 -
                Sep 2, 2024
              </li>
              <li>
                <span className="font-bold">Game design: </span>Sep 5, 2024 -
                Nov 10, 2024
              </li>
              <li>
                <span className="font-bold">Software development: </span>Nov 11,
                2024 - Jan 15, 2025
              </li>
              <li>
                <span className="font-bold">Testing: </span>Jan 16, 2025 - Jan
                31, 2025
              </li>
              <li>
                <span className="font-bold">Receive investors: </span>Feb 1,
                2025 - Feb 24, 2025
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-[30px]">
          <p className=" text-[#333] text-[24px] font-bold ">Required roles</p>
          <div className="bg-[#EDF7E5] px-[20px] py-[30px] rounded-[20px] mt-[20px] flex items-center gap-[10px]">
            <ul className=" mx-[2.31rem] text-[#555] text-[16px] font-normal flex flex-col gap-[0.5rem] ">
              <li>
                <p className="font-bold text-[24px]">Game designer</p>
                <p className="text-[14px]">
                  Average earning :{" "}
                  <span className="text-[#054E12]">$ 1,000 - $1,500</span>
                </p>
              </li>
              <li>
                <p className="font-bold text-[24px]">Business analyst</p>
                <p className=" text-[14px]">
                  Average earning :{" "}
                  <span className="text-[#054E12]">$ 800 - $1,000</span>
                </p>
              </li>
              <li>
                <p className="font-bold text-[24px]">Program manager</p>
                <p className="text-[14px]">
                  Average earning :{" "}
                  <span className="text-[#054E12]">$ 1,200 - $1,500</span>
                </p>
              </li>
              <li>
                <p className="font-bold text-[24px]">Game developer</p>
                <p className="text-[14px]">
                  Average earning:{" "}
                  <span className="text-[#054E12]"> $ 1,200 - $1,500</span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className=" text-[#333] text-[24px] font-bold ">Target audience</p>
          <div className="bg-[#EDF7E5] px-[20px] py-[30px] rounded-[20px] mt-[20px] flex items-center gap-[10px]">
            <ul className=" mx-[2.31rem] text-[#555] text-[16px] font-bold flex flex-col gap-[0.5rem] ">
              <li>Teenage</li>
              <li>Non - binary</li>
              <li>Texas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
