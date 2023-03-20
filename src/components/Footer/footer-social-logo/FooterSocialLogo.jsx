import React from "react";
import FooterLogo from "./FooterLogo";
import FooterSocial from "./FooterSocial";

const FooterSocialLogo = () => {
    return (
        <div className="footer-social-logo">
            <FooterLogo />
            <FooterSocial iconSize={"1.3rem"} color={"#bcbcbc"}/>
        </div>
    );
}

export default FooterSocialLogo;