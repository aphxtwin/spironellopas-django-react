import React from "react";
import TextInput from '../../../FormsToolbox/TextInput/TextInput';
import usePersonalDForm from "../../../../hooks/usePersonalDForm";
import './PersonalDataForm.css' 

const PersonalDataForm = () => {
    const [formData, handleChange] = usePersonalDForm({
        name: '',
        last_name:'',
        email:'',
    })
    return (
        <div>
            <form className="PersonalDataForm">
                <TextInput 
                    label={'Nombre'} 
                    placeholder={'name'}
                    name={'name'}
                    value={formData.name}
                    onChange={handleChange} 
                />
                <TextInput 
                    label={'Apellido'} 
                    placeholder={'Apellido'}
                    name={'last_name'}
                    value={formData.last_name}
                    onChange={handleChange} 
                />
                <TextInput 
                    label={'Email'} 
                    placeholder={'Email'}
                    name={'email'}
                    value={formData.email}
                    onChange={handleChange} 
                />
            </form>
        </div>
    );
}
export default PersonalDataForm;
