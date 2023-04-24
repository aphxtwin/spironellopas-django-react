import React from "react";
import TextInput from '../../../FormsToolbox/TextInput/TextInput';
import style from './FormLife.module.css';

const FormLifeInsurance = () => {
    return (
        <div className={style.FormLifeInsurance}>
            <form>
                <TextInput
                    label={"Edad"}
                    name={"Edad"}
                />
                <TextInput
                    label={'Nombre'}
                />
            </form>
        </div>
    );
}

export default FormLifeInsurance;