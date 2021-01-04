import { useRouter } from "next/router";
import React from "react";
import { routesConfig } from "../../../../config/routes/routes";
import ProductsPromo from "./CategoryPromo";

const CategoryContainer = ({ crumbs }) => {
    return <ProductsPromo crumbs={crumbs} />;
};

export default CategoryContainer;
