import React from "react";
import { useSelector } from "react-redux";

const SubmitForms = () => {
    const formData = useSelector((state)=>state.form.formData);
    const handleSubmit = () =>{
        console.log("Su Cotizacion =>", formData)
    }
    return (
        <div>
            <button onClick={handleSubmit}> Enviar</button>
        </div>
    );
}

export default SubmitForms;
