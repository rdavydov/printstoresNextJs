import React from "react";
import { CartCheckoutSidebarListItemProps } from "src/types/containers/Cart/Checkout";
import {
  CartCheckoutSidebarListItemImage,
  CartCheckoutSidebarListItemInfo,
  CartCheckoutSidebarListItemOldPrice,
  CartCheckoutSidebarListItemPrice,
  CartCheckoutSidebarListItemPriceInfo,
  CartCheckoutSidebarListItemQuantity,
  CartCheckoutSidebarListItemTitle,
  CartCheckoutSidebarListItemWrapper,
} from "./styled";

const CartCheckoutSidebarListItem: React.FC<CartCheckoutSidebarListItemProps> = ({
  id,
  old_price,
  preview,
  price,
  quantity,
  title,
}) => {
  return (
    <CartCheckoutSidebarListItemWrapper>
      <CartCheckoutSidebarListItemImage src={preview} />
      <CartCheckoutSidebarListItemInfo>
        <CartCheckoutSidebarListItemTitle>
          <b>{title}</b>
        </CartCheckoutSidebarListItemTitle>
      </CartCheckoutSidebarListItemInfo>
      <CartCheckoutSidebarListItemPriceInfo>
        <CartCheckoutSidebarListItemPrice>
          <b>{price}руб.</b>
        </CartCheckoutSidebarListItemPrice>
        <CartCheckoutSidebarListItemOldPrice>
          {old_price}руб.
        </CartCheckoutSidebarListItemOldPrice>
        <CartCheckoutSidebarListItemQuantity>
          <b>{quantity} шт</b>
        </CartCheckoutSidebarListItemQuantity>
      </CartCheckoutSidebarListItemPriceInfo>
    </CartCheckoutSidebarListItemWrapper>
  );
};

export default CartCheckoutSidebarListItem;
