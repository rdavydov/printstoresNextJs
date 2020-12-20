import { useRouter } from "next/router";
import React from "react";
import { routesConfig } from "../../../../config/routes/routes";
import ProductsPromo from "./ProductsPromo";

const ProductsContainer = () => {
  const { asPath, query } = useRouter();
  const { title } = query;

  const routes = routesConfig.getPaginationLinks(
    routesConfig.getCrumbsConfig(),
    [{ path: asPath, name: title }]
  );
  return <ProductsPromo title={title} route={routes} />;
};

export default ProductsContainer;
