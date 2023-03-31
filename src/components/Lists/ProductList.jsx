import  React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = ( { className, Showdescription=false, ShowImg=false, useLink=false } ) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/cotizacion/")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }, []);
    return (
        <div className={className}>
            {products.map((product) => (
                <div key={product.id}>
                    {useLink ? (
                        <Link to={product.link ? `/${product.link}`: '/page-not-found'}>
                            <p>{product.title}</p>
                        </Link>
                    ) : (
                        <p>{product.title}</p>
                    )}
                    {ShowImg ? <img src={product.image_field} alt={product.title} /> : null}
                    {Showdescription ? <p>{product.description}</p> : null}
                </div>
            ))}
        </div>
    );
}
export default ProductList;

