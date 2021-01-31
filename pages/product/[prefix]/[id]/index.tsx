import { productService } from 'api/services/product.service';
import ProductItemPreview from 'containers/pages/ProductsPreviewSection/ProductsPreview';
import Promo from 'containers/pages/ProductsPreviewSection/Promo/Promo';
import React from 'react';
import Layout from 'templates/Layout/Layout';
import { crumbsService } from 'api';

const OneProductPage = ({ products, crumbs }) => (
  <Layout>
    <Promo crumbs={crumbs} />
    <ProductItemPreview product={products} />
  </Layout>
);

export async function getServerSideProps({ params: { prefix, id } }) {
  const { products } = await productService.getProductById(prefix, id);
  const crumbs = await crumbsService.getProductCrumbsByKeyAndPrefix(
    prefix,
    id,
  );
  return {
    props: { crumbs, products },
  };
}

export default OneProductPage;
