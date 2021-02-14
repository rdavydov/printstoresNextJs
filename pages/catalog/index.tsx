import React, { useEffect } from 'react';
import { catalogService, crumbsService } from 'src/api';
import CatalogPage from 'src/containers/CatalogPage';
import Type from './view/[type]';

const CatalogIndexPage = (props) => {
  return (
    <CatalogPage {...props} />
  );
};

export async function getServerSideProps({ query }) {

  const { products, total, searchParams } = await catalogService.catalogFilter(query);
  const crumbs = await crumbsService.getCatalogCrumbs();
  return {
    props: { crumbs, products, total, searchParams },
  };
}
export default CatalogIndexPage;
