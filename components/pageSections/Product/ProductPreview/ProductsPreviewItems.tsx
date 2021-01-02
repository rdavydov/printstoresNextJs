import React from "react";
import Card from "../../../../reusable-components/Card/Card";

const ProductsPreviewItems = ({ products ,goLocation}) => {
  return (
    <>
      <Card productsList={products} goLocation={goLocation}/>
    </>
  );
};

export default ProductsPreviewItems;
