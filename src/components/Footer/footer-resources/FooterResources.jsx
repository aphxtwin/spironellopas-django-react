import React from "react";
import "../Footer.css";
import FooterResourcesItem from "./FooterResourcesItem";

const FooterResources = () => {
    return(
        <div className="footer-resources">
            <h3>Recursos</h3>
            <ul className="footer-resources-list">
                <FooterResourcesItem title="Sobre Nosotros" link="#" />
                <FooterResourcesItem title="Contacto" link="#" />
                <FooterResourcesItem title="Preguntas Frecuentes" link="#" />
                <FooterResourcesItem title="Términos y Condiciones" link="#" />
            </ul>
        </div>
    );
}

export default FooterResources;