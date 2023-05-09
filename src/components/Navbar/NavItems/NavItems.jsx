import React from "react";
import SocialLinks from "../../Common/SocialLinks/SocialLinks";
import style from "./NavItems.module.css";

const NavItems = ({
  social = true,
  links=[],
  navItemsClass,
  navItemClass,
  navbarSocialClass,
}) => {
  return (
    <ul className={`${navItemsClass ? navItemsClass : ""}`}>
        {links.map((link)=>(
            <li
                key={link.text}
                className={`${style.NavItem} ${navItemClass ? navItemClass : ""}`}
            >
                <a 
                    href={link.href}
                    target = {link.target || "_self"}
                >
                    {link.text}
                </a> 
            </li>
        ))}

      {social && (
        <li
        className={`${style.NavbarSocial} ${
            navbarSocialClass ? navbarSocialClass : ""
        }`}
        >
        <SocialLinks color={"gray"} iconSize={"1.6rem"} />
        </li>)}
    </ul>
  );
};

export default NavItems;
