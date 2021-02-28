import { productService } from "src/api/services/products/product.service";
import ProductItemPreview from "src/containers/ProductsPreviewSection/ProductsPreview";
import Promo from "src/containers/ProductsPreviewSection/Promo/Promo";
import React from "react";
import Layout from "src/templates/Layout/Layout";
import { crumbsService } from "src/api";

const OneProductPage = ({ products, crumbs }) => (
  <Layout>
    <ProductItemPreview product={products} />
  </Layout>
);

export async function getServerSideProps({ params: { id } }) {
  const { products } = await productService.getProductById(id);

  return {
    props: { products },
  };
}

export default OneProductPage;
