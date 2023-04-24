import React from "react";
import style from './FormIntegralDeComercio.module.css';
import TextInput from '../../../FormsToolbox/TextInput/TextInput';

const FormIntegralDeComercio = () => {
    return (
        <div className={style.FormIntegralDeComercio}>
            <TextInput label="Metros Cuadrados Cubiertos" type="text" placeholder="Mts cuadrados" />
            <TextInput label="Modelo" type="text" placeholder="Modelo del auto" />
            <TextInput label="Año" type="text" placeholder="Año" />
        </div>
    );
}
export default FormIntegralDeComercio;
