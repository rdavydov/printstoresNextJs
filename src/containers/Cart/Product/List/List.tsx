import React from "react";
import { Product } from "src/types/product/product.type";
import CartProductListItem from "./Item/Item";
import { ProductListWrapper } from "./styled";

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
    <ProductListWrapper>
      {product.map(({ id, ...rest }) => (
        <CartProductListItem key={id} id={id} {...rest} />
      ))}
    </ProductListWrapper>
  );
};

export default CartProductList;
