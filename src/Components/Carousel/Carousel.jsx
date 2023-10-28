import "./Carousel.css";
import { findImageSet, imagesSorted } from "../../assets/Portfolio/images";
import { projectList } from "../../assets/Portfolio/projects";

import { Link } from "react-router-dom";

export const Carousel = () => {
  return (
    <div>
      <div className={`carousel slide-left`}>
        {projectList.map((item) => (
          <Link
            to={`portfolio/${item.slug}`}
            key={item.id}
            className={`carousel-item `}
            style={{
              backgroundImage: `url("${
                findImageSet(item.ref, imagesSorted)[0]
              }")`,
            }}
          >
            <div
              className="item-backdrop"
              style={{
                backgroundColor: `${item.color}`,
                position: "absolute",
                height: "100%",
                width: "100%",
                zIndex: "-1",
                opacity: "0.15",
              }}
            ></div>
            <div
              className="item-wallpaper"
              style={{
                backgroundImage: `url("${
                  findImageSet(item.ref, imagesSorted)[0]
                }")`,
              }}
            ></div>
            <div className="item-info"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};
