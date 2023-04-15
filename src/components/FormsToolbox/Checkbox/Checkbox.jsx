import React from "react";
import style from "./Checkbox.module.css";

const Checkbox = ({label}) => {
    return (
        <div className={style.Checkbox}>
            <input label={label} type="checkbox" />
        </div>
    );
}
export default Checkbox;