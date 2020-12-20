import React, { Fragment } from "react";
import CategoryCard from "../../../../reusable-components/CategoryCard/CategoryCard";
import PaginationButton from "../../../../reusable-components/PaginationButton/PaginationButton";

const CategoryItemsPromo = ({ categoryData, goLocation }) => {
  return (
    <Fragment>
      <CategoryCard cardData={categoryData} goLocation={goLocation} />
      <PaginationButton />
    </Fragment>
  );
};

export default CategoryItemsPromo;
