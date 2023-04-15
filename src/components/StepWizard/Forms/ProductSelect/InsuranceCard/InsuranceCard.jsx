import React, {useState} from "react";
import style from "./InsuranceCard.module.css";

const InsuranceCard = ({title , image, onCheck})=>{
    const [selected, setSelected] = useState(false);

    const handleSelect = () => {
        setSelected(!selected);
        onCheck(!selected);
    }
    return (
        <div 
            className={`${style.InsuranceCard} ${selected ? style.selected : ""}`} 
            onClick={handleSelect}>
            <div className={style.InsuranceCardImage}>
                <img src={image} alt=""/>
            </div>
            <div className={style.InsuranceCardTitle}>
                <h3>{title}</h3>
            </div>
            <div className={style.SelectedCheckBox}>
                <input 
                    type="checkbox"
                    checked={selected}
                    readOnly
                />
            </div>
        </div>
    );
};

export default InsuranceCard;