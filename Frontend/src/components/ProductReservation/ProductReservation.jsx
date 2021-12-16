import React, { useEffect, useState } from "react";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import ProductLabel from "../ProductLabel/ProductLabel";
import ReservationForm from "../ReservationForm/ReservationForm";
import ReservationDetail from "../ReservationForm/ReservationDetail";
import ProductPolicies from "../ProductPolicies/ProductPolicies";
import GoToTop from "../GoToTop/GoToTop";
import { useHistory, useParams } from 'react-router-dom';
import { PRODUCT_BY_ID } from "../../utils/apis";
import "./ProductReservation.css";

const axios = require('axios');

function ProductReservation(props) {
    const { id } = useParams();
    const { setOnPage } = props;
    const [product, setProduct] = useState();
    const [productRules, setProductRules] = useState();
    const [productSanity, setProductSanity] = useState();
    const [productCancellationPolicy, setProductCancellationPolicy] = useState();
    const [loading, setLoading] = useState(true);

    const history = useHistory();
    window.onload = () => {
        setOnPage("/product-reservation");
        checkIfItsLogged();
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

    function checkIfItsLogged() {
        const token = localStorage.getItem("token")
        if (!token) {
            history.push(`/ingresar`, { from: 'product-detail-page', id: id });
        }
    }

    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");

    function handleChangeCheckInDateProduct(value) {
        setCheckInDate(value)
    };

    function handleChangeCheckOutDateProduct(value) {
        setCheckOutDate(value)
    };

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
            <ProductLabel page={"/producto/:id/reserva"} />
            <section className="reservation-info">
                <ReservationForm handleChangeCheckInDateProduct={handleChangeCheckInDateProduct} handleChangeCheckOutDateProduct={handleChangeCheckOutDateProduct} />
                <ReservationDetail checkInDate={checkInDate} checkOutDate={checkOutDate} />
            </section>
            <ProductPolicies rules={productRules} sanity={productSanity} cancellationPolicy={productCancellationPolicy} />
            <GoToTop />
        </>
    )
}

export default ProductReservation;