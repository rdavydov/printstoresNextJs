import { Form } from "antd";
import React, { useState } from "react";
import { Button } from "src/components/common";
import { FormActions, PreviewCartInfo } from "../styled";
import ContactStep from "./Contacts/ContactStep";
import DeliveryStep from "./Delivery/DeliveryStep";
import PaymentStep from "./Payment/PaymentStep";
import StepsNavigation from "./StepsNavigation/StepsNavigation";
import styles from "./StepsContainer.module.scss";
import { getStepsFormConfig } from "./config/getStepsFormConfig";
import replaceDate from "src/utils/replaceDate";
import { FormValues } from "./interface/step.interfaces";
import { FormInstance } from "antd/lib/form";

const MAX_STEP = 3;
const START_STEP = 1;

const LABEL = {
  BACK: "Назад",
  GO: "Далее",
};

interface IProps {
  updateState: (val) => void;
  createOrder: () => void;
  form: FormInstance;
}

const StepsContainer: React.FC<IProps> = ({ updateState, createOrder, form }) => {
  const [step, setStep] = useState(START_STEP);

  const config = getStepsFormConfig(step);

  const nextStep = async () => {
    const formVal = await form.validateFields();

    if (formVal?.delivery?.date) {
      formVal.delivery.date = replaceDate(formVal.delivery.date);
    }
    updateState(formVal);
    setStep((step) => (step === MAX_STEP ? step : step + 1));

    if (step === MAX_STEP) {
      createOrder();
    }
  };

  const prevStep = () => {
    setStep((step) => (step === START_STEP ? step : step - 1));
  };

  const onDeliveryChange = () => {
    updateState(form.getFieldsValue());
  };

  const getFieldValue = (value: string[]) => form.getFieldValue(value);

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
      <Form {...config} name="nest-messages" className={styles.form} form={form}>
        {getNextStep()}
        <Form.Item>
          <FormActions>
            <Button onClick={prevStep}>{LABEL.BACK}</Button>
            <Button onClick={nextStep}>{step === 3 ? "Оформить заказ" : LABEL.GO}</Button>
          </FormActions>
        </Form.Item>
      </Form>
    </PreviewCartInfo>
  );
};

export default StepsContainer;
