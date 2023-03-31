import React from "react";
import NavWizard from '../../components/StepWizard/NavWizard/NavWizard'
import Prompt from "../../components/StepWizard/Prompt/Prompt";
import NextButton from "../../components/Buttons/NextButton/Next";
import style from "./QuoteWizard.module.css";

const Quote = () => {

    return (
        <div className={style.MultiStepWizard}>
            <NavWizard/>
            <div className={style.PromptBox}>        
                <Prompt
                    prompt={"Hey I'm Ivo, What kind of insurance are you looking for?"}
                />
                <NextButton text={"SIGUIENTE"}/>
            </div>
        </div>
    );
}

export default Quote;