import React,{useState} from "react";
import ConfirmationDialog from "../../Common/ConfirmationDialog/ConfirmationDialog";
import StartOverButton from "./StartOverButton";
import useFormWizard from "../../../hooks/useFormWizard/useFormWizard";
import style from './StartOver.module.css'
const StartOver= ()=>{
    const [open,setOpen] = useState(false)
    const {handleReset} = useFormWizard()
    
    const handleOpen = () =>{
        setOpen(true)
    };

    const handleConfirm =()=>{
        handleReset()
        setOpen(false)
    }
    const handleCancel = ()=>{
        setOpen(false)
    }

    return (
        <div>
            <StartOverButton customClassName={style.StartOverButton} onOpen={handleOpen} />
            <ConfirmationDialog
                open={open}
                title="Reiniciar cotizacion?"
                message="Al confirmar volveras al primer paso y se perderan todos los cambios"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </div>
    )
} 

export default StartOver