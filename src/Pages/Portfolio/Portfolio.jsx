import { images } from "../../assets/Images/Images";
import { portfolioImages } from "../../assets/Portfolio/images";
// import { Filter } from "./Filter/Filter";
import "./Portfolio.css";
import image1 from "./portfolio1.png";
import image2 from "./super-donair.png";
import image3 from "./portfolio3.png";
import image4 from "./portfolio4.jpg";
import image5 from "./greenframe.png";
import image6 from "./p6.png";
import image7 from "./p7.png";
import image8 from "./portfolio8.png";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  const items = [
    { id: 1, name: "Men's Fashion", link: "mensfashion" },
    { id: 2, name: "Local Diner", link: "local" },
    { id: 3, name: "Salon Website", link: "salon" },
    { id: 4, name: "Fitness Website", link: "fitness" },
    { id: 5, name: "Online Learning", link: "online" },
    { id: 6, name: "Clothing", link: "clothing" },
    { id: 7, name: "Farm Website", link: "farm" },
    { id: 8, name: "Niche Website", link: "niche" },
  ];

  const imagesO = [
    image7,
    image2,
    image1,

    image3,
    image4,
    image5,
    image6,

    image8,
  ];

  return (
    <div className="page-container portfolio-page">
      <h1>My Latest Works</h1>
      {/* <Filter /> */}
      <div className="portfolio-container">
        {items.map((item, index) => (
          <div key={item.id} className="portfolio-item">
            <Link
              to={`/portfolio/${item.link}`}
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
            </Link>

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
