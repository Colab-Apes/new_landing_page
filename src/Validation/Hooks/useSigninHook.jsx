import { useFormik } from "formik";
import axios from "axios";
import { link } from "../Link";
import { siginValidation } from "../signinValidation";

export const useSigninHook = (setopensignupmodalprop, setopenOtpmodalprop) => {
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: siginValidation,
    onSubmit: (values) => {
      axios
        .post(`${link}/auth/login`, {
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
      console.log(values);
      setopensignupmodalprop(false);
      setopenOtpmodalprop(true);
    },
  });
  return { formik };
};
