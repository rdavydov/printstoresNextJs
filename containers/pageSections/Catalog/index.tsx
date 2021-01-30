import React from 'react';
import CatalogList from './List/List';
import CatalogMenu from './Menu/Menu';

const Catalog = ({ products, crumbs }) => (
  <>
    <CatalogMenu crumbs={crumbs} />
    <CatalogList products={products} />
  </>
);

export default Catalog;
