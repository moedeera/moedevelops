import { createContext, useState } from "react";

function getUserFromLocalStorage() {
  // Check if "user" exists in local storage
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    const userJSon = localStorage.getItem("user");
    const user = JSON.parse(userJSon);

    return user;
  }
  return null;
}

export const MySiteContext = createContext({});

// eslint-disable-next-line react/prop-types
export const SiteContextProvider = ({ children }) => {
  const userInfo = getUserFromLocalStorage();

  const [user, setUser] = useState(userInfo);

  return (
    <MySiteContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </MySiteContext.Provider>
  );
};
