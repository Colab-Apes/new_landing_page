import * as yup from "yup";
export const siginValidation = yup.object().shape({
  e_mail: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@$!%*?#&]{8,}$/,
      "Ensure passsword minimum have at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("Please fill up this field"),
});
