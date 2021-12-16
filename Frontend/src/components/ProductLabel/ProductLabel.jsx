import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import { PRODUCT_BY_ID } from "../../utils/apis";
import "./ProductLabel.css";

const axios = require('axios');

function ProductLabel(props) {

    const { id } = useParams();
    const { page } = props;

    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);


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

    function label() {
        if (page === "/producto/:id" || page === "/producto/:id/reserva") {
            return <div className="category-and-name">
                <p className="product-category-detail">{product.category.title}</p>
                <h1 className="product-name-detail">{product.name}</h1>
            </div>
        }
        if (page === "/administracion") {
            return <h1 className="title-admin">Administración</h1>
        }
        if (page === "/panel-de-usuario") {
            return <h1 className="title-admin">Panel de usuario</h1>
        }
        if (page === "/quienes-somos") {
            return <h1 className="title-admin">Quiénes somos</h1>
        }
    };

    return (
        <section className="product-label">
            <Link to="/" className="back"><FaChevronLeft title="Volver al inicio" className="back-icon" /></Link>
            {label()}
        </section>
    )
}

export default ProductLabel;