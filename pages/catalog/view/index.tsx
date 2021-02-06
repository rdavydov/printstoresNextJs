import React from 'react';
import { productService } from 'api';
import CatalogPage from 'containers/CatalogPage';

const CatalogViewPage = ({ products }) => {
  return (
    <CatalogPage crumbs={crumbs} products={products} />
  )
};

export async function getServerSideProps() {
  const { products } = await productService.getAllProducts();

  /*   const crumbs = await crumbsService.getCategoryCrumbsByKey(key); */
  return {
    props: { products },
  };
}

export default CatalogViewPage;
