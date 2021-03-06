import React from "react";
import Layout from "src/templates/Layout/Layout";
import { Breadcrumbs, Title } from "src/components/common";
import { CartProduct } from "src/containers/Cart";
import { menuService } from "src/api/services/menu/menu.service";
const CartPage = ({ menu }) => (
  <Layout menu={menu}>
    <Title>Корзина</Title>
    <Breadcrumbs crumbs={menu} />
    <section>
      <CartProduct />
    </section>
  </Layout>
);

export async function getServerSideProps() {
  const { menu } = await menuService.getPageMenu("catalog");

  return {
    props: { menu },
  };
}

export default CartPage;
