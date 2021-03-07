import React from "react";
import { CartCheckoutSidebarListProps } from "src/types/containers/Cart/Checkout";
import CartCheckoutSidebarListItem from "./Item/Item";
import { CartCheckoutListWrapper } from "./styled";

const CartCheckoutSidebarList: React.FC<CartCheckoutSidebarListProps> = ({
  products,
}) => {
  return (
    <CartCheckoutListWrapper>
      {products.map(({ id, ...rest }) => (
        <CartCheckoutSidebarListItem key={id} id={id} {...rest} />
      ))}
    </CartCheckoutListWrapper>
  );
};

export default CartCheckoutSidebarList;
