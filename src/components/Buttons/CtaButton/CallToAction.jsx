import React from "react";
import "./CallToAction.css";

/* 
    This is the default button that will be used for the 
    call to action buttons.

*/

const CallToAction = ({ textButton, padding={
    top: '1rem',
    right: '2.8rem',
    bottom: '1rem',
    left:'2.8rem'
    }}) => {
    const Style = {
        paddingTop: padding.top,
        paddingRight: padding.right,
        paddingBottom: padding.bottom,
        paddingLeft: padding.left
    }
    return(
        <button style={Style} className="cta-button"> {textButton}</button>
    )
}

export default CallToAction;