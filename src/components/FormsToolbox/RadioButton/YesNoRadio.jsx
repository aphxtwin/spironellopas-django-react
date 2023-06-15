import React, {useState} from "react";
import RadioButton from './RadioButton'
import style from './YesNoRadio.module.css';
const YesNoRadio = ({label,name,value,onChange,option1='si',option2='no'}) => {

    const handleSelect = (e) => {
        onChange(e)
    };

    return (
        <div className={style.YesNoRadio}>
            <p className={style.label}>{label}</p>
            <RadioButton
                label={option1}
                value= {option1}
                name={name}
                checked={value === option1 }
                onChange={handleSelect}
            />
            <RadioButton
                label={option2}
                value={option2}
                name={name}
                checked={value === option2 }
                onChange={handleSelect}
            />
        </div>
    )
}

export default YesNoRadio
