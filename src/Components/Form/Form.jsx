import "./Form.css";
import { db } from "../../firebase-config";
import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { projectList } from "../../assets/Portfolio/projects";

export const Form = () => {
  const [sent, setSent] = useState(false);
  const [count, setCount] = useState(1);
  const messageData = collection(db, "msg");
  const projectData = collection(db, "projects");
  // console.log(messageData);
  const [msg, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (e, type, userInfo, setUserInfo) => {
    if (type === "name") {
      setUserInfo({ ...userInfo, name: e.target.value });
    } else if (type === "email") {
      setUserInfo({ ...userInfo, email: e.target.value });
    } else if (type === "message") {
      setUserInfo({ ...userInfo, message: e.target.value });
    }
  };

  // project send-- one time program

  const submitAllProjects = async () => {
    const alreadySubmitted = localStorage.getItem("confirmation");

    if (alreadySubmitted) {
      console.log("submission status", true);
      return;
    }
    try {
      await addDoc(projectData, {
        id: 2,
        slug: "superdonair",
        ref: "superdonair",
        orientation: "Restaurant",
        title: "Super-Donair",
        headerSummary: `A simple but highly ranked website that gets the job done.`,
        stack: ["css", "html", "javascript"],
        info: `
      A Website built for the Super-Donair diner in Saskatoon,
      This was built using CSS, HTML and JavaScript,
      The client insisted on a simple design without any advanced features.
      The website is maintained and updated manually by me.    
      The website is highly ranked in the google search algorithm and is the
      first diner to show up for the  “donair search” in Saskatoon.
      `,
        link: "https://super-donair.com/",
        color: "crimson",
      });

      localStorage.setItem("confirmation", true);
      console.log("sent");
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async () => {
    try {
      await addDoc(messageData, {
        name: msg.name,
        message: msg.message,
        email: msg.email,
      });
      setSent(true);
      setCount(count + 1);
      setMessage({
        name: "",
        email: "",
        message: "",
      });
      console.log("message sent");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSent(false);
    }, 3000);
    return () => clearInterval(interval);
  }, [count, setMessage]);

  useEffect(() => {
    submitAllProjects();
  }, []);
  return (
    <div className="form">
      <div className="input-section">
        <div className="input-label">Name or Company</div>
        <input
          name="name"
          type="name"
          value={msg.name}
          onChange={(e) => {
            onChangeHandler(e, "name", msg, setMessage);
          }}
          placeholder="Enter an Name"
        />
      </div>
      <div className="input-section">
        {" "}
        <div className="input-label">Email</div>
        <input
          name="email"
          type="email"
          value={msg.email}
          onChange={(e) => {
            onChangeHandler(e, "email", msg, setMessage);
          }}
          placeholder="Enter an Email"
        />
      </div>
      <div className="text-section">
        <div className="input-label">Message</div>
        <textarea
          value={msg.message}
          onChange={(e) => {
            onChangeHandler(e, "message", msg, setMessage);
          }}
          placeholder="Type in message"
          cols={40}
          rows={7}
        />
      </div>

      {sent ? (
        <h3 className="success">Succesfully sent!</h3>
      ) : (
        <button
          onClick={() => {
            onSubmit();
          }}
          className="btn"
        >
          Submit
        </button>
      )}
    </div>
  );
};
