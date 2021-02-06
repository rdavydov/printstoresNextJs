import React from 'react';
import { crumbsService, productService } from 'api';
import CatalogPage from 'containers/CatalogPage';

const CatalogIndexPage = ({ crumbs, products }) => {

  return (
    <CatalogPage crumbs={crumbs} products={products} />
  )
};

export async function getServerSideProps(context) {
  const { products } = await productService.getAllProducts();
  const crumbs = await crumbsService.getCatalogCrumbs();
  return {
    props: { crumbs, products },
  };
}
export default CatalogIndexPage;
