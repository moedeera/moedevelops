import { Link } from "react-router-dom";
import "./Segment6.css";
import { useEffect, useState } from "react";
export const Segment6 = ({ header }) => {
  const [info, setInfo] = useState({
    header: "Have Any Questions",
    hook: "Contact me today to get started",
  });

  useEffect(() => {
    if (header) {
      setInfo(header);
    }
  }, []);
  return (
    <div className="segment-6">
      <h1>{info.header}</h1>
      <p>{info.hook}</p>
      <Link className="btn" to={"/contact"}>
        Contact
      </Link>
    </div>
  );
};
