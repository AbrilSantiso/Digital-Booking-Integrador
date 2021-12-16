import React from "react";
import "./ButtonRegister.css";
import { Link } from 'react-router-dom';

function ButtonRegister() {
    return (
        <Link to="/registrarse"><button className="button-register">Crear cuenta</button></Link>
    )
}

export default ButtonRegister;
