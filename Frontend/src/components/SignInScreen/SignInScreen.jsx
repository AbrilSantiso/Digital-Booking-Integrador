import { useState } from 'react';
import SignInButton from '../SignInButton/SignInButton';
import ErrorMsg from "./error-msg";
import { LOGIN_USER, GET_ME } from "../../utils/apis";
import { useHistory, Link } from 'react-router-dom';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import axios from "axios";
import "./SignInScreen.css";
import "./error-msg.css";


function SignInScreen(props) {
  const { setOnPage } = props;
  window.onload = setOnPage("/ingresar")

  const history = useHistory();

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  function handleChangeEmail(e) {
    const { value } = e.target
    setEmail(value)
  };

  function handleChangePassword(e) {
    const { value } = e.target
    setPassword(value)
  };


  function validateUser(e) {

    e.preventDefault();

    let userData = {
      "username": email,
      "password": password
    };

    axios.post(LOGIN_USER, userData)
      .then(function (res) {
        
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          getUserInformation();
        } else {
          setError(true);
        }
      })
      .catch(function (err) {
        console.log(err);
        setError(true);
      });
  };

  function getUserInformation() {
    let userData = {}
    let token = localStorage.getItem('token')
    axios.post(GET_ME, token)
      .then(function (res) {
        userData = res.data;
        localStorage.setItem("userId", userData.id);
        localStorage.setItem("name", userData.name);
        localStorage.setItem("lastName", userData.lastName);
        localStorage.setItem("email", userData.email);
        localStorage.setItem("favorites", JSON.stringify(userData.favorites));
        localStorage.setItem("LoggedToReserve", "true");
        checkIfIsAdmin(userData.roles);
        redirectTo();
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  function checkIfIsAdmin(roles){
    roles.forEach(rol => {
      if(rol.name === "admin"){
        localStorage.setItem("isAdmin", true);
      }
    });
  }

  function redirectTo() {
    if (history.location.state) {
      if(history.location.state.id){
        let id = history.location.state.id;
        history.push(`/producto/${id}/reserva`);
      }else {
        history.push("/");
      };
    } else {
      history.push("/");
    };
  };

  function errorMsgAtTryingToReserve() {

    if (history.location.state) {
      if(history.location.state.from === "product-detail-page"){
        let isLoggedToReserve = localStorage.getItem("LoggedToReserve");

        if (isLoggedToReserve === "false") {
          return <ErrorMsg content="Para realizar una reserva necesitas estar logueado" />
        };
      }
      if(history.location.state.from === "sign-up"){
        let isLoggedToReserve = localStorage.getItem("LoggedToReserve");

        if (isLoggedToReserve === "false") {
          return <ErrorMsg content="Por favor inicia sesión para continuar" />
        };
      }
    }
  };

  return (
    <section className="sign-in-screen">
      <h1 className="sign-in-title">Iniciar sesión</h1>
      <form id="sign-in" name="sign-in-form" className="sign-in-form" onSubmit={validateUser}>
        {errorMsgAtTryingToReserve()}
        <div className="error-msg">
          {error ? <ErrorMsg content="Lamentablemente no ha podido iniciar sesión. Por favor, intente más tarde." /> : ""}
        </div>

        <label className="user-info">
          Correo electrónico
          <input type="text" name="email" title="Completa con tu correo electrónico" className="user-info-field user-info-input" value={email} onChange={handleChangeEmail} required />
        </label>
        <label className="user-info">
          Contraseña
          <div className="pass-container">
            <input type={passwordShown ? "text" : "password"} name="password" title="Completa con tu contraseña" className="pass-input" value={password} onChange={handleChangePassword} required />
            <i className="icon-inside-input" onClick={togglePasswordVisiblity}>{passwordShown ? <FaEyeSlash /> : <FaEye />}</i>
          </div>
        </label>
        <SignInButton />
        <Link className="text-below-button" title="Regístrate" aria-label="link" role="link" to="/registrarse">¿Aún no tienes una cuenta? <span className="link-color">Regístrate</span></Link>
      </form>
    </section>
  );
};

export default SignInScreen;