import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/rootReducer";
import CartProductCalculator from "./Calculator/Calculator";
import CartProductEmpty from "./Empty/Empty";
import CartProductList from "./List/List";

import styles from "./product.module.scss";

const CartProduct = () => {
  const { product } = useSelector((state: RootState) => state.cart);

  if (!product.length) return <CartProductEmpty />;

  return (
    <div className={styles.wrapper}>
      <CartProductList product={product} />
      <CartProductCalculator />
    </div>
  );
};

export default CartProduct;
