import { routesConfig } from "config/routes/routes";
import { useRouter } from "next/router";
import React from "react";
import ProductsPreviewItems from "./ProductsPreviewItems";

const ProductsPreviewContainer = ({ products }) => {
  console.log(products);

  const {replace} = useRouter();


  const goLocation = ({_id, key}) => {
    const pathname  = routesConfig.getProductItemRoute();
    replace({ pathname, query:{ id:_id, prefix:key }})
  }
  return <ProductsPreviewItems products={products} goLocation={goLocation} />;
};

export default ProductsPreviewContainer;
