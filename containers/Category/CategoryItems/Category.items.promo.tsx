import React, { Fragment } from 'react';
import { CategoryCard, PaginationButton } from 'components/common';

const CategoryItemsPromo = ({ categoryData = [], goLocation }) => (
  <>
    <CategoryCard cardData={categoryData} goLocation={goLocation} />
    <PaginationButton />
  </>
);

export default CategoryItemsPromo;
