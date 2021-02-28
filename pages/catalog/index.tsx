import React from "react";
import { catalogService } from "src/api";
import CatalogPage from "src/containers/CatalogPage";

const CatalogIndexPage = (props) => {
  return <CatalogPage {...props} />;
};

export async function getServerSideProps({ query }) {
  const { products, total } = await catalogService.getAllProducts(query);

  return {
    props: { products, total },
  };
}
export default CatalogIndexPage;
