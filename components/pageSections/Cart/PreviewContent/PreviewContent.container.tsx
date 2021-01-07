import React, { useState } from "react";
import CartPreview from "./CartInfo/CartPreview";
import { FormValues } from "./Steps/interface/step.interfaces";
import StepsContainer from "./Steps/StepsContainer";
import { PreviewCartWrapper } from "./styled";

const PreviewContentContainer = () => {
    const [step, setStep] = useState(1);
    const [state, setState] = useState({
        delivery: {
            method: "Курьер",
            city: "Ростов-На-Дону",
            address: "",
            date: "",
            time: "",
        },
        contacts: {
            phone: "",
            firstName: "",
            email: "",
            social: "",
            message: "",
        },
        payments: {
            method: "Картой онлайн",
        },
    });

    const nextStep = ({ ...formValues }: FormValues) => {
        setStep((prev) => (prev === 3 ? prev : prev + 1));
        setState((prev) => ({ ...prev, ...formValues }));
    };

    const prevStep = () => {
        setStep((prev) => (prev === 1 ? prev : prev - 1));
    };

    console.log(state);

    return (
        <PreviewCartWrapper>
            <StepsContainer
                step={step}
                stepState={state}
                nextStep={nextStep}
                prevStep={prevStep}
            />
            <CartPreview />
        </PreviewCartWrapper>
    );
};

export default PreviewContentContainer;
