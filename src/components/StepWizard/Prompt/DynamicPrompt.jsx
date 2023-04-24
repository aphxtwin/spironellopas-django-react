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
            Integral_de_comercio: {
                prompt:"Formulario de integral de comercio",
                subprompt: "Complete los detalles de su seguro de integral de comercio"
            }
        },
        {
            prompt: "Información personal",
            subprompt: "Complete sus datos personales.",
        },
        {
            prompt: "Listo!",
            subprompt: "Ahora solo resta enviar los formularios. Recorda que podes revisarlos antes",
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