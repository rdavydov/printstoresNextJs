import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { InfoBlock } from "src/components/common";
import { Flex, Hidden } from "src/components/ui";
import { CartCheckoutHeader, CartCheckoutSidebar } from "src/containers/Cart/Checkout";
import CartCheckoutForm from "src/containers/Cart/Checkout/Form/Form";
import { CartCheckoutTitle } from "src/containers/Cart/Checkout/styled";
import { RootState } from "src/store/rootReducer";
import CartCheckotLayout from "src/templates/Cart/Checkout/Checkout";

const CartCheckout = () => {
  const { products } = useSelector((state: RootState) => state.cart.products);
  const { push } = useRouter();

  if (!products.length) {
    return null;
  }

  useEffect(() => {
    if (!products.length) {
      push("/");
    }
  }, []);

  return (
    <>
      <CartCheckotLayout>
        <Flex
          margin="0 auto 40px"
          justifyContent="space-between"
          maxWidth="70%"
          component="section"
          sm={{ maxWidth: "90%" }}
        >
          <Flex flexDirection="column" flex="0 0 65%" mr={40} maxWidth="100%" sm={{ span: 12, mr: 0 }} span={8}>
            <CartCheckoutHeader />
            <CartCheckoutTitle>Оформление заказа</CartCheckoutTitle>
            <CartCheckoutForm />
            <Hidden xs md sm>
              <InfoBlock noMargin />
            </Hidden>
          </Flex>
          <CartCheckoutSidebar />
        </Flex>
      </CartCheckotLayout>
    </>
  );
};

export default CartCheckout;
