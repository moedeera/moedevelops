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
    const alreadySubmitted = localStorage.getItem("confirmed4");

    if (alreadySubmitted) {
      console.log("submitted", true);
      return;
    }

    try {
      await addDoc(projectData, {
        id: 5,
        slug: "Vethalia",
        ref: "vethalia",
        orientation: "Natural Health Website",
        title: "DeerCoded",
        headerSummary: "UI Design For A Coding Bootcamp",
        stack: ["Javascript", "html", "css"],
        info: `A Design oriented website built as a theme for a coding bootcamp. It was built using CSS, JavaScript and HTML.
        The focus of the website is to experiment with new design trends involving landing page lottie animations and bubbly 3d illustrations.
        It also uses a landing page countdown timer that visually channels urgency in a potential customer.`,

        link: "https://vethalia.com",
        color: "#256EFF",
      });

      localStorage.setItem("confirmed4", true);
      console.log("sent");
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async () => {
    try {
      const currentDate = new Date();
      const currentDateTime = currentDate.toISOString();

      await addDoc(messageData, {
        name: msg.name,
        message: msg.message,
        email: msg.email,
        date: currentDateTime,
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

  // useEffect(() => {
  //   submitAllProjects();
  // }, []);
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
