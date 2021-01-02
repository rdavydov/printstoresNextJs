import { useRouter } from "next/router";
import React from "react";
import { routesConfig } from "../../../../config/routes/routes";
import CatalogItemsPromo from "./CatalogItems.promo";

const CatalogItemsContainer = ({ category }) => {
  const { replace, pathname } = useRouter();
  const goLocation = ({key, name}) => {
    const path = routesConfig.getCategoryRoute(pathname);
    replace({ pathname: path, query: { title:name, key } });
  };
  return <CatalogItemsPromo goLocation={goLocation} category={category} />;
};

export default CatalogItemsContainer;
