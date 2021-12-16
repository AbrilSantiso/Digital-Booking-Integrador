import React from "react";
import { FaUsers } from "react-icons/fa";
import SocialFollow from "../SocialFollow/SocialFollow";
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    <footer>
        <div className="copyright">
        <p>©2021 Digital Booking</p>
        <Link className="about-us" to="/quienes-somos">
        <FaUsers className="about-us-icon" />
        <p>Quienes somos</p>
        </Link>
      </div>
      <SocialFollow></SocialFollow>
    </footer>
  );
}

export default Footer;