import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/rootReducer";
import CartInfo from "./CartInfo";

const CartInfoContainer = ({ deliveryMethod, form }) => {
  const { product } = useSelector((state: RootState) => state.cart);

  return <CartInfo cart={product} deliveryMethod={deliveryMethod} form={form} />;
};

export default CartInfoContainer;
