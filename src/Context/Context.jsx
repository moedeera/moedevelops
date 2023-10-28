import { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { app, db } from "../firebase-config";
import { info1, info2, info4, info5 } from "../assets/Content/Content";
import { collection, getDocs } from "firebase/firestore";
export const SiteContext = createContext({});

const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
export const SiteContextProvider = ({ children }) => {
  //Project Storage
  // const { projects, setProject } = useProjects();
  const projectData = collection(db, "projects");

  const onRegister = async (newUser) => {
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then(() => {
        // Signed in
        console.log("success");
        // ...
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };

  const onLog = async (userInfo, redirection, link) => {
    console.log(
      "on log called",
      "user info:",
      userInfo.email,
      userInfo.password
    );

    signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        setLogState(true);
        localStorage.setItem("logged", true);
        redirection(link);
        // ...
      })
      .catch((error) => {
        console.log("error code:", error.code, "error message:", error.message);
      });
  };

  const fetchProjectData = async () => {
    let projects;

    try {
      const data = await getDocs(projectData);

      projects = data.docs.map((doc) => ({ ...doc.data() }));
      console.log("success", projects);
      return projects;
    } catch (error) {
      console.log("error:", error);

      return error;
    }
  };

  const test = "John Smith";
  const [user, setUser] = useState(false);
  const [logState, setLogState] = useState(false);
  const [page, setPage] = useState("/");

  const menuSectionItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 1, name: "Portfolio", link: "/portfolio" },
    { id: 2, name: "Services", link: "/services" },
    { id: 3, name: "About", link: "/about" },
  ];
  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Portfolio", link: "/portfolio" },
    { id: 3, name: "Contact", link: "/contact" },
    { id: 4, name: "Services", link: "/services" },
    { id: 5, name: "About", link: "/about" },
  ];

  return (
    <SiteContext.Provider
      value={{
        test,
        user,
        setUser,
        setLogState,
        logState,
        onRegister,
        onLog,
        info1,
        info2,
        info4,
        info5,
        fetchProjectData,
        menuItems,
        menuSectionItems,
        page,
        setPage,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
