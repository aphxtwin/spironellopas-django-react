import React, {useState, useEffect } from "react";
import CallToAction from "../Buttons/CtaButton/CallToAction";
import navItemsStyles from './NavItems/NavItems.module.css';
import styles from './Navbar.module.css'

// NavMenu,NavItems
import NavMenu from "./NavMenu/NavMenu";
import NavItems from "./NavItems/NavItems";
// Logo
import logo_black from "../../assets/images/logo-black.svg"
import Logo from "../Common/Logo";


const Navbar = () => {
    // CTA = Call To Action Button
    const [showCta, setShowCta] = useState(false);
    
    useEffect(() =>{
        const handleScroll = ()=>{
            const headerCTA = document.querySelector("main a");
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

    const CtaNavbar = showCta
        ? `${styles.CtaNavbar} ${styles.active}`
        : styles.CtaNavbar;

    return(
        <nav>
            <div className={styles.navbarContainer}>
                <div className={styles.logoContainer}>
                    <Logo logoType={logo_black} />
                    <CallToAction 
                    customClass={CtaNavbar}
                    textButton={showCta ? 'COTIZA AHORA': ''}
                    />
                </div>                          

                <div className={styles.navbarMobile}>
                    <NavMenu customClassName={styles.NavMenu}/>
                </div>
                <div className={styles.navbarDesktop}>
                    <NavItems 
                        social={false}
                        navItemsClass={styles.NavItems}
                        navItemClass={styles.NavItem}
                    />
                </div>
            </div>
        </nav>
    )    
}
export default Navbar;
