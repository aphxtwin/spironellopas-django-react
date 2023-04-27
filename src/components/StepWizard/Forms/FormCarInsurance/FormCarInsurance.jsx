import React from "react";
import style from './FormCarInsurance.module.css';
import TextInput from '../../../FormsToolbox/TextInput/TextInput';
import YesNoRadio from "../../../FormsToolbox/RadioButton/YesNoRadio";

const FormCarInsurance = () => {

    return (
        <div className={style.FormCarInsurance}>
            <TextInput label="Marca" type="text" placeholder="Marca" />
            <TextInput label="Modelo" type="text" placeholder="Modelo del auto" />
            <TextInput label="Año" type="number" placeholder="Año" />
            <YesNoRadio label={"Tiene GNC?"}/>
            <YesNoRadio label={"Es 0km?"}/>
        </div>
    );
}

export default FormCarInsurance;
