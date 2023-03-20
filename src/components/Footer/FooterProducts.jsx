import React from "react";
import "./Footer.css";
import ProductList from "../Lists/ProductList";

const FooterProducts = () => {
    return (
        <div className="footer-products">
            <h3>Products</h3>
            <ProductList className={'footer-product-list'} />
        </div>
    );
};

export default FooterProducts;