import React from "react";
import TextInput from '../../../FormsToolbox/TextInput/TextInput';
import style from './FormLife.module.css';
import DateOfBirth from "../../../FormsToolbox/DateOfBirth/DateOfBirth";
import useProductForm from "../../../../hooks/useProductForm";

const FormLifeInsurance = () => {
    
    const [formData, handleChange] = useProductForm({

        name: "",
        last_name: "",
        date_of_birth: "",
    });

    return (
    <form className={style.FormLifeInsurance}>
        <TextInput
            label={"Nombre"}
            name={"name"}
            value={formData.name}
            onChange={handleChange}
        />
        <TextInput
            label={'Apellido'}
            name={'last_name'}
            value={formData.last_name}
            onChange={handleChange}
        />
        <DateOfBirth
            label='Fecha de Nacimiento'
            name='date_of_birth'
            value={formData.date_of_birth}
            onChange={handleChange}
        />
    </form>
    );
}

export default FormLifeInsurance;
