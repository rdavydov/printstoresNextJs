import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import { Container, InfoBlock, Title } from "src/components/common";
import {
  CartCheckoutHeader,
  CartCheckoutSidebar,
} from "src/containers/Cart/Checkout";
import CartCheckoutForm from "src/containers/Cart/Checkout/Form/Form";
import {
  CartCheckoutContent,
  CartCheckoutTitle,
  CartCheckoutWrapper,
} from "src/containers/Cart/Checkout/styled";
import CartProductEmpty from "src/containers/Cart/Product/Empty/Empty";
import { RootState } from "src/store/rootReducer";
import CartCheckotLayout from "src/templates/Cart/Checkout/Checkout";

import styles from "../../../styles/pages/cart/checkout/checkout.module.scss";

const CartCheckout = () => {
  const { products } = useSelector((state: RootState) => state.cart.products);
  const { checkout } = useSelector((state: RootState) => state.cart);

  if (!products.length) {
    return (
      <CartCheckotLayout>
        <Container>
          <CartProductEmpty />
          <InfoBlock />
        </Container>
      </CartCheckotLayout>
    );
  }

  return (
    <>
      <CartCheckotLayout>
        <CartCheckoutWrapper>
          <CartCheckoutContent>
            <CartCheckoutHeader />
            <CartCheckoutTitle>Оформление заказа</CartCheckoutTitle>
            <CartCheckoutForm />
            <InfoBlock noMargin />
          </CartCheckoutContent>
          <CartCheckoutSidebar />
        </CartCheckoutWrapper>
      </CartCheckotLayout>
    </>
  );
};

export default CartCheckout;
