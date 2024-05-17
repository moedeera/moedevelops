import "./Project.css";
import { Link, useParams } from "react-router-dom";
import { iconImages } from "../../Components/IconGallery/Icons";
import { projectList } from "../../assets/Portfolio/projects";
import { useEffect, useState } from "react";
import { findImageSet, imagesSorted } from "../../assets/Portfolio/images";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Loading } from "../../Components/Loading/Loading";
export const Project = () => {
  const { project } = useParams();
  const [currentProject, setCurrentProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const projectData = collection(db, "projects");

  const findProject = (name, projects) => {
    // console.log(project, projectList[0].slug);

    const match = projects.find((project) => project.slug === name);
    if (match) {
      setCurrentProject(match);
      console.log(name, "match :", match);
    } else {
      console.log("no match for", name, "from", projects);
    }
  };

  const getProjectData = async () => {
    try {
      const data = await getDocs(projectData);

      const filteredData = data.docs.map((doc) => ({ ...doc.data() }));
      console.log("success", filteredData);
      findProject(project, filteredData);
    } catch (error) {
      console.log("error:", error);

      findProject(project, projectList);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProjectData();
  }, []);

  const techIconImages = [
    { id: 1, name: "JavaScript", image: iconImages[0] },
    { id: 2, name: "Shopify", image: iconImages[1] },
    { id: 3, name: "Squarespace", image: iconImages[2] },
    { id: 4, name: "React", image: iconImages[3] },
    { id: 6, name: "Wordpress", image: iconImages[4] },
    { id: 7, name: "CSS", image: iconImages[5] },
    { id: 8, name: "HTML", image: iconImages[6] },
    { id: 9, name: "Elementor", image: iconImages[7] },
    { id: 10, name: "Firebase", image: iconImages[8] },
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

  if (loading) {
    return <Loading />;
  }

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

          {proj?.stack?.map((item) => (
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
          style={
            proj.images
              ? { backgroundImage: `url(${proj.images[0]})` }
              : {
                  backgroundImage: `url(${
                    findImageSet(proj.ref, imagesSorted)[0]
                  })`,
                }
          }
        ></div>
        <div
          className="project-gallery"
          style={
            proj.images
              ? { backgroundImage: `url(${proj.images[1]})` }
              : {
                  backgroundImage: `url(${
                    findImageSet(proj.ref, imagesSorted)[1]
                  })`,
                }
          }
        ></div>
        <div
          className="project-gallery"
          style={
            proj.images
              ? { backgroundImage: `url(${proj.images[2]})` }
              : {
                  backgroundImage: `url(${
                    findImageSet(proj.ref, imagesSorted)[2]
                  })`,
                }
          }
        ></div>
      </div>
    </div>
  );
};
