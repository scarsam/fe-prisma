import React, { useState, createContext, useContext } from "react";

interface UserType {
  id: string;
  name: string;
  email: string;
  password: string;
  team: "Viewers" | "Admins" | "Users" | null;
}

type UserContextState = {
  user: UserType;
  updateUser: (user: Partial<UserType>) => void;
};

const contextDefaultValues: UserContextState = {
  user: {
    id: "",
    name: "",
    email: "",
    password: "",
    team: null,
  },
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

  return (
    <UserContext.Provider
      value={{
        user: store.user,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserStore = () => {
  const { user, updateUser } = useContext(UserContext);

  return { user, updateUser };
};

export default UserProvider;
