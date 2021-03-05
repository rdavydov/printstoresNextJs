import React, { Fragment } from "react";
import Layout from "src/templates/Layout/Layout";
import { Breadcrumbs } from "src/components/common";
import { BasketPageHeader, CartForm } from "src/containers/BasketPage";
import { menuService } from "src/api/services/menu/menu.service";

const CartPage = ({ menu }) => (
  <Layout menu={menu}>
    <BasketPageHeader />
    <Breadcrumbs crumbs={menu} />
    <CartForm />
  </Layout>
);

export async function getServerSideProps() {
  const { menu } = await menuService.getPageMenu("catalog");

  return {
    props: { menu },
  };
}

export default CartPage;
