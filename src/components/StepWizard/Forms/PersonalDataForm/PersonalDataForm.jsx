import React from "react";
import { useSelector } from "react-redux";
import TextInput from '../../../FormsToolbox/TextInput/TextInput';
import usePersonalDForm from "../../../../hooks/usePersonalDForm";
import './PersonalDataForm.css'

const PersonalDataForm = () => {
    const initialState={
        name: '',
        last_name:'',
        email:'',
    }
    const data = useSelector((state) => {
        const formData = state.form.formData && state.form.formData.personalData;
        return {
          name: formData && formData.name || initialState.name,
          last_name: formData && formData.last_name || initialState.last_name,
          email: formData && formData.email || initialState.email,
        };
    });
    const [formData, handleChange] = usePersonalDForm(data)


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
