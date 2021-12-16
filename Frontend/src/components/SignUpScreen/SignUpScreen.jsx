import SignUpButton from "../SignUpButton/SignUpButton";
import { useState } from 'react';
import { POST_USER } from "../../utils/apis";
import { Link, useHistory } from 'react-router-dom';
import { FaEyeSlash, FaEye, FaExclamationCircle } from "react-icons/fa";
import axios from "axios";
import "./SignUpScreen.css";
import emailjs from 'emailjs-com';

function SignUpForm(props) {

  const history = useHistory();
  const { setOnPage } = props;
  window.onload = setOnPage("/registrarse")

  const [error, setError] = useState();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  /*--------------- Change password input ----------------*/
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  /*--------------- HANDLERS CHANGES ----------------*/
  function handleChangeName(e) {
    const { value } = e.target
    setName(value)
  };

  function handleChangeLastName(e) {
    const { value } = e.target
    setLastName(value)
  };
  function handleChangeEmail(e) {
    const { value } = e.target
    setEmail(value)
  };

  function handleChangePassword(e) {
    const { value } = e.target
    setPassword(value)
  };

  function handleChangeConfirmPassword(e) {
    const { value } = e.target
    setConfirmPassword(value)
  };


  /*--------------- Validates user inputs ----------------*/
  function validateEmail() {
    const expression = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const test = expression.test(email);
    return test;
  };

  function validatePassword() {
    return password === confirmPassword;
  };

  /*--------------- Show errors functions ----------------*/

  function showStatusCodeRelatedErrors(message) {
    if (message.includes("status code 302")) {
      setError(<><FaExclamationCircle className="warn-icon" /><span>El email ya se encuentra registrado. Por favor intenta con uno nuevo.</span></>)
      return
    };
    setError(<><FaExclamationCircle className="warn-icon" /><span>Lamentablemente no ha podido registrarse. Por favor, intente más tarde</span></>)
    
  }

  function showUserInputsRelatedErrors() {
    if (!validateEmail()) {
      setError(<><FaExclamationCircle className="warn-icon" /><span>Debe utilizar un email válido</span></>)
    } else {
      setError(<><FaExclamationCircle className="warn-icon" /><span>Las contraseñas no coinciden</span></>)
    };
  }


  /*--------------- POST USER ----------------*/
  function registerUser(e) {

    e.preventDefault();

    let userData = {
      "name": name,
      "lastName": lastName,
      "email": email,
      "password": password
    };

    if (validateEmail() && validatePassword()) {

      axios.post(POST_USER, userData)
        .then(function (res) {
          if (res.status === 201) {
            sendWelcomeEmail(e);
            history.push("/ingresar",  { from: 'sign-up'});
          } else {
            showStatusCodeRelatedErrors();
          }
        })
        .catch(function (err) {
          showStatusCodeRelatedErrors(err.message);
          console.log(err);
        })  

    } else {
      showUserInputsRelatedErrors();
    };
  };
  

  function sendWelcomeEmail(e){
    emailjs.sendForm('gmail', 'template_o7uxrqb', e.target, 'user_ce4wJStMEg864u0zkRWSo')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <section className="sign-up-screen">
      <h1 className="sign-up-title">Crear cuenta</h1>
      <form id="sign-up" name="sign-up-form" className="sign-up-form" onSubmit={registerUser}>
        <div className={`msg-content ${error ? "error-msg-content" : ""}`}>
          {error ? <p className="error-msg">{error}</p> : ""}
        </div>
        <fieldset className="user-name-fieldset">
          <label className="user-info">
            Nombre
            <input type="text" name="name" title="Completa con tu nombre" className="user-info-name" value={name} onChange={handleChangeName} required />
          </label>
          <label className="user-info">
            Apellido
            <input type="text" name="lastname" title="Completa con tu apellido" className="user-info-lastname" value={lastName} onChange={handleChangeLastName} required />
          </label>
        </fieldset>
        <label className="user-info">
          Correo electrónico
          <div className="email-container">
            <input type="email" name="email" title="Completa con tu correo electrónico" className="user-info-field" value={email} onChange={handleChangeEmail} required />
          </div>
        </label>
        <label className="user-info">
          Contraseña
          <div className="pass-container">
            <input type={passwordShown ? "text" : "password"} name="password" title="Elige una contraseña" className="pass-input" value={password} onChange={handleChangePassword} required />
            <i className="icon-inside-input" onClick={togglePasswordVisiblity}>{passwordShown ? <FaEyeSlash /> : <FaEye />}</i>
          </div>
        </label>
        <label className="user-info">
          Confirmar contraseña
          <div className="pass-container">
          <input type={passwordShown ? "text" : "password"} name="confirmPassword" title="Repite la contraseña" className="pass-input" value={confirmPassword} onChange={handleChangeConfirmPassword} required />
          <i className="icon-inside-input" onClick={togglePasswordVisiblity}>{passwordShown ? <FaEyeSlash /> : <FaEye />}</i>
          </div>
        </label>
        <SignUpButton />
        <Link className="text-below-button" title="Inicia sesión" aria-label="link" role="link" to="ingresar">¿Ya tienes una cuenta? <span className="link-color">Inicia sesión</span></Link>
      </form>
    </section>
  )
}

export default SignUpForm;