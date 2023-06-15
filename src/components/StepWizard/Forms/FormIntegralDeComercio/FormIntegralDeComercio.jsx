import React from "react";
import style from './FormIntegralDeComercio.module.css';
import TextInput from '../../../FormsToolbox/TextInput/TextInput';
import useProductForm from "../../../../hooks/useProductForm";
const FormIntegralDeComercio = () => {
    const initialState={
        razon_social: "",
        cuit: "",
        actividad: "",
        mts_cuadrados: "",
    }
    const productName='SeguroDeIntegralDeComercio'
    
    const [formData, handleChange] = useProductForm(initialState, productName);
    return (
        <div className={style.FormIntegralDeComercio}>
            <TextInput 
                label="Razon Social" 
                type="text" 
                placeholder="Razon Social"
                name="razon_social"  
                value={formData.razon_social} 
                onChange={handleChange} 
            />
            <TextInput 
                label="C.U.I.T" 
                type="text" 
                placeholder="CUIT"
                name="cuit"  
                value={formData.cuit} 
                onChange={handleChange}
            />
            <TextInput 
                label="Actividad" 
                type="text" 
                placeholder="Actividad"
                name="actividad"  
                value={formData.actividad} 
                onChange={handleChange}
            />
            <TextInput 
                label="Metros Cuadrados Cubiertos" 
                type="text" 
                placeholder="Mts cuadrados"
                name="mts_cuadrados"  
                value={formData.mts_cuadrados} 
                onChange={handleChange}
            />
        </div>
    );
}
export default FormIntegralDeComercio;
