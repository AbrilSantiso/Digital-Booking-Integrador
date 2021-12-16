import React from "react";
import ScrollToTop from "./ScrollToTop";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SignUpScreen from "../SignUpScreen/SignUpScreen";
import SignInScreen from "../SignInScreen/SignInScreen";
import ProductDetails from "../ProductDetails/ProductLayout";
import ProductReservation from "../ProductReservation/ProductReservation";
import ProductCreate from "../ProductCreate/ProductCreate";
import UserPanel from "../UserPanel/UserPanel";
import AboutUsScreen from "../AboutUsScreen/AboutUsScreen";
import Home from "../Home/Home";


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Layout() {

  const [logged, setLogged] = useState(false);
  const [onPage, setOnPage] = useState();
  

  function setPage(page) {
    setOnPage(page)
  };

  function unlog() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    localStorage.removeItem('favorites');
    localStorage.removeItem('isAdmin');
    localStorage.setItem("LoggedToReserve", "false");
    setLogged(false);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    let isLogged = token != null;
    setLogged(isLogged)
  });

  return (
    <>
      <BrowserRouter>
        <Header page={onPage} logged={logged} unlog={unlog} />
        <main>
          <Switch>
            <Route exact path="/"><Home setOnPage={setPage} /><ScrollToTop /></Route>
            <Route path="/ingresar"><SignInScreen setOnPage={setPage} /><ScrollToTop /></Route>
            <Route path="/registrarse"><SignUpScreen setOnPage={setPage} /><ScrollToTop /></Route>
            <Route exact path="/producto/:id"><ProductDetails setOnPage={setPage} /><ScrollToTop /></Route>
            <Route exact path="/producto/:id/reserva"><ProductReservation setOnPage={setPage} /><ScrollToTop /></Route>
            <Route exact path="/administracion"><ProductCreate setOnPage={setPage} /><ScrollToTop /></Route>
            <Route exact path="/panel-de-usuario"><UserPanel setOnPage={setPage} /><ScrollToTop /></Route>
            <Route exact path="/quienes-somos"><AboutUsScreen setOnPage={setPage} /><ScrollToTop /></Route>
          </Switch>
        </main>
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default Layout;