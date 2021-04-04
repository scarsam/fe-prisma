import * as Yup from "yup";

export const sessionFields = {
  email: Yup.string().email().required("Email required"),
  password: Yup.string().min(6).required("Password required"),
};

export const sessionValidationSchema = Yup.object({
  ...sessionFields,
});
