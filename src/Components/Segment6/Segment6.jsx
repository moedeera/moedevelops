import { Link } from "react-router-dom";
import "./Segment6.css";
export const Segment6 = () => {
  return (
    <div className="segment-6">
      <h1>Have any questions?</h1>
      <p>Contact me today to get started</p>
      <Link className="btn" to={"/contact"}>
        Contact
      </Link>
    </div>
  );
};
