import React from 'react';
import { Card } from 'src/components/common';

const ProductsPreviewItems = ({ products, goLocation }) => (
  <>
    <Card productsList={products} goLocation={goLocation} />
  </>
);

export default ProductsPreviewItems;
