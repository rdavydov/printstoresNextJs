import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/rootReducer";
import CartInfo from "./CartInfo";

const CartInfoContainer = ({ deliveryMethod }) => {
    const cart = useSelector((state: RootState) => state.cart);

    return <CartInfo cart={cart} deliveryMethod={deliveryMethod} />;
};

export default CartInfoContainer;
