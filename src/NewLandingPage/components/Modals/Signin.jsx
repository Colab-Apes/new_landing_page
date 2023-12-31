import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useSigninHook } from "../../../Validation/Hooks/useSigninHook";
import { Lock, Message } from "react-iconly";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

import img1 from "../../../assets/ModalImages/signin.webp";
import logo from "../../../assets/ModalImages/logo.webp";
import google from "../../../assets/ModalImages/social/Google logo.png";
import facebook from "../../../assets/ModalImages/social/Facbook.png";
import apple from "../../../assets/ModalImages/social/Vector.svg";

import "../../../App.css";



const Signin = ({
  setopenOtpmodalprop,
  setopensignupmodalprop,
  setsigninmodalprop,
  changeValueprop,
  setopenverifiedmodalprop,
  signinmodalprop,
  setforgotpasswordprop,
}) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const { formik, isLoading } = useSigninHook();
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
    const val = localStorage.getItem("LoggedIntoken");
    if (val) {
      navigate("/home");
    }
  });
  return (
    <div
      className={
        signinmodalprop
          ? " rounded-[20px] lg:rounded-[50px] z-[120] mt-20 lg:mt-0   bg-[#F5FFF7] flex items-center justify-between min-h-[63rem] r  w-[40rem] py-0  sm:pb-0 md:py-4      sm:min-h-[35rem] lg:min-h-[32rem] lg:w-[67.9rem]  xl:min-h-[54rem] xl:h-[] lg:p-[3rem]  xl:w-full  md:w-ful sm:px-8 md:px-[3rem] xl:px-[3.5rem] opacity-100 xl:py-[3.5rem]  relative duration-[800ms] ease-in-out"
          : "hidden"
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
        className="text-3xl lg:text-xl xl:text-3xl text-[#999999] font-bold cursor-pointer z-[400] absolute right-12 top-16  md:top-8 lg:top-10 xl:right-28 xl:top-14 md:right-8 lg:right-10 "
      />
      <div className="bg-[#C26AAA] blur-[150px] h-[24rem] left-0  top-0 rounded-full w-[24rem] absolute z-10"></div>
      <div className="bg-[#054E12] blur-[500px] h-[50rem] left-0  top-0 rounded-full w-[50rem] absolute -z-10"></div>

      <div
        className={
          "flex flex-col z-[120]  w-full   lg:flex-row lg:gap-x-5 xl:gap-x-[2rem] px-4 lg:px-0  justify-center lg:justify-between h-full items-center lg:items-start"
        }
      >
        <div className="w-full h-full lg:block  hidden  lg:rounded-[25px] ">
          <img src={img1} alt="" className="lg:rounded-[25px] object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col  w-full justify-evenly h-full lg:justify-normal   items-center  sm:w-[19rem] lg:w-full lg:h-full md:w-full md:h-full ">
          <div className=" flex flex-col justify-center items-center">
            <img
              src={logo}
              alt=""
              className="w-[12rem] sm:w-[6rem] lg:w-[8.7rem] object-contain "
              loading="lazy"
            />
          </div>
          <p className="text-[#555555] font-bold text-center text-xl lg:text-2xl mt-1 md:mt-4 lg:mt-6">
            Welcome Back!
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
            className="w-full  flex flex-col justify-between gap-y-8 mt-2 md:gap-y-4 lg:mt-8 text-sm px-10 lg:px-14"
            action=""
          >
            <div className="relative ">
              <span>
                {" "}
                <Message
                  set="curved"
                  primaryColor="#999999"
                  className="inset-y-[3.5rem] lg:inset-y-[3rem] left-1 absolute px-[0.2rem] "
                />
              </span>
              <label htmlFor="e_mail" className="block font-bold text-xl">
                Email
              </label>
              <input
                type="email"
                id="e_mail"
                className={
                  formik.errors.e_mail && formik.touched.e_mail
                    ? "w-full pl-14 lg:pl-11 h-[4.5rem] md:h-[3.8rem] text-xl   bg-[#FFFFFF] mt-4 lg:mt-2 rounded-[5px] font-lato px-10 border border-red-500  focus:border-2    focus:outline-none"
                    : "w-full pl-14 lg:pl-11 h-[4.5rem] md:h-[3.8rem] text-xl   bg-[#FFFFFF] mt-4 lg:mt-2 rounded-[5px] font-lato px-10 border focus:border-2  focus:border-[#3B8004] border-[#999999] focus:outline-none"
                }
                placeholder="johndoe@email.com"
                onChange={formik.handleChange}
                value={formik.values.e_mail}
                onBlur={formik.handleBlur}
              />
              {formik.errors.e_mail && formik.touched.e_mail ? (
                <p className="text-red-500 text-xl">{formik.errors.e_mail}</p>
              ) : (
                ""
              )}
            </div>
            <div className="relative   md:mt-0 lg:mt-4">
              <span>
                <Lock
                  set="curved"
                  primaryColor="#999999"
                  className="absolute inset-y-[3.5rem] lg:inset-y-[3rem] left-1 px-[0.2rem]"
                />
              </span>
              <div className="flex text-xl justify-between items-center ">
                {" "}
                <label htmlFor="password" className=" font-bold block">
                  Password
                </label>
                <button
                  className="text-[#3B8004] font-semibold text-[1.25rem]"
                  onClick={() => {
                    setsigninmodalprop(false);
                    setforgotpasswordprop(true);
                  }}
                  type="button"
                >
                  {" "}
                  Forgot password?
                </button>
              </div>
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                className={
                  formik.errors.password && formik.touched.password
                    ? "w-full pl-14 lg:pl-11  h-[4.5rem] md:h-[3.8rem]  text-xl bg-[#FFFFFF] mt-4 lg:mt-2 rounded-[5px] px-10  border  border-red-500 focus:border-2 focus:border-[#3B8004] focus:outline-none"
                    : "w-full pl-14 lg:pl-11  h-[4.5rem] md:h-[3.8rem]  text-xl bg-[#FFFFFF] mt-4 lg:mt-2 rounded-[5px] px-10  border  border-[#999999] focus:border-2 focus:border-[#3B8004] focus:outline-none"
                }
                placeholder="● ● ● ● ● ● ●"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />

              {isPasswordVisible ? (
                <MdOutlineVisibilityOff
                  onClick={() => setisPasswordVisible(!isPasswordVisible)}
                  className="absolute inset-y-[3rem] right-4 px-[0.2rem] text-4xl text-[#333333]"
                />
              ) : (
                <MdOutlineVisibility
                  onClick={() => setisPasswordVisible(!isPasswordVisible)}
                  className="absolute inset-y-[3rem] right-4 px-[0.2rem] text-4xl text-[#333333]"
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

            <button
              // type="submit"
              className="font-bold text-2xl xl:text-xl btngrad rounded-[10px] h-[4rem] xl:h-[4rem] lg:mt-3  text-white "
            >
              {isLoading ? (
                <ClipLoader
                  color="#fff"
                  className="right-5 text-2xl  inset-y-4  "
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Sign In"
              )}
            </button>
          </form>{" "}
          <div className="flex flex-col w-full mt-4 md:mt-8 lg:mt-4">
            <p className="text-[#999999] text-lg text-center mt-8 lg:mt-4 lg:text-lg">
              Or Continue with
            </p>
            <div className="flex flex-col w-full  md:mt-0 lg:mt-4 px-10 lg:px-14">
              <div className="flex justify-evenly mt-4 w-full gap-x-4 lg:gap-x-4  xl:gap-x-6 lg:mt-0">
                <div className="flex justify-center cursor-pointer items-center h-[3.6rem] w-full bg-[#F8F8F8]   border lg:border-2 border-solid border-[#DDDDDD] rounded-[10px]">
                  <img
                    src={google}
                    alt=""
                    className="w-[1.6rem] object-contain"
                    loading="lazy"
                  />
                </div>{" "}
                <div className="flex justify-center cursor-pointer items-center h-[3.6rem] w-full  bg-[#F8F8F8]     border xl:border-2 border-solid border-[#DDDDDD] rounded-[10px]">
                  <img
                    src={facebook}
                    alt=""
                    className="w-[1.6rem] object-contain"
                    loading="lazy"
                  />
                </div>{" "}
                <div className="flex justify-center  cursor-pointer items-center h-[3.6rem]  w-full bg-[#F8F8F8]  border xl:border-2 border-solid border-[#DDDDDD] rounded-[10px]">
                  <img
                    src={apple}
                    alt=""
                    className="w-[1.6rem] object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-20  text-lg   md:mt-8 lg:mt-4 xl:mt-6 ">
                <p className="flex justify-center items-center text-center lg:text-lg">
                  <span className="text-[#999999]">
                    Already have an account?
                  </span>
                  <p
                    onClick={() => {
                      setopensignupmodalprop(true);
                      setsigninmodalprop(false);
                    }}
                    className="text-[#054E12] font-bold cursor-pointer ml-1"
                    href="/"
                  >
                    Signup
                  </p>
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Signin;
