import icon1 from "./js.png";
import icon2 from "./shopify.png";
import icon3 from "./ss.png";
import icon4 from "./react.png";
import icon5 from "./wordpress.png";

import "./IconGallery.css";
export const IconGallery = () => {
  const icons = [icon1, icon2, icon3, icon4, icon5];
  return (
    <div className="icon-container flex justify-between">
      <p className="text-black font-bold">Built with </p>
      {icons.map((icon) => (
        <>
          <img src={icon} alt="" />
        </>
      ))}
    </div>
  );
};
