import React from "react";
import styles from './NextPrevButton.module.css';
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faArrowRight, faArrowLeft }  from "@fortawesome/free-solid-svg-icons";
// Router
import { Link } from "react-router-dom";

const NextPreviousButton = ({customClassName,textButton, Direction, arrowColor, To}) => {
    
    const icon = Direction === 'next' ? faArrowRight : faArrowLeft;    
    
    return (
        <>
            <Link className={`${styles.NextPreviousButton} ${customClassName ? customClassName : ''}`} to={To}>
                {textButton
                    ? textButton
                    : ''      
                }
                <FontAwesomeIcon icon={icon} style={{color: arrowColor}} />
            </Link>
        </>
    );
}

export default NextPreviousButton;