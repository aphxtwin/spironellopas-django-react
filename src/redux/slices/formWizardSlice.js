import { createSlice } from "@reduxjs/toolkit";

const formWizardSlice = createSlice({
    name: 'formWizard',
    initialState:{
        isValid:false,
        currentStep: 0,
        currentProductIndex:0,
    },
    reducers:{
        setFormValid: (state, action) => {
            state.isValid = action.payload;
        },
        setCurrentStep: (state,action) => {
            state.currentStep = action.payload
        },
        setCurrentProductIndex: (state, action) => {
            state.currentProductIndex = action.payload;
        },
        resetForm: (state) =>{
            state.currentProductIndex= 0;
            state.currentStep = 0;
        }
    },
})
export const {
    setFormValid,
    setCurrentStep,
    setCurrentProductIndex,
    resetForm,
} = formWizardSlice.actions;

export default formWizardSlice.reducer