import { ReactNode } from "react";
import {
  Form as FormikForm,
  Formik,
  FormikTouched,
  FormikErrors,
  FormikValues,
  FormikHelpers,
} from "formik";
import { UserValidationTypes, SessionValidationTypes } from "../types";

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
        <FormikForm className="w-full md:w-64">
          {render(errors, touched)}
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
