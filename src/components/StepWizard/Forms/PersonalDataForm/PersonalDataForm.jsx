import React from "react";
import TextInput from '../../../FormsToolbox/TextInput/TextInput';
import './PersonalDataForm.css' 

const PersonalDataForm = () => {
    return (
        <div>
            <form className="PersonalDataForm">
                <TextInput label={'Nombre'} placeholder={'name'} />
                <TextInput label={'Apellido'} placeholder={'Apellido'}/>
                <TextInput label={'Email'} placeholder={'Email'}/>
            </form>
        </div>
    );
}
export default PersonalDataForm;
