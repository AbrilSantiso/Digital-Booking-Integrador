import React from "react";
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaUserCog, FaUser } from "react-icons/fa";
import "./LoggedInMenu.css";

function LoggedInMenu(props) {

    const { unlog } = props;
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [initials, setInitials] = useState("");
    const [isAdmin, setIsAdmin] = useState("");
    const history = useHistory();


    useEffect(() => {
        setName(localStorage.getItem('name'));
        setLastName(localStorage.getItem('lastName'));
        setInitials(name.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase());
        setIsAdmin(localStorage.getItem('isAdmin'));
    });
    
    function unlogAndRedirect() {
        unlog();
        history.push("/ingresar");
    }

    return (
        <div className="loggedIn-menu">
            <div className="user-panels">
                {isAdmin && <Link to="/administracion" title="Panel de administración" aria-label="Administration panel"><FaUserCog alt="Ícono panel de administración" className="admin-icon" /></Link>}
                <Link to="/panel-de-usuario" title="Panel de usuario" aria-label="User panel"><FaUser alt="Ícono panel de usuario" className="user-icon" /></Link>
            </div>
            <div id="welcome-user">
                <div id="user-icon">
                    <span aria-label="Initials name avatar">{initials}</span>
                </div>
                <div id="greeting">
                    <p id="hello">Hola,</p>
                    <p id="user-name">{name} {lastName}</p>
                </div>
            </div>
            <h5 className="close-icon" onClick={unlogAndRedirect}>X</h5>
        </div>
    );
}

export default LoggedInMenu;
