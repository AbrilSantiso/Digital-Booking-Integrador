import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import RatingStars from "../RatingStars/RatingStars";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import ButtonReservationConfirm from "../ButtonReservationConfirm/ButtonReservationConfirm";
import { PRODUCT_BY_ID } from "../../utils/apis";
import "./ReservationDetail.css";

const axios = require('axios');

function ReservationDetail(props) {
    const { id } = useParams();

    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const { checkInDate, checkOutDate } = props;

    useEffect(() => {
        axios.get(`${PRODUCT_BY_ID}${id}`)
            .then((result) => {
                setProduct(result.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <LoadingSkeleton isProductDetail={true} />;

    function showCheckInDate() {
        if (checkInDate) {
            return <p>{new Date(checkInDate).getDate()}/{new Date(checkInDate).getMonth() + 1}/{new Date(checkInDate).getFullYear()}</p>
        } else {
            return <p>--/--/--</p>
        }
    }
    function showCheckOutDate() {
        if (checkOutDate) {
            return <p>{new Date(checkOutDate).getDate()}/{new Date(checkOutDate).getMonth() + 1}/{new Date(checkOutDate).getFullYear()}</p>
        } else {
            return <p>--/--/--</p>
        }
    }
    return (
        <article className="product-reservation-item">
            <h2 className="product-reservation-title">Detalle de la reserva</h2>
            <article className="product-reservation-details">
                <img src={product.images[0].url} alt="imagen del alojamiento" />
                <section className="product-reservation-info">
                    <section className="product-info" key={product.id}>
                        <p className="product-category-reservation">{product.category.title}</p>
                        <p className="product-name-reservation">{product.name}</p>
                        <RatingStars puntuation={product.avgPuntuation.toFixed()} isReservation={true} />
                        <div className="product-location-reservation">
                            <FaMapMarkerAlt className="map-icon-home" />
                            <p className="location-city-reservation">{product.city.name}, {product.city.nameCountry}</p>
                        </div>
                    </section>
                    <section className="reservation-info-detail">
                        <div className="divisor-line" />
                        <div className="checkin-checkout">
                            <p>Check in</p>
                            {showCheckInDate()}
                        </div>
                        <div className="divisor-line" />
                        <div className="checkin-checkout">
                            <p>Check out</p>
                            <p>{showCheckOutDate()}</p>
                        </div>
                        <div className="divisor-line" />
                        <ButtonReservationConfirm />
                    </section>
                </section>
            </article>
        </article>
    )
}

export default ReservationDetail;