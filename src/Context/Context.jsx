import { createContext } from "react";

export const SiteContext = createContext({});

export const SiteContextProvider = ({ children }) => {
  //Project Storage
  // const { projects, setProject } = useProjects();

  const test = "John Smith";

  return (
    <SiteContext.Provider
      value={{
        test,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
