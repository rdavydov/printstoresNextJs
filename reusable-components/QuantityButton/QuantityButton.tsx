import React, { useEffect, useState } from "react";
import { CountWrapper, CounterButton, SpanText, CountText } from "./styled";

const INCREMENT = "+";
const DECREMENT = "-";

interface IProps {
    getQuantity?: (quantity) => void;
    quantity?: number;
}

const QuantityButton: React.FC<IProps> = ({ getQuantity, quantity = 1 }) => {
    const [quantityState, setQuantity] = useState(quantity);

    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decrementQuantity = () => {
        setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
    };

    useEffect(() => {
        if (getQuantity) {
            getQuantity(quantityState);
        }
    }, [quantityState]);

    return (
        <CountWrapper>
            <CounterButton onClick={decrementQuantity}>
                <SpanText>{DECREMENT}</SpanText>
            </CounterButton>
            <CountText>{quantityState}</CountText>
            <CounterButton onClick={incrementQuantity}>
                <SpanText>{INCREMENT}</SpanText>
            </CounterButton>
        </CountWrapper>
    );
};

export default QuantityButton;
