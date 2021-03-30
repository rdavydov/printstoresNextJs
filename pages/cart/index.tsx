import React from "react";
import Layout from "src/templates/Layout/Layout";
import { Gallery, Title } from "src/components/common";
import { menuService } from "src/api/services/menu/menu.service";
import { useSelector } from "react-redux";
import { RootState } from "src/store/rootReducer";

import { CartProductEmpty, CartProductList, CartProductCalculator } from "src/containers/Cart/Product";
import { catalogService } from "src/api";
import { Box, Flex } from "src/components/ui";

const CartPage = ({ menu, recomennded }) => {
  const { products } = useSelector((state: RootState) => state.cart.products);

  if (!products.length) {
    return (
      <Layout menu={menu}>
        <Title>Корзина</Title>
        <section>
          <CartProductEmpty />
        </section>
      </Layout>
    );
  }

  return (
    <Layout menu={menu}>
      <Title mb={20} bold>
        Корзина
      </Title>
      <Flex mb={40} justifyContent="space-between">
        <CartProductList product={products} />
        <CartProductCalculator />
      </Flex>
      <Box>
        <Gallery title="Вас может заинтересовать" titleProps={{ bold: true }} products={recomennded} />
      </Box>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { menu } = await menuService.getPageMenu("catalog");
  const recomennded = await catalogService.filterProducts({ limit: 30, filterBy: "rating" });

  return {
    props: { menu, recomennded: recomennded.products },
  };
}

export default CartPage;
