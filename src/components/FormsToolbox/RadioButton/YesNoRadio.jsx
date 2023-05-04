import React, {useState} from "react";
import RadioButton from './RadioButton'
import style from './YesNoRadio.module.css';
const YesNoRadio = ({label,name,onChange}) => {
    const [selectedValue, setSelectedValue] = useState("")

    const handleSelect = (e) => {
        setSelectedValue(e.target.value)
        onChange({target : {name, value: e.target.value === "true"} });
    };

    return (
        <div className={style.YesNoRadio}>
            <p className={style.label}>{label}</p>
            <RadioButton
                label={"Si"}
                value="true"
                checked={selectedValue === "true" }
                onChange={handleSelect}
            />
            <RadioButton
                label={"No"}
                value="false"
                checked={selectedValue === "false" }
                onChange={handleSelect}
            />
        </div>
    )
}

export default YesNoRadio
