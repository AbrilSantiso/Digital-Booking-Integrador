import BottomMenuHomeLogged from './bottom-menu/bottom-menu-home-logged';
import BottomMenuHome from './bottom-menu/bottom-menu-home';
import BottomMenuSignIn from './bottom-menu/bottom-menu-sign-in';
import BottomMenuSignUp from './bottom-menu/bottom-menu-sign-up';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './menu.css';

function Menu(props) {

    const { page, logged, styles, handleClick, unlog } = props;
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const history = useHistory();


    useEffect(() => {
        setName(localStorage.getItem('name'));
        setLastName(localStorage.getItem('lastName'));
    });

    function BottomMenu() {
        if (page !== "/ingresar" && page !== "/registrarse" && logged) {
            return <BottomMenuHomeLogged unlog={unlogAndRedirect} logged={logged}/>
        };
        if (page !== "/ingresar" && page !== "/registrarse" && !logged) {
            return <BottomMenuHome />
        };
        if (page === "/ingresar") {
            return <BottomMenuSignIn />
        };
        if (page === "/registrarse") {
            return <BottomMenuSignUp />
        };
    };

    function unlogAndRedirect() {
        unlog();
        history.push("/ingresar");
    }

    return (
        <div className="menu-container" style={styles}>

            <div className="top-menu">
                <h3 className="close-icon" onClick={handleClick}>X</h3>
                {page !== "/ingresar" && page !== "/registrarse" && logged ?
                    <div id="welcome-user-logged-menu">
                        <div id="user-icon-menu-logged"><h4>{name.charAt(0).toUpperCase()}{lastName.charAt(0).toUpperCase()}</h4></div>
                        <span id="greeting-logged">Hola,</span>
                        <span id="user-name-menu-logged">{name} {lastName}</span>
                    </div>
                    : <h3 className="menu-text">MENÚ</h3>}
            </div>
            {BottomMenu()}

        </div>
    );
};

export default Menu;