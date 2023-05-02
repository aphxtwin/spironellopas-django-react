import React, {useState, useEffect,useRef } from "react";
import NavItems from "../NavItems/NavItems";
import style from "./NavMenu.module.css";
import MenuIcon from "./MenuIcon";

const NavMenu = ({customClassName, customMenuClassName, customThreeBarsName }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = () => setMenuOpen(!menuOpen);
    
    const navMenuRef= useRef(null);
    const menuButtonRef = useRef(null);

    const handleClickOutside = (event) => {
        /*
        This keeps safe the usability of handleClick otherwise the menu will be closed only by
        clicking outside the menu
        */
        if(menuButtonRef.current && menuButtonRef.current.contains(event.target)){
            return;
        }
        if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
            /*
            this is=> if navMenuRef is not null and the click is outside of the navMenuRef
            or any of its childrens
            */
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
        
    const handleMenuActive = 
        `${style.NavMenu} ${customMenuClassName ? customMenuClassName : ''} ${menuOpen ? style.active : ''}`

    return(
        <div className={`${customClassName ? customClassName : ''}` }>
            <MenuIcon 
                menuOpen={menuOpen} 
                onClick={handleClick}
                customClassName={customThreeBarsName} 
                menuButtonRef={menuButtonRef}
            />
            <div ref={navMenuRef} className={ handleMenuActive }>
                <div className={style.MenuIconWrapper}>
                    {
                        menuOpen && <MenuIcon menuOpen={menuOpen} onClick={handleClick} menuButtonRef={menuButtonRef}/>
                    }
                </div>
                <NavItems navItemsClass={style.NavItems}/>
            </div>
        </div> 
    )

}

export default NavMenu;