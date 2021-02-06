import React from 'react';
import Layout from 'templates/Layout/Layout';
import { productService } from 'api';
import { ProductsList } from 'components/common';
import { routesConfig } from 'config/routes/routes';
import { useRouter } from 'next/router';
import CatalogPage from 'containers/CatalogPage';

const CatalogViewTypePage = ({ products, crumbs }) => {
  return (
    <CatalogPage crumbs={crumbs} products={products} />
  )
};

export async function getServerSideProps({ params: { type } }) {
  const { products } = await productService.getProductByPrefix(type);

  /*   const crumbs = await crumbsService.getCategoryCrumbsByKey(key); */
  return {
    props: { products },
  };
}

export default CatalogViewTypePage;
