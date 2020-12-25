import React from "react";
import Card from "../../../../reusable-components/Card/Card";

const ProductsPreviewItems = ({ products }) => {
  return (
    <>
      <Card productsList={products} />
    </>
  );
};

export default ProductsPreviewItems;
