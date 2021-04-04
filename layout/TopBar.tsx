import Link from "../components/Link";
import { useUserStore } from "../store/user";

const TopBar: React.VFC = () => {
  const { user } = useUserStore();

  return (
    <header className="flex py-0 px-2 justify-between">
      <h1 className="p-2">Prisma</h1>
      {user?.name ? (
        <p>
          Hello <strong>{user?.name}</strong>
        </p>
      ) : (
        <nav className="flex">
          <Link path="/sign-up" text="Sign up" />
          <Link path="/login" text="Login" />
        </nav>
      )}
    </header>
  );
};

export default TopBar;

// .topBar {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 2rem;
//   height: 5rem;
// }

// .topBar nav {
//   display: flex;
// }

// .topBar nav p:first-child {
//   margin-right: 1rem;
// }
