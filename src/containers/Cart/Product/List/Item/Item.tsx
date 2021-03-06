import React from "react";
import { Button } from "antd";
import { QuantityButton, Title } from "src/components/common";

import styles from "./item.module.scss";
import { DeleteOutlined, HeartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  deleteCartProduct,
  incrementCartProduct,
  decrementCartProduct,
} from "src/store/reducers/cardReducer/actionCreators/cardActionCreators";

interface IProps {
  preview: string;
  quantity: number;
  title: string;
  id: string | number;
  price: number;
}

const CartProductListItem: React.FC<IProps> = ({
  preview,
  quantity,
  title,
  price,
  id,
}) => {
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
    <div className={styles.cartItemWrapper}>
      <img className={styles.cartImage} src={preview} />
      <div className={styles.cartItemActions}>
        <Title level="h4">{title}</Title>
        <Button.Group className={styles.buttonGroup}>
          <Button type="default" icon={<HeartOutlined />}>
            В избранное
          </Button>
          <Button danger icon={<DeleteOutlined />} onClick={deleteProduct}>
            Удалить товар
          </Button>
        </Button.Group>
      </div>
      <div>
        <div className={styles.cartItemPrice}>
          <span>{price}р</span>
        </div>
        <QuantityButton
          quantity={quantity}
          onIncrement={incrementQuantity}
          onDecrement={decrementQuantity}
        />
      </div>
    </div>
  );
};

export default CartProductListItem;
