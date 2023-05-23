import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProductData } from '../redux/actions/formActions';
import { useSelector } from "react-redux";
const useProductForm = (initialState, productName) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.form.formData && state.form.formData.productData[productName] || initialState);

  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    dispatch(updateProductData({ productName, formData }));
  }, [formData, dispatch, productName]);

  return [formData, handleChange];
};

export default useProductForm