import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProductData } from '../redux/actions/formActions';

const useProductForm = (initialState, productName) => {
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch()

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => {
        const updatedFormData = { ...prevFormData, [name]: value };
        dispatch(updateProductData({productName,formData:updatedFormData}));
        
        return updatedFormData;
      });
    };

    return [formData, handleChange]

};

export default useProductForm