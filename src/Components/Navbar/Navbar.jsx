import { Link } from "react-router-dom";
import "./Navbar.css";
import menu from "./navbar.png";
import close from "./close.png";
import { useState } from "react";
export const Navbar = () => {
  const [mobileMenu, showMobileMenu] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
  ];
  return (
    <nav className="relative  p-6 h-24 mx-auto text-black w-full">
      <div className="flex items-center justify-between">
        {" "}
        <div className="hidden md:block">
          <h1 style={{ fontWeight: "900" }}>
            <Link to={"/"}>
              Moe<span className="text-primary">Develops</span>
            </Link>
          </h1>
        </div>
        <div
          className=" md:hidden cursor-pointer"
          onClick={() => {
            showMobileMenu(!mobileMenu);
          }}
        >
          {mobileMenu ? (
            <img src={close} alt="menu" />
          ) : (
            <img src={menu} alt="menu" />
          )}
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

      <nav
        className={
          mobileMenu
            ? "mobilenav shownav absolute w-full p-6 left-0 top-24 h-96 flex justify-evenly flex-col border md:hidden"
            : "mobilenav hidenav absolute w-full p-6 left-0 top-24 h-96 flex justify-evenly flex-col border md:hidden"
        }
      >
        {menuItems.map((item) => (
          <>
            <Link
              to={`${item.link}`}
              key={item.name}
              onClick={() => {
                showMobileMenu(false);
              }}
            >
              {item.name}
            </Link>
          </>
        ))}
      </nav>
    </nav>
  );
};
