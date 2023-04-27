import React, {useState} from "react";
import NavWizard from '../../components/StepWizard/NavWizard/NavWizard'
import Prompt from "../../components/StepWizard/Prompt/Prompt";
import ProductSelect from "../../components/StepWizard/Forms/ProductSelect/ProductSelect";
import ProgressBar from "../../components/StepWizard/ProgressBar/ProgressBar"; 
import style from "./Quote.module.css";
import FormCarInsurance from "../../components/StepWizard/Forms/FormCarInsurance/FormCarInsurance";
import FormLifeInsurance from "../../components/StepWizard/Forms/FormLifeInsurance/FormLifeInsurance";
import PersonalDataForm from "../../components/StepWizard/Forms/PersonalDataForm/PersonalDataForm";
import SubmitForms from "../../components/StepWizard/Forms/SubmitForms/SubmitForms";
import { useNavigate } from "react-router-dom";

const Quote = () => {

    const [isValid,setFormValid] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [currentProductIndex, setCurrentProductIndex] = useState(0)
    // this is used to navigate back to the previous page
    const navigate = useNavigate();

    const handleFormValidation = (isValid) => {
        setFormValid(isValid);
    };

    const handleProductSelection = (selected) => {
        setSelectedProducts(selected);
    };

    const getCurrentForm = () => {
        if (currentStep === 1 && selectedProducts.length > 0){
            const currentProduct = selectedProducts[currentProductIndex];
            switch (currentProduct){
                case "auto":
                    return <FormCarInsurance/>;
                case "vida":
                    return <FormLifeInsurance/>;
                default:
                    return null;
            }
        }
        return null;
    };
    const handleNextStep = () => {
        if (isValid){
            
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

    

    return (
        <div className={style.MultiStepWizard}>
            <NavWizard/>
            <div className={style.PromptBox}>
                <Prompt
                    prompt={"Hola soy Ivo, ¿Qué tipo de seguro buscas?"}
                    subprompt={"Selecciona el tipo de seguro que necesitas, luego presiona la flecha para continuar."}
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
                {currentStep === 1 && (
                    getCurrentForm()
                )}
                {currentStep === 2 && (
                    <PersonalDataForm/>
                )}
                {currentStep === 3 && (
                    <SubmitForms/>
                )}
            </div>
        </div>
    );
};


export default Quote;