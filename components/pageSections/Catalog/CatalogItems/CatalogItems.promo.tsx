import React, { Fragment } from "react";
import CategoryCard from "../../../../reusable-components/CategoryCard/CategoryCard";

import { cardData } from "../../card.data";
import PaginationButton from "../../../../reusable-components/PaginationButton/PaginationButton";

const CatalogItemsPromo = ({ goLocation }) => {
  return (
    <Fragment>
      <CategoryCard cardData={cardData} goLocation={goLocation} />
      <PaginationButton />
    </Fragment>
  );
};

export default CatalogItemsPromo;
