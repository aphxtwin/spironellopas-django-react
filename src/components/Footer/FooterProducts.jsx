import React from "react";
import "./Footer.css";
import ProductList from "../Lists/ProductList";

const FooterProducts = () => {
    return (
        <div className="footer-products">
            <h3>Productos</h3>
            <ProductList className={'footer-product-list'} useLink={true}/>
        </div>
    );
};

export default FooterProducts;