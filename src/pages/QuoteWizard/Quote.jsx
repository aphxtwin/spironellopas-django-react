import React, { useState } from "react";
import NavWizard from "../../components/StepWizard/NavWizard/NavWizard";
import DynamicPrompt from "../../components/StepWizard/Prompt/DynamicPrompt";
import ProgressBar from "../../components/StepWizard/ProgressBar/ProgressBar";
import style from "./Quote.module.css";
import FormWizardContent from "../../components/StepWizard/FormWizardContent/FormWizardContent";
import useFormWizard from "../../hooks/useFormWizard/useFormWizard";
import BlockAnterior from "../../components/StepWizard/Anterior/BlockAnterior";
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

    const notShow = currentStep === 3
    

    return (
        <div className={style.MultiStepWizard}>
            <NavWizard/>
            <div className={style.PromptBox}>

            {notShow && <BlockAnterior onclick={handlePrevStep}/> }
            <DynamicPrompt
                selectedProducts={selectedProducts}
                currentStep={currentStep} 
                currentProductIndex={currentProductIndex}
            />
            
            {!notShow &&
                <ProgressBar
                customClassName={style.ProgressBar}
                formValid={isValid}
                onNext={handleNextStep}
                onPrev={handlePrevStep}
                />
            }


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
