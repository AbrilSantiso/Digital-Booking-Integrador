import React from "react";
import { FaBars } from "react-icons/fa";
import "./NavBar.css";

function NavBar(props) {
    const { onClick } = props;
    return (
        <button className="nav-bar" onClick={onClick}>
            <FaBars className="hamburguer-menu-icon" />
        </button>
    );
}

export default NavBar;