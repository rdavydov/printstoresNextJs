import React from "react";
import { productsList } from "../../../views/productsData";
import ProductItemsPromo from "./ProductItemsPromo";

const ProductItemsContainer = () => {
  return <ProductItemsPromo productsData={productsList} />;
};

export default ProductItemsContainer;
