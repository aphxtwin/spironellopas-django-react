import React from "react";
import { Link } from "react-router-dom";
import "../Footer.css";

const FooterResourcesItem = ({ title, link='/page-not-found' }) => {
    return(
        <li className="footer-resources-item">
            <Link to={link}>{title}</Link>
        </li>
        
    )
}

export default FooterResourcesItem;