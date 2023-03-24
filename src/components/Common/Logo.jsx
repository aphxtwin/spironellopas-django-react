import React from "react";

const Logo = ({size, logoType }) => {
    return <img src={ logoType } width={size.Width} height={size.Height} alt="Logo" />;
};
export default Logo;