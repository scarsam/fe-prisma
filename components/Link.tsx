import NavLink from "next/link";

interface LinkProps {
  text: string;
  path: string;
}

const Link: React.VFC<LinkProps> = ({ text, path }) => {
  return (
    <NavLink href={path}>
      <a className="p-2 no-underline">{text}</a>
    </NavLink>
  );
};

export default Link;

// .link {
//   color: black;
//   margin-left: 1.5rem;
//   text-decoration: none;
// }
