import { useRouter } from "next/router";
import React from "react";
import { routesConfig } from "../../../../config/routes/routes";
import ProductsPromo from "./GoodsPromo";

const GoodsContainer = () => {
  const {
    pathname,
    query: { title, goodsTitle, categoryID, productID },
  } = useRouter();

  const routes = routesConfig.getPaginationLinks(
    routesConfig.getCrumbsConfig(),
    [
      {
        path: routesConfig.getRouteCategory(categoryID),
        name: title,
      },
      { path: pathname, name: goodsTitle },
    ]
  );
  return <ProductsPromo title={goodsTitle} route={routes} />;
};

export default GoodsContainer;
