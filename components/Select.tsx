import { Field } from "formik";
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
      <label className="relative flex flex-col" htmlFor={name}>
        <strong className="right-full py-2 px-1 mr-2 absolute text-right w-max">
          {label}
        </strong>
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
      </label>
    </div>
  );
};

export default SelectField;

// .select {
//   margin-bottom: 1rem;
// }

// .select p {
//   font-size: 0.9rem;
//   margin: 0.2rem 0 0 0;
//   color: #d5351f;
// }

// .select .selectError {
//   background-color: #fff3ef;
//   box-shadow: inset 0 -100px 0 -99px #d5351f;
// }

// .select select {
//   background-color: #f4f4f3;
//   border: 0;
//   box-shadow: inset 0 -100px 0 -99px #919197;
//   font-size: 1rem;
//   padding: 0.7rem 0.5rem;
//   width: 100%;
// }
