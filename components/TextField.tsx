import { Field } from "formik";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";

interface TextFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  isInvalid: string | false | undefined;
  errorMessage: string | undefined;
}

const TextField: React.VFC<TextFieldProps> = ({
  label,
  type,
  name,
  placeholder,
  isInvalid,
  errorMessage,
}) => {
  return (
    <div className="mb-1">
      <Label id={name} label={label}>
        <Field
          className={`bg-gray-200 p-2 rounded-sm form-border form-focus outline-none ${
            isInvalid ? "form-error bg-red-100" : "mb-3"
          }`}
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
        />
        {isInvalid && <ErrorMessage message={errorMessage} />}
      </Label>
    </div>
  );
};

export default TextField;
