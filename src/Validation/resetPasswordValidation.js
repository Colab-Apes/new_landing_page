import * as yup from "yup";
export const resetPasswordValidation = yup.object().shape({
  p_assword: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Ensure passsword minimum have at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("Please fill up this field"),
  confirm_Password: yup
    .string()
    .oneOf([yup.ref("p_assword")], "Passwords must match")
    .required("Please fill up this field"),
});
