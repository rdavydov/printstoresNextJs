import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, InfoBlock } from "src/components/common";
import { Box, Flex, Hidden } from "src/components/ui";
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
          flexWrap="nowrap"
          lg={{ flexWrap: "wrap", flexDirection: "column" }}
          sm={{ maxWidth: "90%" }}
        >
          <Flex
            flexDirection="column"
            flex="0 0 65%"
            mr={40}
            maxWidth="100%"
            sm={{ span: 12, mr: 0 }}
            lg={{ span: 6, mr: 0 }}
            span={8}
          >
            <CartCheckoutHeader />
            <CartCheckoutTitle>Оформление заказа</CartCheckoutTitle>
            <CartCheckoutForm />
          </Flex>
          <CartCheckoutSidebar />
        </Flex>
        <Container mb={25} maxWidth="70%" margin="0 auto" padding="0px">
          <Box md={{ display: "none" }}>
            <InfoBlock noMargin />
          </Box>
        </Container>
      </CartCheckotLayout>
    </>
  );
};

export default CartCheckout;
