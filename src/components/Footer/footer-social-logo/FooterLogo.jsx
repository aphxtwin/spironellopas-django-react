import React from "react";
import Logo from "../../Common/Logo"
import logo_white from "../../../assets/images/logo-white-svg.svg";
import "./footer-social-logo.css";

const FooterLogo = () => {
    const size = {
        Width: "100px",
        Height: "100px"
    }
    return (
        <div className="footer-logo">
            <Logo size={size} logoType={ logo_white } />
        </div>
    );
}

export default FooterLogo