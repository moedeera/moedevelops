import { Link } from "react-router-dom";
import "./Footer.css";
import twitterLogo from "./twitter.png";
import linkedinLogo from "./linkedin.png";
import mediumLogo from "./medium.png";

export const Footer = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
  ];
  return (
    <div className="footer ">
      <div className="upper-footer p-5">
        <div>
          <h1 style={{ fontWeight: "900" }}>
            <Link to={"/"}>
              <span className="text-black">Moe</span>
              <span className="text-primary">Develops</span>
            </Link>
          </h1>
        </div>
        <div className="flex justify-between w-80">
          {" "}
          {menuItems.map((item) => (
            <>
              <Link to={`${item.link}`} key={item.name}>
                {item.name}
              </Link>
            </>
          ))}
        </div>

        <div className="flex ">
          <img src={twitterLogo} alt="twitter" />
          <img src={linkedinLogo} alt="linkedin" />
          <img src={mediumLogo} alt="medium" />
        </div>
      </div>
      <div className="flex justify-center p-6"> © MoeDevelops 2023</div>
    </div>
  );
};
