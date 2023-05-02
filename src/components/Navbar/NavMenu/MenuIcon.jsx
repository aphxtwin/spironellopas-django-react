// MenuIcon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import style from './NavMenu.module.css';

const MenuIcon = ({ menuOpen, onClick, menuButtonRef, customClassName }) => {
  const handleIconActive = `${style.MenuIcon} ${customClassName ? customClassName : ''} ${menuOpen ? style.active : ''}`;

  return (
    <div className={handleIconActive} ref={menuButtonRef} onClick={onClick}>
      <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
    </div>
  );
};

export default MenuIcon;
