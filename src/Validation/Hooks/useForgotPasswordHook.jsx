import { useFormik } from "formik";
import React, { useState } from "react";
import { forgotPasswordValidation } from "../forgotPasswordValidation";
import axios from "axios";
import { link } from "../Link";
import { toast } from "react-toastify";

const useForgotPasswordHook = (setforgotpasswordprop, setresetpasswordprop) => {
  const [isLoading, setisLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      em_ail: "",
    },
    validationSchema: forgotPasswordValidation,
    onSubmit: (values) => {
      setisLoading(true);
      axios
        .post(`${link}/auth/forgetpassword`, {
          email: values.em_ail,
        })
        .then((res) => {
          console.log(res);
          setisLoading(false);
          //   toast.success("Successful", {
          //     position: "top-center",
          //     autoClose: 2000,
          //     toastId: 2,
          //     theme: "colored",
          //   });
          setforgotpasswordprop(false);
          setresetpasswordprop(true);
        })
        .catch((e) => {
          console.log(e);
          setisLoading(false);
          if (e.response.data.message === "Email or Password Incorrect") {
            toast.error("Incorrect Email or Password", {
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

export default useForgotPasswordHook;
