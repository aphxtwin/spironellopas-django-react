import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const useFormWizard = (selectedProducts) => {
    /* This custom hook is the responsible for managing things as form validation */
    const [isValid,setFormValid] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [currentProductIndex, setCurrentProductIndex] = useState(0)


    const navigate = useNavigate();

    const handleFormValidation = (isValid) => {
        setFormValid(isValid);
    };

    // This function will be called when the user clicks the browser's back button


    const handleNextStep = () => {
        if (isValid && currentStep < 3){
            if (currentStep === 1 && currentProductIndex < selectedProducts.length - 1){
                setCurrentProductIndex(currentProductIndex + 1);
            } else{
                setCurrentStep(currentStep + 1);
            } 
        }
    };
    const handlePrevStep = () => {
        if (currentStep > 0){
            if (currentStep === 1 && currentProductIndex > 0){
                setCurrentProductIndex(currentProductIndex - 1);
            } else{
                setCurrentStep(currentStep - 1);
            }
        } else{
            navigate(-1)
        }
    };



    return {
        isValid,
        currentStep,
        currentProductIndex,
        handleFormValidation,
        handleNextStep,
        handlePrevStep,
    }
}

export default useFormWizard;