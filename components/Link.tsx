import NavLink from "next/link";
import { useRouter } from "next/router";
import { ILink } from "../types";

const Link: React.VFC<ILink> = ({ text, path }) => {
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
