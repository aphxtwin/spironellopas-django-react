import React, {useState} from "react";
import style from "./InsuranceCard.module.css";

const InsuranceCard = ({title , image})=>{
    const [selected, setSelected] = useState(false);

    const handleSelect = () => {
        setSelected(!selected);
    }
    return (
        <div className={style.InsuranceCard} onClick={handleSelect}>
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