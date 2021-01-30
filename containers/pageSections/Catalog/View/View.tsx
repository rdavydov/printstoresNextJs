import React from 'react';
import CatalogList from '../components/List';
import CatalogMenu from '../components/Menu';

const CatalogView = ({ products, crumbs }) => (
  <>
    {/* <CatalogMenu crumbs={crumbs} /> */}
    <CatalogList products={products} />
  </>
);

export default CatalogView;
