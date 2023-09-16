import icon1 from "./js.png";
import icon2 from "./shopify.png";
import icon3 from "./ss.png";
import icon4 from "./react.png";
import icon5 from "./wordpress.png";

import "./IconGallery.css";
export const IconGallery = () => {
  const icons = [icon1, icon2, icon3, icon4, icon5];
  const name = ["JavaScript", "Shopify", "SquareSpace", "React", "WordPress"];
  return (
    <div className="icon-container">
      <p className="text-black font-bold">My Stack</p>
      {icons.map((icon, index) => (
        <div
          key={name[index]}
          className="md:flex text-black gap-x-1 items-center"
        >
          <small className="font-bold"> {name[index]} </small>{" "}
          <img src={icon} alt="" />
        </div>
      ))}
    </div>
  );
};
