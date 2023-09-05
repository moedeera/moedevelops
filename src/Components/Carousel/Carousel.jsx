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

  return (
    <div>
      <div className="carousel">
        {items.map((item) => (
          <div
            key={item.name}
            className="carousel-item"
            style={{ backgroundColor: `${item.name}` }}
          >
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
