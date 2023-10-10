import { BsChevronDown } from "react-icons/bs";

import logo from "../../assets/logo.webp";
import message from "../../assets/Platform Images/NavImages/message.webp";
import notification from "../../assets/Platform Images/NavImages/notification.webp";

import MobileNav from "./MobileNav";



const Nav = ({ tabs, checkindex, setcheckindex }) => {
  return (
    <div>
      <nav className="font-lato lg:px-6 xl:px-10 bg-[#fff] z-20 hidden lg:flex justify-between items-center  fixed top-0  h-[9rem] w-full ">
        <a
          href="/"
          onClick={() => {
            localStorage.removeItem("LoggedIntoken");
          }}
        >
          <img
            src={logo}
            alt=""
            className="object-contain w-[10rem] md:w-[15rem] lg:w-[14rem] xl:w-[20rem]"
            loading="lazy"
          />
        </a>
        <div className=" z-[20] font-bold flex items-center gap-x-20 text-[24px] text-center mt-8">
          {tabs.map((tab, index) => (
            <p
              onClick={() => setcheckindex(index)}
              key={index}
              className={
                index === checkindex
                  ? `border-b-2  border-b-[#054E12] ${
                      index === 0
                        ? "w-[6rem]  "
                        : "w-[19rem] duration-500 ease-linear "
                    } pb-10 cursor-pointer`
                  : `text-[#33333380]  pb-10 cursor-pointer  border-b-2 duration-200 ease-linear${
                      index === 0 ? "w-[3.7rem]" : "w-[8rem]"
                    }  border-b-white`
              }
            >
              {tab}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-x-14">
          <img
            src={notification}
            alt=""
            className=" object-contain cursor-pointer"
            loading="lazy"
          />
          <img
            src={message}
            alt=""
            className=" object-contain cursor-pointer"
            loading="lazy"
          />

          <div className="flex items-center gap-x-4">
            <img
              className="w-20 h-20 rounded-full"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt="Rounded avatar"
              loading="lazy"
            />
            <BsChevronDown className="text-2xl" />
          </div>
          {/* <div className="flex items-center gap-x-4 ">
            <img src={avatar} alt="" />
            
          </div> */}
        </div>
      </nav>
      {/* <MobileNavComp /> */}
      <MobileNav />
    </div>
  );
};
export default Nav;
