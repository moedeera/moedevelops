import "./Project.css";
import { Link, useParams } from "react-router-dom";
import { iconImages } from "../../Components/IconGallery/Icons";

import { projectList } from "../../assets/Portfolio/projects";
import { useEffect, useState } from "react";
export const Project = () => {
  const { project } = useParams();
  const [currentProject, setCurrentProject] = useState(null);

  const findProject = (name) => {
    console.log(project, projectList[0].slug);

    const match = projectList.find((project) => project.slug === name);
    if (match) {
      setCurrentProject(match);
      console.log("match :", currentProject);
    } else {
      console.log("no match");
    }
  };

  useEffect(() => {
    findProject(project);
  }, []);

  const techIconImages = [
    { id: 1, name: "JavaScript", image: iconImages[0] },

    { id: 2, name: "Shopify", image: iconImages[1] },
    { id: 3, name: "Squarespace", image: iconImages[2] },
    { id: 4, name: "React", image: iconImages[3] },
    { id: 5, name: "Wordpress", image: iconImages[4] },
    { id: 5, name: "CSS", image: iconImages[5] },
    { id: 5, name: "HTML", image: iconImages[6] },
    { id: 5, name: "Elementor", image: iconImages[7] },
  ];

  function findImageByName(name) {
    // Use the Array.find() method to search for the first matching object
    const foundImage = techIconImages.find(
      (image) => image.name.toLowerCase() === name.toLowerCase()
    );

    return foundImage; // Returns the matching image object or undefined if not found
  }

  const proj = currentProject;
  // console.log(proj);
  if (!proj) {
    return <>Sorry No Such Project exists</>;
  }
  return (
    <div className="page-container project">
      <div className="project-header">
        <div className="project-header-text">
          <small>{proj.orientation}</small>
          <h1>
            <span style={{ color: `${proj.color}` }}>{proj.title}|</span>{" "}
            {proj.headerSummary}
          </h1>
          <p>{proj.info}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={proj.link}
            className="btn"
          >
            Visit Site
          </a>
        </div>
        <div className="project-header-tech">
          <h3>Tech stack</h3>

          {proj.stack.map((item) => (
            <div key={item.id} className="project-tech">
              <div className="project-tech-icon">
                <img src={findImageByName(item).image} alt={item} />
              </div>
              <div className="project-tech-name">
                {findImageByName(item).name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="project-images">
        <div
          className="project-gallery"
          style={{ backgroundImage: `url(${proj.img1})` }}
        ></div>
        <div
          className="project-gallery"
          style={{ backgroundImage: `url(${proj.img2})` }}
        ></div>
        {proj.img3 && (
          <div
            className="project-gallery"
            style={{ backgroundImage: `url(${proj.img3}` }}
          ></div>
        )}
      </div>
    </div>
  );
};
