import React, { Fragment } from "react";
import Card from "../../../../reusable-components/Card/Card";
import PaginationButton from "../../../../reusable-components/PaginationButton/PaginationButton";
import SortingPanel from "../../../../reusable-components/SortingPanel/SortingPanel";

const GoodsItemsPromo = ({ productsData, sortConfig, goLocation }) => {
  return (
    <Fragment>
      <SortingPanel sortConfig={sortConfig} products={productsData} />
      <Card productsList={productsData} goLocation={goLocation} />
      <PaginationButton />
    </Fragment>
  );
};

export default GoodsItemsPromo;
