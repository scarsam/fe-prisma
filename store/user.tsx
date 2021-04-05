import React, { useState, createContext, useContext } from "react";
import { UserType, UserContextState } from "../types";

const contextDefaultValues: UserContextState = {
  user: {
    id: "",
    name: "",
    email: "",
    password: "",
    team: "",
  },
  updateUser: () => {},
};

export const UserContext = createContext<UserContextState>(
  contextDefaultValues,
);

export const { Provider: UserProviderTest } = UserContext;

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
