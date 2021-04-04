import * as Yup from "yup";

export const sessionValidationSchema = Yup.object({
  email: Yup.string().email().required("Email required"),
  password: Yup.string().min(6).required("Password required"),
});
