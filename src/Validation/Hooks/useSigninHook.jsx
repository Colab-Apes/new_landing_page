import { useFormik } from "formik";
import axios from "axios";
import { link } from "../Link";
import { siginValidation } from "../signinValidation";
import { useState } from "react";
import { toast } from "react-toastify";

export const useSigninHook = (setopensignupmodalprop, setopenOtpmodalprop) => {
  const [isLoading, setisLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      e_mail: "",
      password: "",
    },
    validationSchema: siginValidation,
    onSubmit: (values) => {
      setisLoading(true);
      axios
        .post(`${link}/auth/login`, {
          email: values.e_mail,
          password: values.password,
        })
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
