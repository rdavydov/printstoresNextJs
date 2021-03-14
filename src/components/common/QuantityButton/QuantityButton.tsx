import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
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

const QuantityButton: React.FC<IProps> = ({ getQuantity, quantity = 1, onIncrement, onDecrement }) => {
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
      <Button onClick={decrementQuantity} disabled={quantity === 1}>
        <MinusOutlined />
      </Button>
      <CountText>{quantityState}</CountText>
      <Button onClick={incrementQuantity}>
        <PlusOutlined />
      </Button>
    </CountWrapper>
  );
};

export default QuantityButton;
