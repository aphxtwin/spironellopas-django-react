// this is the toggle for the navbar that displays all the items of the navbar 

// React Imports
import React, {useState, useEffect,useRef } from "react";
import NavItems from "../NavItems/NavItems";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";


// css
import style from "./NavMenu.module.css";

const NavMenu = ({customClassName}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = () => setMenuOpen(!menuOpen);
    
    const navMenuRef= useRef(null);
    const menuButtonRef = useRef(null);

    const handleClickOutside = (event) => {
        if(menuButtonRef.current && menuButtonRef.current.contains(event.target)){
            return;
        }
        if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
            //this is: if navMenuRef is not null and the click is outside of the navMenuRef
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        // this is the effect, it runs after every render
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            /*
                this is the cleanup function, it's called when the component is unmounted
                so we remove the event listener here
            */
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleIconActive = 
        menuOpen 
            ? `${style.MenuIcon} ${style.active} ${customClassName}`
            : `${style.MenuIcon} ${customClassName}`;
            
    const handleMenuActive = 
        menuOpen 
            ? `${style.NavMenu} ${style.active} ${customClassName}`
            : `${style.NavMenu} ${customClassName}`
    

    return(
        <div className={style.NavbarMenu}>
            <div ref={menuButtonRef} className={ handleIconActive } onClick={handleClick}>
                <FontAwesomeIcon icon= {menuOpen ? faXmark : faBars } />
            </div>
            <div ref={navMenuRef} className={ handleMenuActive }>
                <NavItems />
            </div>
        </div> 
    )

}

export default NavMenu;