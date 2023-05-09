import React from "react";
import Prompt from "./Prompt";


const DynamicPrompt = ({selectedProducts, currentStep, currentProductIndex}) =>{
    const prompts = [
        {
            prompt: "Hola soy Ivo, ¿Qué tipo de seguro buscas?",
            subprompt:
                "Elegí el tipo de seguro que necesitás y luego hacé click en Siguiente para avanzar. Estoy acá para ayudarte",
        },

        {
            auto: {
            prompt: "¡Genial! Vamos a cotizar un seguro para tu auto.",
            subprompt: "Necesito algunos datos del vehículo para calcular el mejor precio para tu seguro.",
            },
            vida: {
            prompt: "¡Excelente elección! Un seguro de vida es fundamental.",
            subprompt: "Completá los detalles de tu seguro de vida para continuar.",
            },
            Integral_de_comercio: {
            prompt: "¡Perfecto! Un seguro integral de comercio es muy importante.",
            subprompt: "Completá los detalles de tu comercio para que podamos cotizar el seguro."
            }
            },

        {
            prompt: "Información personal",
            subprompt: "Ahora necesito que completes tus datos personales. No te preocupes, esta información es confidencial.",
        },
        {
            prompt: "¡Listo!",
            subprompt: "Ya estamos por terminar. Solo falta enviar los formularios. Recordá que podés revisarlos antes de confirmar.",
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