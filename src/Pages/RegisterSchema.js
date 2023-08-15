import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  email: Yup.string().email().required("Email address is required"),
  first: Yup.string().min(2).max(20).required("First name is required"),
  last: Yup.string().min(2).max(20).required("Last name is required"),
  password: Yup.string().min(6).required("Please enter your password"),
  repassword: Yup.string()
    .required("Confirm password is required")
    .oneOf(
      [Yup.ref("password"), null],
      "Confirm password must match the password"
    ),
});
