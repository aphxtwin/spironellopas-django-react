import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePersonalData } from '../redux/actions/formActions';

const usePersonalDForm = (initialState) => {
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => {
          const updatedFormData = { ...prevFormData, [name]: value };
          dispatch(updatePersonalData(updatedFormData));

          return updatedFormData;
        });
    };

    return [formData, handleChange]

};

export default usePersonalDForm