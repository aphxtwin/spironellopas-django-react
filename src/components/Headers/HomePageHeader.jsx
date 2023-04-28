import React from "react";
import CallToAction from "../Buttons/CtaButton/CallToAction";
import style from "./HomePageHeader.module.css";

const HomePageHeader = ({title, subtitle}) => {
    return (
        <main>
            <h1> {title} </h1>
            <p>
                {subtitle}
            </p>
            <div className={style.buttonContainer}>        
                <CallToAction 
                    customClass={style.CtaButton}
                    textButton={"COTIZA AHORA!"} 
                />
            </div>
        </main>
    );
}

export default HomePageHeader;