import { useContext, useState } from "react";
import { SiteContext } from "../../Context/Context";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase-config";

export const LoginForm = () => {
  const { user, setUser, logState, setLogState } = useContext(SiteContext);
  const auth = getAuth(app);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e, type) => {
    if (type === "name") {
      setNewUser({ ...newUser, name: e.target.value });
    } else if (type === "email") {
      setNewUser({ ...newUser, email: e.target.value });
    } else if (type === "password") {
      setNewUser({ ...newUser, password: e.target.value });
    }
  };

  const onSubmit = async () => {
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

  return (
    <div className="content-login">
      <div className="form">
        <h1>Login Test</h1>
        <div className="input-section">
          <div className="input-label">Name </div>
          <input
            name="name"
            type="text"
            value={newUser.name}
            onChange={(e) => {
              onChangeHandler(e, "name");
            }}
            placeholder="Enter your name"
          />
        </div>
        <div className="input-section">
          {" "}
          <div className="input-label">Email</div>
          <input
            name="name"
            type="text"
            value={newUser.email}
            onChange={(e) => {
              onChangeHandler(e, "name");
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
              onChangeHandler(e, "name");
            }}
            placeholder="Enter Password"
          />
        </div>
        <button
          onClick={() => {
            onSubmit();
          }}
          className="btn"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};
