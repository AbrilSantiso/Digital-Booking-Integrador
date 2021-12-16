import React from "react";
import { Link } from 'react-router-dom';
import "./ButtonLogin.css";


function ButtonLogin() {
    return (
        <Link to="/ingresar"> <button className="button-login">Iniciar sesión</button></Link>
    )
}

export default ButtonLogin;
