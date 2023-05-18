import React, { useState,useEffect } from "react";
import NavWizard from "../../components/StepWizard/NavWizard/NavWizard";
import DynamicPrompt from "../../components/StepWizard/Prompt/DynamicPrompt";
import StepButton from "../../components/Buttons/StepButton/StepButton";
import styles from "./Quote.module.css";
import FormWizardContent from "../../components/StepWizard/FormWizardContent/FormWizardContent";
import useFormWizard from "../../hooks/useFormWizard/useFormWizard";
import pibe from '../../assets/characters/pibe.svg'
import { useSwipeable } from "react-swipeable";
import AnteriorButton from "../../components/Buttons/AnteriorButton/AnteriorButton";
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

        const swipeHandler = useSwipeable({
            onSwipedRight: () => {
                if (window.innerWidth  <= 768){
                    handlePrevStep();
                }
            },
        })



        return (
            <div className={styles.MultiStepWizard} {...swipeHandler}>
                <NavWizard />
                <div className={lastStep ? styles.SubmitPrompt : styles.PromptBox}>
                    <DynamicPrompt
                        selectedProducts={selectedProducts}
                        currentStep={currentStep} 
                        currentProductIndex={currentProductIndex}
                    />
                    {currentStep > 0 && (
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
