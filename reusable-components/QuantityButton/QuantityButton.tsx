import React, { useEffect, useState } from "react";
import { CountWrapper, CounterButton, SpanText, CountText } from "./styled";

const INCREMENT = "+";
const DECREMENT = "-";

interface IProps {
    getQuantity?: (quantityInstance) => void;
    onIncrement?: () => void;
    onDecrement?: () => void;
    quantity?: number;
}

const QuantityButton: React.FC<IProps> = ({
    getQuantity,
    quantity = 1,
    onIncrement,
    onDecrement,
}) => {
    const [quantityState, setQuantity] = useState(quantity);

    const incrementQuantity = () => {
        if (onIncrement) {
            onIncrement();
        }
        setQuantity((prev) => prev + 1);
    };

    const decrementQuantity = () => {
        if (onDecrement) {
            onDecrement();
        }
        setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
    };

    useEffect(() => {
        if (getQuantity) {
            getQuantity(quantityState);
        }
    }, [quantityState]);

    useEffect(() => {
        setQuantity(quantity);
    }, [quantity]);

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
