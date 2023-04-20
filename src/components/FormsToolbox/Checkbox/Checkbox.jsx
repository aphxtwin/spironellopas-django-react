import React from 'react';

const Checkbox = ({ label, name, checked, onChange }) => {
  return (
    <div>
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