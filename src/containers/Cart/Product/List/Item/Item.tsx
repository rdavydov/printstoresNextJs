import React from "react";
import { Button } from "antd";
import { Price, QuantityButton, Title } from "src/components/common";

import styles from "./item.module.scss";
import { DeleteOutlined, HeartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  deleteCartProduct,
  incrementCartProduct,
  decrementCartProduct,
} from "src/store/reducers/cart/products/products.reducer";
import { Flex } from "src/components/ui";

interface IProps {
  preview: string;
  quantity: number;
  title: string;
  id: string | number;
  price: number;
  old_price: number;
}

const CartProductListItem: React.FC<IProps> = ({ preview, quantity, title, price, id, old_price = 0 }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(deleteCartProduct(id));
  };

  const incrementQuantity = () => {
    dispatch(incrementCartProduct(id));
  };

  const decrementQuantity = () => {
    dispatch(decrementCartProduct(id));
  };

  return (
    <Flex mb={35} flexWrap="nowrap" sm={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <img className={styles.cartImage} src={preview} />
      <Flex.Item
        span={6}
        md={{ span: 4 }}
        margin="0 auto"
        borderRight="1px solid var(--border)"
        sm={{ borderRight: "none" }}
      >
        <Flex flexDirection="column" justifyContent="center" sm={{ textAlign: "center" }}>
          <Flex.Item span={12}>
            <Title level="h4" className={styles.mb}>
              <b>{title}</b>
            </Title>
          </Flex.Item>
          <Flex justifyContent="center" sm={{ alignItems: "center" }}>
            <Flex.Item span={6} md={{ span: 12, mb: 20 }}>
              <Button type="default" icon={<HeartOutlined />} style={{ width: 150 }}>
                В избранное
              </Button>
            </Flex.Item>
            <Flex.Item span={6} md={{ span: 12 }} sm={{ mb: 20 }}>
              <Button danger icon={<DeleteOutlined />} onClick={deleteProduct} style={{ width: 150 }}>
                Удалить товар
              </Button>
            </Flex.Item>
          </Flex>
        </Flex>
      </Flex.Item>
      <div>
        <div className={styles.cartItemPrice}>
          <Price mr={10} discount bold>
            {price}Р
          </Price>
          <Price lineThrough muted bold>
            {price + old_price}Р
          </Price>
        </div>
        <QuantityButton quantity={quantity} onIncrement={incrementQuantity} onDecrement={decrementQuantity} />
      </div>
    </Flex>
  );
};

export default CartProductListItem;
