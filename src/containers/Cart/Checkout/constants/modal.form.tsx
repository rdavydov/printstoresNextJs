import React from "react";
import { Title } from "src/components/common";
import { showModal } from "src/utils";

export const showSuccessNoticy = (orderID, onOk, onCancel) => {
  showModal({
    title: "Ваш заказ успешно создан",
    content: (
      <div>
        <div>
          <Title level="h5">
            Номер вашего заказа: <b>{orderID}</b>
          </Title>
        </div>
        <div>В течении 2х часов с вами свяжется наш оператор</div>
      </div>
    ),
    onOk,
    onCancel,
  });
};
