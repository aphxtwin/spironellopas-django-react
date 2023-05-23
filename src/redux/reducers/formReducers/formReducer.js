const initialState = {
    formData : {
        personalData : {},
        productData: {},
    },
    selectedProducts: [],
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_PRODUCT_DATA":
            return {
                ...state,
                formData: {
                    ...state.formData,
                    productData: {
                        ...state.formData.productData,
                        [action.payload.productName]: action.payload.formData
                    }
                }
        };
        case "ADD_PRODUCT_DATA":
            return {
                ...state,
                selectedProducts: [...state.selectedProducts,action.payload]
            };
        case "REMOVE_PRODUCT_DATA":
            return {
                ...state,
                selectedProducts: state.selectedProducts.filter(
                    (productName) => productName !== action.payload
                ),
            };
        case "UPDATE_PERSONAL_DATA":
            return {
                ...state,
                formData: {
                    ...state.formData,
                    personalData: action.payload,
                },
            };
        case "RESET_FORM_DATA":
            return initialState
        default:
            return state
    }
}

export default formReducer