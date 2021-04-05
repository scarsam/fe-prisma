import { Form as FormikForm, Formik } from "formik";
import { IForm } from "../types";

const Form: React.VFC<IForm> = ({
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
