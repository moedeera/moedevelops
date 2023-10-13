import "./Carousel.css";
import {
  findImageSet,
  imagesSorted,
  portfolioImages,
} from "../../assets/Portfolio/images";
import { projectList } from "../../assets/Portfolio/projects";
import { portImages } from "../../Pages/Portfolio/portfolioImages";
import { Link } from "react-router-dom";

export const Carousel = () => {
  const items = [
    {
      id: 1,
      name: "goldenrod",
      image:
        "https://cdn.dribbble.com/userupload/9835535/file/original-2f7416583d1d94180cc7fdf0aacbc56b.png?resize=450x338&vertical=center",
    },
    {
      id: 2,
      name: "crimson",
      image:
        "https://cdn.dribbble.com/userupload/9867102/file/original-179bc8c05c177d3e0ab50250ffa82127.png?crop=0x0-1600x1200&resize=450x338&vertical=center",
    },
    {
      id: 3,
      name: "red",
      image:
        "https://cdn.dribbble.com/userupload/9846290/file/original-bdc3e36d5349062e3b6d9470e68e2b78.png?resize=450x338&vertical=center",
    },
    {
      id: 4,
      name: "blue",
      image:
        "https://cdn.dribbble.com/userupload/9789438/file/original-685ca2a1917f3a57009d302da0f6f863.jpg?resize=450x338&vertical=center",
    },
    {
      id: 5,
      name: "green",
      image:
        "https://cdn.dribbble.com/userupload/9856005/file/original-da3fe8330c7845664c9a06c56eff2725.jpg?resize=450x338&vertical=center",
    },
    {
      id: 6,
      name: "purple",
      image:
        "https://cdn.dribbble.com/userupload/9866543/file/original-8d26b1b4c8eeac18076ddc17df2c8cfa.jpg?resize=450x338&vertical=center",
    },
    {
      id: 7,
      name: "orange",
      image:
        "https://cdn.dribbble.com/userupload/9843060/file/original-7549b9bbd2319bf3a4fe46ecd3694f1b.jpg?crop=0x0-1600x1200&resize=450x338&vertical=center",
    },
    {
      id: 8,
      name: "teal",
      image:
        "https://cdn.dribbble.com/userupload/9878452/file/original-2f72411961f71611b1323d4f62560cf2.png?resize=450x338&vertical=center",
    },
  ];

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
