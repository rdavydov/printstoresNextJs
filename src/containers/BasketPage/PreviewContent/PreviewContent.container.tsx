import React, { useState } from "react";
import CartPreview from "./CartInfo/CartPreview";
import StepsContainer from "./Steps/StepsContainer";

import { Form } from "antd";
import { PreviewCartWrapper } from "./styled";
import { getSendValue } from "./utils/cart.send.utils";
import { orderService } from "src/api/services/order/order.service";
import { sendData } from "next/dist/next-server/server/api-utils";
import { paymentService } from "src/api/services/payment.service";
import { useRouter } from "next/router";

const PreviewContentContainer = () => {
  const [form] = Form.useForm();

  const { push } = useRouter();

  const [state, setState] = useState({
    delivery_method: "Самовывоз",
    delivery_city: "Ростов-На-Дону",
    delivery_address: "",
    delivery_date: "",
    delivery_time: "",
    phone: "",
    clientName: "",
    email: "",
    social: "",
    message: "",
    prefix: "7",
    payment_method: "online",
  });

  const updateState = (val) => {
    setState((prev) => ({ ...prev, ...val }));
  };

  const createOrder = async () => {
    const sendData = getSendValue(form.getFieldsValue(true));
    const { orderID } = await orderService.createOrder(sendData);
    push({ pathname: "/payment", query: { orderID } });
  };

  return (
    <Form form={form}>
      <PreviewCartWrapper>
        <StepsContainer updateState={updateState} createOrder={createOrder} form={form} />
        <CartPreview deliveryMethod={state.delivery_method} form={form} />
      </PreviewCartWrapper>
    </Form>
  );
};

export default PreviewContentContainer;
