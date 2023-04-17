import React, { useState, useEffect } from "react";
import InsuranceCard from "./InsuranceCard/InsuranceCard";
import style from "./ProductSelect.module.css";
import LoadingSpinner from "../../../Common/LoadingSpinner/LoadingSpinner";

const ProductSelect = ({ onFormValidation, onProductSelection }) => {
  // Declare state variables
  const [InsuranceProducts, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get server URL
  const djangoServerURL = import.meta.env.VITE_DJANGO_SERVER_URL;

  // Fetch insurance products and set state
  useEffect(() => {
    fetch(`${djangoServerURL}/api/cotizacion/`)
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setProducts(json);
      });
  }, []);

  // Call form validation and product selection functions when selected products change
  useEffect(() => {
    onFormValidation(selectedProducts.length > 0);
    onProductSelection(selectedProducts);
  }, [selectedProducts, onFormValidation, onProductSelection]);

  // Handle card selection
  const handleCardSelection = (productTitle, isSelected) => {
    if (isSelected) {
      // Add the product title to the selected products array
      setSelectedProducts((prevSelected) => [...prevSelected, productTitle]);
    } else {
      // Remove the product title from the selected products array
      setSelectedProducts((prevSelected) =>
        prevSelected.filter((title) => title !== productTitle)
      );
    }
  };

  return (
    <>

        <div className={isLoading ? style.Loading : style.ProductSelect}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          InsuranceProducts.map((product) => (
            <div key={product.id}>
              <InsuranceCard
                title={product.title.toUpperCase()}
                image={`${djangoServerURL}${product.image_field}`}
                onCheck={(isSelected) =>
                  handleCardSelection(product.title, isSelected)
                }
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ProductSelect;
