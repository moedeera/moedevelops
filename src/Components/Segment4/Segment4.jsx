import { useEffect, useRef, useState } from "react";
import "./Segment4.css";
import author from "./author.jpg";

export const Segment4 = ({ info }) => {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Intersection threshold for 30% visibility
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
      className="segment-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateY(20%)",
        transition: "opacity 0.75s, transform 1s",
      }}
      ref={componentRef}
    >
      <div className="segment-4-text">
        <div className="segment-4-text-quote">{info.quote}</div>
        <div className="segment-4-text-author">
          <div className="segment-4-author-pic">
            <img src={author} alt="author" />
          </div>
          <div className="segment-4-author-info">
            <h3>{info.author}</h3>
            <small>{info.position}</small>
          </div>
        </div>
      </div>
      <div className="segment-4-box"></div>
    </div>
  );
};
