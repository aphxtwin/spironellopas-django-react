import React from "react";
import "./footer-social-logo.css";
import SocialLinks from "../../Common/SocialLinks/SocialLinks";

const FooterSocial = () => {
    return ( 
        <div className="footer-social">
            <h3 className="follow-us-footer">Síguenos</h3>
            <SocialLinks iconSize={"1.6rem"} color={"gray"} />
        </div>
    );
}
export default FooterSocial;