import { images } from "../../assets/Images/Images";
import "./Portfolio.css";

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
  return (
    <div className="page-container">
      Portfolio
      <div className="portfolio-filter">Filter</div>
      <div className="portfolio-container">
        {items.map((item) => (
          <div key={item.id} className="portfolio-item">
            <div className="item-detail-box">
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
