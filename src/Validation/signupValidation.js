import * as yup from "yup";
export const signupValidation = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  password: yup
    .string()
    .matches(
      /^[^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$]+$/,
      "Please your message"
    )
    .required("Please fill up this field"),
});
