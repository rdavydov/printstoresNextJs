import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { InfoBlock } from "src/components/common";
import { CartCheckoutHeader, CartCheckoutSidebar } from "src/containers/Cart/Checkout";
import CartCheckoutForm from "src/containers/Cart/Checkout/Form/Form";
import { CartCheckoutContent, CartCheckoutTitle, CartCheckoutWrapper } from "src/containers/Cart/Checkout/styled";
import { RootState } from "src/store/rootReducer";
import CartCheckotLayout from "src/templates/Cart/Checkout/Checkout";

const CartCheckout = () => {
  const { products } = useSelector((state: RootState) => state.cart.products);
  const { push } = useRouter();

  if (!products.length) {
    push("/");
    return null;
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
