import { ReactNode } from "react";
import {
  Form as FormikForm,
  Formik,
  FormikTouched,
  FormikErrors,
  FormikValues,
  FormikHelpers,
} from "formik";
import styles from "./Form.module.css";
import { UserValidationTypes, SessionValidationTypes } from "../../types";

interface FormProps {
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
  ) => ReactNode;
}

const Form: React.VFC<FormProps> = ({
  handleSubmit,
  initalValues,
  validationSchema,
  render,
}) => {
  return (
    <Formik
      initialValues={initalValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <FormikForm className="w-64">{render(errors, touched)}</FormikForm>
      )}
    </Formik>
  );
};

export default Form;

// .form label {
//   position: relative;
// }

// .form input {
//   height: 1rem;
// }

// .form strong {
//   height: 1rem;
//   right: 100%;
//   padding: 0.7rem 0.5rem;
//   position: absolute;
//   text-align: right;
//   width: max-content;
// }

// .form button {
//   margin-top: 1rem;
// }

// .form {
//   width: 15rem;
// }
