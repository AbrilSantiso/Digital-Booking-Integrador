import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import RatingStars from "../RatingStars/RatingStars";
import ButtonFav from "../ButtonFav/ButtonFav";
import Characteristics from "../Characteristics/Characteristics";
import MapButtonHome from '../Map/MapButtonHome';
import "./Products.css";

function Product(props) {
  const { product } = props;
  const [limit] = useState(100);
  const [unlimitedProduct, setUnlimitedProduct] = useState("none");

  /* ------ KEEP-READING FUNCTIONS ----------*/
  function ellipsis(description, len) {
    let limit = description
    if (description.length > len) {
      limit = description.slice(0, len);
    }
    return limit
  };

  function showCompleteText(product) {
    if (product.id === unlimitedProduct) {
      return product.description.slice(limit, 350);
    } else {
      return "..."
    }
  };

  function keepReading(id) {
    if (unlimitedProduct !== id) {
      setUnlimitedProduct(id);
    } else {
      setUnlimitedProduct("none")
    }
  };

  function showKeepReadingText(id) {
    if (unlimitedProduct !== id) {
      return "Continuar leyendo"
    } else {
      return "Ver menos"
    }
  };

  function wordPuntuation(avgPuntuation) {
    let wordPuntuation = "";
    if (avgPuntuation === 0) {
      wordPuntuation = "Sin calificación"
    } else if (avgPuntuation < 3) {
      wordPuntuation = "Malo"
    } else if (avgPuntuation < 5) {
      wordPuntuation = "Regular"
    } else if (avgPuntuation < 7) {
      wordPuntuation = "Bueno"
    } else if (avgPuntuation < 9) {
      wordPuntuation = "Muy Bueno"
    } else {
      wordPuntuation = "Excelente"
    }
    return wordPuntuation;
  }

  return (
    <div className="product-item" key={product.id}>
      <img src={product.images[0].url} alt="imagen del alojamiento" />
      <span className="heart-home">
        <ButtonFav isHome={true} productId={product.id} />
      </span>
      <div className="product-text">
        <div className="category-rating">
          <div className="category-stars">
            <p className="product-category">{product.category.title}</p>
            <RatingStars puntuation={product.avgPuntuation.toFixed()} />
          </div>
          <div className="rating">
            <p className="number-rating">{product.avgPuntuation > 0 ? product.avgPuntuation.toFixed() : "#"}</p>
            <p className="word-rating">{wordPuntuation(product.avgPuntuation)}</p>
          </div>
        </div>
        <p className="product-name">{product.name}</p>
        <div className="product-location">
          <p className="location-map">
            <FaMapMarkerAlt className="map-icon-home" />
            {product.city.name}
          </p>
          <MapButtonHome product={product} />
        </div>
        <Characteristics productCharacteristics={product.characteristics} page="home" />

        <p className="product-description">{ellipsis(product.description, limit, product.id)}{showCompleteText(product)}<span className="description-more" onClick={() => keepReading(product.id)}>{showKeepReadingText(product.id)}</span></p>
        <Link to={`/producto/${product.id}`}><button className="product-detail">ver más</button></Link>
      </div>
    </div>
  );
}

export default Product;
