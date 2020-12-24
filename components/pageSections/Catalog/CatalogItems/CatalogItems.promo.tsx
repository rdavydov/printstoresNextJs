import React, { Fragment } from "react";
import CategoryCard from "../../../../reusable-components/CategoryCard/CategoryCard";

import PaginationButton from "../../../../reusable-components/PaginationButton/PaginationButton";

const CatalogItemsPromo = ({ goLocation, category = [] }) => {
  return (
    <Fragment>
      <CategoryCard cardData={category} goLocation={goLocation} />
      <PaginationButton />
    </Fragment>
  );
};

export default CatalogItemsPromo;
