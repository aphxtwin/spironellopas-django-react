export const updatePersonalData = (data) => ({
    type: "UPDATE_PERSONAL_DATA",
    payload: data,
});

export const updateProductData = (data) => ({
    type: "UPDATE_PRODUCT_DATA",
    payload: data,
});

export const resetProductData = (data) => ({
    type: "RESET_FORM_DATA",
    payload: data,
});

export const addProductData = (productName)=>({
    type:"ADD_PRODUCT_DATA",
    payload:productName,
})

export const removeProductData = (productName)=>({
    type:"REMOVE_PRODUCT_DATA",
    payload:productName,
})
