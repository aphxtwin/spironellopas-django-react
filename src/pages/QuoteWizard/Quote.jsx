import React from "react";
import NavWizard from '../../components/StepWizard/NavWizard/NavWizard'
import Prompt from "../../components/StepWizard/Prompt/Prompt";
import NextButton from "../../components/Buttons/NextButton/Next";
import ProductSelect from "../../components/StepWizard/Forms/ProductSelect/ProductSelect"; 
import style from "./QuoteWizard.module.css";

const Quote = () => {

    return (
        <div className={style.MultiStepWizard}>
            <NavWizard/>
            <div className={style.PromptBox}>        
                <Prompt
                    prompt={"Hola soy Ivo, ¿Qué tipo de seguro buscas?"}
                    subprompt={"Podes seleccionar más de una opción."}
                />
                {/*Remember that the presence of this form here is temporal just for style*/}
                <ProductSelect />
                <NextButton text={"SIGUIENTE"} customClassName={style.NextButton}/>
            </div>
        </div>
    );
}

export default Quote;