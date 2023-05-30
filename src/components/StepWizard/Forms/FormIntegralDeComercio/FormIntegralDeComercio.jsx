import React from "react";
import style from './FormIntegralDeComercio.module.css';
import TextInput from '../../../FormsToolbox/TextInput/TextInput';

const FormIntegralDeComercio = () => {

    return (
        <div className={style.FormIntegralDeComercio}>
            <TextInput label="Metros Cuadrados Cubiertos" type="text" placeholder="Mts cuadrados" />
            <TextInput label="d" type="text" placeholder="Modelo del auto" />
        </div>
    );
}
export default FormIntegralDeComercio;
