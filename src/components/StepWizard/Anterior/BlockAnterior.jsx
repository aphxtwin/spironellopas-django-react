import React from "react";
import AnteriorButton from "../../Buttons/AnteriorButton/AnteriorButton";
import './BlockAnterior.css'

const BlockAnterior = ({onclick}) => {
    return (
        <div className="Anterior">
            <AnteriorButton onClick={onclick}/>
        </div>
    )
}
export default BlockAnterior