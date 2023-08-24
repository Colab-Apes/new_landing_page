import { useFormik } from "formik";
import { signupValidation } from "../signupValidation";

export const useSignupHooks = (setopensignupmodalprop, setopenOtpmodalprop) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      termsAndConditions: false,
    },
    validationSchema: signupValidation,
    onSubmit: (values) => {
      console.log(values);
      setopensignupmodalprop(false);
      setopenOtpmodalprop(true);
    },
  });
  return { formik };
};
