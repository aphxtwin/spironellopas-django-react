import React from "react";
import style from './Prompt.module.css';
const Prompt = ({ prompt }) => {
    return (
        <div className={style.Prompter} >
            <h3>{prompt}</h3>
        </div>
    );
}

export default Prompt;