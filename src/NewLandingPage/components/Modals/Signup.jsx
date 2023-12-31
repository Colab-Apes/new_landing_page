import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { Lock, Message } from "react-iconly";
import { TfiClose } from "react-icons/tfi";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

import { useSignupHooks } from "../../../Validation/Hooks/useSignupHooks";

import img1 from "../../../assets/ModalImages/sidebar.webp";
import logo from "../../../assets/ModalImages/logo.webp";

import google from "../../../assets/ModalImages/social/Google logo.png";
import facebook from "../../../assets/ModalImages/social/Facbook.png";
import apple from "../../../assets/ModalImages/social/Vector.svg";

import "../../../App.css";



const Signup = ({
  setopenOtpmodalprop,
  setopensignupmodalprop,
  opensignupmodalprop,
  setsigninmodalprop,
  changeValueprop,
  setopenverifiedmodalprop,
}) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);

  const { formik, isLoading } = useSignupHooks(
    setopensignupmodalprop,
    setopenOtpmodalprop
  );

  return (
    <div
      className={
        opensignupmodalprop
          ? " rounded-[20px] lg:rounded-[50px] w-full z-[120]   bg-[#F5FFF7] flex items-center justify-between min-h-[50rem] r   py-0  sm:pb-0 md:py-4      sm:min-h-[35rem] lg:min-h-[32rem] lg:w-full  xl:min-h-[54rem] xl:h-[] lg:p-[3rem]  xl:w-full  md:w-ful sm:px-8 md:px-[3rem] xl:px-[3.5rem] opacity-100 xl:py-[0rem]  relative duration-[800ms] ease-in-out"
          : "hidden"
      }
    >
      <div className="bg-[#C26AAA] blur-[150px] h-[24rem] left-0  top-0 rounded-full w-[24rem] absolute z-10"></div>
      <div className="bg-[#054E12] blur-[500px] h-[50rem] left-0  top-0 rounded-full w-[50rem] absolute -z-10"></div>
      <div
        className={
          "flex flex-col z-[120]  w-full  lg:flex-row lg:gap-x-5 xl:gap-x-[2rem] px-4 lg:px-0  justify-center lg:justify-between h-full items-center lg:items-start"
        }
      >
        <TfiClose
          onClick={() => {
            changeValueprop(false);
            setopensignupmodalprop(true);
            setopenverifiedmodalprop(false);
            setopenOtpmodalprop(false);
            setsigninmodalprop(false);
          }}
          className="text-3xl lg:text-xl xl:text-3xl text-[#999999] font-bold cursor-pointer z-[200] absolute right-12 top-16  md:top-8 lg:top-10 xl:right-28 xl:top-14 md:right-8 lg:right-10 "
        />

        <div className="w-full h-full lg:block  hidden  lg:rounded-[25px] ">
          <img src={img1} alt="" className="lg:rounded-[25px] object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col  w-full justify-evenly h-full lg:justify-normal   items-center  sm:w-[19rem] lg:w-full lg:h-full md:w-full md:h-full ">
          <div className=" flex flex-col justify-center items-center mt-[4rem] lg:mt-0">
            <img
              src={logo}
              alt=""
              className="w-[12rem] sm:w-[6.25rem] lg:w-[8rem] object-contain "
              loading="lazy"
            />
            <p className="text-[#555555] font-bold text-2xl text-center mt-6 md:mt-4 lg:mt-1 lg:hidden">
              Sign up to Get Started
            </p>
          </div>
          <p className="text-[#555] font-bold text-[1.2rem]  hidden lg:block  text-center mt-6 md:mt-4 lg:mt-[1.2rem] mb-0">
            Sign up to Get Started
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
            className="w-full  flex flex-col justify-between gap-y-8 mt-8 lg:mt-4  md:gap-y-4 lg: text-sm px-10 lg:px-14"
            action=""
          >
            <div className="relative ">
              <span>
                {" "}
                <Message
                  set="curved"
                  primaryColor="#999999"
                  className="inset-y-[3.5rem] left-1 absolute px-[0.2rem] "
                />
              </span>
              <label
                htmlFor="e_mail"
                className="text-[#333] block font-bold text-xl"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={
                  formik.errors.email && formik.touched.email
                    ? "w-full pl-14 lg:pl-11 h-[4.5rem] md:h-[3.8rem] text-xl   bg-[#FFFFFF] mt-4 xl:mt-4 rounded-[5px] font-lato px-10 border border-red-500  focus:border-2    focus:outline-none"
                    : "w-full pl-14 lg:pl-11 h-[4.5rem] md:h-[3.8rem] text-xl   bg-[#FFFFFF] mt-4 xl:mt-4 rounded-[5px] font-lato px-10 border focus:border-3  focus:border-[#3B8004] border-[#999999] focus:outline-none"
                }
                placeholder="johndoe@email.com"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <p className="text-red-500 text-xl">{formik.errors.email}</p>
              ) : (
                ""
              )}
            </div>
            <div className="relative   md:mt-0 lg:mt-4">
              <span>
                <Lock
                  set="curved"
                  primaryColor="#999999"
                  className="absolute inset-y-[3.5rem] left-1 px-[0.2rem]"
                />
              </span>
              <label
                htmlFor="password"
                className="text-[#333] block font-bold text-xl"
              >
                Create password
              </label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                className={
                  formik.errors.password && formik.touched.password
                    ? "w-full pl-14 lg:pl-11  h-[4.5rem] md:h-[3.8rem]  text-xl bg-[#FFFFFF] mt-4 xl:mt-4 rounded-[5px] px-10  border  border-red-500 focus:border-2 focus:border-[#3B8004] focus:outline-none"
                    : "w-full pl-14 lg:pl-11  h-[4.5rem] md:h-[3.8rem]  text-xl bg-[#FFFFFF] mt-4 xl:mt-4 rounded-[5px] px-10  border  border-[#999999] focus:border-2 focus:border-[#3B8004] focus:outline-none"
                }
                placeholder="● ● ● ● ● ● ●"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />

              {isPasswordVisible ? (
                <MdOutlineVisibilityOff
                  onClick={() => setisPasswordVisible(!isPasswordVisible)}
                  className="absolute inset-y-[3.6rem] right-4 px-[0.2rem] text-4xl text-[#333333]"
                />
              ) : (
                <MdOutlineVisibility
                  onClick={() => setisPasswordVisible(!isPasswordVisible)}
                  className="absolute inset-y-[3.6rem] right-4 px-[0.2rem] text-4xl text-[#333333]"
                />
              )}
              {formik.errors.password && formik.touched.password ? (
                <p className="text-red-500 text-xl ">
                  {formik.errors.password}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="flex items-start gap-x-3 mt-0  lg:mt-1 font-normal text-2xl xl:text-xl">
              <input
                type="checkbox"
                id="termsAndConditions"
                className={
                  // formik.errors.termsAndConditions &&
                  // formik.errors.termsAndConditions
                  //? "accent-[#3B8004] border border-red-500 hover:accent-[#3B8004] font-lato"
                  "accent-[#3B8004]  hover:accent-[#3B8004] font-lato"
                }
                // onChange={formik.handleChange}
                // checked={formik.values.termsAndConditions}
                // onBlur={formik.handleBlur}
              />

              <p className="text-[#999999]">
                By registering, you are agreeing with our{" "}
                <Link to={"/termsofuse"} className="underline text-[#3B8004] ml-1">
                  Terms of Use{" "}
                </Link>
                and
                <Link to={"/privacypolicy"} className="underline text-[#3B8004] ml-1">
                  Privacy Policy
                </Link>
              </p>
            </div>

            {/* <p
              className={
                formik.errors.termsAndConditions &&
                formik.touched.termsAndConditions
                  ? "text-red-500 text-xl"
                  : "opacity-0"
              }
            >
              {formik.errors.termsAndConditions}
            </p> */}

            <button
              // type="submit"
              className="font-bold  text-2xl xl:text-xl btngrad rounded-[10px] h-[4rem] xl:h-[4rem] lg:mt-3  text-white "
            >
              {isLoading ? (
                <ClipLoader
                  color="#fff"
                  className="right-5 text-2xl  inset-y-4  "
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Create Account"
              )}
            </button>
          </form>{" "}
          <p className="text-[#999999] text-lg text-center mt-8 lg:mt-3 lg:text-lg">
            Or Continue with
          </p>
          <div className="flex flex-col w-full  md:mt-0 lg:mt-3 px-10 lg:px-14">
            <div className="flex justify-evenly mt-4 w-full gap-x-4 lg:gap-x-4  xl:gap-x-6 lg:mt-0">
              <div className="flex justify-center cursor-pointer items-center h-[3.6rem] w-full bg-[#F8F8F8]   border lg:border-2 border-solid border-[#DDDDDD] rounded-[6px]">
                <img
                  src={google}
                  alt=""
                  className="w-[1.6rem] object-contain"
                  loading="lazy"
                />
              </div>{" "}
              <div className="flex justify-center cursor-pointer items-center h-[3.6rem] w-full  bg-[#F8F8F8]     border xl:border-2 border-solid border-[#DDDDDD] rounded-[6px]">
                <img
                  src={facebook}
                  alt=""
                  className="w-[1.6rem] object-contain"
                  loading="lazy"
                />
              </div>{" "}
              <div className="flex justify-center  cursor-pointer items-center h-[3.6rem]  w-full bg-[#F8F8F8]  border xl:border-2 border-solid border-[#DDDDDD] rounded-[6px]">
                <img src={apple} alt="" className="w-[1.6rem] object-contain" loading="lazy" />
              </div>
            </div>
            <div className="mt-[1.34rem] mb-[1.28rem] text-lg p-3 md:mt-8 lg:mt-2 ">
              <p className="flex justify-center items-center text-center lg:text-lg">
                <span className="text-[#999999]">Already have an account?</span>
                <p
                  onClick={() => {
                    setopensignupmodalprop(false);
                    setsigninmodalprop(true);
                  }}
                  className="text-[#054E12] font-bold cursor-pointer ml-1"
                  href="/"
                >
                  Sign In
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
