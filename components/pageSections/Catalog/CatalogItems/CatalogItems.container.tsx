import { useRouter } from "next/router";
import React from "react";
import { routesConfig } from "../../../../config/routes/routes";
import CatalogItemsPromo from "./CatalogItems.promo";

const CatalogItemsContainer = ({ category }) => {
  const { replace, pathname } = useRouter();
  const goLocation = (key: string, title: string) => {
    const path = routesConfig.getCategoryRoute(pathname);
    replace({ pathname: path, query: { title, key } });
  };
  return <CatalogItemsPromo goLocation={goLocation} category={category} />;
};

export default CatalogItemsContainer;
