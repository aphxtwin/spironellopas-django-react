import React from 'react';
import { BsFacebook,BsInstagram,BsTwitter,BsLinkedin } from "react-icons/bs";
import "./social-links.css";

const SocialLinks = ({color,iconSize}) => {
    return(
        <div className="social-links">
            <a href="https://www.facebook.com/"><BsFacebook className="footer-social-icon" color={color} size={iconSize}/></a>
            <a href="https://www.instagram.com/"><BsInstagram className="footer-social-icon" color={color} size={iconSize}/></a>
            <a href="https://twitter.com/"><BsTwitter className="footer-social-icon" color={color} size={iconSize}/></a>
            <a href="https://www.linkedin.com/"><BsLinkedin className="footer-social-icon" color={color} size={iconSize}/></a>
        </div>
    )
}
export default SocialLinks;