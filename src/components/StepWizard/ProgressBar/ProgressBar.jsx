import React from "react";
import StepButton from "../../Buttons/StepButton/StepButton";
import style from "./ProgressBar.module.css";

const ProgressBar = ({formValid,onNext,onPrev, customClassName}) => {

    return (
        <div className={`${style.ProgressBar} ${customClassName ? customClassName : ''}`}>
            <StepButton
                customClassName={style.PrevButton} 
                Direction={'previous'}
                onClick={onPrev}
            />
            <StepButton
                type='next'
                customClassName={
                    formValid
                        ? style.NextButton
                        : style.NextButtonDisabled
                }
                onClick={onNext}
            />
        </div>
    );
};

export default ProgressBar;