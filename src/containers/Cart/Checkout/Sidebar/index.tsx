import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/rootReducer";

import { Button, Input } from "antd";
import { CartCheckoutSidebarProps } from "src/types/containers/Cart/Checkout";
import CartCheckoutSidebarList from "./List/List";
import {
  CartCheckoutSidebarActions,
  CartCheckoutSidebarBody,
  CartCheckoutSidebarContent,
  CartCheckoutSidebarDiscountText,
  CartCheckoutSidebarFooter,
  CartCheckoutSidebarGroup,
  CartCheckoutSidebarHeader,
  CartCheckoutSidebarOrderInfo,
  CartCheckoutSidebarPriceText,
  CartCheckoutSidebarPromocodeWrapper,
  CartCheckoutSidebarSummary,
  CartCheckoutSidebarSummaryInfo,
  CartCheckoutSidebarText,
  CartCheckoutSidebarTitle,
  CartCheckoutSidebarWrapper,
} from "./styled";

const CartCheckoutSidebar: React.FC<CartCheckoutSidebarProps> = () => {
  const {
    products,
    order_summary,
    product_discount,
    product_summary,
    promocode,
  } = useSelector((state: RootState) => state.cart.products);

  return (
    <CartCheckoutSidebarWrapper>
      <CartCheckoutSidebarContent>
        <CartCheckoutSidebarHeader>
          <CartCheckoutSidebarTitle>
            <b>Ваш заказ</b>
          </CartCheckoutSidebarTitle>
          <Link href="/cart">
            <a>Изменить</a>
          </Link>
        </CartCheckoutSidebarHeader>
        <CartCheckoutSidebarBody>
          <CartCheckoutSidebarList products={products} />
        </CartCheckoutSidebarBody>
        <CartCheckoutSidebarFooter>
          <CartCheckoutSidebarPromocodeWrapper>
            <Input.Search
              placeholder="Ввести промокод"
              enterButton="Применить"
            />
          </CartCheckoutSidebarPromocodeWrapper>
          <CartCheckoutSidebarOrderInfo>
            <CartCheckoutSidebarGroup>
              <CartCheckoutSidebarText>Товары</CartCheckoutSidebarText>
              <CartCheckoutSidebarPriceText>
                {product_summary}руб.
              </CartCheckoutSidebarPriceText>
            </CartCheckoutSidebarGroup>
            <CartCheckoutSidebarGroup>
              <CartCheckoutSidebarText>
                Скидка на товары
              </CartCheckoutSidebarText>
              <CartCheckoutSidebarDiscountText>
                -{product_discount}руб.
              </CartCheckoutSidebarDiscountText>
            </CartCheckoutSidebarGroup>
          </CartCheckoutSidebarOrderInfo>
          <CartCheckoutSidebarSummaryInfo>
            <CartCheckoutSidebarGroup>
              <CartCheckoutSidebarText>Итого</CartCheckoutSidebarText>
              <CartCheckoutSidebarSummary>
                {order_summary}руб.
              </CartCheckoutSidebarSummary>
            </CartCheckoutSidebarGroup>
          </CartCheckoutSidebarSummaryInfo>
          <CartCheckoutSidebarActions>
            <Button
              type="primary"
              size="large"
              form="checkout"
              htmlType="submit"
            >
              Оформить заказ
            </Button>
          </CartCheckoutSidebarActions>
        </CartCheckoutSidebarFooter>
      </CartCheckoutSidebarContent>
    </CartCheckoutSidebarWrapper>
  );
};

export default CartCheckoutSidebar;
