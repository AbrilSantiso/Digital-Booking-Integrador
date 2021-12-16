import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import ProductLabel from "../ProductLabel/ProductLabel";
import UserReservationCard from "./UserReservationCard";
import GoToTop from "../GoToTop/GoToTop";
import { RESERVATIONS_BY_USER_ID, GET_ME } from "../../utils/apis";
import { FaHeart, FaCalendarCheck, FaHouseUser, FaFrown } from "react-icons/fa";
import Product from "../Products/Product";
import axios from "axios";
import "./UserPanel.css";

function UserPanel(props) {

    const { setOnPage } = props;
    const history = useHistory();
    const [reservations, setReservations] = useState();
    const [id] = useState(localStorage.getItem("userId"));
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);

    window.onload = () => {
        checkIfItsLogged();
        setOnPage("user-panel")
    }

    function checkIfItsLogged() {
        const token = localStorage.getItem("token")
        if (!token) {
            history.push(`/ingresar`);
        }
    }

    useEffect(() => {
        axios.get(`${RESERVATIONS_BY_USER_ID}${id}`)
            .then((result) => {
                setReservations(result.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, []);
    
    
    useEffect(() => {
        let token = localStorage.getItem('token')
    axios.post(GET_ME, token)
      .then(function (res) {
        setFavorites(res.data.favorites)
      })
      .catch(function (err) {
        console.log(err);
      });
     }, []);


    if (loading) return <LoadingSkeleton isProductDetail={true} />;

    return (
        <>
            <ProductLabel page={"/panel-de-usuario"} />

            {/* NavBar */}
            <nav aria-label="user-navigation" className="section-nav-bar">
                <ul className="user-nav-bar">
                    <li>
                        <a href="#favoritos" title="Ir a mis favoritos" className="user-nav-button">
                            <FaHeart className="user-page-icon-heart-nav" />
                        </a>
                    </li>
                    <li>
                        <a href="#reservas" title="Ir a mis reservas" className="user-nav-button">
                            <FaCalendarCheck className="user-page-icon-calendar-nav" />
                        </a>
                    </li>
                    <li>
                        <a href="#colaborador" title="Ir a registro de propiedad" className="user-nav-button">
                            <FaHouseUser className="user-page-icon-house-nav" />
                        </a>
                    </li>
                </ul>
            </nav>

            {/* User favorites */}
            <section className="section-user-favorites">
                <p className="heading-user-section">
                    <FaHeart className="user-page-icon-heart" />
                    <h2 id="favoritos" className="title-user-section">Mis favoritos</h2>
                </p>
                <div className="line-separation"></div>
                <section className="user-cards">
                    {favorites.length === 0 ? <div className="banner-empty-section">
                        <FaFrown className="banner-empty-icon" />
                        <h3 className="banner-empty-title">Aún no tienes favoritos</h3>
                        <p className="banner-subtitle">Selecciona tus alojamientos favoritos para verlos en esta sección</p>
                        <Link to="/" className="to-home">Volver al inicio</Link>
                    </div> : 
                        favorites.map((favorite) => (
                           <Product product={favorite}/>
                        ))
                    }
                </section>
            </section>

            {/* Reservation´s history */}
            <section className="section-user-reservation">
                <p className="heading-user-section">
                    <FaCalendarCheck className="user-page-icon-calendar" />
                    <h2 id="reservas" className="title-user-section">Mis reservas</h2>
                </p>
                <div className="line-separation"></div>
                <section className="user-cards">
                    {reservations.length === 0 ? <div className="banner-empty-section">
                        <FaFrown className="banner-empty-icon" />
                        <h3 className="banner-empty-title">Aún no efectuaste reservas</h3>
                        <p className="banner-subtitle">Cuando realices reservas podrás consultarlas en esta sección</p>
                        <Link to="/" className="to-home">Volver al inicio</Link>
                    </div> : reservations.map((reservation) => (
                        <UserReservationCard checkInDate={reservation.startDate} checkOutDate={reservation.endDate} hour={reservation.hour} productId={reservation.product.id} />
                    ))}
                </section>
            </section>

            {/* User contributor */}
            <section className="section-user-contributor">
                <p className="heading-user-section">
                    <FaHouseUser className="user-page-icon-house" />
                    <h2 id="colaborador" className="title-user-section">Registra tu propiedad</h2>
                </p>
                <div className="line-separation"></div>
                <article className="contributor-form-container">
                    <h3 className="subtitle-user-section">Solicita una cuenta de colaborador</h3>
                    <span className="subtitle-text">Inscríbete para publicar tu propiedad.</span>
                    <form id="contributor-form" name="Contributor Form" className="contributor-form">
                        <label for="email" className="contributor-label">
                            Ingresa tu correo electrónico
                        </label>
                        <input type="email" id="email" name="email" value="" title="Ingresa tu correo electrónico" className="contributor-input" placeholder="mialojamiento@gmail.com" required />
                    </form>
                    <button type="submit" title="Enviar solicitud" className="contributor-button">Enviar</button>
                </article>
            </section>
            <GoToTop />
        </>
    );
}

export default UserPanel;
