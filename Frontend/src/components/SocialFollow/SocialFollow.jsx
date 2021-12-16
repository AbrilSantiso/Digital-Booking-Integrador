import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ButtonShare from "../ButtonShare/ButtonShare";
import "./SocialFollow.css";

function SocialFollow(props) {
  const {isBurgerMenu} = props;
  let shareLinks = "footer";

  if (isBurgerMenu) {
    return (
      <>
      <ButtonShare shareLinks={shareLinks} isFooter={true}/>
      <a href="https://www.facebook.com/DigitalBooking.Lat/" aria-label="facebook" rol="link" target="_blank" rel="noreferrer">
        <FaFacebook className="social-icon"/>
      </a>
      <a href="https://www.linkedin.com" aria-label="linkedin" rol="link" target="_blank" rel="noreferrer">
        <FaLinkedinIn className="social-icon"/>
      </a>
      <a href="https://twitter.com/DigitalBooking" aria-label="twitter" rol="link" target="_blank" rel="noreferrer">
        <FaTwitter className="social-icon"/>
      </a>
      <a href="https://www.instagram.com/digital.booking/" aria-label="instagram" rol="link" target="_blank" rel="noreferrer">
        <FaInstagram className="social-icon"/>
      </a>
      </>
    )
  }
  return (
    <div className="social-follow">
      <ButtonShare shareLinks={shareLinks} isFooter={true}/>
      <a href="https://www.facebook.com/DigitalBooking.Lat/" aria-label="facebook" rol="link" target="_blank" rel="noreferrer">
        <FaFacebook className="social-icon"/>
      </a>
      <a href="https://www.linkedin.com" aria-label="linkedin" rol="link" target="_blank" rel="noreferrer">
        <FaLinkedinIn className="social-icon"/>
      </a>
      <a href="https://twitter.com/DigitalBooking" aria-label="twitter" rol="link" target="_blank" rel="noreferrer">
        <FaTwitter className="social-icon"/>
      </a>
      <a href="https://www.instagram.com/digital.booking/" aria-label="instagram" rol="link" target="_blank" rel="noreferrer">
        <FaInstagram className="social-icon"/>
      </a>
    </div>
  );
  }
  


export default SocialFollow;