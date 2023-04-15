import React from "react";
import style from './FormCarInsurance.module.css';
import TextInput from '../../../FormsToolbox/TextInput/TextInput';
import Checkbox from '../../../FormsToolbox/Checkbox/Checkbox';


const FormCarInsurance = () => {
    return (
        <div className={style.FormCarInsurance}>
            <TextInput label="modelo" type="text" placeholder="First Name" />
            <TextInput label="marca" type="text" placeholder="Last Name" />
            <TextInput label="ano" type="text" placeholder="Email" />
            <Checkbox label="tiene gnc?" />
        </div>
    );
}
export default FormCarInsurance;
