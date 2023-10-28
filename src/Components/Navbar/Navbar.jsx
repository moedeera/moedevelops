import { Link } from "react-router-dom";
import "./Navbar.css";

import { useContext, useState } from "react";
import { SiteContext } from "../../Context/Context";
export const Navbar = () => {
  const [mobileMenu, showMobileMenu] = useState(false);
  const { page, setPage, menuItems, menuSectionItems } =
    useContext(SiteContext);

  return (
    <>
      <div className={mobileMenu ? "overlay" : ""}>
        <nav className="relative  p-3 h-24 mx-auto text-black w-full  md:p-6">
          <div className="flex items-center justify-between">
            <div className="hidden md:block navbar-logo">
              <h3
                style={{
                  fontWeight: "600",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "26px",
                }}
              >
                <Link to={"/"}>
                  Develop<span className="text-primary">with</span>Moe
                </Link>
              </h3>
            </div>
            <div className="flex items-center gap-3.5 md:hidden ">
              <div
                className=" cursor-pointer"
                onClick={() => {
                  showMobileMenu(!mobileMenu);
                }}
              >
                <div className="btn-control">
                  <div className="internal-container">
                    <div
                      className={mobileMenu ? "menu-bar menu-show" : "menu-bar"}
                    ></div>
                  </div>
                </div>
              </div>

              <div>
                <h1
                  style={{
                    fontWeight: "900",
                    fontFamily: "Caveat', cursive",
                  }}
                >
                  <Link
                    to={"/"}
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: "medium",
                    }}
                  >
                    Develop<span className="text-primary">with</span>Moe
                  </Link>
                </h1>
              </div>
            </div>
            <div className="hidden md:flex gap-x-5">
              {menuSectionItems?.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  style={{ transform: "all 0.5s ease-in-out" }}
                  className={page === item.link ? "current-page" : ""}
                  onClick={() => {
                    setPage(item.link);
                  }}
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
            <div>
              <h3 style={{ fontWeight: "900" }}>
                <Link to={"/contact"} className="text-red">
                  <button className="btn">Contact</button>
                </Link>
              </h3>
            </div>
          </div>

          <nav
            className={
              mobileMenu
                ? "mobilenav shownav absolute w-full p-6 left-0 top-24 h-96 flex justify-evenly flex-col border md:hidden"
                : "mobilenav hidenav absolute w-full p-6 left-0 top-24 h-96 flex justify-evenly flex-col border md:hidden"
            }
          >
            {menuItems?.map((item) => (
              <>
                <Link
                  to={`${item.link}`}
                  key={item.id}
                  onClick={() => {
                    showMobileMenu(false);
                  }}
                  className={
                    mobileMenu
                      ? "carouselItem item-show"
                      : "carouselItem item-hide"
                  }
                >
                  {item.name}
                </Link>
              </>
            ))}
          </nav>
        </nav>
      </div>
    </>
  );
};
