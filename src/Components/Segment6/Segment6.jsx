import { Link } from "react-router-dom";
import "./Segment6.css";
export const Segment6 = () => {
  return (
    <div className="segment-6">
      <h1>Start Hiring Today</h1>
      <p>Contact me today to get started</p>
      <Link className="btn" to={"/contact"}>
        Contact
      </Link>
    </div>
  );
};
