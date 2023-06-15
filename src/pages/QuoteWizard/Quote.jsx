import React, { useState,useEffect } from "react";
import NavWizard from "../../components/StepWizard/NavWizard/NavWizard";
import DynamicPrompt from "../../components/StepWizard/Prompt/DynamicPrompt";
import StepButton from "../../components/Buttons/StepButton/StepButton";
import styles from "./Quote.module.css";
import FormWizardContent from "../../components/StepWizard/FormWizardContent/FormWizardContent";
import useFormWizard from "../../hooks/useFormWizard/useFormWizard";
import AnteriorButton from "../../components/Buttons/AnteriorButton/AnteriorButton";
import LastSubmitButton from "../../components/Buttons/AnteriorButton/LastSubmitButton";
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

        // This variable is the condition when the progress bar don't have to be shown
        const lastStep = currentStep === 3
        
        useEffect(()=>{
            const handleEnterKey = (e) =>{
                if (e.key === 'Enter'){
                    e.preventDefault();
                    handleNextStep();
                };
            };

            window.addEventListener('keydown', handleEnterKey)

            return ()=>{
                window.removeEventListener('keydown',handleEnterKey)
            };

        },[handleNextStep]);




        return (
            <div className={styles.MultiStepWizard}>
                <NavWizard />          
                <div className={lastStep ? styles.SubmitPrompt : styles.PromptBox}>
                    { lastStep &&
                        <LastSubmitButton onClick={handlePrevStep} className={styles.SubmitLastStep}>
                             ← Ir al paso anterior
                        </LastSubmitButton>
                    }      
                    <DynamicPrompt
                        selectedProducts={selectedProducts}
                        currentStep={currentStep} 
                        currentProductIndex={currentProductIndex}
                    />
                    {(currentStep > 0 && currentStep < 3)  &&  (
                        <AnteriorButton className={styles.AnteriorButton} onClick={handlePrevStep}/>
                    )}
                    
                    <div className={styles.FormBox}>
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

                    {!lastStep &&(
                        <StepButton
                        customClassName={styles.StepButtonFixed}
                        formValid={isValid}
                        onClick={handleNextStep}
                        textButton={'Siguiente'}
                        />

                    )

                    }

                </div>

            </div>
        );
    };
    export default Quote;
