import React from "react";
import CallToAction from "../../Buttons/CtaButton/CallToAction";
import "./homepage-header.css";

const HomePageHeader = ({title, subtitle }) => {
    return (
        <div className="homepage-header">
            <h1> {title} </h1>
            <p>
                {subtitle}
            </p>
            <CallToAction textButton={"Cotiza ahora!"} />
        </div>
    );
}

export default HomePageHeader;