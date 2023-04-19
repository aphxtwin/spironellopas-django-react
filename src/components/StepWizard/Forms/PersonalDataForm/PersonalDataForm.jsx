import React from "react";

const PersonalDataForm = () => {
    return (
        <div>
            <form>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="lastname">Apellido</label>
                <input type="text" name="lastname" id="lastname" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </form>
        </div>
    );
}
export default PersonalDataForm;
