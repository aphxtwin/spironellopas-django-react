import React from "react";
import "./footer-social-logo.css";
import { BsFacebook,BsInstagram } from "react-icons/bs";

const FooterSocial = ({iconSize, color}) => {
    return ( 
        <div className="footer-social">
            <h3>Síguenos</h3>
            <div className="social-links">
                <a href="https://www.facebook.com/"><BsFacebook className="footer-social-icon" color={color} size={iconSize}/></a>
                <a href="https://www.instagram.com/"><BsInstagram className="footer-social-icon" color={color} size={iconSize}/></a>
            </div>
        </div>
    );
}
export default FooterSocial;