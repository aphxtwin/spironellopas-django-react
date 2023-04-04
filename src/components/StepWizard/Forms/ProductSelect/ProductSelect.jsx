import React, {useState,useEffect} from "react";
import InsuranceCard from "./InsuranceCard/InsuranceCard";  
import style from "./ProductSelect.module.css";
import LoadingSpinner from "../../../Common/LoadingSpinner/LoadingSpinner";

const ProductSelect = () => {
    
    const [InsuranceProducts, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/cotizacion/")
        .then((res) => res.json())
        .then((json) =>{
            setIsLoading(false);
            setProducts(json);
        });
    }, []);
    const djangoServerURL = 'http://127.0.0.1:8000';
    return (
        <div className={isLoading ? style.Loading : style.ProductSelect}>
            {
                isLoading 
                    ? <LoadingSpinner /> 
                    : InsuranceProducts.map((product) => (
                        <div key={product.id}>
                            <InsuranceCard
                                title={product.title.toUpperCase()}
                                image={`${djangoServerURL}${product.image_field}`}
                            />
                        </div>
                    ))
            }
        </div>
    );
    
}

export default ProductSelect;