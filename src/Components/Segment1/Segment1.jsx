import "./Segment1.css";
// import { useInView } from "react-intersection-observer";
// import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
export const Segment1 = ({ info }) => {
  // const { ref, inView } = useInView({
  //   threshold: 0.6,
  // });

  // const animation = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       opacity: 1,
  //       transition: {
  //         type: "spring",
  //         duration: 2,
  //         bounce: 0.1,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({
  //       opacity: 0,
  //     });
  //   }
  // }, [inView, animation]);
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
      className="segment-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-20%)",
        transition: "opacity 1.5s, transform 1s",
      }}
      ref={componentRef}
    >
      <div>
        <h1>
          {info.header}
          {info.header2}
        </h1>
      </div>
      <div className="segment-1-text">
        <p>{info.text}</p>
        <button className="btn">{info.button}</button>
      </div>
    </div>
  );
};
