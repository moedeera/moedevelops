import { images } from "../../assets/Images/Images";
import { portfolioImages } from "../../assets/Portfolio/images";
// import { Filter } from "./Filter/Filter";
import "./Portfolio.css";
import image1 from "./portfolio1.png";
import image2 from "./portfolio2.jpg";
import image3 from "./portfolio3.png";
import image4 from "./portfolio4.jpg";
import image5 from "./portfolio5.png";
import image6 from "./p6.png";
import image7 from "./p7.png";
import image8 from "./portfolio8.png";

export const Portfolio = () => {
  const items = [
    { id: 1, name: "Farm Website" },
    { id: 2, name: "Crypto Website" },
    { id: 3, name: "Salon Website" },
    { id: 4, name: "Fitness Website" },
    { id: 5, name: "Online Learning" },
    { id: 6, name: "Clothing" },
    { id: 7, name: "Hotel Website" },
    { id: 8, name: "Niche Website" },
  ];

  const imagesO = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <div className="page-container portfolio-page">
      <h1>My Latest Works</h1>
      {/* <Filter /> */}
      <div className="portfolio-container">
        {items.map((item, index) => (
          <div key={item.id} className="portfolio-item">
            <div
              className="item-detail-box"
              style={{ backgroundImage: `url(${imagesO[index]})` }}
            >
              <div className="detail-box-overlay">
                <h3>{item.name}</h3>
                <div className="item-icon">
                  <img src={images[3]} alt="" />
                </div>
                <div className="item-icon">
                  <img src={images[1]} alt="" />
                </div>
              </div>
            </div>
            <div className="item-details-cta">
              <small>{item.name}</small>
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
