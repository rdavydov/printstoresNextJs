import { categoryService } from "api/services/category.service";
import React from "react";
import { catalogService } from "../../api/services/catalog.service";
import Layout from "../../components/Layout/Layout";
import CatalogItems from "../../components/pageSections/Catalog/CatalogItems";

import Promo from "../../components/pageSections/Catalog/Promo";

const Catalog = ({ category }) => {
  return (
    <Layout>
      <Promo />
      <CatalogItems category={category} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { data } = await catalogService.getAllCategory();
  const result = { category: data };
  return {
    props: result,
  };
}
export default Catalog;
