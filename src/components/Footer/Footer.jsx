import React from "react";
import "./Footer.css";
import FooterSocialLogo from './footer-social-logo/FooterSocialLogo';
import FooterProducts from './FooterProducts';
import FooterResources from "./footer-resources/FooterResources";
import FooterBottom from "./FooterBottom";
const Footer = () => {
    return (
        <footer>
            <hr></hr>
            <div className="footer-container">               
                <div className="footer-column">
                    <FooterSocialLogo />
                </div>
                <div className="footer-column">
                    <FooterProducts />
                </div>
                <div className="footer-column">
                    <FooterResources />
                </div>
            </div>
            <div className="footer-row">
                    <FooterBottom />
            </div>
        </footer>
    );
};

export default Footer;