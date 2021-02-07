import React from 'react';
import Layout from 'src/templates/Layout/Layout';
import { productService } from 'src/api';
import { ProductsList } from 'src/components/common';
import { routesConfig } from 'src/config/routes/routes';
import { useRouter } from 'next/router';
import CatalogPage from 'src/containers/CatalogPage';

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
