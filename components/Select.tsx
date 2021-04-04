import { Field } from "formik";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";

interface TextFieldProps {
  options: string[];
  label: string;
  name: string;
  placeholder: string;
  isInvalid: string | false | undefined;
  errorMessage: string | undefined;
}

const SelectField: React.VFC<TextFieldProps> = ({
  options,
  label,
  name,
  placeholder,
  isInvalid,
  errorMessage,
}) => {
  return (
    <div className="mb-1">
      <Label id={name} label={label}>
        <Field
          as="select"
          className={`bg-gray-200 rounded-sm p-2 form-border form-border-focus outline-none ${
            isInvalid ? "form-error" : "mb-3 "
          }`}
          id={name}
          name={name}
          placeholder={placeholder}
        >
          <option value="">- Select -</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Field>
        {isInvalid && <ErrorMessage message={errorMessage} />}
      </Label>
    </div>
  );
};

export default SelectField;
