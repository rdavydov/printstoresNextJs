import React from 'react';
import CatalogList from './components/List';
import CatalogMenu from './components/Menu';

const Catalog = ({ products, crumbs }) => (
  <>
    <CatalogMenu crumbs={crumbs} />
    <CatalogList products={products} />
  </>
);

export default Catalog;
