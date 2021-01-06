import React from "react";
import CustomButton from "reusable-components/Button/CustomButton";
import CardButton from "reusable-components/CardButton/CardButton";
import QuantityButton from "reusable-components/QuantityButton/QuantityButton";
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
    CountWrapper,
    CounterButton,
    SpanText,
    CountText,
    ActionsWrapper,
} from "./styled";
import styles from "./PreviewItem.module.css";

const ORDER_NOW_TEXT = "Заказать сейчас";
const COUNT_TEXT = "Количество:";
const DESCRIPTION_TEXT = "Описание";
const DETAILS = "Процесс изготовления";
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
                <QuantityButton />
                <ActionsWrapper>
                    <CustomButton className={styles.button}>
                        {ORDER_NOW_TEXT}
                    </CustomButton>
                    <CardButton />
                </ActionsWrapper>
                <CollapseItems info={collapseContent} />
            </PreviewRightContent>
        </PreviewWrapper>
    );
};

export default PreviewItem;
