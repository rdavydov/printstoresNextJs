import { Form } from "antd";
import React from "react";
import { FormActions, PreviewCartInfo } from "../styled";
import ContactStep from "./Contacts/ContactStep";
import DeliveryStep from "./Delivery/DeliveryStep";
import PaymentStep from "./Payment/PaymentStep";
import StepsNavigation from "./StepsNavigation/StepsNavigation";
import CustomButton from "reusable-components/Button/CustomButton";
import styles from "./StepsContainer.module.scss";
import { getStepsFormConfig } from "./config/getStepsFormConfig";

interface IProps {
    step: number;
    onDeliveryChange: (value: string) => void;
    nextStep: (formValue) => void;
    prevStep: () => void;
}

const LABEL = {
    BACK: "Назад",
    GO: "Далее",
};

const StepsContainer: React.FC<IProps> = ({
    step,
    nextStep,
    prevStep,
    onDeliveryChange,
}) => {
    const [form] = Form.useForm();
    const config = getStepsFormConfig(step);

    const onFinish = (value) => {
        nextStep(value);
    };

    const getFieldValue = (value: string[]) => {
        return form.getFieldValue(value);
    };

    const getNextStep = () => {
        switch (step) {
            case 1: {
                return <ContactStep />;
            }
            case 2: {
                return (
                    <DeliveryStep
                        setFieldsValue={form.setFieldsValue}
                        getFieldValue={getFieldValue}
                        onDeliveryChange={onDeliveryChange}
                    />
                );
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
            <Form
                {...config}
                name="nest-messages"
                onFinish={onFinish}
                className={styles.form}
                form={form}
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