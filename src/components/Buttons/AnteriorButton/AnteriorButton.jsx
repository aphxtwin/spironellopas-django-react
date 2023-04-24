import React from 'react';
import style from './AnteriorButton.module.css';

const AnteriorButton = ({ onClick }) => (
  <button className={style.AnteriorButton} onClick={onClick}>
    <span className={style.ArrowLeft}>&#x2190;</span>
    Anterior
  </button>
);

export default AnteriorButton