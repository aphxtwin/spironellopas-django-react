import React from "react";
import styles from './NextButton.module.css';
import { Link } from "react-router-dom";

const NextButton = ({text, customClassName}) => {
    return (
        <Link className={`${styles.NextButton} ${customClassName ? customClassName : ''}`} to="/cotizacion">
            { text }
        </Link>
    );
}

export default NextButton;