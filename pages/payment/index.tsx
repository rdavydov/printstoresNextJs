import React from "react";
import { orderService } from "src/api/services/order/order.service";
import PaymentYandexPage from "src/containers/Payment";

const Payment = (props) => {
  return <PaymentYandexPage {...props} />;
};

export async function getServerSideProps({ query }) {
  const response = await orderService.getOrder(query.orderID);

  return {
    props: response,
  };
}

export default Payment;
