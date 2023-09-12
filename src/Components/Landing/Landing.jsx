import { Link } from "react-router-dom";
import "./Landing.css";
export const Landing = () => {
  return (
    // <div className="landing flex-row  justify-between text-center h-96  w-full">
    //   <div>
    //     {" "}
    //     <small>Design your websites with functionality in mind</small>
    //   </div>
    //   <h1>Web Development Solutions</h1>
    //   <p>Design, Develop, Deploy</p>
    //   <Link to={"/portfolio"}>
    //     <button>See Portfolio</button>
    //   </Link>
    // </div>
    <div className="landing ">
      <div>
        {" "}
        <small>Design websites with functionality in mind</small>
      </div>
      <h1 className="header-title">
        Web Development <br></br> Solutions
      </h1>
      {/* <p>Design. Develop. Deploy</p> */}
      <Link to={"/portfolio"}>
        <button className="btn">See Portfolio</button>
      </Link>
    </div>
  );
};
