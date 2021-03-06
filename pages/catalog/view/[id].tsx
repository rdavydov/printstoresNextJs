import React from "react";
import { catalogService, productService } from "src/api";
import Layout from "src/templates/Layout/Layout";
import CatalogPage from "src/containers/Catalog";
import { Breadcrumbs } from "src/components/common";
import { menuService } from "src/api/services/menu/menu.service";

const CatalogViewPage = ({ products, menu, total }) => {
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
    props: { products, menu, total },
  };
}

export default CatalogViewPage;
