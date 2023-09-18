import { useContext, useState } from "react";
import { SiteContext } from "../../Context/Context";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../firebase-config";

export const LoginForm = () => {
  const { user, setUser, logState, setLogState, onRegister, onLog } =
    useContext(SiteContext);
  const auth = getAuth(app);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [logUser, setLogUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e, type, userInfo, setUserInfo) => {
    if (type === "name") {
      setUserInfo({ ...userInfo, name: e.target.value });
    } else if (type === "email") {
      setUserInfo({ ...userInfo, email: e.target.value });
    } else if (type === "password") {
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };

  const [mode, setMode] = useState("login");

  return (
    <div className="content-login">
      {mode === "login" && (
        <div className="form">
          <h1>Login Test</h1>

          <div className="input-section">
            {" "}
            <div className="input-label">Email</div>
            <input
              name="name"
              type="email"
              value={logUser.email}
              onChange={(e) => {
                onChangeHandler(e, "email", logUser, setLogUser);
              }}
              placeholder="Enter an Email"
            />
          </div>
          <div className="input-section">
            <div className="input-label">Password</div>
            <input
              name="name"
              type="text"
              value={logUser.password}
              onChange={(e) => {
                onChangeHandler(e, "password", logUser, setLogUser);
              }}
              placeholder="Enter Password"
            />
          </div>
          <button
            onClick={() => {
              onLog(logUser);
            }}
            className="btn"
          >
            Login
          </button>
          <small
            onClick={() => {
              setMode("register");
            }}
          >
            or Register
          </small>
        </div>
      )}

      {mode === "register" && (
        <div className="form">
          <h1>Register Test</h1>
          <div className="input-section">
            <div className="input-label">Name </div>
            <input
              name="name"
              type="text"
              value={newUser.name}
              onChange={(e) => {
                onChangeHandler(e, "name", newUser, setNewUser);
              }}
              placeholder="Enter your name"
            />
          </div>
          <div className="input-section">
            {" "}
            <div className="input-label">Email</div>
            <input
              name="name"
              type="email"
              value={newUser.email}
              onChange={(e) => {
                onChangeHandler(e, "email", newUser, setNewUser);
              }}
              placeholder="Enter an Email"
            />
          </div>
          <div className="input-section">
            <div className="input-label">Password</div>
            <input
              name="name"
              type="text"
              value={newUser.password}
              onChange={(e) => {
                onChangeHandler(e, "password", newUser, setNewUser);
              }}
              placeholder="Enter Password"
            />
          </div>
          <button
            onClick={() => {
              onRegister(newUser);
            }}
            className="btn"
          >
            Create Account
          </button>
          <small
            onClick={() => {
              setMode("login");
            }}
          >
            or Login
          </small>
        </div>
      )}
    </div>
  );
};
