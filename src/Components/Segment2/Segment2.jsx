import { Link } from "react-router-dom";
import "./Segment2.css";
import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
export const Segment2 = ({ info }) => {
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
      className="segment-2"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(20%)",
        transition: "opacity 0.75s, transform 1s",
      }}
      ref={componentRef}
    >
      <div className="segment-2-upper">
        <h1>{info.header}</h1>
      </div>
      <div className="segment-2-lower">
        {info.texts.map((text, index) => (
          <div key={index} className="segment-2-ls">
            <h3>{text.header}</h3>
            <p>{text.text}</p>
            {text.button && (
              <Link to={`${text.link}`} className="btn">
                {text.button}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
