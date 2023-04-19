import React from "react";
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