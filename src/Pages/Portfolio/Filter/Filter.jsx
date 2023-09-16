import { images } from "../../../assets/Images/Images";
import "./Filter.css";
export const Filter = () => {
  return (
    <div className="portfolio-filter">
      <div className="upper-portfolio-filter">
        {" "}
        <div className="portfolio-drop-down">Dropdown</div>
        <div className="">titles</div>
        <div className="item-icon">
          <img src={images[4]} alt="" />
        </div>
      </div>
      <div className="lower-portfolio-filter"></div>
    </div>
  );
};
