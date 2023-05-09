import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import style from './AnteriorButton.module.css';

const AnteriorButton = ({ onClick,className }) => (
  <button className={`${style.AnteriorButton} ${className ? className : ''}`} onClick={onClick}>
    <FontAwesomeIcon className={style.Icon} icon={faAngleLeft} />
  </button>
);

export default AnteriorButton