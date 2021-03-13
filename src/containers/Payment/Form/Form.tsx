import React from "react";

import styles from "./Form.module.scss";

const receiver = 410012359955842;

const PaymentForm = ({ orderID, sum }) => {
  const formcomment = `Оплата заказа №${orderID} в интернет магазине PrintStores.ru`;
  return (
    <form method="POST" action="https://yoomoney.ru/quickpay/confirm.xml">
      <input type="hidden" name="receiver" value={receiver} />
      <input type="hidden" name="formcomment" value={formcomment} />
      <input type="hidden" name="short-dest" value={formcomment} />
      <input type="hidden" name="label" value={orderID} />
      <input type="hidden" name="quickpay-form" value="shop" />
      <input type="hidden" name="targets" value={`PrintStores.ru: Оплата заказа №${orderID}`} />
      <input type="hidden" name="sum" value={sum} />
      <input type="hidden" name="paymentType" value="AC" />
      <input className={styles.buttonStyle} type="submit" value="Оплатить заказ" />
    </form>
  );
};

export default PaymentForm;
