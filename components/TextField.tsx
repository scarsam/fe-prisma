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
            isInvalid ? "form-error" : "mb-3"
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

// .textField {
//   margin-bottom: 1rem;
// }

// .textField label {
//   display: flex;
//   flex-direction: column;
// }

// .textField p {
//   font-size: 0.9rem;
//   margin: 0.2rem 0 0 0;
//   color: #d5351f;
// }

// .textField .textFieldError {
//   background-color: #fff3ef;
//   box-shadow: inset 0 -100px 0 -99px #d5351f;
// }

// .textField input:focus {
//   background-color: #f3fafb;
//   box-shadow: inset 0 -100px 0 -97px #2d3748;
//   outline: none;
// }

// .textField input {
//   background-color: #f4f4f3;
//   border: 0;
//   box-shadow: inset 0 -100px 0 -99px #919197;
//   font-size: 1rem;
//   padding: 0.7rem 0.5rem;
// }
