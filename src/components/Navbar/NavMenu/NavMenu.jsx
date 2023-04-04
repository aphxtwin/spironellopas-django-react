// this is the toggle for the navbar that displays all the items of the navbar 

// React Imports
import React, {useState, useEffect,useRef } from "react";
import NavItems from "../NavItems/NavItems";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";


// css
import style from "./NavMenu.module.css";

const NavMenu = ({customClassName, iconColor, customMenuClassName }) => {
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
        `${style.MenuIcon} ${menuOpen ? style.active : ''}`
            
    const handleMenuActive = 
        `${style.NavMenu} ${customMenuClassName ? customMenuClassName : ''} ${menuOpen ? style.active : ''}`

    return(
        <div className={`${customClassName ? customClassName : ''}` }>
            <div ref={menuButtonRef} className={ handleIconActive } onClick={handleClick}>
                <FontAwesomeIcon icon = {menuOpen ? faXmark : faBars } style={{color : iconColor}} />
            </div>
            <div ref={navMenuRef} className={ handleMenuActive }>
                <NavItems />
            </div>
        </div> 
    )

}

export default NavMenu;