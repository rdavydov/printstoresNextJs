import { useRouter } from "next/router";
import React from "react";
import { routesConfig } from "../../../../config/routes/routes";
import CatalogItemsPromo from "./CatalogItems.promo";

const CatalogItemsContainer = () => {
  const { pathname, push } = useRouter();
  const goLocation = (categoryID: string | number, title: string) => {
    const path = routesConfig.getCategoryRoute(pathname);
    push({ pathname: path, query: { title, categoryID } }, path);
  };
  return <CatalogItemsPromo goLocation={goLocation} />;
};

export default CatalogItemsContainer;
