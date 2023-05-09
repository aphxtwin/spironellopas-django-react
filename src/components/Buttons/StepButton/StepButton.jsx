import React from "react";
import styles from './StepButton.module.css';


const StepButton = ({ textButton, formValid, onClick, customClassName}) => {

  return (
    <button 
      className={`${styles.StepButton} ${customClassName}`}
      onClick={onClick}
      disabled={!formValid}
    >
      {textButton || ""}
    </button>
  );
}

export default StepButton;
