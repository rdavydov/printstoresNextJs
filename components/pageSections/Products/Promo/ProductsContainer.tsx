import { useRouter } from "next/router";
import React from "react";
import { routesConfig } from "../../../../config/routes/routes";
import ProductsPromo from "./ProductsPromo";

const ProductsContainer = () => {
  const {
    pathname,
    query: { title, productTitle, categoryID, productID },
  } = useRouter();

  const routes = routesConfig.getPaginationLinks(
    routesConfig.getCrumbsConfig(),
    [
      {
        path: routesConfig.getRouteCategory(categoryID),
        name: title,
      },
      { path: pathname, name: productTitle },
    ]
  );
  return <ProductsPromo title={productTitle} route={routes} />;
};

export default ProductsContainer;
