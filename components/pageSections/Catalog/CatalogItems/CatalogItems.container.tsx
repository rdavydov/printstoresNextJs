import axios from "axios";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { routesConfig } from "../../../../config/routes/routes";
import CatalogItemsPromo from "./CatalogItems.promo";

const CatalogItemsContainer = ({ category }) => {
  const { pathname, replace } = useRouter();
  const goLocation = (categoryID: string | number, title: string) => {
    const path = routesConfig.getCategoryRoute(pathname);
    replace({ pathname: path, query: { title, categoryID } });
  };
  return <CatalogItemsPromo goLocation={goLocation} category={category} />;
};

export default CatalogItemsContainer;
