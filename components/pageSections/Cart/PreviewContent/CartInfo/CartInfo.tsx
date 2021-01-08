import React from "react";
import SwiperSlider from "reusable-components/SwiperSlider/SwiperSlider";
import { ICardInitState } from "store/reducers/cardReducer/cardReducer";
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
    cart: ICardInitState[];
    deliveryMethod: string;
}

const ORDER_TOTAL = "Количество товаров";
const SHIPPING = "Доставка";
const ORDER_PRICE = "Сумма заказа";
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
    const sum = arr.reduce((sum, { price }) => {
        return sum + price;
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

const CartInfo: React.FC<IProps> = ({ cart, deliveryMethod }) => {
    const cartData = cart.map(({ ...rest }, index) => (
        <SwiperSlide key={index}>
            <CartItem {...rest} key={index} />
        </SwiperSlide>
    ));

    const ORDER_SUM = getSum(cart);
    const DELIVERY_PRICE = getDeliveryPrice(deliveryMethod);

    return (
        <PreviewCartItems>
            <CartWrapper>
                <CartHeader>
                    <Text size="small">{`${ORDER_TOTAL}(${cart.length})`}</Text>
                </CartHeader>
                <CartBody>
                    <SwiperSlider>{cartData}</SwiperSlider>
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
