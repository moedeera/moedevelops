import React, { useState } from "react";

const ImageResizer = ({ imageUrl }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleEnlarge = () => {
    setIsEnlarged(!isEnlarged);
  };

  const containerStyle = {
    width: isEnlarged ? "80%" : "100%",
    maxWidth: isEnlarged ? "80%" : "600px",
    aspectRatio: "16 / 9",
    overflow: "hidden",
    cursor: "pointer",
    margin: "0 auto",
    transition: "all 0.3s ease-in-out",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div style={containerStyle} onClick={toggleEnlarge}>
      <img src={imageUrl} alt="Display" style={imageStyle} />
    </div>
  );
};

export default ImageResizer;
