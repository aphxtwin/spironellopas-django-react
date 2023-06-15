import React from "react";
import style from './FormMotoInsurance.module.css';
import TextInput from '../../../FormsToolbox/TextInput/TextInput';
import YesNoRadio from "../../../FormsToolbox/RadioButton/YesNoRadio";
import useProductForm from "../../../../hooks/useProductForm";

const FormMotoInsurance = () => {
    const initialState={
        brand: "",
        model: "",
        year: "",
        isNew: false,
    }
    const productName='SeguroDeMoto'
    
    const [formData, handleChange] = useProductForm(initialState, productName);

    return (
        <div className={style.FormMotoInsurance}>
            <TextInput 
                label="Marca" 
                type="text"
                placeholder="Marca"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
            />
            <TextInput 
                label="Modelo" 
                type="text" 
                placeholder="Modelo del auto"
                name="model"
                value={formData.model}
                onChange={handleChange} 
            />
            <TextInput 
                label="Año" 
                type="number" 
                placeholder="Año"
                name="year"
                value={formData.year}
                onChange={handleChange} 
            />
            <YesNoRadio
                label={"Es 0km?"}
                name="isNew"
                value={formData.isNew}
                onChange={handleChange}
            />
        </div>
    );
}


export default FormMotoInsurance;
