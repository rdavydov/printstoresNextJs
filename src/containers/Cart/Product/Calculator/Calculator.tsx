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

const CartProductCalculator = () => {
  const { order_summary, product_discount, product_summary } = useSelector(
    (state: RootState) => state.cart.products
  );
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
          <CalculatorProductPrice>{product_summary}руб.</CalculatorProductPrice>
        </CalculatorProductInfo>
        <CalculatorProductInfo>
          <CalculatorProductText>
            <b>Скидка на товары</b>
          </CalculatorProductText>
          <CalculatorProductDiscount>
            {" "}
            {product_discount ? "-" + product_discount : 0}руб.
          </CalculatorProductDiscount>
        </CalculatorProductInfo>
      </CalculatorBody>
      <CalculatorFooter>
        <CalculatorProductInfo>
          <CalculatorProductText>
            <b>Итого</b>
          </CalculatorProductText>
          <CalculatorProductPrice>{order_summary}руб.</CalculatorProductPrice>
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
