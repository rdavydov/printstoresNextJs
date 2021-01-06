import React, { Fragment } from "react";
import { PreviewCartInfo } from "../styled";
import ContactStep from "./Contacts/ContactStep";
import DeliveryStep from "./Delivery/DeliveryStep";
import PaymentStep from "./Payment/PaymentStep";
import StepsNavigation from "./StepsNavigation/StepsNavigation";

interface IProps {
    step: number;
}

const StepsContainer = ({ step }) => {
    const getNextStep = () => {
        switch (step) {
            case 1: {
                return <ContactStep />;
            }
            case 2: {
                return <DeliveryStep />;
            }
            case 3: {
                return <PaymentStep />;
            }
            default: {
                return <ContactStep />;
            }
        }
    };

    return (
        <PreviewCartInfo>
            <StepsNavigation step={step} />
            {getNextStep()}
        </PreviewCartInfo>
    );
};

export default StepsContainer;
