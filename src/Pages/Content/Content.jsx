import { useContext, useEffect, useState } from "react";
import "./Content.css";
import { SiteContext } from "../../Context/Context";
import { LoginForm } from "./LoginForm";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

export const Content = () => {
  const navigate = useNavigate();
  const { user, logState, setLogState } = useContext(SiteContext);

  const [showMessages, setMessageShow] = useState(false);
  const messageData = collection(db, "messages");

  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    try {
      const data = await getDocs(messageData);

      const filteredData = data.docs.map((doc) => ({ ...doc.data() }));
      console.log(filteredData);
      setMessages(filteredData);
      setMessageShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMessages();
    const isUserLoggedIn = localStorage.getItem("logged");
    if (isUserLoggedIn) {
      setLogState(true);
    }

    console.log(isUserLoggedIn);
    if (isUserLoggedIn === null || isUserLoggedIn === false) {
      navigate("/login");
      // return (
      //   <div className="page-container">
      //     <LoginForm redirectTo={"/admin"} />
      //   </div>
      // );
    }
  }, []);

  return (
    <div className="page-container content-page">
      {logState ? (
        <h1>
          You are logged in
          <div className="message">
            {messages?.map((msg) => (
              <div className="messages-box" key={msg.messages}>
                <div className="message-box-author">
                  <h3>Name:{msg.name}</h3>
                  <small>Email:{msg.email}</small>
                </div>
                <div className="message-box-message">
                  {" "}
                  <p>{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        </h1>
      ) : (
        "hello??"
      )}

      <h1>You are Logged in</h1>
      <div className="content-edit">
        <div className="current">
          <h1>??</h1>
          <p></p>
        </div>
        <div className="change"></div>
      </div>
    </div>
  );
};
