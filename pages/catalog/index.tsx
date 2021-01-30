import React from 'react';
import { Layout } from 'containers/Layout';
import { crumbsService, productService } from 'api';
import { Catalog } from 'components/page-modules/Catalog';

const CatalogPage = ({ crumbs, products }) => (
  <Layout>
    <Catalog crumbs={crumbs} products={products} />
  </Layout>
);

export async function getServerSideProps(context) {
  const { products } = await productService.getAllProducts();
  const crumbs = await crumbsService.getCatalogCrumbs();
  return {
    props: { crumbs, products },
  };
}
export default CatalogPage;
