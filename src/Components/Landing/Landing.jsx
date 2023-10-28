import { Link } from "react-router-dom";
import "./Landing.css";
import { useEffect, useRef, useState } from "react";
export const Landing = () => {
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
      className="landing "
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateY(10%)",
        transition: "opacity 0.75s, transform 1s",
      }}
      ref={componentRef}
    >
      <div>
        {" "}
        <small>Build Quality Websites</small>
      </div>
      <h1 className="header-title">
        Web Development <br></br> Solutions
      </h1>

      <p>
        Whether it is an eCommerce website or a personal portfolio, find the
        right digital solution for you today.
      </p>
      <Link to={"/portfolio"}>
        <button className="btn">See Portfolio</button>
      </Link>
    </div>
  );
};
