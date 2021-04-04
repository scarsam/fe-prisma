import * as Yup from "yup";
import { sessionFields } from "./sessionValidation";

export const userValidationSchema = Yup.object({
  ...sessionFields,
  name: Yup.string().required("Name required"),
  team: Yup.string()
    .oneOf(["Admins", "Viewers", "Users"])
    .required("Team required"),
});
