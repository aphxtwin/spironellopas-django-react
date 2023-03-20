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
                <div className="footer-top">
                    <FooterSocialLogo />
                </div>
                <div className="footer-body">
                    <FooterProducts />
                    <FooterResources />
                </div>
                <div className="footer-bottom">
                    <FooterBottom />
                </div>
            </div>
        </footer>
    );
};

export default Footer;