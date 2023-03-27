import React from "react";
import CallToAction from "../Buttons/CtaButton/CallToAction";

const Header = ({title, subtitle, headerClass }) => {
    return (
        <header>
            <h1> {title} </h1>
            <p>
                {subtitle}
            </p>
            <div className="header-cta-button">                
                <CallToAction textButton={"COTIZA AHORA"} textSize='1rem' padding={{
                    top: '1rem',
                    right: '4rem',
                    bottom: '1rem',
                    left:'4rem'
                }}/>
            </div>
        </header>
    );
}

export default Header;