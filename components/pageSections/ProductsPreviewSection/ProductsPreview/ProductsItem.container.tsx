import React, { useState } from "react";
import ProductItemViews from "./ProductsItemViews";

const ProductsItemContainer = ({ product }) => {
    return <ProductItemViews product={product} />;
};

export default ProductsItemContainer;
