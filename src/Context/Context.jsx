import { createContext, useState } from "react";

export const SiteContext = createContext({});

// eslint-disable-next-line react/prop-types
export const SiteContextProvider = ({ children }) => {
  //Project Storage
  // const { projects, setProject } = useProjects();

  const test = "John Smith";
  const [user, setUser] = useState(false);
  const [logState, setLogState] = useState(false);

  return (
    <SiteContext.Provider
      value={{
        test,
        user,
        setUser,
        setLogState,
        logState,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
