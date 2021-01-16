import { CategoryCard, PaginationButton } from "components";
import React, { Fragment } from "react";

const CatalogItemsPromo = ({ goLocation, category = [] }) => {
    return (
        <Fragment>
            <CategoryCard cardData={category} goLocation={goLocation} />
            <PaginationButton />
        </Fragment>
    );
};

export default CatalogItemsPromo;
