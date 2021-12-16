import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import ProductLabel from "../ProductLabel/ProductLabel";
import RatingStars from "../RatingStars/RatingStars";
import ButtonShare from "../ButtonShare/ButtonShare";
import ButtonFav from "../ButtonFav/ButtonFav";
import ImageGalleryStatic from "./ImageGalleryStatic";
import Characteristics from "../Characteristics/Characteristics";
import ButtonReservation from "../ButtonReservation/ButtonReservation";
import Map from "../Map/Map";
import ProductPolicies from "../ProductPolicies/ProductPolicies";
import { FaMapMarkerAlt, FaCalendarDay } from "react-icons/fa";
import CalendarReservation from "../SearchCalendar/CalendarReservation";
import GoToTop from "../GoToTop/GoToTop";
import { PRODUCT_BY_ID } from "../../utils/apis";
import "./ProductLayout.css";

const axios = require('axios');

function ProductDetails(props) {

  const { id } = useParams();
  const { setOnPage } = props;
  window.onload = setOnPage("/product-detail");

  const [product, setProduct] = useState();
  const [productRules, setProductRules] = useState();
  const [productSanity, setProductSanity] = useState();
  const [productCancellationPolicy, setProductCancellationPolicy] = useState();
  const [loading, setLoading] = useState(true);
  let shareLinks = "producto";

  function wordPuntuation(avgPuntuation) {
    let wordPuntuation = "";
    if (avgPuntuation === 0) {
      wordPuntuation = "Sin calificaciones"
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

  useEffect(() => {
    axios.get(`${PRODUCT_BY_ID}${id}`)
      .then((result) => {
        setProduct(result.data);
        setPolicies(result.data.policies);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  /* ----- Parse policies -----*/
  function parseString(string) {
    let separatedStringsArray = string.match(/[A-Z]+[^A-Z]*|[^A-Z]+/g);
    console.log(separatedStringsArray)
    return separatedStringsArray;
  }

  /* ----- Parse policies -----*/
  function setPolicies(policies) {
    setProductRules(parseString(policies.rules));
    setProductSanity(parseString(policies.sanitySecurity));
    setProductCancellationPolicy(parseString(policies.cancellationPolicy));
  }


  if (loading) return <LoadingSkeleton isProductDetail={true} />;

  return (
    <>
      <ProductLabel page={"/producto/:id"} />

      {/* Product´s details */}
      <section className="product-details">
        <div className="location-city">
          <FaMapMarkerAlt className="map-icon" />
          <div className="product-address">
            <p className="product-location-detail">
              {product.location.address},
            </p>
            <p className="product-location-detail">
              {product.city.name}, {product.city.nameCountry}
            </p>
          </div>
        </div>
        <div className="rating-stars">
          <div className="rating-detail">
            <p className="word-rating-detail">{wordPuntuation(product.avgPuntuation)}</p>
            <RatingStars puntuation={product.avgPuntuation.toFixed()} />
          </div>
          <p className="number-rating-detail">{product.avgPuntuation > 0 ? product.avgPuntuation.toFixed() : "#"}</p>
        </div>
      </section>
      {/* Product´s Share/Fav/Gallery */}
      <section className="share-fav">
        <ButtonShare shareLinks={shareLinks} id={product.id} />
        <ButtonFav />
      </section>

      <ImageGalleryStatic product={product} />

      {/* Product´s description */}
      <section className="section-product-description">
        <h2 className="title-product-detail">{product.city.name}, tu próxima aventura</h2>
        <p className="product-description-detail">{product.description}</p>
      </section>

      {/* Product´s characteristics */}
      <section className="section-product-characteristics">
        <h2 className="title-product-detail">¿Qué ofrece el lugar?</h2>
        <div className="line-separation"></div>
        <div className="characteristics">
          <Characteristics productCharacteristics={product.characteristics} page="product-detail" />
        </div>
      </section>

      {/* Lodging´s reservation */}
      <section className="section-product-reservation">
        <h2 className="title-product-detail">Fechas disponibles</h2>
        <div className="reservation-fields">
          <div className="calendar-reservation">
            <FaCalendarDay className="calendar-icon-reservation" />
            <CalendarReservation />
          </div>
          <div className="start-reservation">
            <h3 className="text-reservation">Agrega tus fechas de viaje para obtener precios exactos</h3>
            <ButtonReservation id={product.id} />
          </div>
        </div>
      </section>

      {/* Lodging´s map */}
      <section className="section-product-geolocation">
        <h2 className="title-product-detail">¿Dónde estarás?</h2>
        <div className="line-separation"></div>
        <p className="geolocation">{product.city.name}, {product.city.nameCountry}</p>
        <div className="map">
          <Map product={product} className="map-product-detail" />
        </div>
      </section>

      <ProductPolicies rules={productRules} sanity={productSanity} cancellationPolicy={productCancellationPolicy} />
      <GoToTop />
    </>
  );
}

export default ProductDetails;
