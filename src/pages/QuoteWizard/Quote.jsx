    import React, { useState,useEffect } from "react";
    import NavWizard from "../../components/StepWizard/NavWizard/NavWizard";
    import DynamicPrompt from "../../components/StepWizard/Prompt/DynamicPrompt";
    import StepButton from "../../components/Buttons/StepButton/StepButton";
    import style from "./Quote.module.css";
    import FormWizardContent from "../../components/StepWizard/FormWizardContent/FormWizardContent";
    import useFormWizard from "../../hooks/useFormWizard/useFormWizard";
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
        const notShow = currentStep === 3
        
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
                if (window.innerWidth  <= 960 ){
                    handlePrevStep();
                }
            },
        })



        return (
            <div className={style.MultiStepWizard} {...swipeHandler}>
                <NavWizard />
                <div className={style.PromptBox}>

                    <DynamicPrompt
                        selectedProducts={selectedProducts}
                        currentStep={currentStep} 
                        currentProductIndex={currentProductIndex}
                    />
                    <div className={style.containerXd}>
                        {currentStep > 0 && (
                            <AnteriorButton className={style.AnteriorButton} onClick={handlePrevStep}/>
                        )}
                        
                        <div className={style.FormBox}>
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

                    {!notShow &&(
                        <StepButton
                        customClassName={style.StepButtonFixed}
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
