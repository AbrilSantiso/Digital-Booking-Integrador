
import ProductLabel from "../ProductLabel/ProductLabel";
import React, { useEffect} from "react";
import logo from "../../img/logo.png";
import team from "../../img/avatars.png";
import "./AboutUs.css";

function AboutUsScreen(props) {

    const { setOnPage } = props;
    
    useEffect(() => {
        setOnPage("/about-us");
     }, []);
    return (
        <section className="about-us-section">
            <ProductLabel page={"/quienes-somos"} />

            <section className="about-us-content">
                <div className="logo-team-img">
                    <img src={logo} alt="Imagen del logo de Digital Booking" id="logo-img" />
                    <img src={team} alt="Imagen del equipo de Digital Booking" id="team-img" />
                    <div className="line-separation about-us-line"></div>
                </div>
                <div className="about-us-description-container">
                    <p className="about-us-description">Somos <a target="_blank"  href="https://www.linkedin.com/in/dsrring/">Dani</a>, <a target="_blank"  href="https://www.linkedin.com/in/jhonalexis-parra/">Jhon</a>, <a target="_blank"  href="https://www.linkedin.com/in/solrocca/">Sol</a>, <a target="_blank"  href="https://www.linkedin.com/in/santiago-garlot">Santi</a> y <a target="_blank"  href="https://www.linkedin.com/in/abril-santiso/">Abru</a></p>
                    <p className="about-us-description"> Un equipo de 5 estudiantes de programación, apasionados por el desarrollo de Software.</p>
                    <p className="about-us-description"> <span className="highlighted-word">Digital Booking</span> es nuestro trabajo integrador, desarrollado con mucho esfuerzo y amor a lo largo de 4 Sprints de 2 semanas, en el contexto de finalización de nuestro primer año de la carrera Certified Tech Developer.</p>
                    <p className="about-us-description">La accesibilidad y la usabilidad, fueron pilares fundamentales para nosotros cuando construimos el sitio, y como emprendimos un camino de aprendizaje y mejoras continuas, estamos abiertos a recibir tus sugerencias, comentarios y feedback. </p>
                    <p className="about-us-description">Puedes escribirnos a <span className="highlighted-word">digitalbooking.lat@gmail.com</span></p>
                </div>
            </section>
        </section>

    );
}

export default AboutUsScreen;
