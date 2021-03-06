import React from "react";
import { Product } from "src/types/product/product.type";
import CartProductListItem from "./Item/Item";
import { ProductListWrapper } from "./styled";

interface IProps {
  product: Array<{
    quantity: number;
    title: string;
    preview: string;
    id: string;
    price: number;
  }>;
}

const CartProductList: React.FC<IProps> = ({ product }) => {
  console.log(product, " product");
  return (
    <ProductListWrapper>
      {product.map(({ id, ...rest }) => (
        <CartProductListItem key={id} id={id} {...rest} />
      ))}
    </ProductListWrapper>
  );
};

export default CartProductList;
