import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./ImageGallery.css";

export default function ImageGallery(props) {
  const {productImages, divider, showThumbs} = props;
  

  const createCarouselItemImage = (index = {}) => (
    <div key={index}>
      <img src={`${productImages[index].url}`} alt="Foto del alojamiento"/>
    </div>
  );

  const baseChildren = (
    <div>
      {[...Array(productImages.length).keys()].map(createCarouselItemImage)}
    </div>
  );

  return (
    <Carousel
      autoPlay
      interval="3000"
      dynamicHeight
      infiniteLoop
      stopOnHover
      swipeable
      showThumbs={showThumbs}
      statusFormatter={(current, total) => `${current}${divider}${total}`}
    >
      {baseChildren.props.children}
    </Carousel>
  );
}
