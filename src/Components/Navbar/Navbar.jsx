import { Link } from "react-router-dom";
import "./Navbar.css";
import menu from "./navbar.png";
export const Navbar = () => {
  return (
    <nav className="relative  p-6 mx-auto text-black w-full">
      <div className="flex items-center justify-between">
        {" "}
        <div className="hidden md:block">
          <h1 style={{ fontWeight: "900" }}>
            <Link to={"/"}>
              Moe<span className="text-primary">Develops</span>
            </Link>
          </h1>
        </div>
        <div className=" md:hidden">
          <img src={menu} alt="menu" />
        </div>
        <div className="hidden md:flex gap-x-3.5">
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
          <h3 style={{ fontWeight: "900" }}>
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
      <nav className="absolute w-full left-0 top-0 h-full flex flex-col border">
        <Link to={"/"}>Home</Link>
        <Link to={"/portfolio"}>Portfolio</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
    </nav>
  );
};
