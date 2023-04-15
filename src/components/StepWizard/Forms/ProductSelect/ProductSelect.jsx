import React, {useState,useEffect, useCallback} from "react";
import InsuranceCard from "./InsuranceCard/InsuranceCard";
import style from "./ProductSelect.module.css";
import LoadingSpinner from "../../../Common/LoadingSpinner/LoadingSpinner";

const ProductSelect = ({ onFormValidation, onProductSelection }) => {
    
    const [InsuranceProducts, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const djangoServerURL = import.meta.env.VITE_DJANGO_SERVER_URL;

    useEffect(() => {
        fetch(`${djangoServerURL}/api/cotizacion/`)
        .then((res) => res.json())
        .then((json) =>{
            setIsLoading(false);
            setProducts(json);
        });
    }, []);

    useEffect(() => {
        onFormValidation(selectedProducts.length > 0);
        onProductSelection(selectedProducts);
    }, [selectedProducts, onFormValidation, onProductSelection]);

    const handleCardSelection = (productTitle, isSelected) => {
        if (isSelected){
            setSelectedProducts((prevSelected) => [...prevSelected, productTitle]);
            onFormValidation(selectedProducts.length > 0);
        } else{
            setSelectedProducts((prevSelected) => prevSelected.filter((title) => title !== productTitle));
            onFormValidation(selectedProducts.length > 0);
        }
    }



    return (
        <>

            <div className={isLoading ? style.Loading : style.ProductSelect}>
                {
                    isLoading 
                        ? <LoadingSpinner /> 
                        : InsuranceProducts.map((product) => (
                            <div key={product.id}>
                                <InsuranceCard
                                    title={product.title.toUpperCase()}
                                    image={`${djangoServerURL}${product.image_field}`}
                                    onCheck={(isSelected) => handleCardSelection(product.title, isSelected)}
                                />
                            </div>
                        ))
                }
            </div>
        </>
    );
    
}

export default ProductSelect;