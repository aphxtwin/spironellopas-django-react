import React from 'react';
import style from './LastSubmitButton.module.css'
const LastSubmitButton = ({ className, onClick, children }) => {
  return (
    <button className={`${style.LastSubmitButton} ${className ? className : ''}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default LastSubmitButton;
