import React from "react";
import ProductSelect from "../Forms/ProductSelect/ProductSelect";
import FormCarInsurance from "../Forms/FormCarInsurance/FormCarInsurance";
import FormIntegralDeComercio from "../Forms/FormIntegralDeComercio/FormIntegralDeComercio";
import FormLifeInsurance from "../Forms/FormLifeInsurance/FormLifeInsurance";
import PersonalDataForm from "../Forms/PersonalDataForm/PersonalDataForm";
import SubmitForms from "../Forms/SubmitForms/SubmitForms";

const FormWizardContent = (
    {
        currentStep,
        currentProductIndex,
        selectedProducts,
        onFormValidation,
        onProductSelection
    }) => {
        switch (currentStep) {
            case 0:
                return <ProductSelect onFormValidation={onFormValidation} onProductSelection={onProductSelection} />;
            case 1:
                if (selectedProducts.length > 0) {
                    const currentProduct = selectedProducts[currentProductIndex];

                    switch (currentProduct) {
                        case "auto":
                            return <FormCarInsurance onFormValidation={onFormValidation} />;
                        case "vida":
                            return <FormLifeInsurance onFormValidation={onFormValidation} />;
                        case "Integral_de_comercio":
                            return <FormIntegralDeComercio onFormValidation={onFormValidation}/>;
                        default:
                            return null;
                    }
                }
            case 2:
                return <PersonalDataForm onFormValidation={onFormValidation} />;
            case 3:
                return <SubmitForms />;
            default:
        }
        return null;
};

export default FormWizardContent;
