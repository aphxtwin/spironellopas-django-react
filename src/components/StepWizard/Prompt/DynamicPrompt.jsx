import React from "react";
import Prompt from "./Prompt";


const DynamicPrompt = ({selectedProducts, currentStep, currentProductIndex}) =>{
    const prompts = [
        {
            prompt: "Hola soy Ivo, ¿Qué tipo de seguro buscas?",
            subprompt:
                "Selecciona el tipo de seguro que necesitas, luego presiona la flecha para continuar.",
        },
        {
            auto: {
                prompt: "Formulario de seguro de auto",
                subprompt: "Complete los detalles de su auto.",
            },
            vida: {
                prompt: "Formulario de seguro de vida",
                subprompt: "Complete los detalles de su seguro de vida.",
            },
        },
        {
            prompt: "Información personal",
            subprompt: "Complete sus datos personales.",
        },
        {
            prompt: "Enviar formularios",
            subprompt: "Revise y envíe sus formularios.",
        },
    ];

    // get the current prompt and subprompt based on the current step and form
    const getCurrentPrompt = ()=>{
        if (currentStep === 1){
            const currentProduct = selectedProducts[currentProductIndex];
            return prompts[currentStep][currentProduct];
        };
        return prompts[currentStep];
    };

    const currentPrompt = getCurrentPrompt()
    const prompt = currentPrompt.prompt
    const subprompt = currentPrompt.subprompt
    
    return(
        <Prompt
            prompt={prompt}
            subprompt={subprompt}
        />
    ) 
}
export default DynamicPrompt