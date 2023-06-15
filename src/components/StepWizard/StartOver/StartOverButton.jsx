import React from "react";
import style from './StartOver.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const StartOverButton = ({customClassName, onOpen}) => {
    return(
        <div onClick={onOpen} className={`${style.StartOver} ${customClassName ? customClassName : ''}`}>
            <FontAwesomeIcon icon={faRotateRight} />
        </div>
    )
}

export default StartOverButton;