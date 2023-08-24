import * as yup from "yup";
export const siginValidation = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  password: yup
    .string()
    .length(8, "Ensure you have eight characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Ensure passsword have at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("Please fill up this field"),
});
