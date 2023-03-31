import React from "react";
import styles from './CallToAction.module.css';
import { Link } from "react-router-dom";

/* 
    This is the default button that will be used for the 
    call to action buttons.

*/

const CallToAction = ({ textButton='COTIZA AHORA', customClass,  To='/cotizacion'}) => {
    const ButtonClassName = 
        `${styles.CtaButton} ${customClass ? customClass : ''}`;
    
    return(
        <>    
            <Link to={To} className={ButtonClassName}>
                {textButton}
            </Link>
        </>         
    )
}

export default CallToAction;