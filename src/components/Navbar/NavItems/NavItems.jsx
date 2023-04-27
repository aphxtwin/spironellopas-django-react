import React from "react";
import SocialLinks from "../../Common/SocialLinks/SocialLinks";
import style from "./NavItems.module.css"
const NavItems = ({ social=true, }) => {    
    
    return(
        <ul >
            <li className={style.NavItem}>
                INICIO
            </li>
            <li className={style.NavItem}>
                EXPLORAR PRODUCTOS
            </li>
            <li className={style.NavItem}>
                RECURSOS
            </li>
            <li className={style.NavItem}>
                DENUNCIAS
            </li>
            {social && 
                <li className={style.NavbarSocial}>
                    <SocialLinks color={'gray'} iconSize={"1.6rem"} />
                </li>
            }
        </ul>
    )
}

export default NavItems;