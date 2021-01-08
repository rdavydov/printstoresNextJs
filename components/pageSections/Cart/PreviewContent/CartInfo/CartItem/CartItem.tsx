import React from "react";
import QuantityButton from "../../../../../../reusable-components/QuantityButton/QuantityButton";
import {
    CardWrapper,
    CardContent,
    CardHeader,
    CardName,
    CardPrice,
    Image,
} from "./styled";

interface IProps {
    name: string;
    price: number;
    _id: number;
    image: string;
    quantity: number;
}

const CartItem: React.FC<IProps> = ({ _id, image, name, price, quantity }) => {
    return (
        <CardWrapper>
            <Image src={image} />
            <CardContent>
                <CardHeader>
                    <CardName>{name}</CardName>
                    <CardPrice>{price + "Руб."}</CardPrice>
                </CardHeader>
                <QuantityButton quantity={quantity} />
            </CardContent>
        </CardWrapper>
    );
};

export default CartItem;
