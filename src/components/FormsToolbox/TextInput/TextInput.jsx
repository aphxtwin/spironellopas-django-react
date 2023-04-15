import React from "react";
import style from "./TextInput.module.css";

const TextInput = ({label, type, placeholder}) => {
    return (
        <div className={style.TextInput}>
            <label>{label}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
            />
        </div>
    );
}
export default TextInput;