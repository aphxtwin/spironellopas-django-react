const initialState = {
    formData : {
        personalData : {},
        productData: []
    }
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_PRODUCT_DATA":
            return {
                ...state,
                formData: {
                    ...state.formData,
                    productData: [...state.formData.productData, action.payload],
                },
            };
        case "UPDATE_PERSONAL_DATA":
            return {
                ...state,
                formData: {
                    ...state.formData,
                    personalData: action.payload,
                },
            };
        default:
            return state
    }
}

export default formReducer