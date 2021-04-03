import React, { useState, createContext, useContext } from "react";

interface UserType {
  name: string;
  email: string;
  password: string;
  team: Teams | string;
}

enum Teams {
  ADMINS = "admins",
  USERS = "users",
  VIEWERS = "viewers",
}

type UserContextState = {
  user: UserType;
  isLoggedIn: boolean;
  updateUserState: (userState: boolean) => void;
  updateUser: (user: Partial<UserType>) => void;
};

const contextDefaultValues: UserContextState = {
  user: {
    name: "",
    email: "",
    password: "",
    team: "",
  },
  isLoggedIn: false,
  updateUserState: () => {},
  updateUser: () => {},
};

export const UserContext = createContext<UserContextState>(
  contextDefaultValues,
);

const UserProvider: React.FC = ({ children }) => {
  const [store, updateStore] = useState(contextDefaultValues);

  const updateUser = (updatedUser: Partial<UserType>) =>
    updateStore((prevState) => ({
      ...prevState,
      user: { ...prevState.user, ...updatedUser },
    }));

  const updateUserState = (userState: boolean) =>
    updateStore((prevState) => ({ ...prevState, isLoggedIn: userState }));

  return (
    <UserContext.Provider
      value={{
        user: store.user,
        isLoggedIn: store.isLoggedIn,
        updateUserState,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserStore = () => {
  const { user, isLoggedIn, updateUserState, updateUser } = useContext(
    UserContext,
  );

  return { user, isLoggedIn, updateUserState, updateUser };
};

export default UserProvider;
