import React, {useState} from "react";
import NavWizard from '../../components/StepWizard/NavWizard/NavWizard'
import Prompt from "../../components/StepWizard/Prompt/Prompt";
import ProductSelect from "../../components/StepWizard/Forms/ProductSelect/ProductSelect";
import ProgressBar from "../../components/StepWizard/ProgressBar/ProgressBar"; 
import style from "./Quote.module.css";
import FormCarInsurance from "../../components/StepWizard/Forms/FormCarInsurance/FormCarInsurance";

const Quote = () => {

    const [isValid,setFormValid] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    
    const handleFormValidation = (isValid) => {
        setFormValid(isValid);
    }
    const handleProductSelection = (selected) => {
        setSelectedProducts(selected);
    }

    return (
        <div className={style.MultiStepWizard}>
            <NavWizard/>
            <div className={style.PromptBox}>        
                <Prompt
                    prompt={"Hola soy Ivo, ¿Qué tipo de seguro buscas?"}
                    subprompt={"Podes seleccionar más de una opción."}
                />
                <ProgressBar 
                    formValid={isValid}
                    lastStep={'/'} 
                />
                {/*Remember that the presence of this form here is temporal just for style*/}
                <ProductSelect 
                    onFormValidation={handleFormValidation}
                    onProductSelection={handleProductSelection}
                />
                { selectedProducts.includes("auto") && <FormCarInsurance/>}
            </div>
            
        </div>
    );
}

export default Quote;