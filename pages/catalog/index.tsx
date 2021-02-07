import React, { useEffect } from 'react';
import { catalogService, crumbsService } from 'src/api';
import CatalogPage from 'src/containers/CatalogPage';

const CatalogIndexPage = (props) => {
  return (
    <CatalogPage {...props} />
  );
};

export async function getServerSideProps({ query }) {
  const { products, total } = await catalogService.catalogFilter(query);
  const crumbs = await crumbsService.getCatalogCrumbs();
  return {
    props: { crumbs, products, total, query },
  };
}
export default CatalogIndexPage;
