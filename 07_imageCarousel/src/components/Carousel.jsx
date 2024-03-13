import CarouselItem from "./CarouselItem";

import { useState } from "react";
import images from "../Data/data";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    //Current Index: 0
    // Action: User clicks the "Previous" button.
    //(-1 + 5) % 5 is (4) % 5 which is 4.
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  //   setCurrentIndex(function (prevIndex) {
  //     return (prevIndex - 1 + images.length) % images.length;
  //   });

  const goToNext = () => {
    //prev index is 4 , so it will go the 0th image
    //(4 + 1) % 5 = 5 % 5 = 0
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    // <div className="carousel-container">
    //   {images.map((img) => (
    //     <CarouselItem key={img.id} src={img.src} caption={img.caption} />
    //   ))}
    // </div>
    <div className="carousel-container">
      <button onClick={goToPrevious}>Prev</button> {/* Previous button */}
      {/* <CarouselItem
        src={images[currentIndex].src}
        caption={images[currentIndex].caption}
      /> */}
      {/* it will wotk both with map withoup map , without map => remove visiblity functionality */}
      {images.map((image, index) => (
        <CarouselItem
          key={image.id}
          src={image.src}
          caption={image.caption}
          isVisible={index === currentIndex}
        />
      ))}
      <button onClick={goToNext}>Next</button> {/* Next button */}
    </div>
  );
};

export default Carousel;
