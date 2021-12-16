import SocialFollow from "../../SocialFollow/SocialFollow";
import { FaUserCog, FaUser } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../menu.css';

function BottomMenuHomeLogged(props) {
    const { unlog, logged } = props;
    const [isAdmin, setIsAdmin] = useState("");

    useEffect(() => {
        setIsAdmin(localStorage.getItem('isAdmin'));
    }, []);

    return (
        <>
            <div className="bottom-menu">
                <div className="user-panels-mobile">
                    {logged && <Link to="/panel-de-usuario" title="Panel de usuario" aria-label="User panel"><FaUser alt="Ícono panel de usuario" className="user-icon user-icon-burger-menu" /></Link>}
                    {isAdmin && <Link to="/administracion" title="Panel de administración" aria-label="Administration panel"><FaUserCog alt="Ícono panel de administración" className="admin-icon admin-icon-burger-menu" /></Link>}
                </div>
                <p className="bottom-menu-logged-text" onClick={unlog}>¿Deseas <span className="link-log-out" >cerrar sesión</span>?</p>
                <div className="line line-logged"></div>
                <div className="footer-menu">
                    <SocialFollow isBurgerMenu={true} />
                </div>
            </div>
        </>
    );
};

export default BottomMenuHomeLogged;