import React, { useState } from 'react';
import replaceDate from 'utils/replaceDate';
import CartPreview from './CartInfo/CartPreview';
import { FormValues } from './Steps/interface/step.interfaces';
import StepsContainer from './Steps/StepsContainer';
import { PreviewCartWrapper } from './styled';

const MAX_STEP = 3;
const START_STEP = 1;

const PreviewContentContainer = () => {
  const [state, setState] = useState({
    step: START_STEP,
    delivery: {
      method: 'Самовывоз',
      city: 'Ростов-На-Дону',
      address: '',
      date: '',
      time: '',
    },
    contacts: {
      phone: '',
      firstName: '',
      email: '',
      social: '',
      message: '',
      prefix: '7',
    },
    payments: {
      method: 'Картой онлайн',
    },
  });

  const nextStep = (formValues: FormValues) => {
    if (formValues?.delivery?.date) {
      formValues.delivery.date = replaceDate(formValues.delivery.date);
    }
    setState((prev) => ({
      ...prev,
      ...formValues,
      step: prev.step === MAX_STEP ? prev.step : prev.step + 1,
    }));
  };

  const prevStep = () => {
    setState((prev) => ({
      ...prev,
      step: prev.step === START_STEP ? prev.step : prev.step - 1,
    }));
  };

  const onDeliveryChange = (value: string) => {
    setState((prev) => ({
      ...prev,
      delivery: { ...state.delivery, method: value },
    }));
  };

  return (
    <PreviewCartWrapper>
      <StepsContainer
        step={state.step}
        nextStep={nextStep}
        prevStep={prevStep}
        onDeliveryChange={onDeliveryChange}
      />
      <CartPreview deliveryMethod={state.delivery.method} />
    </PreviewCartWrapper>
  );
};

export default PreviewContentContainer;
