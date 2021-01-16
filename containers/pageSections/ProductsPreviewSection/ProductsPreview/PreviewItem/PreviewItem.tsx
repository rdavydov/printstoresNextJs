import React, { useState } from "react";
import CustomButton from "components/Button/CustomButton";
import CardButton from "components/CardButton/CardButton";
import QuantityButton from "components/QuantityButton/QuantityButton";
import CollapseItems from "./CollapseItems/CollapseItems";
import { Product } from "types/type/products.type";
import {
    Image,
    PreviewLeftContent,
    PreviewRightContent,
    PreviewWrapper,
    PriceContent,
    Title,
    OldPrice,
    Price,
    Text,
    ActionsWrapper,
} from "./styled";
import styles from "./PreviewItem.module.css";
import { useDispatch } from "react-redux";
import { addCartProduct } from "store/reducers/cardReducer/actionCreators/cardActionCreators";

const ORDER_NOW_TEXT = "Заказать сейчас";
const COUNT_TEXT = "Количество:";
const DESCRIPTION_TEXT = "Описание";
const DETAILS = "Состав";
const DELIVERY_AND_PAY = "Доставка и оплата";

const PreviewItem: React.FC<Product> = ({
    image,
    name,
    oldPrice = 500,
    price,
    description,
    details,
    seo,
    _id,
    prefix,
    ...rest
}) => {
    const collapseContent = [
        { header: DESCRIPTION_TEXT, text: description },
        { header: DETAILS, text: details },
        { header: DELIVERY_AND_PAY, text: "завтра" },
    ];
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const addProduct = () => {
        dispatch(addCartProduct({ id: _id, image, name, price, quantity }));
    };

    const getQuantity = (quantityValue) => {
        setQuantity(quantityValue);
    };

    return (
        <PreviewWrapper>
            <PreviewLeftContent>
                <Image src={image} />
            </PreviewLeftContent>
            <PreviewRightContent>
                <Title>{name}</Title>
                <PriceContent>
                    <Price>{price + "Р"}</Price>
                    {oldPrice && <OldPrice>{oldPrice + "Р"}</OldPrice>}
                </PriceContent>
                <Text>{COUNT_TEXT}</Text>
                <QuantityButton quantity={quantity} getQuantity={getQuantity} />
                <ActionsWrapper>
                    <CustomButton className={styles.button}>
                        {ORDER_NOW_TEXT}
                    </CustomButton>
                    <CardButton onClick={addProduct} />
                </ActionsWrapper>
                <CollapseItems info={collapseContent} />
            </PreviewRightContent>
        </PreviewWrapper>
    );
};

export default PreviewItem;
