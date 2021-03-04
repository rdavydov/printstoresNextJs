import React from "react";
import { Product } from "src/types/product/product.type";

import PreviewItem from "./PreviewItem/PreviewItem";

interface IProps {
  product: Product[];
}

const ProductPage = ({ product = [] }: IProps) => {
  return (
    <>
      {product.map(({ ...rest }, index) => (
        <PreviewItem key={index} {...rest} />
      ))}
    </>
  );
};

export default ProductPage;
