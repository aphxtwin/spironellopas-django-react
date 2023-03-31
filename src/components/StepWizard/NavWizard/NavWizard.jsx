import React from "react";
import NavMenu from "../../Navbar/NavMenu/NavMenu";
import style from './NavWizard.module.css';
const NavWizard = () => {
    return (
        <div className={style.NavigationWizard}>
            <div className={style.NavigationOptions}>
                <div className={style.NavigationOption}>
                    hola
                </div>
            </div>
            <NavMenu customClassName={style.WizardNavIcon}/>
        </div>
    );
}
export default NavWizard;