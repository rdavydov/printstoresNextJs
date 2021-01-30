import React from 'react';
import { productService } from 'api/services/product.service';
import { Layout } from 'containers/Layout';
import ProductPromo from 'pages-modules/Product/ProductPreview';
import Promo from 'pages-modules/Product/Promo';
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
