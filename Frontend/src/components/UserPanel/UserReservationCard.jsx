import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import RatingStars from "../RatingStars/RatingStars";
import { PRODUCT_BY_ID } from "../../utils/apis";
import LoadingCard from "../LoadingSkeleton/LoadingCard";
import axios from "axios";
import "./UserReservationCard.css";



function UserReservationCard(props) {
    
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const { checkInDate, checkOutDate, productId } = props;

    useEffect(() => {
        axios.get(`${PRODUCT_BY_ID}${productId}`)
            .then((result) => {
                setProduct(result.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, []);
    

    if (loading) return <LoadingCard />;

    return (
        <article className="user-reservation-card">
            <h3 className="user-reservation-title">Detalle de la reserva</h3>
            <article className="user-reservation-details">
                <img src={product.images[0].url} alt="imagen del alojamiento" />
                <section className="reservation-info-section">
                    <section className="user-reservation-info" key={product.id}>
                        <p className="user-card-category-reservation">{product.category.title}</p>
                        <h4 className="user-card-product-reservation">{product.name}</h4>
                        <RatingStars puntuation={product.avgPuntuation.toFixed()} isReservation={true} />
                        <div className="user-card-location-reservation">
                            <FaMapMarkerAlt className="map-icon-home" />
                            <p className="location-city-reservation">{product.location.address}</p>                
                        </div>
                        <p className="location-city-reservation">{product.city.name}, {product.city.nameCountry}</p>
                    </section>
                    <section className="user-card-checkin-detail">
                        <div className="divisor-line" />
                        <div className="checkin-checkout">
                            <p>Check in</p>
                            <p>{new Date(checkInDate).getDate()}/{new Date(checkInDate).getMonth() + 1}/{new Date(checkInDate).getFullYear()}</p>
                        </div>
                        <div className="divisor-line" />
                        <div className="checkin-checkout">
                            <p>Check out</p>
                            <p>{new Date(checkOutDate).getDate()}/{new Date(checkOutDate).getMonth() + 1}/{new Date(checkOutDate).getFullYear()}</p>
                        </div>
                        <div className="divisor-line" />
                    </section>
                </section>
            </article>
        </article>
    )
}

export default UserReservationCard;