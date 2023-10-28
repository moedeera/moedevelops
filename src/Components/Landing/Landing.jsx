import { Link } from "react-router-dom";
import "./Landing.css";
export const Landing = () => {
  return (
    <div className="landing ">
      <div>
        {" "}
        <small>Build Quality Websites</small>
      </div>
      <h1 className="header-title">
        Web Development <br></br> Solutions
      </h1>

      <p>
        Whether it is an eCommerce website or a personal portfolio, find the
        right digital solution for you today.
      </p>
      <Link to={"/portfolio"}>
        <button className="btn">See Portfolio</button>
      </Link>
    </div>
  );
};
