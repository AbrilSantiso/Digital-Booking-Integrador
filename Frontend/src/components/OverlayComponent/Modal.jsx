import React, { useState } from "react";
import Overlay from "react-overlay-component";
import ImageGallery from "../ImageGallery/ImageGallery";
import "./Modal.css";

export default function Modal(props) {
  const {product, divider} = props;
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);
  const configs = {};

  return (
    <>
      <button className="button-gallery"
        onClick={() => {
          setOverlay(true);
        }}
      >ver más
      </button>

      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <ImageGallery productImages={product.images} divider={divider} />
      </Overlay>
    </>
  );
}
