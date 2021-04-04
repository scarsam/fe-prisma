import * as Yup from "yup";

export const sessionValidationSchema = Yup.object({
  email: Yup.string().required("Email required"),
  password: Yup.string().required("Password required"),
});
