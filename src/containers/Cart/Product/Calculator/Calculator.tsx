import React from "react";

import { Button, Input } from "antd";
import {
  CalculatorActions,
  CalculatorBody,
  CalculatorFooter,
  CalculatorHeader,
  CalculatorProductDiscount,
  CalculatorProductInfo,
  CalculatorProductPrice,
  CalculatorProductText,
  CalculatorWrapper,
} from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "src/store/rootReducer";
import Link from "next/link";
import { Price } from "src/components/common";

const CartProductCalculator = () => {
  const { order_summary, product_discount, product_summary } = useSelector((state: RootState) => state.cart.products);
  return (
    <CalculatorWrapper>
      <CalculatorHeader>
        <Input.Search placeholder="Введите промокод" enterButton="Применить" />
      </CalculatorHeader>
      <CalculatorBody>
        <CalculatorProductInfo>
          <CalculatorProductText>
            <b>Товары</b>
          </CalculatorProductText>
          <Price>{product_summary}руб.</Price>
        </CalculatorProductInfo>
        <CalculatorProductInfo>
          <CalculatorProductText>
            <b>Скидка на товары</b>
          </CalculatorProductText>
          <Price discount> {product_discount ? "-" + product_discount : 0}руб.</Price>
        </CalculatorProductInfo>
      </CalculatorBody>
      <CalculatorFooter>
        <CalculatorProductInfo>
          <CalculatorProductText>
            <b>Итого</b>
          </CalculatorProductText>
          <Price size="large" bold>
            {order_summary}руб.
          </Price>
        </CalculatorProductInfo>
        <CalculatorActions>
          <Button size="large" type="primary">
            <Link href="/cart/checkout">
              <a>Оформить заказ</a>
            </Link>
          </Button>
        </CalculatorActions>
      </CalculatorFooter>
    </CalculatorWrapper>
  );
};

export default CartProductCalculator;
