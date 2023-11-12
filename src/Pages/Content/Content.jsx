import { useContext, useEffect, useState } from "react";
import "./Content.css";
import { SiteContext } from "../../Context/Context";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../Components/Loading/Loading";

export const Content = () => {
  const navigate = useNavigate();
  const { user, setLogState } = useContext(SiteContext);

  const [showMessages, setMessageShow] = useState(false);
  const messageData = collection(db, "messages");
  const [loading, isLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    try {
      const data = await getDocs(messageData);

      const filteredData = data.docs.map((doc) => ({ ...doc.data() }));
      console.log(filteredData);
      setMessages(filteredData);
      setMessageShow(true);
      isLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMessages();
    const isUserLoggedIn = localStorage.getItem("user");

    console.log(isUserLoggedIn);
    if (isUserLoggedIn === null || isUserLoggedIn === false) {
      navigate("/login");
      return;
    }
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="page-container content-page">
      <h1>
        You are logged in
        <div className="messages-container">
          {messages?.map((msg) => (
            <div className="messages-box" key={msg.messages}>
              <div className="message-box-author">
                <div className="message-details">
                  {" "}
                  <h3>
                    from: {msg.name}@{msg.email}
                  </h3>
                  <h3>{msg?.date}</h3>
                  <h3></h3>
                </div>
              </div>
              <div className="message-box-message">
                {" "}
                <p>{msg.message}</p>
              </div>
            </div>
          ))}
        </div>
      </h1>
    </div>
  );
};
