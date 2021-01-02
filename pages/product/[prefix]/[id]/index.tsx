import { productService } from "api/services/product.service";
import ProductItemPreview from "components/pageSections/ProductsItem";
import React from "react";
import Layout from "../../../../components/Layout/Layout";

const OneProductPage = ({ product }) => {
  console.log(product,'product');
  return (
      <Layout>
        <ProductItemPreview product={product} />
       </Layout>
  )
};

export async function getServerSideProps({ params: { prefix, id } }) {
  const response = await productService.getProductById(prefix, id);
  return {
    props: { product: response.data },
  };
}

export default OneProductPage;
