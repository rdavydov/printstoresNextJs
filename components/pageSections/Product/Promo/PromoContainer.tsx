import { useRouter } from "next/router";
import React from "react";
import { routesConfig } from "../../../../config/routes/routes";
import PromoProduct from "./PromoProduct";

const PromoContainer = () => {
  const {
    query: { categoryID, title, goodsTitle, goodsID, productTitle },
    pathname,
  } = useRouter();

  const routes = routesConfig.getPaginationLinks(
    routesConfig.getCrumbsConfig(),
    [
      {
        path: routesConfig.getRouteCategory(categoryID),
        name: title,
      },
      {
        path: routesConfig.getRouteProduct(categoryID, goodsID),
        name: goodsTitle,
      },
      { path: pathname, name: productTitle },
    ]
  );

  return <PromoProduct route={routes} />;
};

export default PromoContainer;
