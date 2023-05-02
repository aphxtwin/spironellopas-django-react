import React from "react";
import SocialLinks from "../../Common/SocialLinks/SocialLinks";
import style from "./NavItems.module.css";

const NavItems = ({
  social = true,
  navItemsClass,
  navItemClass,
  navbarSocialClass,
}) => {
  return (
    <ul className={`${navItemsClass ? navItemsClass : ""}`}>
      <li className={`${style.NavItem} ${navItemClass ? navItemClass : ""}`}>
        INICIO
      </li>
      <li className={`${style.NavItem} ${navItemClass ? navItemClass : ""}`}>
        PRODUCTOS
      </li>
      <li className={`${style.NavItem} ${navItemClass ? navItemClass : ""}`}>
        RECURSOS
      </li>
      <li className={`${style.NavItem} ${navItemClass ? navItemClass : ""}`}>
        DENUNCIAS
      </li>
      {social && (
        <li
          className={`${style.NavbarSocial} ${
            navbarSocialClass ? navbarSocialClass : ""
          }`}
        >
          <SocialLinks color={"gray"} iconSize={"1.6rem"} />
        </li>
      )}
    </ul>
  );
};

export default NavItems;
