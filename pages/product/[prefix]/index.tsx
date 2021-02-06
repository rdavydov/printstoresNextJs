import React from 'react';
import { productService } from 'api/services/product.service';
import Layout from 'templates/Layout/Layout';
import ProductPromo from 'containers/ProductPage/ProductPreview';
import Promo from 'containers/ProductPage/Promo';
import { crumbsService } from 'api';

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
