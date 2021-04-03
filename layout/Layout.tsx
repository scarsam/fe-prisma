import styles from "./Layout.module.css";

interface ILayout {
  background?: boolean;
}

const Layout: React.FC<ILayout> = ({ children, background = false }) => {
  return (
    <section className={background ? "bg-gray-200" : "h-full"}>
      <div className="container m-auto h-full w-full">{children}</div>
    </section>
  );
};

export default Layout;

// .layout {
//   max-width: 1280px;
//   height: 100%;
//   margin: 0 auto;
//   width: 100%;
// }

// .background {
//   background-color: lightgray;
// }

// .height {
//   height: calc(100% - 5em);
// }
