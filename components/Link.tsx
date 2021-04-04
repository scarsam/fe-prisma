import NavLink from "next/link";
import { useRouter } from "next/router";

interface LinkProps {
  text: string;
  path: string;
}

const Link: React.VFC<LinkProps> = ({ text, path }) => {
  const router = useRouter();

  return (
    <NavLink href={path}>
      <a
        className={`${
          router.pathname === path
            ? "font-semibold text-prisma-dark"
            : "font-normal"
        } p-2 no-underline text-prisma`}
      >
        {text}
      </a>
    </NavLink>
  );
};

export default Link;
