import React from 'react';
import { Layout } from 'containers/Layout';
import { productService } from 'api';
import { CatalogView } from 'components/page-modules/Catalog';

const CatalogViewPage = ({ products }) => (
  <Layout>
    <CatalogView products={products} crumbs={[]} />
  </Layout>
);

export async function getServerSideProps() {
  const { products } = await productService.getAllProducts();

  /*   const crumbs = await crumbsService.getCategoryCrumbsByKey(key); */
  return {
    props: { products },
  };
}

export default CatalogViewPage;
