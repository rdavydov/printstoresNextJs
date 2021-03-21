import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/rootReducer";

import { Button, Input } from "antd";
import { CartCheckoutSidebarProps } from "src/types/containers/Cart/Checkout";
import CartCheckoutSidebarList from "./List/List";
import { CartCheckoutSidebarOrderInfo } from "./styled";
import { CartCheckoutDeliveryMethods } from "../constants/checkout.form.constans";
import { Box, Flex, Typography } from "src/components/ui";
import { Price } from "src/components/common";

const CartCheckoutSidebar: React.FC<CartCheckoutSidebarProps> = () => {
  const { products, order_summary, product_discount, product_summary, promocode } = useSelector(
    (state: RootState) => state.cart.products
  );

  const { checkout } = useSelector((state: RootState) => state.cart);

  const deliveryPrice = CartCheckoutDeliveryMethods[checkout.delivery.method]?.value || 0;

  return (
    <Box backgroundColor="gray" sm={{ width: "100%" }}>
      <Box padding={30}>
        <Flex alignItems="baseline" mb={30}>
          <Typography fontWeight={600} component="span" mr={15}>
            Ваш заказ
          </Typography>
          <Link href="/cart">
            <a>Изменить</a>
          </Link>
        </Flex>
        <Box>
          <CartCheckoutSidebarList products={products} />
        </Box>
        <Box>
          <Box mb={30}>
            <Input.Search placeholder="Ввести промокод" enterButton="Применить" />
          </Box>
          <CartCheckoutSidebarOrderInfo>
            <Flex justifyContent="space-between">
              <Typography fontWeight={600} component="span">
                Товары
              </Typography>
              <Price>{product_summary}руб.</Price>
            </Flex>
            <Flex justifyContent="space-between">
              <Typography fontWeight={600}>Скидка на товары</Typography>
              <Price discount bold>
                -{product_discount}руб.
              </Price>
            </Flex>
            {deliveryPrice > 0 && (
              <Flex justifyContent="space-between">
                <Typography fontWeight={600} component="span">
                  Стоимость доставки
                </Typography>
                <Price>{deliveryPrice}руб.</Price>
              </Flex>
            )}
          </CartCheckoutSidebarOrderInfo>
          <Box mb={30}>
            <Flex justifyContent="space-between">
              <Typography fontWeight={600} component="span">
                Итого
              </Typography>
              <Price size="large" bold>
                {order_summary + deliveryPrice}
                руб.
              </Price>
            </Flex>
          </Box>
          <Box textAlign="center">
            <Button type="primary" size="large" form="checkout" htmlType="submit">
              Оформить заказ
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartCheckoutSidebar;
