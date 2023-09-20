import { useContext } from "react";
import "./Content.css";
import { SiteContext } from "../../Context/Context";
import { LoginForm } from "./LoginForm";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../config/firebase";

export const Content = () => {
  const { user, logState } = useContext(SiteContext);
  const [sent, setSent] = useState(false);
  // const messageData = collection(db, "messages");
  const [msg, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  console.log(user);

  return (
    <div className="page-container content-page">
      {logState ? <h1>You are logged in</h1> : <LoginForm />}
      <h1>You are Logged in</h1>
      <div className="content-edit">
        <div className="current">
          <h1></h1>
          <p></p>
        </div>
        <div className="change"></div>
      </div>
    </div>
  );
};
