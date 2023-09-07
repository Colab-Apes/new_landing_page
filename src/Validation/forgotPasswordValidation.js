import * as yup from "yup";
export const forgotPasswordValidation = yup.object().shape({
  em_ail: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
});
