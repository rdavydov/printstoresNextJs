import { Form } from "antd";
import React, { Fragment } from "react";
import { FormActions, PreviewCartInfo } from "../styled";
import ContactStep from "./Contacts/ContactStep";
import DeliveryStep from "./Delivery/DeliveryStep";
import PaymentStep from "./Payment/PaymentStep";
import StepsNavigation from "./StepsNavigation/StepsNavigation";
import CustomButton from "reusable-components/Button/CustomButton";
import styles from "./StepsContainer.module.scss";
import { getStepsFormConfig } from "./config/getStepsFormConfig";
import { StepState } from "./interface/step.interfaces";

interface IProps {
    step: number;
    stepState: StepState;
    nextStep: (formValue) => void;
    prevStep: () => void;
}

const LABEL = {
    BACK: "Назад",
    GO: "Далее",
};

const StepsContainer: React.FC<IProps> = ({
    step,
    stepState: { contacts, delivery, payments },
    nextStep,
    prevStep,
}) => {
    const config = getStepsFormConfig(step);
    const onFinish = (value) => {
        nextStep(value);
    };

    const getNextStep = () => {
        switch (step) {
            case 1: {
                return <ContactStep {...contacts} />;
            }
            case 2: {
                return <DeliveryStep {...delivery} />;
            }
            case 3: {
                return <PaymentStep {...payments} />;
            }
            default: {
                return <ContactStep {...contacts} />;
            }
        }
    };

    return (
        <PreviewCartInfo>
            <StepsNavigation step={step} />
            <Form
                {...config}
                name="nest-messages"
                onFinish={onFinish}
                className={styles.form}
            >
                {getNextStep()}
                <Form.Item>
                    <FormActions>
                        <CustomButton hovered="white" onClick={prevStep}>
                            {LABEL.BACK}
                        </CustomButton>
                        <CustomButton type="submit">{LABEL.GO}</CustomButton>
                    </FormActions>
                </Form.Item>
            </Form>
        </PreviewCartInfo>
    );
};

export default StepsContainer;
