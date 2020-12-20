import React from "react";
import { routesConfig } from "../../../../config/routes/routes";
import CatalogPromo from "./CatalogPromo";

const CatalogContainer = () => {
  return <CatalogPromo route={routesConfig.getCrumbsConfig()} />;
};

export default CatalogContainer;
