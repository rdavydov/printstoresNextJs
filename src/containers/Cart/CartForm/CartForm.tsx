import React, { useState } from "react";
import StepsContainer from "./Steps/StepsContainer";

import { Form } from "antd";
import { PreviewCartWrapper } from "./styled";
import { getSendValue } from "./utils/cart.send.utils";
import { orderService } from "src/api/services/order/order.service";
import { useRouter } from "next/router";

const CartForm = () => {
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
        <StepsContainer
          updateState={updateState}
          createOrder={createOrder}
          form={form}
        />
      </PreviewCartWrapper>
    </Form>
  );
};

export default CartForm;
