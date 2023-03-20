import React from "react";
import Logo from "../../Common/Logo";
import "./footer-social-logo.css";

const FooterLogo = () => {
    const size = {
        Width: "100px",
        Height: "100px"
    }
    return (
        <div className="footer-logo">
            <Logo size={size}/>
        </div>
    );
}

export default FooterLogo