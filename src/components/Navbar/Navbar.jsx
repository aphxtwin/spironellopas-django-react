import {React, useState, useEffect,useRef } from "react";
import CallToAction from "../Buttons/CtaButton/CallToAction";
import "./Navbar.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";


// Logo
import logo_white from "../../assets/images/logo-white-svg.svg";
import Logo from "../Common/Logo";
import SocialLinks from "../Common/SocialLinks/SocialLinks";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    const [showCta, setShowCta] = useState(false);
    

    const navMenuRef= useRef(null);
    const menuButtonRef = useRef(null);
    const handleClickOutside = (event) => {
        if(menuButtonRef.current && menuButtonRef.current.contains(event.target)){
            return;
        }
        if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
            //this is: if navMenuRef is not null and the click is outside of the navMenuRef
            setClick(false);
        }
    };

    useEffect(() =>{
        const handleScroll = ()=>{
            const headerCTA = document.querySelector("header .cta-button");// this will select the first element with a class that ends with "-header"
            if (headerCTA){
                const ctaOffset = headerCTA.getBoundingClientRect().top + window.scrollY;
                if (window.scrollY > ctaOffset){
                    setShowCta(true);
                } else{
                    setShowCta(false);
                }
            } else{
                setShowCta(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        } 
    },[])


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
    // the brackets [navMenuRef] are used to tell react to only run this effect when the ref changes
    // otherwise it would run on every render, which is not what we want

    return(
        <nav>
            <div className="navbar-container">
                <Logo logoType={logo_white} size={{Width:"80px",Height:"80px"}} />
                <div className="logo-container">
                    {showCta &&
                        <div className="cta-button-navbar"> 
                            <CallToAction textSize="0.8rem" 
                                backgroundColor='rgb(255 0 93)'
                                padding={{
                                top: '0.5rem',
                                right: '1rem',
                                bottom: '0.5rem',
                                left:'1rem',
                                }}
                                color = 'white'
                            />
                        </div>
                    }
                </div>
                <div ref={menuButtonRef} className={click ? "menu-icon active": "menu-icon"} onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faXmark : faBars } style={{
                        height:"2.1rem",
                        width:"2rem",
                        border:click ?"1.5px solid white": 'none',
                    }} />
                </div>
                <div ref={navMenuRef} className={click ? "nav-menu active" : "nav-menu"}>
                    <ul >
                        <li className="nav-item">
                            home
                        </li>
                        <li className="nav-item">
                            about
                        </li>
                        <li className="nav-item">
                            services
                        </li>
                        <li className="nav-item">
                            contact
                        </li>
                        <li className="nav-item">
                            <CallToAction padding={{
                                top: '0.8rem',
                                right: '2.5rem',
                                bottom: '0.8rem',
                                left:'2.5rem'
                            }} />
                        </li>
                        <li className="navbar-social">
                            <SocialLinks color={'gray'} iconSize={"1.6rem"} />
                        </li>
                    </ul>
                </div>
                <div className="navbar-desktop">
                    <ul>
                        <li className="nav-item">
                            home
                        </li>
                        <li className="nav-item">
                            about
                        </li>
                        <li className="nav-item">
                            services
                        </li>
                        <li className="nav-item">
                            contact
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )    
}
export default Navbar;