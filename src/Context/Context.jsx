import { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { app } from "../firebase-config";
import { info1, info2, info4, info5 } from "../assets/Content/Content";
import { useNavigate } from "react-router-dom";
export const SiteContext = createContext({});

const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
export const SiteContextProvider = ({ children }) => {
  //Project Storage
  // const { projects, setProject } = useProjects();
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

  const test = "John Smith";
  const [user, setUser] = useState(false);
  const [logState, setLogState] = useState(false);

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
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
