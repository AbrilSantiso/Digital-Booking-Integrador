import logo from "../../img/logo_header.png";
import ButtonLogin from "../ButtonLogin/ButtonLogin";
import ButtonRegister from "../ButtonRegister/ButtonRegister";
import NavBar from "../NavBar/NavBar";
import LoggedInMenu from "../LoggedInMenu/LoggedInMenu";
import { Link } from 'react-router-dom';
import Menu from "../Menu/DropDown-menu";
import { useState, useEffect } from 'react';
import "./Header.css";


function Header(props) {
    const [open, setOpen] = useState(false);
    const { page, logged, unlog } = props;
   
    useEffect(() => {
        setOpen(false)
    }, [page]);

    function handleClick() {
        setOpen(!open);
    };


    function handleStyle() {
        if (open) {
            return { right: "0" }
        } else {
            return { right: "-100000%" }
        }
    };

    function buttonNav() {
        if (page === "/ingresar") {
            return <div className="button-nav">
                <ButtonRegister></ButtonRegister>
            </div>
        }
        if (page === "/registrarse") {
            return <div className="button-nav">
                <ButtonLogin></ButtonLogin>
            </div>
        }
        if (page !== "/ingresar" && page !== "/registrarse" && !logged) {
            return <div className="button-nav">
                <ButtonRegister></ButtonRegister>
                <ButtonLogin></ButtonLogin>
            </div>
        }
    };

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo de Digital Booking" />
                </Link>
                <Link to="/" className="slogan">El confort que mereces</Link>
            </div>
            {buttonNav()}
            <NavBar onClick={handleClick}></NavBar>
            {page !== "/ingresar" && page !== "/registrarse" && logged ? <LoggedInMenu unlog={unlog}></LoggedInMenu> : ""}
            <Menu page={page} logged={logged} styles={handleStyle()} handleClick={handleClick} unlog={unlog} />
        </header>
    );

};

export default Header;