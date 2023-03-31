import React from "react";
import SocialLinks from "../../Common/SocialLinks/SocialLinks";
import style from "./NavItems.module.css"
const NavItems = ({ social=true }) => {    
    
    return(
        <ul>
            <li className={style.NavItem}>
                home
            </li>
            <li className={style.NavItem}>
                about
            </li>
            <li className={style.NavItem}>
                services
            </li>
            <li className={style.NavItem}>
                contact
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