import React from "react";
import CartInfoContainer from "./CartInfoContainer";

const CartPreview = ({ deliveryMethod }) => {
    return <CartInfoContainer deliveryMethod={deliveryMethod} />;
};

export default CartPreview;
