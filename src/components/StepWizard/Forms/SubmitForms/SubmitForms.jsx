import React from "react";
import { useSelector } from "react-redux";
import style from './SubmitForms.module.css';
import SubmitButton from "../../../Buttons/SubmitButton/SubmitButton";
import pibe from '../../../../assets/characters/pibe.svg'
const SubmitForms = () => {
    const formData = useSelector((state)=>state.form.formData);
    const handleSubmit = () =>{
        console.log("Su Cotizacion =>", formData)
    }
    return (
        <div className={style.SubmitForms}>
            <SubmitButton className={style.SubmitButton} onClick={handleSubmit}/> 
            <img className={style.pibe} src={pibe}/>
        </div>
            
        
    );
}

export default SubmitForms;
