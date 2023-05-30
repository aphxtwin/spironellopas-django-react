import { useDispatch,useSelector } from "react-redux";
import { setFormValid,setCurrentStep,setCurrentProductIndex,resetForm } from "../../redux/slices/formWizardSlice";

import { removeProductData, resetProductData } from "../../redux/actions/formActions";

const useFormWizard = (selectedProducts) => {
    
    const dispatch = useDispatch();

    const currentStep = useSelector((state)=>state.formWizard.currentStep)
    const currentProductIndex = useSelector((state)=>state.formWizard.currentProductIndex)
    const isValid = useSelector((state)=> state.formWizard.isValid)


    const handleFormValidation = (isValid) => {
        dispatch(setFormValid(isValid))
    };


    // This function will be called when the user clicks the browser's back button


    const handleNextStep = () => {
        if (isValid && currentStep < 3){
            if (currentStep === 1 && currentProductIndex < selectedProducts.length - 1){
                dispatch(setCurrentProductIndex(currentProductIndex + 1));
            } else{
                dispatch(setCurrentStep(currentStep+1));
            } 
        }
    };
    const handlePrevStep = () => {
        if (currentStep > 0){
            if (currentStep === 1 && currentProductIndex > 0){
                dispatch(setCurrentProductIndex(currentProductIndex-1));
            } else{
                dispatch(setCurrentStep(currentStep-1));
            }
        }
    };

    const handleReset = ()=>{
        dispatch(resetForm())
        dispatch(resetProductData())
        dispatch(removeProductData())
    }

    return {
        isValid,
        currentStep,
        currentProductIndex,
        handleFormValidation,
        handleNextStep,
        handlePrevStep,
        handleReset
    }
}

export default useFormWizard;