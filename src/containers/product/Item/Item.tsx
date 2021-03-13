import { Col, notification, Row } from "antd";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Title, Button } from "src/components/common";
import { addCartProduct } from "src/store/reducers/cart/products/products.reducer";
import {
  ProductItemActionsWrapper,
  ProductItemImage,
  ProductItemOldPrice,
  ProductItemPrice,
  ProductItemPriceContent,
} from "./styled";

import styles from "./Item.module.scss";

const ORDER_NOW_TEXT = "Добавить в корзину";
const DESCRIPTION_TEXT = "Описание";
const DETAILS = "Правила ухода";
const DELIVERY_AND_PAY = "Доставка и оплата";
const GO_TO_CARD = "Перейти в корзину";

interface Props {
  product_id: string | number;
  preview: string;
  title: string;
  price: number;
  quantity: number;
  old_price: number;
}

const ProductItem = ({ old_price, preview, price, product_id, quantity, title }: Props) => {
  const { push } = useRouter();

  const [state, setState] = useState({
    productAdded: false,
  });

  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(
      addCartProduct({
        id: product_id,
        preview,
        title,
        price,
        quantity: 1,
        old_price,
      })
    );
    setState({ productAdded: true });
    notification.success({
      message: "Товар добавлен в корзину",
      placement: "bottomRight",
    });
  };

  const goCard = () => {
    push("/cart");
  };

  const { onClick, text } = useMemo(
    () => ({
      onClick: state.productAdded ? goCard : addProduct,
      text: state.productAdded ? GO_TO_CARD : ORDER_NOW_TEXT,
    }),
    [state.productAdded]
  );

  return (
    <Row style={{ marginBottom: 50 }}>
      <Col span={12}>
        <ProductItemImage src={preview} />
      </Col>
      <Col span={12}>
        <Title>{title}</Title>
        <ProductItemPriceContent>
          <ProductItemPrice>{`${price}Р`}</ProductItemPrice>
          {old_price && <ProductItemOldPrice>{`${old_price}Р`}</ProductItemOldPrice>}
        </ProductItemPriceContent>
        <ProductItemActionsWrapper>
          <Button className={styles.button} variant={state.productAdded ? "default" : "danger"} onClick={onClick}>
            {text}
          </Button>
        </ProductItemActionsWrapper>
      </Col>
    </Row>
  );
};

export default ProductItem;
