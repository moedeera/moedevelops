import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { signInWithGoogle } from "../firebase-config";

import { app, db } from "../firebase-config";
import { info1, info2, info4, info5 } from "../assets/Content/Content";
import { collection, getDocs } from "firebase/firestore";

function getUserFromLocalStorage() {
  // Check if "user" exists in local storage
  const storedUser = localStorage.getItem("user");
  console.log(storedUser);
  return storedUser ? JSON.parse(storedUser) : null;
  // Return the user if it exists, otherwise return null
}

function getCurrentPage() {
  let page = localStorage.getItem("page");
  if (!page) {
    return "/";
  }
  return page;
}

export const SiteContext = createContext({});

// Use the 'user' variable as needed
const userInfo = getUserFromLocalStorage();
console.log(userInfo);
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
  const currentPage = getCurrentPage();
  const test = "John Smith";
  const [user, setUser] = useState(userInfo);
  const [logState, setLogState] = useState(false);
  const [page, setPage] = useState(currentPage);
  // import usePost() from "..../"

  // const {getPost, makePosts} = usePosts()
  // const {getUser, register, log} = usePosts()

  // useEffect(()=>{ checkIfUserLogged() },[])

  const menuSectionItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Portfolio", link: "/portfolio" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "About", link: "/about" },
  ];
  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Portfolio", link: "/portfolio" },
    { id: 3, name: "Contact", link: "/contact" },
    { id: 4, name: "Services", link: "/services" },
    { id: 5, name: "About", link: "/about" },
  ];

  const signInFunction = async () => {
    const userInfo = await signInWithGoogle();

    setUser(userInfo);
  };

  // const [globalSTate, setGlobalState] = useState()

  useEffect(() => {
    const listener = window.addEventListener("storage", (event) => {
      if (event.key === "user") {
        try {
          const parsed = JSON.parse(event.newValue);
          setUser(parsed);
        } catch {
          console.error("Failed to parse user");
        }
      }
    });
    return () => {
      window.removeEventListener("storage", listener);
    };
  }, []);

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
        signInFunction,
        // get
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
