import React from "react";
import NavMenu from "../../Navbar/NavMenu/NavMenu";
import style from './NavWizard.module.css';
import StartOver from "./NavigationOptions/StartOver"; 
const NavWizard = () => {
    return (
        <div className={style.NavigationWizard}>
            <div className={style.NavigationOptions}>
                <div className={style.NavigationOption}>
                    <StartOver />
                </div>
            </div>
            <NavMenu 
                customClassName={style.NavWizardMenu} 
                customMenuClassName={style.MenuWizard}  
                customThreeBarsName={style.ThreeBarsIcon}  
            />
        </div>
    );
}
export default NavWizard;