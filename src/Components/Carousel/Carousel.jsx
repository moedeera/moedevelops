import "./Carousel.css";
import { findImageSet, imagesSorted } from "../../assets/Portfolio/images";
import { projectList } from "../../assets/Portfolio/projects";

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const Carousel = () => {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Intersection threshold for 30% visibility
    };

    const intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true); // Set the flag to prevent future animations
        }
      });
    };

    const observer = new IntersectionObserver(intersectionCallback, options);
    observer.observe(componentRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  const [carousel, serCarousel] = useState(false);

  return (
    <>
      {carousel ? (
        <></>
      ) : (
        <div
          style={{
            opacity: isVisible ? 1 : 0,

            transition: "opacity 1.5s",
          }}
          ref={componentRef}
        >
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
      )}
    </>
  );
};
