import React from "react";
import Layout from "src/templates/Layout/Layout";
import { Breadcrumbs, Title } from "src/components/common";
import { menuService } from "src/api/services/menu/menu.service";
import { useSelector } from "react-redux";
import { RootState } from "src/store/rootReducer";

import styles from "../../styles/pages/cart/cart.module.scss";
import {
  CartProductEmpty,
  CartProductList,
  CartProductCalculator,
} from "src/containers/Cart/Product";

const CartPage = ({ menu }) => {
  const { products } = useSelector((state: RootState) => state.cart.products);

  if (!products.length) {
    return (
      <Layout menu={menu}>
        <Title>Корзина</Title>
        <Breadcrumbs crumbs={menu} />
        <section>
          <CartProductEmpty />
        </section>
      </Layout>
    );
  }

  return (
    <Layout menu={menu}>
      <Title>Корзина</Title>
      <Breadcrumbs crumbs={menu} />
      <section className={styles.wrapper}>
        <CartProductList product={products} />
        <CartProductCalculator />
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { menu } = await menuService.getPageMenu("catalog");

  return {
    props: { menu },
  };
}

export default CartPage;
