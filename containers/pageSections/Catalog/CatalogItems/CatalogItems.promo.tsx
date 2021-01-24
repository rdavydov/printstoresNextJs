import { CategoryCard, PaginationButton } from 'components';
import React, { Fragment } from 'react';

const CatalogItemsPromo = ({ goLocation, category = [] }) => (
  <>
    <CategoryCard cardData={category} goLocation={goLocation} />
    <PaginationButton />
  </>
);

export default CatalogItemsPromo;
