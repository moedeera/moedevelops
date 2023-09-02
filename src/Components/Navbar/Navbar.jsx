import { Link } from "react-router-dom";
import "./Navbar.css";
import menu from "./navbar.png";
export const Navbar = () => {
  return (
    <nav className="relative  p-6 mx-auto text-black w-full">
      <div className="flex items-center justify-between">
        {" "}
        <div className="hidden md:block">
          <h3 className="bold">
            <Link to={"/"}>
              Moe<span className="text-primary">Develops</span>
            </Link>
          </h3>
        </div>
        <div className=" md:hidden">
          <img src={menu} alt="menu" />
        </div>
        <div className="hidden md:flex gap-x-2.5">
          {" "}
          <Link to={"/"}>
            <p>Portfolio</p>
          </Link>
          <Link to={"/about"}>
            <p className="hover:text-red"> Services</p>
          </Link>
          <Link to={"/about"}>About</Link>
        </div>
        <div className="md:hidden">
          <h3>
            <Link to={"/"}>
              Moe<span className="text-primary">Develops</span>
            </Link>
          </h3>
        </div>
        <div className="hidden md:flex gap-x-2.5">
          {" "}
          <Link to={"/login"} className="text-red">
            <button className="btn">Contact</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
