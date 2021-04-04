import { useFormikContext } from "formik";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  const { isSubmitting, isValid } = useFormikContext();
  console.log(isValid);
  return (
    <button
      className={
        "bg-prisma text-white hover:bg-prisma-dark :focus:bg-prisma-dark transition-colors border-none rounded-md cursor-pointer outline-none py-2 px-6 disabled:opacity-50"
      }
      {...props}
      disabled={isSubmitting || !isValid}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
