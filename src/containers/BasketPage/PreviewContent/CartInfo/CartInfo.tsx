import React, { useEffect, useMemo, useState } from "react";
import { ICart } from "src/store/reducers/cardReducer/cardReducer";
import { CartBody, CartFooter, CartHeader, CartInfoOrder, CartWrapper, PreviewCartItems, Text } from "../styled";

import { Form } from "antd";

import CartItem from "./CartItem/CartItem";
import { FormInstance } from "antd/lib/form";

interface IProps {
  cart: ICart[];
  deliveryMethod: string;
  form: FormInstance;
}

const ORDER_TOTAL = "Количество товаров";
const SHIPPING = "Доставка";
const ORDER_PRICE = "Сумма заказа";
const EDIT = "Редактировать";
const SAVE = "Сохранить";
const COURIER_DELIVERY = {
  title: "Доставка курьером",
  time: "В течении 12 часов",
  price: 200,
};
const PICKUP = {
  title: "Самовывоз",
  time: "После 10.00 в любой день недели",
  price: "Бесплатно",
};

const getSum = (arr) => {
  return arr.reduce((sum: number, { price, quantity }: any) => sum + price * quantity, 0);
};

const getDeliveryPrice = (deliveryMethod) => {
  switch (deliveryMethod) {
    case COURIER_DELIVERY.title: {
      return `${COURIER_DELIVERY.price}Руб.`;
    }
    case PICKUP.title: {
      return PICKUP.price;
    }
    default: {
      return PICKUP.price;
    }
  }
};

type CartType = React.FC<IProps>;

const CartInfo: CartType = ({ cart, deliveryMethod, form }: IProps) => {
  const [editMode, setEditMode] = useState(false);

  const onEdit = () => {
    setEditMode(!editMode);
  };

  const cartData = cart.map(({ id, ...rest }, index) => (
    <CartItem key={id} id={id} {...rest} fullWidth={cart.length === 1} editMode={editMode} />
  ));

  const ORDER_SUM = useMemo(() => {
    const sum = getSum(cart);
    form.setFieldsValue({ order_summary: sum });
    return sum;
  }, [cart]);
  const DELIVERY_PRICE = getDeliveryPrice(deliveryMethod);

  useEffect(() => {
    if (ORDER_SUM > 15000) {
      form.validateFields(["order_summary"]);
    }
  }, [ORDER_SUM]);

  return (
    <PreviewCartItems>
      <CartWrapper>
        <CartHeader>
          <Text size="small">{`${ORDER_TOTAL}(${cart.length})`}</Text>
          <Text size="xsmall" onClick={onEdit} style={{ cursor: "pointer" }}>
            {editMode ? SAVE : EDIT}
          </Text>
        </CartHeader>
        <Form.Item name="order_products" initialValue={cart}>
          <CartBody>{cartData}</CartBody>
        </Form.Item>
        <CartFooter>
          <CartInfoOrder>
            <Text size="xsmall">{SHIPPING}</Text>
            <Text size="xsmall">{DELIVERY_PRICE}</Text>
          </CartInfoOrder>
          <Form.Item
            name="order_summary"
            rules={[
              {
                required: true,
                message: "Сумма заказа не может превышать 15000руб.",
                validator: validateOrderSum,
              },
            ]}
          >
            <CartInfoOrder>
              <Text size="xsmall">{ORDER_PRICE}</Text>
              <Text size="xsmall">{ORDER_SUM + "Руб."}</Text>
            </CartInfoOrder>
          </Form.Item>
        </CartFooter>
      </CartWrapper>
    </PreviewCartItems>
  );
};

const validateOrderSum = (_, value) => {
  return value <= 15000 ? Promise.resolve() : Promise.reject();
};

export default CartInfo;
