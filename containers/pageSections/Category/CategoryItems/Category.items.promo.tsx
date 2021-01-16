import React, { Fragment } from "react";
import { CategoryCard, PaginationButton } from "components";

const CategoryItemsPromo = ({ categoryData = [], goLocation }) => {
    return (
        <Fragment>
            <CategoryCard cardData={categoryData} goLocation={goLocation} />
            <PaginationButton />
        </Fragment>
    );
};

export default CategoryItemsPromo;
