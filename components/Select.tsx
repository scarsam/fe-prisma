import { Field } from "formik";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import { ITextField } from "../types";

const SelectField: React.VFC<ITextField> = ({
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
          className={`bg-gray-200 rounded-sm p-2 form-border form-focus outline-none ${
            isInvalid ? "form-error bg-red-100" : "mb-3 "
          }`}
          id={name}
          name={name}
          placeholder={placeholder}
        >
          <option value={null}>- Select -</option>
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
