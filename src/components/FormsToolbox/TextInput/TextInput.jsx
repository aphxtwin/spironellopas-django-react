import React from 'react';
import style from './TextInput.module.css'

const TextInput = ({ label, name, placeholder, value, onChange }) => {
  return (
    <div className={style.TextInput}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;