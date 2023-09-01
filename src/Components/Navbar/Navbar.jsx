import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav className="relative container p-6 mx-auto">
      <div className="flex items-center justify-between">
        {" "}
        <div className="flex gap-x-2.5">
          {" "}
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/login"}>Portfolio</Link>
        </div>
        <div className="">
          <h3>
            Moe<span>Develops</span>
          </h3>
        </div>
        <div className="hidden md:flex gap-x-2.5">
          {" "}
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </nav>
  );
};
