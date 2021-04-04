import { Field } from "formik";
import ErrorMessage from "./ErrorMessage";

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
      <label className="relative flex flex-col" htmlFor={name}>
        <strong className="h-10 right-full py-2 px-1 mr-2 absolute text-right w-max">
          {label}
        </strong>
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
      </label>
    </div>
  );
};

export default TextField;
