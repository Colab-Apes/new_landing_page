import { useFormik } from "formik";
import React, { useState } from "react";
import { resetPasswordValidation } from "../resetPasswordValidation";
import { link } from "../Link";
import axios from "axios";
import { toast } from "react-toastify";

const useResetPassword = (setresetpasswordprop, setsuccessprop) => {
  const [isLoading, setisLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      p_assword: "",
      confirm_Password: "",
    },
    validationSchema: resetPasswordValidation,
    onSubmit: (values) => {
      setisLoading(true);
      axios
        .post(
          `${link}/auth/resetpassword/a7a6579baaa1541a6374dce2b240c78312ec63e37e253c7f564f265587b9d177`,
          { password: values.p_assword }
        )
        .then((res) => {
          console.log(res);
          setisLoading(false);
          //   toast.success("Successful", {
          //     position: "top-center",
          //     autoClose: 2000,
          //     toastId: 2,
          //     theme: "colored",
          //   });
          setresetpasswordprop(false);
          setsuccessprop(true);
        })
        .catch((e) => {
          console.log(e);
          setisLoading(false);
          if (
            e.response.data.message ===
            "Invalid Reset Token or Expired Token, Try Again"
          ) {
            toast.error("Invalid Token", {
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

export default useResetPassword;
