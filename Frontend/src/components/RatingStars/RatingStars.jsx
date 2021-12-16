import { FaStar } from "react-icons/fa";
import "./RatingStars.css"

function RatingStars(props) {
    const { puntuation } = props;
    return (
        <div>
            <FaStar className={`${puntuation > 0? "rating-star-product" : "rating-star-reservation"}`} />
            <FaStar className={`${puntuation > 2 ? "rating-star-product" : "rating-star-reservation"}`} />
            <FaStar className={`${puntuation > 4 ? "rating-star-product" : "rating-star-reservation"}`} />
            <FaStar className={`${puntuation > 6 ? "rating-star-product" : "rating-star-reservation"}`} />
            <FaStar className={`${puntuation > 8 ? "rating-star-product" : "rating-star-reservation"}`} />
        </div>
    )
}

export default RatingStars;