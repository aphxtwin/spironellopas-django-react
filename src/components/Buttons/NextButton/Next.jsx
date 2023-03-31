import React from "react";
import styles from './NextButton.module.css';
import { Link } from "react-router-dom";

const NextButton = ({text}) => {
    return (
        <Link className={styles.nextButton} to="/cotizacion">
            { text }
        </Link>
    );
}

export default NextButton;