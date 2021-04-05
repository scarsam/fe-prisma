import { userValidationSchema } from "../validation/userValidation";
import { sessionValidationSchema } from "../validation/sessionValidation";
import {
  FormikTouched,
  FormikErrors,
  FormikValues,
  FormikHelpers,
} from "formik";

export type UserValidationTypes = typeof userValidationSchema;
export type SessionValidationTypes = typeof sessionValidationSchema;

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  team: "Viewers" | "Admins" | "Users" | "";
}

export interface IUserContext {
  user: IUser;
  updateUser: (user: Partial<IUser>) => void;
}

export interface ITextField {
  options?: string[];
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  isInvalid: string | false | undefined;
  errorMessage: string | undefined;
}

export interface IForm {
  handleSubmit: (
    values: FormikValues,
    helpers: FormikHelpers<FormikValues>,
  ) => void;
  validationSchema: UserValidationTypes | SessionValidationTypes;
  initalValues: {
    [key: string]: string | string[];
  };
  render: (
    errors: FormikErrors<{ [key: string]: string }>,
    touched: FormikTouched<{ [key: string]: string }>,
  ) => React.ReactNode;
}

export interface ILink {
  text: string;
  path: string;
}

export interface ILayout {
  background?: boolean;
}
