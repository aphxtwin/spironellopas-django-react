import React from "react";
import styles from './StepButton.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const StepButton = ({ customClassName, textButton, type,onClick}) => {
  const isNext = type === "next";
  const icon = isNext ? faArrowRight : faArrowLeft;
  

  return (
    <button 
      className={`${styles.StepButton} ${customClassName || ""}`} 
      onClick={onClick}
    >
      {textButton || ""}
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default StepButton;
