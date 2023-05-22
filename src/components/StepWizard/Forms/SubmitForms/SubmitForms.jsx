import React from "react";
import { useSelector,useDispatch } from "react-redux";
import style from './SubmitForms.module.css';
import SubmitButton from "../../../Buttons/SubmitButton/SubmitButton";
import pibe from '../../../../assets/characters/pibe.svg'
import { resetProductData } from "../../../../redux/actions/formActions";


const SubmitForms = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state)=>state.form.formData);
    
    const handleSubmit = () =>{
        console.log("Su Cotizacion =>", formData)
        dispatch(resetProductData())
    }
    return (
        <div className={style.SubmitForms}>
            <SubmitButton className={style.SubmitButton} onClick={handleSubmit}/> 
            <img className={style.pibe} src={pibe}/>
        </div>
            
        
    );
}

export default SubmitForms;
