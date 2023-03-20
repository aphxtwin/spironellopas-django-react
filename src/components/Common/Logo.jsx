import React from "react";
import logo from "../../assets/images/logo.png";

const Logo = ({size}) => {
    return <img src={logo} width={size.Width} height={size.Height} alt="Logo" />;
};
export default Logo;