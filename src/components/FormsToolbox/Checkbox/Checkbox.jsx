import React from 'react';
import style from './Checkbox.module.css'

const Checkbox = ({ label, name, checked, onChange }) => {
  return (
    <div className={style.Checkbox}>
      <label htmlFor={name}>{label}</label>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default Checkbox;