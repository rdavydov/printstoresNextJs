import React from 'react';
import { catalogService, crumbsService, productService } from 'api';
import CatalogPage from 'containers/CatalogPage';
import { useMemo } from 'react';

const defaultParams = { pageSize: 8, direction: 'ASC', currentPage: 1, filterText: '', sortBy: '' };

const CatalogIndexPage = ({ crumbs, products, total, query }) => {

  const searchParams = useMemo(() => {
    const searchQuery = Object.keys(query || {});
    if (!searchQuery.length) return defaultParams;
    return searchQuery.every((key) => Object.keys(defaultParams).includes(key)) ? query : defaultParams;
  }, []);

  return (
    <CatalogPage crumbs={crumbs} products={products} total={total} query={searchParams} />
  )
};

export async function getServerSideProps({ query }) {
  const { products, total } = await catalogService.catalogFilter(Object.keys(query).length ? query : defaultParams);
  const crumbs = await crumbsService.getCatalogCrumbs();

  return {
    props: { crumbs, products, total, query },
  };
}
export default CatalogIndexPage;
