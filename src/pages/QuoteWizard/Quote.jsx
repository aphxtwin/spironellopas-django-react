import React, { useState } from "react";
import NavWizard from "../../components/StepWizard/NavWizard/NavWizard";
import DynamicPrompt from "../../components/StepWizard/Prompt/DynamicPrompt";
import ProgressBar from "../../components/StepWizard/ProgressBar/ProgressBar";
import style from "./Quote.module.css";
import FormWizardContent from "../../components/StepWizard/FormWizardContent/FormWizardContent";
import useFormWizard from "../../hooks/useFormWizard/useFormWizard";
const Quote = () => {
    
    const [selectedProducts, setSelectedProducts] = useState([]);

    const {
        isValid,
        currentStep,
        currentProductIndex,
        handleFormValidation,
        handleNextStep,
        handlePrevStep,
    } = useFormWizard(selectedProducts);

    

    return (
        <div className={style.MultiStepWizard}>
            <NavWizard/>
            <div className={style.PromptBox}>
            <DynamicPrompt
                selectedProducts={selectedProducts}
                currentStep={currentStep} 
                currentProductIndex={currentProductIndex}
            />
            
            <ProgressBar
                customClassName={style.ProgressBar}
                formValid={isValid}
                onNext={handleNextStep}
                onPrev={handlePrevStep}
            />

            <FormWizardContent
                currentStep={currentStep}
                currentProductIndex={currentProductIndex}
                selectedProducts={selectedProducts}
                onFormValidation={handleFormValidation}
                onProductSelection={(selected)=>{
                    setSelectedProducts(selected);
                }}
            />
            </div>
        </div>
    );
};
export default Quote;
