import { Link } from "react-router-dom";
import "./Segment5.css";
import { useEffect, useRef, useState } from "react";

export const Segment5 = ({ info }) => {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Intersection threshold for 30% visibility
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
  return (
    <div
      className="segment-5"
      style={{
        opacity: isVisible ? 1 : 0,

        transition: "opacity 1.25s",
      }}
      ref={componentRef}
    >
      {info.map((item) => (
        <div key={item.id} className="segment-5-box">
          <small style={{ backgroundColor: `${item.color}` }}>
            {item.small}
          </small>
          <h3>{item.header}</h3>
          <p>{item.text}</p>
          <div className="segment-5-button-container">
            <Link to={`${item.link1}`} className="btn">
              {item.button1}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
