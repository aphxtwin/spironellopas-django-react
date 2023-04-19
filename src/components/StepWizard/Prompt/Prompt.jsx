import React from "react";
import style from './Prompt.module.css';
const Prompt = ({ prompt,subprompt }) => {
    // need a list of prompts and subprompts to display for each step of the wizard
    const prompts = [
        {
            step: 0,
            prompt: "Hola soy Ivo, ¿Qué tipo de seguro buscas?",
            subprompt: "Selecciona el tipo de seguro que necesitas, luego presiona la flecha para continuar."
        },
        {
            step: 1,
            form: "auto",
            prompt:"Ahora necesitamos algunos datos de tu auto para cotizar tu seguro.",
            subprompt: "Llena el formulario y presiona la flecha para continuar."
        },
        {
            step: 1,
            form: "vida",
            prompt:"Estos datos que te pedimos en el formulario son necesarios para brindarte un seguro de vida.",
            subprompt: "Llena el formulario y presiona la flecha para continuar."
        },
    ]
    return (
        <div className={style.Prompter} >
            <h3>{prompt}</h3>
            <p>{subprompt}</p>
        </div>
    );
}

export default Prompt;