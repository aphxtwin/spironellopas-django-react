import { React,useState,useEffect } from "react";

const ProductList = ( { className, Showdescription=false, ShowImg=false, Link=false } ) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/cotizacion/")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }, []);
    return (
        <div className ={ className }>
        {products.map((product) => (
            <a href={Link && product.link}> 
                <div className="product-card" key={product.id}>
                    {ShowImg && <img src={product.image_field} alt={product.title} />}
                    <p>{product.title}</p>
                    {Showdescription && <p>{product.description}</p>}
                </div>
            </a>
        ))}
        </div>
    );
}
export default ProductList;

