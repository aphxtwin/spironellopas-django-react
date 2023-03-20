import React from "react";
import "./Footer.css";
import { BsFacebook,BsInstagram } from "react-icons/bs";

const FooterSocialLogo = ( {Src} ) => {
    return (
        <div className="footer-socialnlogo">
            <div className="footer-logo">
                <img src={Src} alt="logo" border="0" />
            </div>    
            <div className="footer-social">
                <h4>Síguenos</h4>
                <a href="https://www.facebook.com/"><BsFacebook className="footer-social-icon" /></a>
                <a href="https://www.instagram.com/"><BsInstagram className="footer-social-icon" /></a>
            </div>
        </div>
    );
}
export default FooterSocialLogo;