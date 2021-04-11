import React from "react";
import { Flex } from "src/components/ui";
import CartProductListItem from "./Item/Item";

interface IProps {
  product: Array<{
    quantity: number;
    title: string;
    preview: string;
    id: string | number;
    price: number;
    old_price: number | null;
  }>;
}

const CartProductList: React.FC<IProps> = ({ product }) => {
  return (
    <Flex span={8} flexDirection="column">
      {product.map(({ id, ...rest }) => (
        <Flex.Item key={id}>
          <CartProductListItem id={id} {...rest} />
        </Flex.Item>
      ))}
    </Flex>
  );
};

export default CartProductList;
