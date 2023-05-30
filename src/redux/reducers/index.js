import { combineReducers } from "redux";
import formReducer from "./formReducers/formReducer";
import formWizardSlice from "../slices/formWizardSlice";


const rootReducer = combineReducers({
    form: formReducer,
    formWizard: formWizardSlice,
});

  
export default rootReducer;