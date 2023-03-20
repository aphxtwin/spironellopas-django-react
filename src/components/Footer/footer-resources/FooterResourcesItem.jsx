import React from "react";
import "./Footer.css";

const FooterResourcesItem = ({ title, link }) => {
    return(
        <li href={link} className="footer-resources-item">{title}</li>
    )
}

export default FooterResourcesItem;