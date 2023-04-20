import React from "react";
import TextInput from '../../../FormsToolbox/TextInput/TextInput';
import Checkbox from '../../../FormsToolbox/Checkbox/Checkbox';
import style from './FormLife.module.css';

const FormLifeInsurance = () => {
    return (
        <div className={style.FormLifeInsurance}>
            <form>
                <label htmlFor="name">Edad</label>
                <input type="number" name="age" id="age" />
                <label htmlFor="lastname">Sexo</label>
            </form>
        </div>
    );
}

export default FormLifeInsurance;