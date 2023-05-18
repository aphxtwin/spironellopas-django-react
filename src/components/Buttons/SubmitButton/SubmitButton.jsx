import React from 'react';
import styles from './SubmitButton.module.css';

const SubmitButton = ({ onClick, className }) => {
  return (
    <button
      className={`${styles.SubmitButton} ${className}`}
      onClick={onClick}
    >
      ENVIAR
    </button>
  );
};

export default SubmitButton;
