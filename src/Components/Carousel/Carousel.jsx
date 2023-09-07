import "./Carousel.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.jpg";
export const Carousel = () => {
  const items = [
    { name: "goldenrod", image: img1 },
    { name: "crimson", image: img2 },
    { name: "red", image: img3 },
    { name: "blue", image: img1 },
    { name: "green", image: img2 },
    { name: "purple", image: img3 },
    { name: "orange", image: img1 },
    { name: "teal", image: img2 },
  ];

  return (
    <div>
      <div className={`carousel slide-left`}>
        {items.map((item) => (
          <div key={item.name} className={`carousel-item `}>
            <h1>{item.name}</h1>
            <div className="carousel-overlay">
              <img src={img1} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
