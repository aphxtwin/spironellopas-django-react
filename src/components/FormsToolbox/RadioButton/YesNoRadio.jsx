import React, {useState} from "react";
import RadioButton from './RadioButton'
import style from './YesNoRadio.module.css';
const YesNoRadio = ({label}) => {
    const [selectedValue, setSelectedValue] = useState('')

    const handleSelect = (e) => {
        setSelectedValue(e.target.value)
    }

    return (
        <div className={style.YesNoRadio}>
            <p className={style.label}>{label}</p>
            <RadioButton
                label={"Si"}
                value='SI'
                checked={selectedValue === 'SI'}
                onChange={handleSelect}
            />
            <RadioButton
                label={"No"}
                value='NO'
                checked={selectedValue === 'NO'}
                onChange={handleSelect}
            />
        </div>
    )
}

export default YesNoRadio
