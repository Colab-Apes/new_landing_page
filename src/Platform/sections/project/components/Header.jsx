import { Link } from 'react-router-dom';

import flag from '../assets/Header/flag.svg';
import arrow from '../assets/Header/arrow.svg';
import dot from '../assets/Header/dot.svg'
import { img1 } from "../../homepage/assets/images/BullkImport";
import edit from "../../../../assets/icons/edit-2.svg";

const Header = () => {
  return (
    <div className=" w-full inline-flex items-center justify-between gap-[1.94rem] ">
        <div className=" flex items-center gap-[2.44rem] ">
            <Link to="/home">
                <img src={arrow} alt="back arrow" className="  "/>
            </Link>

            <div className=" flex items-center gap-[1.69rem] ">
                <img src={img1} alt="" className=" w-[55px] h-[55px] rounded-[1.83rem] " />

                <div className=" flex flex-col items-start gap-[0.31rem] ">
                    <p className=" text-[#054E12] font-lato text-[24px] font-[600] ">Mobile game</p>
                    <div className=" flex items-center gap-[0.66rem] ">
                        <p className=" text-[#555] font-lato text-[15px] font-[400] ">Mercy Torello</p>
                        <img src={dot} alt="dot" className=" w-[1rem] h-[1rem] "/>
                        <p className=" text-[#999] font-lato text-[15px] font-[500] ">Following</p>
                    </div>
                </div>
            </div>
        </div>

        <img src={flag} alt="flag" className="lg:hidden" />
        <div className='hidden lg:flex gap-[10px] items-center pointer'>
        <img src={edit} alt="" />
        <p className="text-[24px] text-[#555]">Edit project</p>
        </div>
    </div>
  )
}

export default Header