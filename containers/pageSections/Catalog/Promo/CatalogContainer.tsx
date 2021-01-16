import React from "react";
import { routesConfig } from "../../../../config/routes/routes";
import CatalogPromo from "./CatalogPromo";

const CatalogContainer = ({ crumbs }) => {
    return <CatalogPromo crumbs={crumbs} />;
};

export default CatalogContainer;
