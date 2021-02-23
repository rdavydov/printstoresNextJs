import React from "react";
import { productService } from "src/api/services/products/product.service";
import Layout from "src/templates/Layout/Layout";
import ProductPromo from "src/containers/ProductPage/ProductPreview";
import Promo from "src/containers/ProductPage/Promo";
import { crumbsService } from "src/api";

const ProductPrefixPage = ({ products, crumbs }) => (
  <Layout>
    <Promo crumbs={crumbs} />
    <ProductPromo products={products} />
  </Layout>
);

export async function getServerSideProps({ params: { prefix } }) {
  const { products } = await productService.getProductByPrefix(prefix);

  const crumbs = await crumbsService.getProductCrumbsByPrefix(prefix);
  return {
    props: { products, crumbs },
  };
}

export default ProductPrefixPage;
