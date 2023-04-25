import React from "react";
import TextInput from '../../../FormsToolbox/TextInput/TextInput';
import style from './FormLife.module.css';
import DateOfBirth from "../../../FormsToolbox/DateOfBirth/DateOfBirth";
const FormLifeInsurance = () => {
    return (
        <div className={style.FormLifeInsurance}>
            <form>
                <TextInput
                    label={"Nombre"}
                    name={"Nombre"}
                />
                <TextInput
                    label={'Apellido'}
                    name={'Apellido'}
                />
                <DateOfBirth
                    label='Fecha de Nacimiento'
                />

            </form>
        </div>
    );
}

export default FormLifeInsurance;