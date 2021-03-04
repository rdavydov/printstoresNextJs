import React from "react";
import { catalogService } from "src/api";
import { menuService } from "src/api/services/menu/menu.service";
import { Breadcrumbs } from "src/components/common";
import CatalogPage from "src/containers/CatalogPage";
import Layout from "src/templates/Layout/Layout";

const CatalogTypePage = ({ products, total, menu }) => {
  return (
    <Layout menu={menu}>
      <Breadcrumbs crumbs={menu} />
      <CatalogPage products={products} total={total} />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const { menu } = await menuService.getPageMenu("catalog");
  const { products, total } = await catalogService.getAllProducts(query);

  return {
    props: { products, total, menu },
  };
}
export default CatalogTypePage;
