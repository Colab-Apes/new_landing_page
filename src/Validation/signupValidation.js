import * as yup from "yup";
export const signupValidation = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please fill up this field"),

  // termsAndConditions: yup
  //   .bool()
  //   .oneOf([true], "You need to accept the terms and conditions"),

  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Ensure passsword minimum have at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("Please fill up this field"),
});
