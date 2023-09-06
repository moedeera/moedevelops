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
    <nav className="relative  p-6 h-24 mx-auto text-black w-full overflow-hidden">
      <div className="flex items-center justify-between">
        {" "}
        <div className="hidden md:block">
          <h1 style={{ fontWeight: "900" }}>
            <Link to={"/"}>
              Moe<span className="text-primary">Develops</span>
            </Link>
          </h1>
        </div>
        <div className="flex items-center gap-3.5 md:hidden ">
          <div
            className=" cursor-pointer"
            onClick={() => {
              showMobileMenu(!mobileMenu);
            }}
          >
            {" "}
            {mobileMenu ? (
              <img className="img" src={close} alt="close" />
            ) : (
              <img className="img" src={menu} alt="menu" />
            )}
          </div>

          <div>
            {" "}
            <h1 style={{ fontWeight: "900" }}>
              <Link to={"/"}>
                Moe<span className="text-primary">Develops</span>
              </Link>
            </h1>
          </div>
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
        <div>
          <h3 style={{ fontWeight: "900" }}>
            <Link to={"/login"} className="text-red">
              <button className="btn">Contact</button>
            </Link>
          </h3>
        </div>
      </div>
      <div className="backdrop">
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
      </div>
    </nav>
  );
};
