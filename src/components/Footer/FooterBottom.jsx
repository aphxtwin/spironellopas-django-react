import React from "react";
import "./Footer.css";

// The year of the footer is dynamic
const FooterBottom = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer-bottom">
            <p className="footer-bottom-text">© {year} SpironelloPAS Todos los derechos reservados</p>
        </div>
    );
}

export default FooterBottom;