import * as Yup from "yup";

export const userValidationSchema = Yup.object({
  name: Yup.string().required("Name required"),
  email: Yup.string().email().required("Email required"),
  password: Yup.string().required("Password required"),
  team: Yup.string().required("Team required"),
});
