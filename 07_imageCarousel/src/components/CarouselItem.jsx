import React from "react";
import images from "../Data/data";
const CarouselItem = ({ src, caption, isVisible }) => {
  const visibilityStyle = isVisible ? {} : { display: "none" };

  return (
    <div>
      <div className="carousel-item" style={visibilityStyle}>
        <img src={src} alt={caption} />
        {caption && <p>{caption}</p>}
      </div>
    </div>
  );
};

export default CarouselItem;
