import { useFormik } from "formik";
import { signupValidation } from "../signupValidation";
import axios from "axios";
import { link } from "../Link";

export const useSigninHook = (setopensignupmodalprop, setopenOtpmodalprop) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      termsAndConditions: false,
    },
    validationSchema: signupValidation,
    onSubmit: (values) => {
      axios
        .post(`${link}/auth/login`, {
          firstName: "Anslem",
          lastName: "Kelechi",
          email: "dev@colabapes.com",
          username: "jack345",
          password: "John4321#",
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
