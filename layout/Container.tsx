import { ILayout } from "../types";

const Container: React.FC<ILayout> = ({ children, background = false }) => {
  return (
    <section
      className={
        background
          ? "bg-gray-200 bg-globe-pattern bg-cover bg-no-repeat bg-opacity-75 "
          : ""
      }
    >
      <div className="container m-auto w-full">{children}</div>
    </section>
  );
};

export default Container;
