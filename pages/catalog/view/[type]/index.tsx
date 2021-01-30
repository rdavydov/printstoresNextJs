import { categoryService } from 'api/services/category.service';
import React from 'react';
import { Layout } from 'containers/Layout';
import { productService } from 'api';
import { CatalogViewType } from 'components/page-modules/Catalog';

const CatalogViewTypePage = ({ products }) => (
  <Layout>
    <CatalogViewType products={products} crumbs={[]} />
  </Layout>
);

export async function getServerSideProps({ params: { type } }) {
  const { products } = await productService.getProductByPrefix(type);

  /*   const crumbs = await crumbsService.getCategoryCrumbsByKey(key); */
  return {
    props: { products },
  };
}

export default CatalogViewTypePage;
