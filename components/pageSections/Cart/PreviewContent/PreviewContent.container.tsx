import React, { useState } from "react";
import CartPreview from "./CartInfo/CartPreview";
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
            lastName: "",
            email: "",
            social: "",
        },
        payments: {
            method: "Картой онлайн",
        },
    });

    return (
        <PreviewCartWrapper>
            <StepsContainer step={step} />
            <CartPreview />
        </PreviewCartWrapper>
    );
};

export default PreviewContentContainer;
