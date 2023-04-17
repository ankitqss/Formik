import * as Yup from "yup";

const passwordFormat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

export const Validation2 = Yup.object({
  name: Yup.string()
    .max(20, "Name must be from 3 to 20 characters")
    .min(3)
    .required("Required field"),
  email: Yup.string().email("email must be valid").required("Required field"),
  password: Yup.string()
    .min(8, "Must be atleast 8 characters")
    .required("Required field")
    .matches(passwordFormat, {
      message:
        "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
    }),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Required field"),
});
