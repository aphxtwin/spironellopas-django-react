import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePersonalData } from '../redux/actions/formActions';

const usePersonalDForm = (initialState) => {
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    dispatch(updatePersonalData( formData ));
  }, [formData, dispatch]);

  return [formData, handleChange]
};

export default usePersonalDForm;
