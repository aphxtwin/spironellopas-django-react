import React from "react";
import NextPreviousButton from "../../Buttons/NextPrevButton/NextPrevButton";
import style from "./ProgressBar.module.css";

const ProgressBar = ({formValid,nextStep,lastStep}) => {
    
    return (
        <div className={style.ProgressBar}>
            <NextPreviousButton
                To={lastStep} 
                customClassName={style.PrevButton} 
                Direction={'previous'} />
            <NextPreviousButton
                Direction={'next'}
                To={nextStep} 
                customClassName={
                    formValid 
                        ? style.NextButton
                        : style.disabledNextButton
                    } 
            />
        </div>
    );
};

export default ProgressBar;