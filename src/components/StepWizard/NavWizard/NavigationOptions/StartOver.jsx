import React from "react";
import style from './StartOver.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const StartOver = ({customClassName}) => {
    return(
        <div className={`${style.StartOver} ${customClassName ? customClassName : ''}`}>
            <FontAwesomeIcon icon={faRotateRight} />
        </div>
    )
}

export default StartOver;