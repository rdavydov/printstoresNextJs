import React from "react";

import { Steps } from "antd";

const { Step } = Steps;

interface IProps {
    step: number;
}

const CONTACT = "Контакты";
const DELIVERY = "Доставка";
const PAYMENT = "Оплата";

const StepsNavigation: React.FC<IProps> = ({ step = 1 }) => {
    return (
        <Steps current={step - 1}>
            <Step title={CONTACT} />
            <Step title={DELIVERY} />
            <Step title={PAYMENT} />
        </Steps>
    );
};

export default StepsNavigation;
