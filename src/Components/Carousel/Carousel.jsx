import { useEffect, useState } from "react";
import "./Carousel.css";
export const Carousel = () => {
  const items = [
    { name: "goldenrod" },
    { name: "crimson" },
    { name: "red" },
    { name: "blue" },
    { name: "green" },
    { name: "purple" },
    { name: "orange" },
  ];
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <div>
      <div
        className={`carousel ${isAnimating ? "slide-left" : ""}`}
        onMouseOver={() => {
          setIsAnimating(false);
        }}
        onMouseLeave={() => {
          setIsAnimating(true);
        }}
      >
        {items.map((item) => (
          <div
            key={item.name}
            className={`carousel-item `}
            style={{ backgroundColor: `${item.name}`, transition: "5s ease" }}
          >
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
