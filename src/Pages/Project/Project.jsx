import "./Project.css";
import { useParams } from "react-router-dom";
import { iconImages } from "../../Components/IconGallery/Icons";
import { portfolioImages } from "../../assets/Portfolio/images";
export const Project = () => {
  const { project } = useParams();

  const tech = [
    { id: 1, name: "JavaScript", image: iconImages[0] },

    { id: 2, name: "Shopify", image: iconImages[1] },
    { id: 3, name: "Squarespace", image: iconImages[2] },
    { id: 4, name: "React", image: iconImages[3] },
  ];

  return (
    <div className="page-container project">
      <div className="project-header">
        <div className="project-header-text">
          <small>Current Project</small>
          <h1>
            An eCommerce Website with a repertoire towards user experience{" "}
          </h1>
          <p>
            Fuel your creative ambitions with our live interactive workshops.
            Spend a day with design business pros and walk away with knowledge
            that lasts a lifetime. Fuel your creative ambitions with our live
            interactive workshops. Spend a day with design business pros and
            walk away with knowledge that lasts a lifetime.
          </p>
          <button className="btn">Visit Site</button>
        </div>
        <div className="project-header-tech">
          <h3>Tech stack</h3>

          {tech.map((item) => (
            <div key={item.id} className="project-tech">
              <div className="project-tech-icon">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="project-tech-name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="project-images">
        <div
          className="project-gallery"
          style={{ backgroundImage: `url(${portfolioImages[8]})` }}
        ></div>
        <div
          className="project-gallery"
          style={{ backgroundImage: `url(${portfolioImages[7]})` }}
        ></div>
        {/* <div
          className="project-gallery"
          style={{ backgroundImage: `url(${portfolioImages[2]})` }}
        ></div> */}
      </div>
    </div>
  );
};
