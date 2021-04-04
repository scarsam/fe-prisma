const Label: React.FC<{ label: string; id: string }> = ({
  children,
  label,
  id,
}) => {
  return (
    <label className="relative flex flex-col" htmlFor={id}>
      <strong className="right-full py-2 px-1 mr-2 md:absolute text-right w-max text-prisma">
        {label}
      </strong>
      {children}
    </label>
  );
};

export default Label;
