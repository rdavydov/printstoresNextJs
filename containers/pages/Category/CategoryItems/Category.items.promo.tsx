import React, { Fragment } from 'react';
import { CategoryCard, PaginationButton } from 'components';

const CategoryItemsPromo = ({ categoryData = [], goLocation }) => (
  <>
    <CategoryCard cardData={categoryData} goLocation={goLocation} />
    <PaginationButton />
  </>
);

export default CategoryItemsPromo;
