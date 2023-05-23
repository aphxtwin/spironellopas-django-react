import React, {useState,useEffect} from "react";
import style from "./InsuranceCard.module.css";

const InsuranceCard = ({title , image, onCheck,isSelected})=>{

    const [selected, setSelected] = useState(isSelected);

    useEffect(() => {
        setSelected(isSelected);
    }, [isSelected]);

    const handleSelect = () => {
        const newSelectedState = !selected;
        setSelected(newSelectedState);
        onCheck(newSelectedState);
    };
    
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