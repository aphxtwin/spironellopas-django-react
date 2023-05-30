import React from "react";
import NavMenu from "../../Navbar/NavMenu/NavMenu";
import style from './NavWizard.module.css';
import StartOver from "../StartOver/StartOver";

const NavWizard = () => {
    return (
        <div className={style.NavigationWizard}>
            <div className={style.NavigationOption}>
                <StartOver/>
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