import { Link } from "react-router-dom";
import "./Navbar.css";
import menu from "./navbar.png";
export const Navbar = () => {
  return (
    <nav className="relative container p-6 mx-auto text-black">
      <div className="flex items-center justify-between">
        {" "}
        <div className="hidden md:block">
          <h3>
            Moe<span>Develops</span>
          </h3>
        </div>
        <div className=" md:hidden">
          <img src={menu} alt="menu" />
        </div>
        <div className="hidden md:flex gap-x-2.5">
          {" "}
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/login"}>Portfolio</Link>
        </div>
        <div className="md:hidden">
          <h3>
            Moe<span>Develops</span>
          </h3>
        </div>
        <div className="hidden md:flex gap-x-2.5">
          {" "}
          <Link to={"/login"}>
            <button
              className="bg-black text-white hover:bg-gray-100 text-black font-semibold py-2 px-4 border border-gray-400 rounded shadow transition-property: all;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;"
            >
              Button
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
