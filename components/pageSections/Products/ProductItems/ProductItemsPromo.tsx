import React, { Fragment } from "react";
import Card from "../../../../reusable-components/Card/Card";
import PaginationButton from "../../../../reusable-components/PaginationButton/PaginationButton";

const ProductItemsPromo = ({ productsData }) => {
  return (
    <Fragment>
      <Card productsList={productsData} />
      <PaginationButton />
    </Fragment>
  );
};

export default ProductItemsPromo;
