import React, { useState } from "react";
import SwiperSlider from "reusable-components/SwiperSlider/SwiperSlider";
import { ICart } from "store/reducers/cardReducer/cardReducer";
import { SwiperSlide } from "swiper/react";
import {
    CartBody,
    CartFooter,
    CartHeader,
    CartInfoOrder,
    CartWrapper,
    PreviewCartItems,
    Text,
} from "../styled";

import CartItem from "./CartItem/CartItem";

interface IProps {
    cart: ICart[];
    deliveryMethod: string;
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
    const sum = arr.reduce((sum, { price, quantity }) => {
        return sum + price * quantity;
    }, 0);

    return sum + "Руб.";
};

const getDeliveryPrice = (deliveryMethod) => {
    switch (deliveryMethod) {
        case COURIER_DELIVERY.title: {
            return COURIER_DELIVERY.price + "Руб.";
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

const CartInfo: CartType = ({ cart, deliveryMethod }) => {
    const [editMode, setEditMode] = useState(false);

    const onEdit = () => {
        setEditMode(!editMode);
    };

    const cartData = cart.map(({ ...rest }, index) => (
        <SwiperSlide key={index}>
            <CartItem
                key={index}
                {...rest}
                fullWidth={cart.length === 1}
                editMode={editMode}
            />
        </SwiperSlide>
    ));

    const ORDER_SUM = getSum(cart);
    const DELIVERY_PRICE = getDeliveryPrice(deliveryMethod);

    return (
        <PreviewCartItems>
            <CartWrapper>
                <CartHeader>
                    <Text size="small">{`${ORDER_TOTAL}(${cart.length})`}</Text>
                    <Text
                        size="xsmall"
                        onClick={onEdit}
                        style={{ cursor: "pointer" }}
                    >
                        {editMode ? SAVE : EDIT}
                    </Text>
                </CartHeader>
                <CartBody>
                    <SwiperSlider navigation={cart.length > 1}>
                        {cartData}
                    </SwiperSlider>
                </CartBody>
                <CartFooter>
                    <CartInfoOrder>
                        <Text size="xsmall">{SHIPPING}</Text>
                        <Text size="xsmall">{DELIVERY_PRICE}</Text>
                    </CartInfoOrder>
                    <CartInfoOrder>
                        <Text size="xsmall">{ORDER_PRICE}</Text>
                        <Text size="xsmall">{ORDER_SUM}</Text>
                    </CartInfoOrder>
                </CartFooter>
            </CartWrapper>
        </PreviewCartItems>
    );
};

export default CartInfo;
