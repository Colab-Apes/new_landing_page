import { useFormik } from "formik";
import { signupValidation } from "../signupValidation";
import axios from "axios";
import { link } from "../Link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useSignupHooks = (setopensignupmodalprop, setopenOtpmodalprop) => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      // termsAndConditions: false,
    },
    validationSchema: signupValidation,
    onSubmit: (values) => {
      setisLoading(true);
      axios
        .post(`${link}/auth/signup`, values)
        .then((res) => {
          console.log(res);
          setisLoading(false);
          toast.success("Successful", {
            position: "top-center",
            autoClose: 2000,
            toastId: 2,
            theme: "colored",
          });
          // setopensignupmodalprop(false);
          // setopenOtpmodalprop(true);
          localStorage.setItem("LoggedIntoken", res.data.token.toString());
          navigate("/home");
        })
        .catch((e) => {
          console.log(e);
          setisLoading(false);
          if (e.response.data.message === "Ouch, Email Exists Already!") {
            toast.error("Ouch, Email Exists Already", {
              position: "top-center",
              autoClose: 2000,
              toastId: 2,
              theme: "colored",
            });
          } else {
            toast.error("An error occurred", {
              position: "top-center",
              autoClose: 2000,
              toastId: 2,
              theme: "colored",
            });
          }
        });
    },
  });
  return { formik, isLoading };
};
