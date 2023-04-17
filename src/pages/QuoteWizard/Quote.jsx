import React, {useState} from "react";
import NavWizard from '../../components/StepWizard/NavWizard/NavWizard'
import Prompt from "../../components/StepWizard/Prompt/Prompt";
import ProductSelect from "../../components/StepWizard/Forms/ProductSelect/ProductSelect";
import ProgressBar from "../../components/StepWizard/ProgressBar/ProgressBar"; 
import style from "./Quote.module.css";
import FormCarInsurance from "../../components/StepWizard/Forms/FormCarInsurance/FormCarInsurance";
import FormHouseInsurance from "../../components/StepWizard/Forms/FormHouseInsurance/FormHouseInsurance";
import { useNavigate } from "react-router-dom";

const Quote = () => {

    const [isValid,setFormValid] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    
    const navigate = useNavigate();

    const handleFormValidation = (isValid) => {
        setFormValid(isValid);
    }
    const handleProductSelection = (selected) => {
        setSelectedProducts(selected);
    }
    const handleNextStep = () => {
        if (isValid){
            // if the form is valid then go to the next step
            setCurrentStep(currentStep + 1);
        }
    }
    const handlePrevStep = () => {
        if (currentStep > 0){
            // if the form is valid then go to the next step
            setCurrentStep(currentStep - 1);
        } else{
            navigate(-1)
        }
    }

    

    return (
        <div className={style.MultiStepWizard}>
            <NavWizard/>
            <div className={style.PromptBox}>
                <Prompt
                    prompt={"Hola soy Ivo, ¿Qué tipo de seguro buscas?"}
                    subprompt={"Selecciona"}
                />        
                <ProgressBar 
                    formValid={isValid}
                    onNext={handleNextStep}
                    onPrev={handlePrevStep}
                />
                
                {currentStep === 0 && 
                    <ProductSelect 
                    onFormValidation={handleFormValidation}
                    onProductSelection={handleProductSelection}
                    />
                }
                {currentStep === 1 && selectedProducts.includes('auto') && (
                    <FormCarInsurance
                    />
                )}
                {currentStep === 1 && selectedProducts.includes('vida') && (
                    <FormHouseInsurance
                    />
                )
                }
            </div>
        </div>
    );
}

export default Quote;