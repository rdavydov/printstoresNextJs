import React from 'react';
import CatalogList from './List/CatalogList';
import CatalogMenu from './Menu/CatalogMenu';

const Catalog = ({ products, crumbs }) => (
  <>
    <CatalogMenu crumbs={crumbs} />
    <CatalogList products={products} />
  </>
);

export default Catalog;
