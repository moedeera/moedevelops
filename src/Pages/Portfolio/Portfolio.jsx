import { images } from "../../assets/Images/Images";
import { findImageSet, imagesSorted } from "../../assets/Portfolio/images";
// import { Filter } from "./Filter/Filter";

import "./Portfolio.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";

import { Loading } from "../../Components/Loading/Loading";

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const projectData = collection(db, "projects");
  const fetchProjectData = async () => {
    try {
      const data = await getDocs(projectData);
      const projectsData = data.docs.map((doc) => ({
        ...doc.data(),
        projectId: doc.id,
      }));
      console.log(projectsData);
      setProjects(projectsData);
      setLoading(false);
    } catch (error) {
      console.log("error:", error);

      return error;
    }
  };

  const updateViews = async (id, views) => {
    console.log(id, views);
    const projectDoc = doc(db, "projects", id);
    const data = await getDoc(projectDoc);
    const newCount = { views: views + 1 };

    console.log(data.data());
    try {
      await updateDoc(projectDoc, newCount);
      fetchProjectData();
    } catch (error) {
      console.log(error);
    }
  };

  const updateLikes = async (id, likes) => {
    console.log(id, likes);
    const projectDoc = doc(db, "projects", id);
    const data = await getDoc(projectDoc);
    const newLikesCount = { likes: likes + 1 };

    console.log(data.data());
    try {
      await updateDoc(projectDoc, newLikesCount);
      fetchProjectData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="page-container portfolio-page">
      <h1>My Latest Works</h1>
      {/* <Filter /> */}
      <div className="portfolio-container">
        {projects
          .sort((a, b) => a.id - b.id)
          .map((proj) => (
            <div key={proj.id} className="portfolio-item">
              <Link
                onClick={() => {
                  updateViews(proj.projectId, proj.views);
                }}
                to={`/portfolio/${proj.slug}`}
                className="item-detail-box"
                style={{
                  backgroundImage: `url(${
                    proj.images
                      ? proj.images[0]
                      : findImageSet(proj.ref, imagesSorted)[0]
                  })`,
                }}
              >
                <div className="detail-box-overlay">
                  <h3>{proj.name}</h3>
                </div>
              </Link>

              <div className="item-details-cta">
                <small>{proj.orientation}</small>
                <div className="item-icons-small">
                  <div className="item-icon">
                    <small>{proj.views} </small> <img src={images[0]} alt="" />
                  </div>
                  <div className="item-icon">
                    <small>{proj.likes} </small>{" "}
                    <img
                      onClick={() => {
                        updateLikes(proj.projectId, proj.likes);
                      }}
                      src={images[2]}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
