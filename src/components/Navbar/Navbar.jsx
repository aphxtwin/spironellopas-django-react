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
    
    const navMenuRef= useRef(null);
    

    return(
        <nav>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Logo logoType={logo_white} size={{Width:'80px', Height:'80px'}} />
                </div>
                <div className={click ? "menu-icon active": "menu-icon"} onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faXmark : faBars } style={{
                        height:"2.1rem",
                        width:"2rem",
                        border:click ?"1.5px solid white": 'none',
                    }} />
                </div>

            </div>
            <div className="navbar-menu">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
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
                            <CallToAction textButton={"Cotiza ahora!"} padding={{
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
        </nav>
    )    
}
export default Navbar;