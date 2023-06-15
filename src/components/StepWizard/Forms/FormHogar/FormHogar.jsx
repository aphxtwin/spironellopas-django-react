import React from "react";
import style from './FormHogar.module.css';
import TextInput from '../../../FormsToolbox/TextInput/TextInput';
import YesNoRadio from "../../../FormsToolbox/RadioButton/YesNoRadio";
import useProductForm from "../../../../hooks/useProductForm";

const FormHogar = () => {
    const initialState= {
        mts_cuadrados:'',
        tipo_de_casa:'',
    }
    
    const productName='SeguroDeHogar'
    const [formData, handleChange] = useProductForm(initialState, productName);

    return (
        <div className={style.FormHogar}>
            <TextInput 
                label="Metros Cuadrados Cubiertos" 
                type="text"
                name="mts_cuadrados" 
                placeholder="Mts cuadrados" 
                value={formData.mts_cuadrados} 
                onChange={handleChange}
            />
            <YesNoRadio
                label={"Que tipo de casa es?"}
                name={"tipo_de_casa"}
                value={formData.tipo_de_casa}
                onChange={handleChange}
                option1={'Casa'}
                option2={'Departamento'}
            />
        </div>
    );
}
export default FormHogar;
