import React from "react";
import style from './Prompt.module.css';
const Prompt = ({ prompt,subprompt }) => {
    return (
        <div className={style.Prompter} >
            <h3>{prompt}</h3>
            <p>{subprompt}</p>
        </div>
    );
}

export default Prompt;