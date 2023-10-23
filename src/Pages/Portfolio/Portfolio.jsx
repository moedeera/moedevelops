import { images } from "../../assets/Images/Images";
import {
  findImageSet,
  imagesSorted,
  portfolioImages,
} from "../../assets/Portfolio/images";
// import { Filter } from "./Filter/Filter";
import { projectList } from "../../assets/Portfolio/projects";
import "./Portfolio.css";

import image6 from "./portfolio3.png";
import image7 from "./portfolio1.png";
import image8 from "./portfolio8.png";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  const items = [
    { id: 6, name: "Clothing", link: "clothing" },
    { id: 7, name: "Farm Website", link: "farm" },
    { id: 8, name: "Niche Website", link: "niche" },
  ];
  console.log(projectList);

  const imagesO = [
    // image1,
    // image2,
    // image3,
    // image4,
    // image5,
    image7,
    image6,
    image8,
  ];

  return (
    <div className="page-container portfolio-page">
      <h1>My Latest Works</h1>
      {/* <Filter /> */}
      <div className="portfolio-container">
        {projectList.map((proj) => (
          <div key={proj.id} className="portfolio-item">
            <Link
              to={`/portfolio/${proj.slug}`}
              className="item-detail-box"
              style={{
                backgroundImage: `url(${
                  findImageSet(proj.ref, imagesSorted)[0]
                })`,
              }}
            >
              <div className="detail-box-overlay">
                <h3>{proj.orientation}</h3>
                <div className="item-icon">
                  <img src={images[3]} alt="" />
                </div>
                <div className="item-icon">
                  <img src={images[1]} alt="" />
                </div>
              </div>
            </Link>

            <div className="item-details-cta">
              <small>{proj.orientation}</small>
              <div className="item-icons-small">
                <div className="item-icon">
                  <img src={images[0]} alt="" />
                </div>
                <div className="item-icon">
                  <img src={images[2]} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
