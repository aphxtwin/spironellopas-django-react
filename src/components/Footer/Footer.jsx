import React from "react";
import "./Footer.css";
import FooterSocialLogo from './FooterSocialLogo';
import FooterProducts from './FooterProducts';
import FooterResources from "./footer-resources/FooterResources";

const Footer = () => {
    return (
        <footer>
            <hr></hr>
            <div className="footer-container">
                <FooterSocialLogo Src={'#'} />
                <div className="footer-body">
                    <FooterProducts />
                    <FooterResources />
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-text">
                        <p>© 2023 SpironelloPAS Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;