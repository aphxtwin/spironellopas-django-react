import React, { useState, useEffect } from "react";
import InsuranceCard from "./InsuranceCard/InsuranceCard";
import style from "./ProductSelect.module.css";
import LoadingSpinner from "../../../Common/LoadingSpinner/LoadingSpinner";
import useFetchProducts from "../../../../hooks/useFetchProducts";
import { useDispatch, useSelector } from "react-redux";
import { addProductData, removeProductData } from "../../../../redux/actions/formActions";

const ProductSelect = ({ onFormValidation, onProductSelection }) => {
  
  // Get server URL
  const djangoServerURL = import.meta.env.VITE_DJANGO_SERVER_URL;

  const selectedProducts = useSelector((state) => state.form.selectedProducts);
  
  const dispatch = useDispatch()

  const {data:InsuranceProducts, isLoading} = useFetchProducts(djangoServerURL)


  // Call form validation and product selection functions when selected products change
  useEffect(() => {
    onFormValidation(selectedProducts.length > 0);
    onProductSelection(selectedProducts);
  }, [selectedProducts, onFormValidation, onProductSelection]);

  // Handle card selection
  const handleCardSelection = (productTitle, isSelected) => {
    const formatTitle = productTitle.replace(/ /g , "_" )
    if (isSelected) {
      // Add the product title to the selected products array
      dispatch(addProductData(formatTitle))
    } else {
      // Remove the product title from the selected products array
      dispatch(removeProductData(formatTitle))
    }
  };

  return (
    <div className={style.ProductForm}>
        <div className={isLoading ? style.Loading : style.ProductSelect}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          InsuranceProducts.map((product) => (
            <div key={product.id}>
              <InsuranceCard
                title={product.title.toUpperCase()}
                image={`${djangoServerURL}${product.image_field}`}
                isSelected={selectedProducts.includes(product.title.replace(/ /g, "_"))}
                onCheck={(isSelected) =>
                  handleCardSelection(product.title, isSelected)
                }
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductSelect;
